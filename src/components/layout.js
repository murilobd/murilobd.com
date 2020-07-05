/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import Footer from "./footer";

const Layout = ({ title, description, children }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<>
			<Header
				title={title}
				description={description}
				siteTitle={data.site.siteMetadata.title}
			/>
			<main
				className="-mt-32"
				style={{ minHeight: "calc(100vh - 65px - 8rem)" }}
			>
				<div className="max-w-5xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
					{children}
				</div>
			</main>
			<Footer siteTitle={data.site.siteMetadata.title} />
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
