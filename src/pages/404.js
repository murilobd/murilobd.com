import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BlogCard from "../components/blog-card";

const NotFoundPage = ({ data }) => (
	<Layout>
		<SEO title="404: Not found" />
		<div className="prose px-2 pt-5 pb-8 bg-red-200 border-red-800 border-2 rounded-md">
			<h1 className="text-2xl leading-8 font-bold tracking-tight text-red-800">
				PAGE NOT FOUND
			</h1>
			<p>
				You just hit a route that doesn&#39;t exist... the sadness. But,
				don't worry, I get your back: here are latests 3 blog posts for
				you to click and read:
			</p>
		</div>
		<ul className="divide-y divide-gray-200">
			{data.allMarkdownRemark.edges.map(({ node }) => (
				<li className="py-6" key={node.id}>
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

export const query = graphql`
	query {
		allMarkdownRemark(
			sort: { fields: [frontmatter___date], order: DESC }
			limit: 3
		) {
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

export default NotFoundPage;
