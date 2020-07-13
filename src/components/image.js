import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Image = ({ src }) => (
	<StaticQuery
		query={graphql`
			query {
				allImageSharp {
					edges {
						node {
							fluid(maxWidth: 500) {
								...GatsbyImageSharpFluid
								originalName
							}
						}
					}
				}
			}
		`}
		render={data => {
			const image = data.allImageSharp.edges.find(
				edge => edge.node.fluid.originalName === src
			);
			if (!image) {
				return null;
			}
			return <Img fluid={image.node.fluid} />;
		}}
	/>
);
export default Image;
