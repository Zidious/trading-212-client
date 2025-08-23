import type HttpClient from '../http-client.js'
import AccountData from './account-data.js'
import EquityOrders from './equity-orders.js'
import HistoricalItems from './historical-items.js'
import InstrumentsMetadata from './instruments-metadata.js'
import PersonalPortfolio from './personal-portfolio.js'
import Pies from './pies.js'

class V0 {
  #httpClient: HttpClient

  public instrumentsMetadata: InstrumentsMetadata
  public pies: Pies
  public equityOrders: EquityOrders
  public accountData: AccountData
  public personalPortfolio: PersonalPortfolio
  public historicalItems: HistoricalItems

  constructor(httpClient: HttpClient) {
    this.#httpClient = httpClient

    this.instrumentsMetadata = new InstrumentsMetadata(this.#httpClient)
    this.pies = new Pies(this.#httpClient)
    this.equityOrders = new EquityOrders(this.#httpClient)
    this.accountData = new AccountData(this.#httpClient)
    this.personalPortfolio = new PersonalPortfolio(this.#httpClient)
    this.historicalItems = new HistoricalItems(this.#httpClient)
  }
}

export default V0
