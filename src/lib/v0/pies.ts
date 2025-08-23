import HttpClient from '../http-client.js'
import type {
  PiesAllResponse,
  PiesCreateBody,
  PiesBaseResponse,
  PiesUpdateBody,
  PiesDuplicateBody
} from './types.js'

class Pies {
  #httpClient: HttpClient

  constructor(httpClient: HttpClient) {
    this.#httpClient = httpClient
  }

  async all() {
    return this.#httpClient.get<PiesAllResponse[]>('/v0/equity/pies')
  }

  async create(body: PiesCreateBody) {
    return this.#httpClient.post<PiesBaseResponse, PiesCreateBody>(
      '/v0/equity/pies',
      body
    )
  }

  async delete(id: number) {
    return this.#httpClient.delete(`/v0/equity/pies/${id}`)
  }

  async get(id: number) {
    return this.#httpClient.get<PiesBaseResponse>(`/v0/equity/pies/${id}`)
  }

  async update(id: number, body: PiesUpdateBody) {
    return this.#httpClient.post<PiesBaseResponse, PiesUpdateBody>(
      `/v0/equity/pies/${id}`,
      body
    )
  }

  async duplicate(id: number, body: PiesDuplicateBody) {
    return this.#httpClient.post<PiesBaseResponse, PiesDuplicateBody>(
      `/v0/equity/pies/${id}/duplicate`,
      body
    )
  }
}

export default Pies
