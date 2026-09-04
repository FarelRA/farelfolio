import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import INFO from "../../data/user";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Experience"
				body={
					<div className="works-body">
						{INFO.experience.map((work, index) => (
							<div className="work" key={index}>
								<img
									src={"./" + work.logo}
									alt={work.title}
									className="work-image"
								/>
								<div className="work-title">{work.title}</div>
								<div className="work-subtitle">
									{work.subtitle}
								</div>
								<div className="work-duration">
									{work.duration}
								</div>
							</div>
						))}
					</div>
				}
			/>
		</div>
	);
};

export default Works;