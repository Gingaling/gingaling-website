import React from 'react';
import { NavLink } from 'react-router-dom';
// import MainNav from './main-nav';
import AuthNav from './Auth-Nav';

const NavBar = () => {
	return (
		<div className="nav-container bg-primary">
			<nav
				id="NavBarStyle"
				className="navbar navbar-expand-md navbar-light bg-light bg-primary">
				<div className="container">
					<img
						class="userImg"
						alt=""
						id="logo"
						src="https://i.imgur.com/2tmJku5.png"
					/>
					<div className="navbar-nav mr-auto">
						<NavLink
							to="/"
							exact
							className="nav-link"
							activeClassName="router-link-exact-active">
							<b>Home</b>
						</NavLink>
						<NavLink
							to="/profile"
							exact
							className="nav-link"
							activeClassName="router-link-exact-active">
							<b>Profile</b>
						</NavLink>
						<NavLink
							to="/syllabus"
							exact
							className="nav-link"
							activeClassName="router-link-exact-active">
							<b>Syllabi</b>
						</NavLink>
						<NavLink
							to="/resources"
							exact
							className="nav-link"
							activeClassName="router-link-exact-active">
							<b>Resources</b>
						</NavLink>
					</div>;
					<AuthNav />
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
