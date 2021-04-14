import React, { useEffect } from "react";
import Main from "../../components/Main";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoins, coinSelector } from "../../slices/coin";

const MainContainer = () => {
	const dispatch = useDispatch();
	const { coins, loading, hasError } = useSelector(coinSelector);

	useEffect(() => {
		dispatch(fetchCoins());
	}, [dispatch]);
	console.log("obj", coins, loading, hasError);
	return <Main />;
};

export default MainContainer;
