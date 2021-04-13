import React from "react";
import styled from "styled-components";
import { CoinCardWrapper } from "@coin-line/component-ui";
import { FaPlus } from "react-icons/fa";
import { darken, lighten } from "polished";

const MoreSelectCard = () => {
	return (
		<MoreSelectCardWrapper>
			<FaPlus />
		</MoreSelectCardWrapper>
	);
};

const MoreSelectCardWrapper = styled(CoinCardWrapper)`
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	& > * {
		font-size: 24px;
	}
	&:hover {
		background-color: ${darken(0.1, "#fff")};
	}
`;

export default MoreSelectCard;
