import React from "react";
import styled from "styled-components";
import { maxWidthDefine } from "@coin-line/utils";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterItem>
        <div>© 2021 SoonGwan CoinMarketCap Clone Coding.</div>
      </FooterItem>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  width: 100vw;
  height: 10vh;
  display: flex;
  background-color: #eff2f5;
  justify-content: center;
  align-items: center;
`;

const FooterItem = styled.div`
  font-size: 12px;
  color: black;
`;

export default Footer;
