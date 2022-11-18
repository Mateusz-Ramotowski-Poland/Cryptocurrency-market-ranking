export interface MarketListItem {
  ticker_id: string;
  base: string;
  target: string;
}

export interface MarketSummaryItem {
  trading_pairs: string;
  lowest_price_24h: string;
  highest_price_24h: string;
  highest_bid: string;
}

export interface Market {
  marketList: MarketListItem[];
  marketSummary: MarketSummaryItem[];
}

export interface TableLine {
  id: number;
  name: string;
  highestBID: string;
  lowestASK: string;
  spread: string;
  rag: number;
}
