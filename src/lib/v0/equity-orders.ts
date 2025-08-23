import type HttpClient from '../http-client.js'
import type {
  EquityOrdersLimitOrderBody,
  EquityOrdersMarketOrderBody,
  EquityOrdersResponse,
  EquityOrdersStopLimitOrderBody,
  EquityOrdersStopOrderBody
} from './types.js'

class EquityOrders {
  #httpClient: HttpClient

  constructor(httpClient: HttpClient) {
    this.#httpClient = httpClient
  }

  async all() {
    return this.#httpClient.get<EquityOrdersResponse[]>('/v0/equity/orders')
  }

  async get(id: number) {
    return this.#httpClient.get<EquityOrdersResponse>(`/v0/equity/orders/${id}`)
  }

  async cancel(id: number) {
    return this.#httpClient.delete(`/v0/equity/orders/${id}`)
  }

  async limitOrder(body: EquityOrdersLimitOrderBody) {
    return this.#httpClient.post<
      EquityOrdersResponse,
      EquityOrdersLimitOrderBody
    >('/v0/equity/orders/limit', body)
  }

  async marketOrder(body: EquityOrdersMarketOrderBody) {
    return this.#httpClient.post<
      EquityOrdersResponse,
      EquityOrdersMarketOrderBody
    >('/v0/equity/orders/market', body)
  }

  async stopOrder(body: EquityOrdersStopOrderBody) {
    return this.#httpClient.post<
      EquityOrdersResponse,
      EquityOrdersStopOrderBody
    >('/v0/equity/orders/stop', body)
  }

  async stopLimitOrder(body: EquityOrdersStopLimitOrderBody) {
    return this.#httpClient.post<
      EquityOrdersResponse,
      EquityOrdersStopLimitOrderBody
    >('/v0/equity/orders/stop_limit', body)
  }
}

export default EquityOrders
