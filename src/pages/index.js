import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BlogCard from "../components/blog-card";

const IndexPage = ({ data }) => {
	console.log(data);

	return (
		<Layout title="Home">
			<SEO title="Home" />
			<ul className="divide-y divide-gray-200">
				{data.allMarkdownRemark.edges.map(({ node }) => (
					<li className="py-12" key={node.id}>
						<BlogCard
							title={node.frontmatter.title}
							date={node.frontmatter.date}
							datetime={node.frontmatter.datetime}
							slug={node.fields.slug}
							excerpt={node.excerpt}
						/>
					</li>
				))}
			</ul>
		</Layout>
	);
};

export const query = graphql`
	query {
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
			totalCount
			edges {
				node {
					id
					frontmatter {
						title
						date(formatString: "DD MMMM, YYYY")
						datetime: date(formatString: "YYYY-MM-DD")
					}
					excerpt
					fields {
						slug
					}
				}
			}
		}
	}
`;

export default IndexPage;
