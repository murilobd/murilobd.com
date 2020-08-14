import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();

function getShareImageFilenameFromSlug(slug) {
	// slug = /page-slug/
	// slug = /folder/page-slug/
	const splitSlug = slug.split("/").filter(content => content !== "");
	return splitSlug[splitSlug.length - 1];
}

export default function BlogPost({ data, pageContext }) {
	const post = data.markdownRemark;
	const shareImageFilename = getShareImageFilenameFromSlug(pageContext.slug);

	const titleDescription = (
		<time dateTime={post.frontmatter.date}>
			{post.frontmatter.datehuman}
		</time>
	);

	return (
		<Layout title={post.frontmatter.title} description={titleDescription}>
			<SEO
				title={post.frontmatter.title}
				description={post.excerpt}
				type="article"
				shareImage={shareImageFilename}
			/>
			<div className="bg-white px-5 sm:px-6">
				<div
					className="prose text-gray-500 mx-auto pt-5 pb-8"
					dangerouslySetInnerHTML={{ __html: post.html }}
				/>
			</div>
		</Layout>
	);
}

export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
				date
				datehuman: date(formatString: "dddd, MMMM DD, YYYY")
				tags
			}
			excerpt
		}
	}
`;
