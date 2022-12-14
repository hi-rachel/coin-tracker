import { Helmet } from "react-helmet";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useParams, Outlet, Link, useMatch } from "react-router-dom";
import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";

const Container = styled.div`
  padding: 0 20px;
  max-width: 480px;
  margin: 0 auto;
  margin-bottom: 30px;
`;

const Header = styled.header`
  position: relative;
  margin-top: 30px;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px;
  font-size: 48px;
  text-align: center;
`;

const BackBtn = styled.div`
  position: absolute;
  left: 10px;
  top: 15px;
  width: 50px;
  height: 50px;
  color: ${(props) => props.theme.desColor};
`;

const Loader = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 20px;
  color: ${(props) => props.theme.desColor};
`;

const CoinInfo = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.accentColor};
  color: ${(props) => props.theme.desColor};
  padding: 15px 20px;
  border-radius: 10px;
  margin-top: 30px;
  margin-bottom: 50px;
  box-shadow: rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px,
    rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px,
    rgb(255, 85, 85) 0px 0px 0px 15px;
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
  margin-top: 25px;
  margin-bottom: 25px;
  font-size: 15px;
  line-height: 1.8;
  text-align: justify;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  background-color: ${(props) => props.theme.tabColor};
  border-radius: 10px;
  color: ${(props) =>
    props.isActive ? props.theme.selectColor : props.theme.textColor};
  a {
    padding: 7px 0px;
    display: block;
  }
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
  const { coinId } = useParams();
  const { state } = useLocation() as RouteState;
  const priceMatch = useMatch("/:coinId/price");
  const chartMatch = useMatch("/:coinId/chart");
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState<InfoData>();
  const [priceInfo, setPriceInfo] = useState<PriceData>();
  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();
      setInfo(infoData);
      setPriceInfo(priceData);
      setLoading(false);
    })();
  }, []);
  return (
    <Container>
      <Helmet>
        <title>
          {`state ? (
            state.name
          ) : loading ? (
            <Loader>Loading...</Loader>
          ) : info ? (
            info.name
          ) : null`}
        </title>
      </Helmet>
      <Header>
        <Link to={"/"}>
          <BackBtn>
            <BiArrowBack size="20" />
          </BackBtn>
        </Link>
        <Title>
          {state
            ? state.name
            : loading
            ? "Loading..."
            : info
            ? info.name
            : null}
        </Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Description>{info ? info.description : null}</Description>
          <CoinInfo>
            <CoinInfoDetails>
              <span>Rank: </span>
              <span>{info ? info.rank : ""}</span>
            </CoinInfoDetails>
            <CoinInfoDetails>
              <span>Symbol: </span>
              <span>{info ? info.symbol : "not found"}</span>
            </CoinInfoDetails>
            <CoinInfoDetails>
              <span>Price: </span>
              <span>
                {priceInfo ? priceInfo.quotes.USD.price.toFixed(2) : null}
              </span>
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
            <CoinInfoDetails>
              <span>Open Source: </span>
              <span>{info ? (info.open_source ? "Yes" : "No") : null}</span>
            </CoinInfoDetails>
          </CoinInfo>
        </>
      )}
      <Tabs>
        <Tab isActive={chartMatch !== null}>
          <Link to={`/${coinId}/chart`}>Chart</Link>
        </Tab>
        <Tab isActive={priceMatch !== null}>
          <Link to={`/${coinId}/price`}>Price</Link>
        </Tab>
      </Tabs>
      <Outlet context={{ coinId }} />
    </Container>
  );
}

export default Coin;
