import React from "react";
import Main from "../../components/Main";

const MainContainer = () => {
	const dispatch = useDispatch();
	const { coins, loading, hasError } = useSelector(coinSelector);

	useEffect(() => {
		dispatch(fetchCoins());
	}, [dispatch]);

	const coinsList = coins.map((data) => {
		const { id, name, symbol, rank, is_active } = data;
		return (
			<div>
				{name} , {symbol}
			</div>
		);
	});

	console.log("obj", coins);
	return <Main coinsList={coinsList} />;
};

export default MainContainer;
