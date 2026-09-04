import React, { useEffect } from "react";
import Seo from "../components/Seo";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Seo title={INFO.main.title + " | About"} description={currentSEO.description} keywords={currentSEO.keywords.join(", ")} />

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									{INFO.about.description
										.split("\n\n")
										.map((para, index) => (
											<p key={index}>{para}</p>
										))}
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="about.webp"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>

						<div className="about-sections">
							<div className="about-section">
								<div className="about-section-title">
									Skills
								</div>
								<div className="about-skills">
									{INFO.skills.map((skill, index) => (
										<span
											className="about-skill"
											key={index}
										>
											{skill}
										</span>
									))}
								</div>
							</div>

							<div className="about-section">
								<div className="about-section-title">
									Achievements
								</div>
								<div className="about-achievements">
									{INFO.achievements.map((achievement, index) => (
										<div
											className="about-achievement"
											key={index}
										>
											{achievement}
										</div>
									))}
								</div>
							</div>

							<div className="about-section">
								<div className="about-section-title">
									Education
								</div>
								<div className="about-education">
									{INFO.education.map((edu, index) => (
										<div className="about-edu" key={index}>
											<div className="about-edu-school">
												{edu.school}
											</div>
											<div className="about-edu-degree">
												{edu.degree}
											</div>
											<div className="about-edu-period">
												{edu.period}
											</div>
										</div>
									))}
								</div>
							</div>

							<div className="about-section">
								<div className="about-section-title">
									Languages
								</div>
							<div className="about-languages">
								{INFO.languages.map((language, index) => (
									<div className="about-language" key={index}>
										{language}
									</div>
								))}
							</div>
							</div>
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

export default About;
