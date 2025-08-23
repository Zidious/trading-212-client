import type HttpClient from '../http-client.js'
import type { ExchangeListResponse, InstrumentListResponse } from './types.js'

class InstrumentsMetadata {
  #httpClient: HttpClient

  constructor(httpClient: HttpClient) {
    this.#httpClient = httpClient
  }

  async exchangeList() {
    return this.#httpClient.get<ExchangeListResponse[]>(
      '/v0/equity/metadata/exchanges'
    )
  }

  async instrumentList() {
    return this.#httpClient.get<InstrumentListResponse[]>(
      '/v0/equity/metadata/instruments'
    )
  }
}

export default InstrumentsMetadata
