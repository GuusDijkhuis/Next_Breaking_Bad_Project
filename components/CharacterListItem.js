import React, { Component } from 'react';

import CharacterListItemStyles from '../styles/CharacterListItem.module.css';

class ListItem extends Component {
	render() {
		return (
			<li className={CharacterListItemStyles.ListItem}>
				<a className={CharacterListItemStyles.ListItemLink} href={`/characters/${this.props.data.char_id}`}>
					<img className={CharacterListItemStyles.ListItemImg} src={this.props.data.img} />
					<h1>{this.props.data.name}</h1>
				</a>
			</li>
		);
	}
}

export default ListItem;
