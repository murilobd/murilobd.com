/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions;
	if (node.internal.type === `MarkdownRemark`) {
		const slug = createFilePath({ node, getNode, basePath: `pages` });
		createNodeField({
			node,
			name: `slug`,
			value: slug,
		});
	}
};

exports.createPages = async ({ graphql, actions }) => {
	// **Note:** The graphql function call returns a Promise
	// see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
	const { createPage } = actions;
	const result = await graphql(`
		query {
			allMarkdownRemark {
				edges {
					node {
						fields {
							slug
						}
					}
				}
			}
			site {
				siteMetadata {
					title
					description
					author
					twitter
				}
			}
		}
	`);

	result.data.allMarkdownRemark.edges.forEach(({ node }) => {
		if (process.env.gatsby_executing_command.includes("develop")) {
			createPage({
				path: `${node.fields.slug}image_tw`,
				component: path.resolve(
					`./src/templates/blog-post-share-image.js`
				),
				context: {
					slug: node.fields.slug,
					site: result.data.site.siteMetadata,
				},
			});
		}

		createPage({
			path: node.fields.slug,
			component: path.resolve(`./src/templates/blog-post.js`),
			context: {
				// Data passed to context is available
				// in page queries as GraphQL variables.
				slug: node.fields.slug,
			},
		});
	});
};
