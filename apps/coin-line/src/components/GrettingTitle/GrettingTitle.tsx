import React from 'react';
import styled from 'styled-components';

type Props = {
	title: string;
	sub?: string;
};

const GrettingTitle = ({ title, sub }: Props) => {
	return <GrettingTitleWrapper>{title}</GrettingTitleWrapper>;
};

export default GrettingTitle;

const GrettingTitleWrapper = styled.div`
	font-size: 24px;
	line-height: 34px;
	font-weight: 700;
`;
