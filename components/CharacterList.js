import React, { Component } from 'react';
import CharacterListItem from './CharacterListItem';

import CharacterListStyle from '../styles/CharacterList.module.css';


class CharacterList extends Component {
	static defaultProps = {
		checkList: false,
		baseURL: 'https://www.breakingbadapi.com/api'
	}
	constructor(props) {
		super(props);
		this.state = {
			data: []
		}
	}
	componentDidMount() {
		fetch(`${this.props.baseURL}/characters`)
		.then(response => response.json())
		.then(result => {
			this.setState({data: result})
		})
		.catch(e => {
			console.log(e);
		});
	};
	render() {
		return (
			<ul className={`${CharacterListStyle.CharacterList}`}>
				{
					this.state.data.map(e => <CharacterListItem check={this.props.checkList} data={e} />)
				}
			</ul>
		);
	}
}

export default CharacterList;

