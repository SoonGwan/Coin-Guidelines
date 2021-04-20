import React, { Dispatch, SetStateAction, useState, memo } from "react";
import SelectSearch, { useSelect } from "react-select-search";
import "./KeySelect.css";
import { fuzzySearch } from "@coin-line/utils";

type Props = {
	options: Options[];
	crypto: null;
	setCrypto: any;
};

type Options = {
	name: string;
	value: number;
};

const KeySelect = ({ options, crypto, setCrypto }: Props) => {
	// console.log(options.find((args) => args.value === crypto));
	// console.log("click", crypto);
	return (
		<SelectSearch
			value={crypto}
			onChange={setCrypto}
			options={options}
			search
			filterOptions={fuzzySearch}
			emptyMessage={"Not found renderer"}
			placeholder="Select your Crypto"
		/>
	);
};

export default memo(KeySelect);
