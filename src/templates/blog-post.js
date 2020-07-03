import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default function BlogPost({ data }) {
	const post = data.markdownRemark;

	return (
		<Layout title={post.frontmatter.title}>
			<SEO title={post.frontmatter.title} description={post.excerpt} />
			<div className="bg-white rounded-xs shadow px-5 py-6 sm:px-6">
				<div dangerouslySetInnerHTML={{ __html: post.html }} />
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
			}
			excerpt
		}
	}
`;
