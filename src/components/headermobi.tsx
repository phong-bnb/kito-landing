import React from "react";
import styled from "styled-components";
import { TiThMenu } from "react-icons/ti";

const Headermobie = () => {
  return (
    <HeadermobieStyle className="header flex justify-between items-center px-[20px]">
      <h1 className="header__h1">KITO</h1>
      <TiThMenu />
    </HeadermobieStyle>
  );
};
export default Headermobie;
const HeadermobieStyle = styled.div`
  .header {
    width: 428px;
    height: 75px;
    flex-shrink: 0;
    background: var(--White, #fff);
    box-shadow: 0px 2px 20px 0px rgba(26, 17, 20, 0.1);
    &__h1 {
      color: var(--Text---Kid-toys, #1a1114);
      text-align: center;
      font-family: Sansita;
      font-size: 30px;
      font-style: normal;
      font-weight: 800;
      line-height: 55px; 
      text-transform: uppercase;
    }
  }
`;
