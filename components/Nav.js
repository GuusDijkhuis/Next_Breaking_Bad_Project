import React, { Component } from 'react';

import navStyles from '../styles/Nav.module.css';

class Nav extends Component {
	render() {
		return (
			<nav className={navStyles.Nav}>
				<a href="/" className={navStyles.NavTitle}>Breaking Bad Database</a>
				<ul className={navStyles.NavList}>
					<li className={navStyles.NavListItem}>
						<a href="/episodes">Episodes</a>
					</li>
					<li className={navStyles.NavListItem}>
						<a href="/characters">Characters</a>
					</li>
				</ul>
			</nav>
		);
	}
}

export default Nav;