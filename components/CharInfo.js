import React, { Component } from 'react';

import CharacterStyles from '../styles/CharacterInfo.module.css';

class EpisodeList extends Component {
	render() {
		return (
			<div className={CharacterStyles.Character}>
				<h1>{this.props.data.name}</h1>
				<img src={this.props.data.img} />
				<p>
					<h3>Nickname</h3>
					<span>{this.props.data.nickname}</span>
				</p>
				<p>
					<h3>Actor/Actress</h3>
					<span>{this.props.data.portrayed}</span>
				</p>
				<p>
					<h3>Status</h3>
					<span> {this.props.data.status}</span>
				</p>
			</div>
		);
	}
}

export default EpisodeList;

