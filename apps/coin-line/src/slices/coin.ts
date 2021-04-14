import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { SERVER } from "../config/config.json";

export const initialState = {
	loading: false,
	hasError: false,
	coins: [],
};

const coinSlice = createSlice({
	name: "coins",
	initialState,
	reducers: {
		getCoins: (state) => {
			state.loading = true;
		},
		getCoinsSuccess: (state, { payload }) => {
			state.coins = payload;
			state.loading = true;
			state.hasError = false;
		},
		getCoinsFailure: (state) => {
			state.loading = false;
			state.hasError = true;
		},
	},
});

// 우리가 만든 createSlice 에 대한 3가지 actions을 가짐
export const { getCoins, getCoinsSuccess, getCoinsFailure } = coinSlice.actions;

export const coinSelector = (state) => state.coins;

export default coinSlice.reducer;

export const fetchCoins = () => {
	return async (dispatch) => {
		dispatch(getCoins());

		try {
			const { data } = await axios.get(`${SERVER}/coin/coin`);
			dispatch(getCoinsSuccess(data));
		} catch (error) {
			dispatch(getCoinsFailure());
		}
	};
};
