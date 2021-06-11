import React, {
	SetStateAction,
	Dispatch,
	memo,
	useMemo,
	ReactNode,
} from "react";
import styled from "styled-components";
import { ModalSize } from "./ModalSize";
import { Box, Button, Dialog, Text } from "@primer/components";

type Props = {
	isOpen: boolean;
	handleDialog: () => void;
	header?: string;
	handleClick?: (arg?: any) => void;
	buttonText?: string;
	buttonFontColor?: string;
	content?: string;
	dialogHeaderColor?: string;
	buttonSize?: string;
	children?: ReactNode;
};

const Modal = ({
	isOpen,
	handleDialog,
	header,
	content,
	dialogHeaderColor,
	children,
}: Props) => {
	return (
		<Dialog
			isOpen={isOpen}
			onDismiss={handleDialog}
			aria-labelledby="header-id"
		>
			<Dialog.Header id="header-id">
				<Text
					fontFamily="sans-serif"
					color={dialogHeaderColor}
					fontWeight={600}
					fontSize={14}
				>
					{header}
				</Text>
			</Dialog.Header>
			<Box p={3}>{children}</Box>
		</Dialog>
	);
};

export default memo(Modal);
