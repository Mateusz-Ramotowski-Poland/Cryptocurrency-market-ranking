import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Title } from "./Title";

import { api } from "../api";
import { Market, MarketListItem, MarketSummaryItem, TableLine } from "./interfaces";
const dataUrls = ["https://public.kanga.exchange/api/market/pairs", "https://public.kanga.exchange/api/market/summary"];
let marketList: MarketListItem[];
let marketSummary: MarketSummaryItem[];

function createData(id: number, highestBID: string, name: string, spread: string, lowestASK: string, rag: number): TableLine {
  return { id, highestBID, name, spread, lowestASK, rag };
}

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export function Orders() {
  const [market, setMarket] = React.useState<Market>({ marketList: [], marketSummary: [] });

  React.useEffect(() => {
    const getMarketData = async () => {
      await api.get(dataUrls[0]).then((data) => {
        marketList = data;
      });
      await api.get(dataUrls[1]).then((data) => {
        marketSummary = data;
      });

      setMarket({ marketList, marketSummary });
    };

    getMarketData();
  }, []);

  console.log(market);

  const rows: TableLine[] = market.marketList.map((marketItem, index) => {
    const columnName = marketItem.ticker_id.replace("_", "/");

    return createData(index, "1", columnName, "1", "1", 1);
  });

  return (
    <React.Fragment>
      <Title>Markets ranking</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Nazwa rynku</TableCell>
            <TableCell>Highest BID</TableCell>
            <TableCell>Lowest ASK</TableCell>
            <TableCell>Spread</TableCell>
            <TableCell align="right">RAG</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.highestBID}</TableCell>
              <TableCell>{row.lowestASK}</TableCell>
              <TableCell>{row.spread}</TableCell>
              <TableCell align="right">{`$${row.rag}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
