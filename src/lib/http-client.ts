type ENVIRONMENTS = 'demo' | 'live'

type REQUEST_METHODS = 'GET' | 'POST' | 'DELETE'

const VALID_ENVIRONMENTS: ReadonlyArray<ENVIRONMENTS> = ['demo', 'live']

interface RequestParams {
  method: REQUEST_METHODS
  path: string
  queryParams?: URLSearchParams
}

interface RequestParamsWithBody<B> extends RequestParams {
  body: B
}

export interface Options {
  /**
   * API key for authentication to Trading212 API
   */
  apiKey: string
  /**
   * Environment for the Trading212 API
   *
   * Can be either 'demo' or 'live'
   *
   * Note: Make sure you use the correct environment for your API key
   */
  environment: ENVIRONMENTS
}

class HttpClient {
  #baseUrl: string
  #apiKey: string

  constructor(options: Options) {
    if (!VALID_ENVIRONMENTS.includes(options.environment)) {
      throw new TypeError(
        `invalid environment: ${options.environment}. Valid environments are: ${VALID_ENVIRONMENTS.join(', ')}.`
      )
    }

    this.#apiKey = options.apiKey
    this.#baseUrl = `https://${options.environment}.trading212.com/api`
  }

  async get<R>(path: string, queryParams?: URLSearchParams) {
    return this.request<R>({
      method: 'GET',
      path,
      queryParams
    } as RequestParams)
  }

  async post<R, B>(path: string, body: B) {
    return this.request<R, B>({
      method: 'POST',
      path,
      body
    })
  }

  async delete(path: string) {
    return this.request({ method: 'DELETE', path })
  }

  /**
   * Internal method to handle HTTP requests
   *
   * The generics <R, B> represent the response and body, respectively.
   * B is optional and defaults to void eg if you're doing a GET request.
   */

  private async request<R, B = void>(
    params: RequestParams | RequestParamsWithBody<B>
  ) {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: this.#apiKey
    }

    let requestUrl = this.#baseUrl + params.path

    if (params.queryParams) {
      requestUrl += `?${params.queryParams.toString()}`
    }

    const res = await fetch(requestUrl, {
      method: params.method,
      headers,
      body: 'body' in params ? JSON.stringify(params.body) : null
    })

    if (!res.ok) {
      throw new Error(`Request failed: ${res.status} - ${res.statusText}`)
    }

    const data = await res.json()
    return data as R
  }
}

export default HttpClient
