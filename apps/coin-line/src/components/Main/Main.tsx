import React from 'react';
import styled from 'styled-components';
import GrettingTitle from '../GrettingTitle';

const Main = () => {
	return (
		<MainWrapper>
			<GrettingTitle
				apaddingV={24}
				title="Todays Cryptocurrency Prices by Market Cap"
			/>
		</MainWrapper>
	);
};

export default Main;

const MainWrapper = styled.div``;
