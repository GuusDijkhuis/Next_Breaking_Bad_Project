import Head from 'next/head';
import Nav from '../components/Nav';
import EpisodeList from '../components/EpisodeList';

import EpisodeStyles from '../styles/Episodes.module.css';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Breaking Bad Database | Episodes</title>
			</Head>
			<Nav />
			<h1 className={EpisodeStyles.Episodes}>All episodes of Breaking Bad.</h1>
			<EpisodeList />
		</div>
	)
}
