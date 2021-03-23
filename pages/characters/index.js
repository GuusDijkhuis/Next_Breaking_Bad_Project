import Head from 'next/head';
import Nav from '../../components/Nav';
import CharacterList from '../../components/CharacterList';

import CharacterStyles from '../../styles/Characters.module.css';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Breaking Bad Database | Characters</title>
			</Head>
			<Nav />
			<h1 className={CharacterStyles.Characters}>All Characters of Breaking Bad.</h1>
			<CharacterList />
		</div>
	)
}
