export interface marketListItem {
  ticker_id: string;
  base: string;
  target: string;
}

export interface marketSummaryItem {
  trading_pairs: string;
  lowest_price_24h: string;
  highest_price_24h: string;
  highest_bid: string;
}
