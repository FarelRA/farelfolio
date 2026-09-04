import React, { useEffect } from "react";
import Seo from "../components/Seo";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Seo title={INFO.main.title + " | Projects"} description={currentSEO.description} keywords={currentSEO.keywords.join(", ")} />

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							Things I've made trying to put my dent in the
							universe.
						</div>

						<div className="subtitle projects-subtitle">
							Here's a selection of my open-source and personal
							projects, a mix across networking, WhatsApp
							automation, IoT, and the web. Many are public on
							GitHub, so feel free to dig into the code. An
							archive of everything I've shipped is on my GitHub
							profile. I'm always open to feedback and ideas on
							where to take them next.
						</div>

						<div className="projects-list">
							<AllProjects />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
