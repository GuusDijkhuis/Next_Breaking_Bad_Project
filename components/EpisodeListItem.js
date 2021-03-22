import React, { Component } from 'react';

import EpisodeListItemStyles from '../styles/EpisodeListItem.module.css';

class ListItem extends Component {
	render() {
		return (
			<li className={EpisodeListItemStyles.ListItem}>
				<h1>
					{this.props.data.title ? this.props.data.title : ''}
				</h1>
				<h3>{this.props.data.series}</h3>
				<article>
					<h3>Season</h3>
					<p className={EpisodeListItemStyles.Info}> {this.props.data.season}</p>
				</article>
				<article>
					<h3>Episode</h3>
					<p className={EpisodeListItemStyles.Info}> {this.props.data.episode}</p>
				</article>
				<article>
					<h3>Airdate</h3>
					<p className={EpisodeListItemStyles.Info}> {this.props.data.air_date}</p>
				</article>
				<article>
					<h3>Characters</h3>
					<ul className={EpisodeListItemStyles.InfoCharacters}>
						{this.props.data.characters.map(res => <li className={EpisodeListItemStyles.Info}>{res}</li>)}
					</ul>
				</article>
			</li>
		);
	}
}

export default ListItem;
