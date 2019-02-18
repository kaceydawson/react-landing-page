//create your first component
import React from "react";

//include images into your bundle
import blackWhiteBridge from "../../img/b-w-bridge.jpg";

const HeroView = () => {
	return (
		<React.Fragment>
			<a name="home" />
			<div className="intro-header">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="intro-message">
								<h1>Kacey Dawson</h1>
								<h3>Front End Web Developer</h3>
								<hr className="intro-divider" />
								<ul className="list-inline intro-social-buttons">
									<li>
										<a
											href="https://www.linkedin.com/in/kaceydawson/"
											className="btn btn-default btn-lg"
											rel="noopener">
											<i className="fa fa-linkedin fa-fw" />{" "}
											<span className="network-name">
												Linkedin
											</span>
										</a>
									</li>
									<li>
										<a
											href="https://www.facebook.com/dawson.kacey"
											className="btn btn-default btn-lg"
											rel="noopener">
											<i className="fa fa-facebook fa-fw" />{" "}
											<span className="network-name">
												Facebook
											</span>
										</a>
									</li>
									<li>
										<a
											href="https://www.instagram.com/kaceydawson75/"
											className="btn btn-default btn-lg"
											rel="noopener">
											<i className="fa fa-instagram fa-fw" />{" "}
											<span className="network-name">
												Instagram
											</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default HeroView;
