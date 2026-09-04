import React from "react";

function article_1() {
	return {
		date: "May 2026",
		title: "GrowMate: An Indoor Cultivation Ecosystem Built for FIKSI 2026",
		description:
			"Inside GrowMate, an automated indoor cultivation ecosystem using IoT sensors, and how it took my team to the national stage of Indonesia's FIKSI competition.",
		keywords: [
			"GrowMate",
			"FIKSI 2026",
			"IoT",
			"Farel",
			"FarelRA",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						GrowMate is an automated indoor cultivation ecosystem
						(urban farming) that relies on Internet of Things (IoT)
						sensors to monitor and care for plants. It started as a
						project for the FIKSI (Festival Inovasi dan
						Kewirausahaan Siswa Nasional) 2026 competition and has
						made it all the way to the national stage.
					</div>
					<div className="paragraph">
						As director of development and product strategy, I
						programmed the hardware, integrated the sensors, wrote
						the product briefs and technical specifications, and
						put together step-by-step assembly manuals. I also
						managed the financial and production side, including a
						multi-month operations ledger, cost and margin tracking,
						subscription management, and the token-pricing equations
						behind the product.
					</div>
					<div className="paragraph">
						The suite spans multiple pieces: the ESP32-CAM and
						Raspberry Pi plant-monitoring firmware, and the smart
						urban farming app with an AI assistant, built with Nuxt,
						Bun, and Convex.
					</div>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "June 2026",
		title: "Running a Homelab on Arch: Close to Upstream, Deep in Control",
		description:
			"Why Arch Linux is my primary environment for home infrastructure, and the small things I do to keep it humming.",
		style: ``,
		keywords: ["Arch Linux", "homelab", "systemd", "Linux", "Farel"],
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						My primary environment is Linux. For my homelab
						infrastructure I lean on Arch Linux because I prefer a
						system that stays as close to upstream as possible, and
						it gives the deepest control. CachyOS and Ubuntu also
						have roles, and Windows exists purely as a backup.
					</div>
					<div className="paragraph">
						A lot of my day-to-day work happens at the edges of the
						OS: customizing my shell with the Fish prompt, debugging
						container stacks with Podman and Docker networking,
						analyzing journal logs, and writing custom systemd
						services to adjust CPU power parameters.
					</div>
					<div className="paragraph">
						It's less about having the fanciest setup and more
						about understanding every layer well enough to break
						it, fix it, and make it mine.
					</div>
				</div>
			</React.Fragment>
		),
	};
}

function article_3() {
	return {
		date: "July 2026",
		title: "Automating WhatsApp: From CLI Agents to a Full Platform",
		description:
			"How a curiosity about bots turned into a personal stack of WhatsApp tools: a CLI agent, an operations dashboard, and a microkernel platform.",
		style: ``,
		keywords: ["WhatsApp", "automation", "bots", "Orion-Agent", "nuntius", "wato", "Farel"],
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						A lot of my open-source work orbits one obsession:
						automating WhatsApp. It started small, with a CLI bot
						that answered messages from a terminal, and snowballed
						into a whole ecosystem of tools I use almost daily.
					</div>
					<div className="paragraph">
						The first serious piece was Orion-Agent, a
						terminal-first assistant with a daemon architecture.
						Instead of a chat UI, you talk to it straight from the
						shell, and it can handle conversations in the
						background. From there came nuntius, a self-hosted
						operations dashboard for managing contacts, campaigns,
						and messaging at scale. Then wato, a Bun-based platform
						built on a microkernel architecture that ties these
						ideas together under one roof.
					</div>
					<div className="paragraph">
						Each iteration taught me something: how to structure
						long-running daemons, how to keep sessions stable
						through reconnects, and how to design a plugin system
						that stays simple even as features pile on.
					</div>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2, article_3];

export default myArticles;