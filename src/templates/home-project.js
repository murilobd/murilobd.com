import React, { useState } from "react";
import SkillLogo from "../components/home/skill-logo.js";
import Lightbox from "react-image-lightbox";

const HomeProject = ({ pageContext }) => {
	const [showImageIndex, setShowImageIndex] = useState(null);
	const {
		slug,
		title,
		description,
		technologies,
		// date,
		pictures,
	} = pageContext;
	const images = pictures.map(p => ({
		src: require(`../images/projects/${slug}/${p.url}`),
		desc: p.desc,
	}));

	return (
		<div className="bg-white overflow-hidden">
			<div className="relative w-full mx-auto">
				<div className="relative">
					<h2 className="text-center text-2xl leading-8 font-extrabold tracking-tight text-gray-900">
						{title}
					</h2>
					<p
						className="mt-4 max-w-4xl mx-auto text-center md:text-justify text-base text-gray-500 prose"
						dangerouslySetInnerHTML={{ __html: description }}
					></p>
				</div>

				<div className="relative pt-10">
					<h3 className="text-center text-lg leading-8 font-medium tracking-tight text-gray-900">
						Technologies
					</h3>
					<div className="mt-6 grid grid-cols-4 gap-0.5 md:grid-cols-6 lg:grid-cols-8 lg:mt-8">
						{technologies.map(t => (
							<SkillLogo
								key={`skill-${t}`}
								padding={4}
								src={require(`../images/logos/logo-${t}.png`)}
							/>
						))}
					</div>
				</div>

				<div className="relative py-10">
					<h3 className="text-center text-lg leading-8 font-medium tracking-tight text-gray-900">
						Images
					</h3>
					<div className="mt-6 grid grid-cols-4 gap-0.5">
						{images.map((img, index) => (
							<div
								className="col-span-1 flex justify-center z-10 max-h-64 "
								key={`${slug}-${img.src}`}
								onClick={() => setShowImageIndex(index)}
							>
								<img src={img.src} alt={img.desc} />
							</div>
						))}
					</div>
				</div>
			</div>

			{showImageIndex !== null && (
				<Lightbox
					mainSrc={images[showImageIndex].src}
					nextSrc={images[(showImageIndex + 1) % images.length].src}
					prevSrc={
						images[
							(showImageIndex + images.length - 1) % images.length
						].src
					}
					onCloseRequest={() => setShowImageIndex(null)}
					onMovePrevRequest={() =>
						setShowImageIndex(
							(showImageIndex + images.length - 1) % images.length
						)
					}
					onMoveNextRequest={() =>
						setShowImageIndex((showImageIndex + 1) % images.length)
					}
				/>
			)}
		</div>
	);
};

export default HomeProject;
