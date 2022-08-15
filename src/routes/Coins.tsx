import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCoins } from "../api";
import { Helmet } from "react-helmet";
import { isLightAtom } from "../atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { BsMoonStarsFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";

const Container = styled.div`
  padding: 0 20px;
  max-width: 480px;
  margin: 0 auto;
  margin-bottom: 30px;
`;

const Header = styled.header`
  margin-top: 30px;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-item: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: ${(props) => props.theme.tabColor};
  color: ${(props) => props.theme.textColor};
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    display: flex;
    align-items: center;
    transition: color 0.2s ease-in;
    padding: 20px;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.div`
  text-align: center;
  font-size: 40px;
  color: ${(props) => props.theme.tabColor};
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

export const Toggle = styled.div`
  position: fixed;
  top: 30px;
  left: 30px;
`;

export const ToggleBtn = styled.div`
  width: 50px;
  height: 50px;
`;

function Coins() {
  const { isLoading, data } = useQuery<ICoin[]>(["allCoins"], fetchCoins);
  const isLight = useRecoilValue(isLightAtom);
  const setlightAtom = useSetRecoilState(isLightAtom);
  const togglelightAtom = () => setlightAtom((prev) => !prev);
  return (
    <Container>
      <Helmet>
        <title>Coins</title>
      </Helmet>
      <Header>
        <Title>Coins</Title>
      </Header>
      <Toggle>
        {isLight ? (
          <ToggleBtn onClick={togglelightAtom}>
            <Link to={"/"}>
              <BsMoonStarsFill size={"30px"} color={"#1C1A27"} />
            </Link>
          </ToggleBtn>
        ) : (
          <ToggleBtn onClick={togglelightAtom}>
            <Link to={"/"}>
              <BsFillSunFill size={"30px"} color={"#ffcb00"} />
            </Link>
          </ToggleBtn>
        )}
      </Toggle>
      {isLoading ? (
        <Loader>"Loading..."</Loader>
      ) : (
        <CoinsList>
          {data
            ? data.slice(0, 100).map((coin) => (
                <Coin key={coin.id}>
                  <Link to={`/${coin.id}`} state={{ name: coin.name }}>
                    <Img
                      src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                    />
                    {coin.name} &rarr;
                  </Link>
                </Coin>
              ))
            : true}
        </CoinsList>
      )}
    </Container>
  );
}
export default Coins;
