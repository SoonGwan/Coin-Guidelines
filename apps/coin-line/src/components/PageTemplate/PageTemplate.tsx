import React from 'react';
import styled from 'styled-components';
import { maxWidthDefine } from '@coin-line/utils';

interface Props {
	children: React.ReactNode;
}

const PageTemplate = ({ children }: Props) => {
	return (
		<>
			<PageTemplateWrapper>
				<LogoWrapper>
					<Logo />
				</LogoWrapper>
			</PageTemplateWrapper>
			<PageTemplateChildrenWrapper>
				<ChildWrapper>{children}</ChildWrapper>
			</PageTemplateChildrenWrapper>
		</>
	);
};

export default PageTemplate;

const PageTemplateWrapper = styled.div`
	width: 100%;
	border-bottom: 1px solid ${({ theme }) => theme.basicBorderColor};
	padding: 12px 0px;
	display: flex;
	justify-content: center;
`;

const LogoWrapper = styled.div`
	${maxWidthDefine(1370)}
`;

const Logo = styled.div`
	width: 168px;
	height: 28px;
	position: relative;
	background-image: url('https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_1.svg?_=6d465b2');
	display: inline-block;
	background-position: center center;
	background-repeat: no-repeat;
	background-size: contain;
`;

const PageTemplateChildrenWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

const ChildWrapper = styled.div`
	${maxWidthDefine(1370)}
`;
