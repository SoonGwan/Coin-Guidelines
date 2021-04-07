import React from 'react';
import styled from 'styled-components';

interface Prop {
	paddingV?: number;
	paddingH?: number;
}

type Props = {
	title: string;
	sub?: string;
	paddingV?: number;
	paddingH?: number;
};

const GrettingTitle = ({ title, sub, paddingV }: Props) => {
	return (
		<GrettingTitleWrapper paddingV={paddingV}>{title}</GrettingTitleWrapper>
	);
};

export default GrettingTitle;

const GrettingTitleWrapper = styled.div`
	font-size: 24px;
	line-height: 34px;
	font-weight: 700;
	padding: ${(props: Prop) => props.paddingV || 0}px
		${(props: Prop) => props.paddingH || 0}px;
`;
