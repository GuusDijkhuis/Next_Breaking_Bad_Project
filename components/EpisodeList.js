import React, { Component } from 'react';
import EpisodeListItem from './EpisodeListItem';

import EpisodeListStyles from '../styles/EpisodeList.module.css';


class EpisodeList extends Component {
	static defaultProps = {
		checkList: false,
		baseURL: 'https://www.breakingbadapi.com/api',
		listStyle: 'columns'
	}
	constructor(props) {
		super(props);
		this.state = {
			data: []
		}
	}
	componentDidMount() {
		fetch(`${this.props.baseURL}${this.props.url}`)
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
			<ul className={`${EpisodeListStyles.EpisodeList}`}>
				{
					this.state.data.map(e => <EpisodeListItem check={this.props.checkList} data={e} />)
				}
			</ul>
		);
	}
}

export default EpisodeList;

