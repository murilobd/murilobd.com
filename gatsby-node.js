/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

function getShareImageFilenameFromSlug(slug) {
	// slug = /page-slug/
	// slug = /folder/page-slug/
	const splitSlug = slug.split("/").filter(content => content !== "");
	return splitSlug[splitSlug.length - 1];
}

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

	const edges = result.data.allMarkdownRemark.edges;
	for (const edge of edges) {
		const { node } = edge;
		const slugShareImage = getShareImageFilenameFromSlug(node.fields.slug);
		const resultShareImages = await graphql(`
			query {
				allFile(
					filter: {
						relativeDirectory: { eq: "images/meta-share-images" }
						name: { regex: "/^${slugShareImage}-(twitter|facebook|linkedin)$/i" }
					}
				) {
					nodes {
						publicURL
					}
				}
			}
		`);
		const shareImages = resultShareImages.data.allFile.nodes.reduce(
			(acc, curr) => {
				const socialMedias = ["facebook", "twitter", "linkedin"];
				for (const socialMedia of socialMedias) {
					const reg = new RegExp(`-${socialMedia}.png$`, "i");
					if (curr.publicURL.search(reg) > -1) {
						return {
							...acc,
							[socialMedia]: curr.publicURL,
						};
					}
				}
			},
			{}
		);

		createPage({
			path: node.fields.slug,
			component: path.resolve(`./src/templates/blog-post.js`),
			context: {
				// Data passed to context is available
				// in page queries as GraphQL variables.
				slug: node.fields.slug,
				shareImages: shareImages,
			},
		});

		if (process.env.gatsby_executing_command.includes("develop")) {
			createPage({
				path: `${node.fields.slug}image_share`,
				component: path.resolve(
					`./src/templates/blog-post-share-image.js`
				),
				context: {
					slug: node.fields.slug,
					site: result.data.site.siteMetadata,
				},
			});
		}
	}
};
