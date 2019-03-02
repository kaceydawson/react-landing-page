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
								<ul className="d-inline intro-social-buttons">
									<li>
										<button
											type="button"
											className="btn btn-default btn-lg">
											<a
												href="https://www.linkedin.com/in/kaceydawson/"
												rel="noopener">
												<i className="fab fa-linkedin-in" />
												<span className="network-name">
													{" "}
													Linkedin
												</span>
											</a>
										</button>
									</li>
									<li>
										<button
											type="button"
											className="btn btn-default btn-lg">
											<a
												href="https://www.facebook.com/dawson.kacey"
												rel="noopener">
												<i className="fab fa-facebook-f" />
												<span className="network-name">
													{" "}
													Facebook
												</span>
											</a>
										</button>
									</li>
									<li>
										<button
											type="button"
											className="btn btn-default btn-lg">
											<a
												href="https://www.instagram.com/kaceydawson75/"
												rel="noopener">
												<i className="fab fa-instagram" />
												<span className="network-name">
													{" "}
													Instagram
												</span>
											</a>
										</button>
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
