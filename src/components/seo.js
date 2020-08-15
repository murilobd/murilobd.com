/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({
	slug,
	description,
	lang,
	meta,
	title,
	shareImages = {},
	type = "website",
}) {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
						twitter
						url
					}
				}
			}
		`
	);
	const metaDescription = description || site.siteMetadata.description;

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
			titleTemplate={`%s | ${site.siteMetadata.title}`}
			meta={[
				{
					name: `description`,
					content: metaDescription,
				},
				{
					name: `author`,
					content: site.siteMetadata.author,
				},
				{
					property: `og:title`,
					content: title,
				},
				{
					property: `og:description`,
					content: metaDescription,
				},
				{
					property: `og:type`,
					content: type,
				},
				(shareImages.facebook && {
					property: `og:image`,
					content: `${site.siteMetadata.url}${shareImages.facebook}`,
				}) ||
					{},
				(shareImages.facebook && {
					property: `og:image:width`,
					content: `1200`,
				}) ||
					{},
				(shareImages.facebook && {
					property: `og:image:height`,
					content: `628`,
				}) ||
					{},
				{
					name: `twitter:card`,
					content: `summary`,
				},
				{
					name: `twitter:site`,
					content: site.siteMetadata.twitter,
				},
				{
					name: `twitter:creator`,
					content: site.siteMetadata.twitter,
				},
				{
					name: `twitter:title`,
					content: title,
				},
				{
					name: `twitter:description`,
					content: metaDescription,
				},
				(shareImages.twitter && {
					property: `twitter:image`,
					content: `${site.siteMetadata.url}${shareImages.twitter}`,
				}) ||
					{},
			].concat(meta)}
		/>
	);
}

SEO.defaultProps = {
	lang: `en`,
	meta: [],
	description: ``,
};

SEO.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string.isRequired,
};

export default SEO;
