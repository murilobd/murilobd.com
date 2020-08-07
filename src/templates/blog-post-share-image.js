import React, { useEffect } from "react";
import { graphql } from "gatsby";
import { useQueryParam, StringParam } from "use-query-params";
import * as backgrounds from "hero-patterns";
import { getColor, getSizes, getBackground } from "../helpers/helpers";

export default function BlogPostShareImage({ data, pageContext }) {
	const [socialMedia, setSocialMedia] = useQueryParam(
		"socialMedia",
		StringParam
	);
	const [color] = useQueryParam("color", StringParam);
	const title = data.markdownRemark.frontmatter.title;
	const { twitter } = pageContext.site;

	useEffect(() => {
		if (!socialMedia) setSocialMedia("twitter");
	}, [setSocialMedia, socialMedia]);

	const sizes = getSizes(socialMedia);
	const colors = getColor(color);
	return (
		<div
			className="flex items-center"
			style={{
				height: sizes.height,
				width: sizes.width,
				border: "solid 1px black",
				backgroundImage: backgrounds[getBackground()](
					colors.backgroundIcon,
					0.4
				),
				backgroundColor: colors.background,
			}}
		>
			<div
				className="p-4 m-4 flex flex-col justify-between rounded-lg shadow-lg"
				style={{
					backgroundColor: colors.panel,
					color: colors.text,
				}}
			>
				<p
					className="break-words font-extrabold self-start h-full w-full flex items-center py-3"
					style={{
						fontSize: sizes.font,
					}}
				>
					{title}
				</p>
				<div className="flex flex-row self-end justify-end w-full space-x-2">
					<div className="text-sm flex">
						<svg
							className="h-4 w-4"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
						</svg>
						<span>{twitter.substr(1)}</span>
					</div>
					<div className="text-sm flex">
						<svg
							className="h-4 w-4"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path
								fillRule="evenodd"
								d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
								clipRule="evenodd"
							></path>
						</svg>
						<span>murilobd.com</span>
					</div>
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
