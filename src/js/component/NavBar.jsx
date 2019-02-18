import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const NavBar = () => {
	return (
		<React.Fragment>
			<nav
				className="navbar navbar-default navbar-fixed-top topnav"
				role="navigation">
				<div className="container topnav">
					<div className="navbar-header">
						<button
							type="button"
							className="navbar-toggle"
							data-toggle="collapse"
							data-target="#bs-example-navbar-collapse-1">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar" />
							<span className="icon-bar" />
							<span className="icon-bar" />
						</button>
						<a className="navbar-brand topnav" href="#">
							kaceydawson.com
						</a>
						<span id="navDate" className="navbar-brand topnav" />
					</div>
					<div
						className="collapse navbar-collapse"
						id="bs-example-navbar-collapse-1">
						<ul className="nav navbar-nav navbar-right">
							<li>
								<a href="index.html" target="_self">
									Home
								</a>
							</li>
							<li>
								<a href="resume.html" target="_self">
									Resume
								</a>
							</li>
							<li>
								<a href="graphics.html" target="_self">
									Graphics
								</a>
							</li>
							<li>
								<a href="index.html#contact" target="_self">
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</React.Fragment>
	);
};
export default NavBar;
