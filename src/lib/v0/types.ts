/** Instrument metadata types */

export interface TimeEvents {
  date: Date
  type: string
}

export interface WorkingSchedule {
  id: number
  timeEvents: Array<TimeEvents>
}

export interface ExchangeListResponse {
  id: number
  name: string
  workingSchedules: Array<WorkingSchedule>
}

export type InstrumentType =
  | 'CRYPTOCURRENCY'
  | 'ETF'
  | 'FOREX'
  | 'FUTURES'
  | 'INDEX'
  | 'STOCK'
  | 'WARRANT'
  | 'CRYPTO'
  | 'CVR'
  | 'CORPACT'

export interface InstrumentListResponse {
  addedOn: Date
  currencyCode: string
  isin: string
  maxOpenQuantity: number
  name: string
  shortName: string
  ticker: string
  type: InstrumentType
  workingScheduleId: number
}

/** Pies Types */

export interface PiesDividendDetails {
  gained: number
  inCash: number
  reinvested: number
}

export interface PiesInvestmentResult {
  priceAvgInvestedValue: number
  priceAvgResult: number
  priceAvgResultCoef: number
  priceAvgValue: number
}

export type PiesStatus = 'AHEAD' | 'ON_TRACK' | 'BEHIND'

export interface PiesAllResponse {
  cash: number
  dividendDetails: PiesDividendDetails
  id: number
  progress: number
  result: PiesInvestmentResult
  status: PiesStatus
}

export type PiesDividendCashAction = 'REINVEST' | 'TO_ACCOUNT_CASH'

export type PiesInstrumentShares = {
  [ticker: string]: number
}

export interface PiesCreateBody {
  dividendCashAction: PiesDividendCashAction
  endDate: string
  goal: number
  icon: string
  instrumentShares: PiesInstrumentShares
  name: string
}

export type PiesCreateInstrumentIssueName =
  | 'DELISTED'
  | 'SUSPENDED'
  | 'NO_LONGER_TRADABLE'
  | 'MAX_POSITION_SIZE_REACHED'
  | 'APPROACHING_MAX_POSITION_SIZE'
  | 'COMPLEX_INSTRUMENT_APP_TEST_REQUIRED'
  | 'PRICE_TOO_LOW'

export type PiesCreateInstrumentIssueSeverity =
  | 'IRREVERSIBLE'
  | 'REVERSIBLE'
  | 'INFORMATIVE'

export interface PiesInstrumentIssue {
  name: PiesCreateInstrumentIssueName
  severity: PiesCreateInstrumentIssueSeverity
}

export interface PiesInstruments {
  currentShare: number
  expectedShare: number
  issues: Array<PiesInstrumentIssue>
  name: string
  severity: string
  ownedQuantity: number
  result: PiesInvestmentResult
  priceAvgInvestedValue: number
  priceAvgResult: number
  priceAvgResultCoef: number
  priceAvgValue: number
  ticker: string
}

export interface PiesSettings {
  creationDate: Date
  dividendCashAction: PiesDividendCashAction
  endDate: Date
  goal: number
  icon: string
  id: string
  initialInvestment: number
  instrumentShares: PiesInstrumentShares
  name: string
  publicUrl: string
}

export interface PiesBaseResponse {
  instruments: Array<PiesInstruments>
  settings: PiesSettings
}

export interface PiesUpdateBody {
  dividendCashAction: PiesDividendCashAction
  endDate: string
  goal: number
  icon: string
  instrumentShares: PiesInstrumentShares
  name: string
}

export interface PiesDuplicateBody {
  icon: string
  name: string
}

type EquityOrderStatus =
  | 'LOCAL'
  | 'UNCONFIRMED'
  | 'CONFIRMED'
  | 'NEW'
  | 'CANCELLING'
  | 'CANCELLED'
  | 'PARTIALLY_FILLED'
  | 'FILLED'
  | 'REJECTED'
  | 'REPLACING'
  | 'REPLACED'

type EquityOrderStrategy = 'QUANTITY' | 'VALUE'

type EquityOrderType = 'LIMIT' | 'STOP' | 'MARKET' | 'STOP_LIMIT'

export interface EquityOrdersResponse {
  creationTime: string
  filledQuantity: number
  filledValue: number
  id: number
  limitPrice: number
  quantity: number
  status: EquityOrderStatus
  stopPrice: number
  strategy: EquityOrderStrategy
  ticker: string
  type: EquityOrderType
  value: number
}

export type EquityOrdersTimeValidity = 'DAY' | 'GOOD_TILL_CANCEL'

export interface EquityOrdersLimitOrderBody {
  limitPrice: number
  quantity: number
  ticker: string
  timeValidity: EquityOrdersTimeValidity
}

export interface EquityOrdersMarketOrderBody {
  quantity: number
  ticker: string
}

export interface EquityOrdersStopOrderBody {
  quantity: number
  stopPrice: number
  ticker: string
  timeValidity: EquityOrdersTimeValidity
}

