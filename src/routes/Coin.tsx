import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useParams, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const Container = styled.div`
  padding: 0 20px;
  max-width: 500px;
  margin: 0 auto;
`;

const Header = styled.header`
  margin-top: 30px;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-item: center;
`;

const Title = styled.h1`
  padding: 10px;
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.div`
  text-align: center;
  font-size: 40px;
`;

const CoinInfo = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  color: black;
  padding: 15px 20px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const CoinInfoDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

const Description = styled.p`
  color: ${(props) => props.theme.desColor};
  margin-bottom: 25px;
  font-size: 18px;
  line-height: 1.5;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

interface NameState {
  name: string;
}

interface RouteState {
  state: NameState;
}

interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
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

function Coin() {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams();
  const { coinSymbol } = useParams();
  const { state } = useLocation() as RouteState;
  const [info, setInfo] = useState<InfoData>();
  const [priceInfo, setPriceInfo] = useState<PriceData>();
  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      console.log(infoData);
      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();
      console.log(priceData);
      setInfo(infoData);
      setPriceInfo(priceData);
      setLoading(false);
    })();
  }, []);
  return (
    <Container>
      <Header>
        <Title>{state ? state.name : "Loading..."}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
      {loading ? (
        <Loader>...</Loader>
      ) : (
        <>
          <Description>{info ? info.description : "not found"}</Description>
          <CoinInfo>
            <CoinInfoDetails>
              <span>Rank: </span>
              <span>{info ? info.rank : "not found"}</span>
            </CoinInfoDetails>
            <CoinInfoDetails>
              <span>Symbol: </span>
              <span>{info ? info.symbol : "not found"}</span>
            </CoinInfoDetails>
            <CoinInfoDetails>
              <span>Open Source: </span>
              <span>{info ? (info.open_source ? "Yes" : "No") : null}</span>
            </CoinInfoDetails>
          </CoinInfo>
          <CoinInfo>
            <CoinInfoDetails>
              <span>Circulating Supply: </span>
              <span>
                {priceInfo ? priceInfo.circulating_supply : "not found"}
              </span>
            </CoinInfoDetails>
            <CoinInfoDetails>
              <span>Max Supply: </span>
              <span>{priceInfo ? priceInfo.max_supply : "not found"}</span>
            </CoinInfoDetails>
          </CoinInfo>
        </>
      )}
      <Outlet />
    </Container>
  );
}

export default Coin;
