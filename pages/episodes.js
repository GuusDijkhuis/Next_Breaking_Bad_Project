import Head from 'next/head';
import Nav from '../components/Nav';
import EpisodeList from '../components/EpisodeList';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Breaking Bad Database | Home</title>
			</Head>
			<Nav />
			<h1>All episodes of Breaking Bad.</h1>
			<EpisodeList 
				url="/episodes"
				checkList={true}
			/>
			
		</div>
	)
}
