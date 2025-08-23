import type HttpClient from '../http-client.js'
import {
  type HistoricalItemsDividendResponse,
  type HistoricalItemsExportCsvBody,
  type HistoricalItemsExportCsvResponse,
  type HistoricalItemsExportResponse,
  type HistoricalItemsQueryStrings,
  type HistoricalItemsResponse,
  type HistoricalItemsTransactionListResponse
} from './types.js'

class HistoricalItems {
  #httpClient: HttpClient

  constructor(httpClient: HttpClient) {
    this.#httpClient = httpClient
  }

  async orderData(queryString?: HistoricalItemsQueryStrings) {
    this.validateQueryString(queryString)

    return this.#httpClient.get<HistoricalItemsResponse>(
      '/v0/equity/history/orders',
      queryString
        ? new URLSearchParams(queryString as Record<string, string>)
        : undefined
    )
  }

  async dividends(queryString?: HistoricalItemsQueryStrings) {
    this.validateQueryString(queryString)

    return this.#httpClient.get<HistoricalItemsDividendResponse>(
      '/v0/history/dividends',
      queryString
        ? new URLSearchParams(queryString as Record<string, string>)
        : undefined
    )
  }

  async exportsList() {
    return this.#httpClient.get<HistoricalItemsExportResponse>(
      '/v0/history/exports'
    )
  }

  async exportCsv(body: HistoricalItemsExportCsvBody) {
    return this.#httpClient.post<
      HistoricalItemsExportCsvResponse,
      HistoricalItemsExportCsvBody
    >('/v0/history/exports/csv', body)
  }

  async transactionList(queryString?: HistoricalItemsQueryStrings) {
    this.validateQueryString(queryString)

    return this.#httpClient.get<HistoricalItemsTransactionListResponse>(
      '/v0/history/transactions',
      queryString
        ? new URLSearchParams(queryString as Record<string, string>)
        : undefined
    )
  }

  private validateQueryString(queryString?: HistoricalItemsQueryStrings) {
    if (
      queryString?.limit &&
      (queryString.limit < 1 || queryString.limit > 50)
    ) {
      throw new TypeError('Limit must be between 1 and 50')
    }
  }
}

export default HistoricalItems
