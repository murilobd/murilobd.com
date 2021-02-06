import React from "react";
import ProjectItem from "./project-item.js";

import bistro12Img from "../../images/projects/bistro12.jpg";
import bsnadvImg from "../../images/projects/bsnadv.jpg";
import cronosImg from "../../images/projects/cronos.jpg";
import efficientiaImg from "../../images/projects/efficientia.jpg";
import logorapidoImg from "../../images/projects/logorapido.jpg";
import namaoImg from "../../images/projects/namao.jpg";
import nossosdoutoresImg from "../../images/projects/nossosdoutores.jpg";
import simuladorderoupasImg from "../../images/projects/simuladorderoupas.jpg";
import wattsenseImg from "../../images/projects/wattsense.jpg";
import alertadetradeImg from "../../images/projects/alertadetrade.jpg";
import productupImg from "../../images/projects/productup.jpg";

const HomeProject = () => {
	const projects = [
		{
			slug: "wattsense",
			img: wattsenseImg,
			title: "Wattsense",
			description: "Keep control of buildings with a simple BMS",
		},
		{
			slug: "trade-alert",
			img: alertadetradeImg,
			title: "Trade Alert",
			description: "Receive trade alerts by e-mail",
		},
		{
			slug: "productup",
			img: productupImg,
			title: "Product Up",
			description:
				"Helping professionals to learn about Product Management in a fun and effective way.",
		},
		{
			slug: "nossos-doutores",
			img: nossosdoutoresImg,
			title: "Nossos Doutores",
			description:
				"Scheduling of private consultations with health professionals",
		},
		{
			slug: "bistro12",
			img: bistro12Img,
			title: "Bistrô 12",
			description: "Website that sells chef's meals",
		},
		{
			slug: "namao",
			img: namaoImg,
			title: "NaMão",
			description:
				"Bank reconciliation system for retailers that accept credit and debit card as payment",
		},
		{
			slug: "bsn-adv",
			img: bsnadvImg,
			title: "BSN Adv",
			description: "Law Firm Management System",
		},
		{
			slug: "logo-rapido",
			img: logorapidoImg,
			title: "Logo Rápido",
			description: "Tool to create custom logos online",
		},
		{
			slug: "cronos",
			img: cronosImg,
			title: "Cronos",
			description: "Tool to assist studies using timelines",
		},
		{
			slug: "efficientia",
			img: efficientiaImg,
			title: "Efficientia Assessoria",
			description: "Legal advisory company",
		},
		{
			slug: "cloth-simulator",
			img: simuladorderoupasImg,
			title: "Simulador de Roupas",
			description: "Online clothing simulator",
		},
	];
	return (
		<section className=" bg-gray-50">
			<section className="mx-auto px-8 py-8 lg:max-w-7xl overflow-hidden">
				<div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
					<p className="text-center pb-12 text-4xl font-semibold uppercase text-gray-600 tracking-wider">
						Projects
					</p>
					<ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
						{projects.map(p => (
							<ProjectItem {...p} key={p.slug} />
						))}
					</ul>
				</div>
			</section>
		</section>
	);
};

export default HomeProject;
