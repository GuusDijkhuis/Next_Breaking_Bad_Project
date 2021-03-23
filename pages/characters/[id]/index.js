import Head from 'next/head';
import Nav from '../../../components/Nav';

import CharInfo from '../../../components/CharInfo'

export default function SingleCharacter({character}) {
	return (
		<div>
			<Head>
				<title>Breaking Bad Database | {character.name}</title>
			</Head>
			<Nav />
			<CharInfo data={character}/>
		</div>
	)
}

export const getServerSideProps = async (context) => {
	const res = await fetch(`https://www.breakingbadapi.com/api/characters/${context.params.id}`);
	const character = await res.json();

	return {
		props: {
			character: character[0]
		}
	}
}