export interface EquityOrdersStopLimitOrderBody {
  limitPrice: number
  quantity: number
  stopPrice: number
  ticker: string
  timeValidity: EquityOrdersTimeValidity
}

/** Account Data Types */

export interface AcountDataCashResponse {
  currencyCode: string
  id: number
}

export interface AcountDataMetadataResponse {
  currencyCode: string
  id: number
}

/** Personal Portfolio Types */

export type PersonalPortfolioFrontend =
  | 'API'
  | 'IOS'
  | 'ANDROID'
  | 'WEB'
  | 'SYSTEM'
  | 'AUTOINVEST'

export interface PersonalPortfolio {
  averagePrice: number
  currentPrice: number
  frontend: PersonalPortfolioFrontend
  fxPpl: number
  initialFillDate: string
  maxBuy: number
  maxSell: number
  pieQuantity: number
  ppl: number
  quantity: number
  ticker: string
}

export interface PersonalPortfolioSpecificPositionBody {
  ticker: string
}

/** Historical Items Types */

export interface HistoricalItemsQueryStrings {
  cursor?: string
  ticker?: string
  limit?: number
}

export type HistoricalItemsExecutor =
  | 'API'
  | 'IOS'
  | 'ANDROID'
  | 'WEB'
  | 'SYSTEM'
  | 'AUTOINVEST'

export type HistoricalItemsFillType =
  | 'TOTV'
  | 'OTC'
  | 'STOCK_SPLIT'
  | 'STOCK_DISTRIBUTION'
  | 'FOP'
  | 'FOP_CORRECTION'
  | 'CUSTOM_STOCK_DISTRIBUTION'
  | 'EQUITY_RIGHTS'

export type HistoricalItemsStatus =
  | 'LOCAL'
  | 'UNCONFIRMED'
  | 'CONFIRMED'
  | 'NEW'
  | 'CANCELLING'
  | 'CANCELLED'
  | 'PARTIALLY_FILLED'
  | 'FILLED'
  | 'REJECTED'
  | 'REPLACING'
  | 'REPLACED'

export type HistoricalItemsTimeValidity = 'DAY' | 'GOOD_TILL_CANCEL'

export type HistoricalItemsType = 'LIMIT' | 'STOP' | 'MARKET' | 'STOP_LIMIT'

export type HistoricalItemsTaxesName =
  | 'COMMISSION_TURNOVER'
  | 'CURRENCY_CONVERSION_FEE'
  | 'FINRA_FEE'
  | 'FRENCH_TRANSACTION_TAX'
  | 'PTM_LEVY'
  | 'STAMP_DUTY'
  | 'STAMP_DUTY_RESERVE_TAX'
  | 'TRANSACTION_FEE'

export interface HistoricalItemsTaxes {
  fillId: number
  name: HistoricalItemsTaxesName
  quantity: number
  timeCharged: Date
}

export interface HistoricalItemsItems {
  dateCreated: string
  dateExecuted: string
  dateModified: string
  executor: HistoricalItemsExecutor
  fillCost: number
  fillId: number
  fillPrice: number
  fillResult: number
  fillType: HistoricalItemsFillType
  filledQuantity: number
  filledValue: number
  id: number
  limitPrice: number
  orderedQuantity: number
  orderedValue: number
  parentOrder: number
  status: HistoricalItemsStatus
  stopPrice: number
  taxes: HistoricalItemsTaxes[]
  ticker: string
  timeValidity: HistoricalItemsTimeValidity
  type: HistoricalItemsType
}

export interface HistoricalItemsResponse {
  items: HistoricalItemsItems[]
  nextPagePath: string
}

export interface HistoricalItemsDividendResponse {
  amount: number
  amountInEuro: number
  grossAmountPerShare: number
  paidOn: Date
  quantity: number
  reference: string
  ticker: string
  type: string
}

export type HistoricalItemsExportStatus =
  | 'Queued'
  | 'Processing'
  | 'Running'
  | 'Canceled'
  | 'Failed'
  | 'Finished'

export interface HistoricalItemsExportData {
  includeDividends: boolean
  includeInterest: boolean
  includeOrders: boolean
  includeTransactions: boolean
}

export interface HistoricalItemsExportResponse {
  dataIncluded: HistoricalItemsExportData
  downloadLink: string
  reportId: number
  status: HistoricalItemsExportStatus
  timeFrom: Date
  timeTo: Date
}

export interface HistoricalItemsExportCsvDataIncluded {
  includeDividends: boolean
  includeInterest: boolean
  includeOrders: boolean
  includeTransactions: boolean
}
export interface HistoricalItemsExportCsvBody {
  dataIncluded: HistoricalItemsExportCsvDataIncluded
  timeFrom: Date
  timeTo: Date
}
export interface HistoricalItemsExportCsvResponse {
  reportId: number
}

export type HistoricalItemsTransactionListType =
  | 'WITHDRAW'
  | 'DEPOSIT'
  | 'ANDFEEROID'
  | 'TRANSFER'

export interface HistoricalItemsTransactionListResponse {
  amount: number
  dateTime: Date
  reference: string
  type: HistoricalItemsTransactionListType
}
