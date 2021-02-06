import React from "react";
import { Link } from "gatsby-plugin-modal-routing";

const ProjectItem = ({ slug, img, title, description }) => {
	return (
		<Link to={`/projects/${slug}`} asModal>
			<li>
				<div className="space-y-3">
					<div className="aspect-w-3 aspect-h-2">
						<img
							className="object-cover shadow-lg rounded-lg"
							src={img}
							alt={title}
						/>
					</div>
					<div className="space-y-1">
						<div className="leading-6">
							<h3 className="font-medium text-base">{title}</h3>
							<p className="font-light text-sm">{description}</p>
						</div>
					</div>
				</div>
			</li>
		</Link>
	);
};

export default ProjectItem;
