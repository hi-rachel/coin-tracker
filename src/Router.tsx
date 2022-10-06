import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
import { useOutletContext } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistory } from "./api";
import ReactApexChart from "react-apexcharts";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { isLightAtom } from "./atoms";

function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Coins />}></Route>
        <Route path="/:coinId" element={<Coin />}>
          <Route path="chart" element={<Chart />}></Route>
          <Route path="price" element={<Price />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const PriceDetailUl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  color: ${(props) => props.theme.desColor};
  font-size: 15px;
  padding: 10px;
  font-weight: 500;
`;

const PriceDetailLi = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-direction: row;
  text-align: left;
`;

interface CharProps {
  coinId: string;
}

interface IDate {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

interface ChartItem {
  x: Date;
  y: number[];
}

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

function Chart() {
  const { coinId } = useOutletContext<CharProps>();
  const isLight = useRecoilValue(isLightAtom);
  const { isLoading: historyLoading, data: chartData } = useQuery<IDate[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 10000,
    }
  );
  return (
    <div>
      {historyLoading ? (
        "Loading chart..."
      ) : (
        <ReactApexChart
          type="candlestick"
          series={[
            {
              name: "Price",
              data: chartData!.map((props) => {
                return {
                  x: new Date(props.time_open * 1000),
                  y: [
                    parseFloat(props.open),
                    parseFloat(props.high),
                    parseFloat(props.low),
                    parseFloat(props.close),
                  ],
                };
              }) as ChartItem[],
            },
          ]}
          options={{
            theme: {
              mode: isLight ? "light" : "dark",
            },
            chart: {
              height: 300,
              width: 500,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            grid: {
              show: false,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              labels: {
                show: false,
              },
              axisTicks: {
                show: false,
              },
              axisBorder: {
                show: false,
              },
              type: "datetime",
            },
            plotOptions: {
              candlestick: {
                colors: {
                  upward: "#fe1050",
                  downward: "#2a26fc",
                },
              },
            },
            tooltip: {
              y: {
                formatter: (value) => `$${value.toFixed(2)}`,
              },
            },
          }}
        />
      )}
    </div>
  );
}

function Price() {
  const { coinId } = useOutletContext<CharProps>();
  const { isLoading, data } = useQuery<IDate[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 10000,
    }
  );
  const [priceInfo, setPriceInfo] = useState<PriceData>();
  useEffect(() => {
    (async () => {
      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();
      setPriceInfo(priceData);
    })();
  }, []);
  return (
    <div>
      {isLoading ? (
        "Loading Price..."
      ) : (
        <>
          <PriceDetailUl>
            <PriceDetailLi>
              🌈 All Time High Price : ${" "}
              {priceInfo ? priceInfo.quotes.USD.ath_price.toFixed(3) : null}
            </PriceDetailLi>
            <PriceDetailLi>
              💰 Market Cap : ${" "}
              {priceInfo ? priceInfo.quotes.USD.market_cap : null}
            </PriceDetailLi>
            <PriceDetailLi>
              💸 Percent from ATH Price :{" "}
              {priceInfo ? priceInfo.quotes.USD.percent_from_price_ath : null} %
            </PriceDetailLi>
            <PriceDetailLi>
              ⛏ Volume(24h) :{" "}
              {priceInfo ? priceInfo.quotes.USD.volume_24h.toFixed(3) : null}
            </PriceDetailLi>
          </PriceDetailUl>
        </>
      )}
    </div>
  );
}
export default Router;
