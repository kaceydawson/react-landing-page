import React from "react";
import NavBar from "./NavBar.jsx";
import HeroView from "./HeroView.jsx";
import ResumeSection from "./ResumeSection.jsx";
import GraphicSection from "./GraphicSection.jsx";
import ContactSection from "./ContactSection.jsx";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div>
				<NavBar />
				<HeroView />
				<ResumeSection />
				<GraphicSection />
				<ContactSection />
			</div>
		);
	}
}
