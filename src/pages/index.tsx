'use client';
import {
	MAINNET_CHAIN_ID,
	MUMBAI_CHAIN_ID,
	POLYGON_CHAIN_ID,
} from '@/constants/ChainId';
import React, { useState, useEffect } from 'react';
import { useBalance } from 'wagmi';

function Index() {
	const [hasMounted, setHasMounted] = useState(false);

	const { data, isError, isLoading } = useBalance({
		address: '0x4e76d6B2404d59D01bD50e159A775044d37debdA',
		chainId: POLYGON_CHAIN_ID,
	});
	console.log('data is: ', data);
	// Hooks
	useEffect(() => {
		setHasMounted(true);
	}, []);

	// Render
	if (!hasMounted) return null;

	if (isLoading) return <div>Fetching balance…</div>;
	if (isError) return <div>Error fetching balance</div>;

	return (
		<div>
			Balance: {data?.formatted} {data?.symbol}
		</div>
	);
}

export default Index;
