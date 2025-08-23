import HttpClient, { type Options } from './lib/http-client.js'
import V0 from './lib/v0/index.js'
import * as V0Types from './lib/v0/types.js'

export { V0Types }

/**
 * Trading212 API client
 *
 * This client provides access to the Trading212 API.
 *
 * @example
 * const client = new Trading212({ apiKey: 'your-api-key', environment: 'demo' })
 *
 * const allThePies = await client.v0.pies.all()
 *
 * const myStonksPie = await client.v0.pies.get('my-stonks-pie-id')
 *
 * await client.v0.pies.delete('my-stonks-pie-id')
 *
 *
 */
class Trading212 {
  #httpClient: HttpClient

  /** V0 API */
  public v0: V0

  constructor(options: Options) {
    this.#httpClient = new HttpClient(options)
    this.v0 = new V0(this.#httpClient)
  }
}

export default Trading212
