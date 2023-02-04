import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { configureChains, createClient, WagmiConfig } from 'wagmi';

import {
	polygonMumbai,
	mainnet,
	goerli,
	arbitrum,
	bsc,
	optimism,
	polygon,
} from 'wagmi/chains';

import { publicProvider } from 'wagmi/providers/public';

const { chains, provider, webSocketProvider } = configureChains(
	[mainnet, goerli, polygonMumbai, polygon, arbitrum, bsc, optimism],
	[publicProvider()]
);
const client = createClient({
	autoConnect: true,
	provider,
	webSocketProvider,
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<WagmiConfig client={client}>
			<Component {...pageProps} />
		</WagmiConfig>
	);
}
