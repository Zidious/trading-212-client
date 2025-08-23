import type HttpClient from '../http-client.js'
import type {
  AcountDataCashResponse,
  AcountDataMetadataResponse
} from './types.js'

class AccountData {
  #httpClient: HttpClient

  constructor(httpClient: HttpClient) {
    this.#httpClient = httpClient
  }

  async cash() {
    return this.#httpClient.get<AcountDataCashResponse>(
      '/v0/equity/account/cash'
    )
  }

  async metadata() {
    return this.#httpClient.get<AcountDataMetadataResponse>(
      '/v0/equity/account/info'
    )
  }
}

export default AccountData
