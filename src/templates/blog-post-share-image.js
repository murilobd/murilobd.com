import React, { useEffect } from "react";
import { graphql } from "gatsby";
// import Layout from "../components/layout";
import { useQueryParam, StringParam } from "use-query-params";
import { ticTacToe } from "hero-patterns";

export default function BlogPostShareImage({ data, pageContext }) {
	const [socialMedia, setSocialMedia] = useQueryParam(
		"socialMedia",
		StringParam
	);
	const title = data.markdownRemark.frontmatter.title;
	const { author, twitter } = pageContext.site;

	useEffect(() => {
		if (!socialMedia) setSocialMedia("twitter");
	}, [setSocialMedia, socialMedia]);

	const getSizesFor = socialMedia => {
		switch (socialMedia) {
			case "twitter":
				return {
					width: 440,
					height: 220,
				};
			case "facebook":
				return {
					width: 1200,
					height: 628,
				};
			case "linkedin":
				return {
					width: 1104,
					height: 736,
				};

			default:
				return {
					width: 440,
					height: 220,
				};
		}
	};

	return (
		<div
			style={{
				...getSizesFor(socialMedia),
				border: "solid 1px black",
				backgroundImage: ticTacToe("#9c92ac", 0.4),
				backgroundColor: "#dfdbe5",
			}}
		>
			<div className="p-4 m-4 h-10/12 flex flex-col justify-between">
				<p className="break-words text-2xl text-cool-gray-700 font-extrabold self-start">
					{title}
				</p>
				<div className="flex flex-row self-end">
					<p className="text-sm text-cool-gray-500 font-medium">
						{author}
					</p>
					<p className="text-sm text-cool-gray-500 font-medium">
						{twitter}
					</p>
				</div>
			</div>
		</div>
	);
}

export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			frontmatter {
				title
			}
		}
	}
`;
