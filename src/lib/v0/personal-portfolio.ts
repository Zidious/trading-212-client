import type HttpClient from '../http-client.js'
import type { PersonalPortfolioSpecificPositionBody } from './types.js'

class PersonalPortfolio {
  #httpClient: HttpClient

  constructor(httpClient: HttpClient) {
    this.#httpClient = httpClient
  }

  async allPositions() {
    return this.#httpClient.get<PersonalPortfolio[]>('/v0/equity/portfolio')
  }

  async getPosition(ticker: string) {
    return this.#httpClient.get<PersonalPortfolio>(
      `/v0/equity/portfolio/${ticker}`
    )
  }

  async searchPosition(body: PersonalPortfolioSpecificPositionBody) {
    return this.#httpClient.post<
      PersonalPortfolio[],
      PersonalPortfolioSpecificPositionBody
    >(`/v0/equity/portfolio/ticker`, body)
  }
}

export default PersonalPortfolio
