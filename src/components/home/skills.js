import React from "react";
import Logo from "./skill-logo.js";
import htmlImg from "../../images/logos/logo-html5.png";
import css3Img from "../../images/logos/logo-css3.png";
import jsImg from "../../images/logos/logo-js.png";
import sassImg from "../../images/logos/logo-sass.png";
import vuejsImg from "../../images/logos/logo-vuejs.png";
import reactjsImg from "../../images/logos/logo-reactjs.png";
import phpImg from "../../images/logos/logo-php.png";
import laravelImg from "../../images/logos/logo-laravel.png";
import mysqlImg from "../../images/logos/logo-mysql.png";
import pythonImg from "../../images/logos/logo-python.png";
import tensorflowImg from "../../images/logos/logo-tensorflow.png";
import dockerImg from "../../images/logos/logo-docker.png";

const HomeSkills = () => {
	const skills = [
		{ img: htmlImg, alt: "HTML 5" },
		{ img: css3Img, alt: "CSS 3" },
		{ img: jsImg, alt: "JavaScript" },
		{ img: sassImg, alt: "SASS" },
		{ img: vuejsImg, alt: "VueJS" },
		{ img: reactjsImg, alt: "ReactJS" },
		{ img: phpImg, alt: "PHP" },
		{ img: laravelImg, alt: "Laravel" },
		{ img: mysqlImg, alt: "MySQL" },
		{ img: pythonImg, alt: "Python" },
		{ img: tensorflowImg, alt: "TensorFlow" },
		{ img: dockerImg, alt: "Docker" },
	];
	return (
		<section className="mx-auto px-8 py-8 lg:max-w-7xl bg-white overflow-hidden">
			<div
				className="hidden lg:block lg:inset-y-0 lg:h-full lg:w-full"
				aria-hidden="true"
			>
				<div className="relative h-full max-w-7xl mx-auto">
					<svg
						className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
						width="404"
						height="784"
						fill="none"
						viewBox="0 0 404 784"
					>
						<defs>
							<pattern
								id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
								x="0"
								y="0"
								width="20"
								height="20"
								patternUnits="userSpaceOnUse"
							>
								<rect
									x="0"
									y="0"
									width="4"
									height="4"
									className="text-gray-200"
									fill="currentColor"
								/>
							</pattern>
						</defs>
						<rect
							width="404"
							height="784"
							fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
						/>
					</svg>
				</div>
			</div>
			<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
				<p className="text-center text-4xl font-semibold uppercase text-gray-600 tracking-wider">
					Skills
				</p>
				<div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-4 lg:grid-cols-6 lg:mt-8">
					{skills.map(skill => (
						<Logo src={skill.img} alt={skill.alt} key={skill.alt} />
					))}
				</div>
			</div>
		</section>
	);
};

export default HomeSkills;
