const tailwindConfig = require("./tailwind.config.js");

module.exports = {
	siteMetadata: {
		title: `MuriloBD.com Blog`,
		description: `Blog for web developer full-stack Murilo Boareto Delefrate`,
		author: `@murilobd`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `src`,
				path: `${__dirname}/src`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: "gatsby-transformer-remark",
			options: {
				plugins: [
					"gatsby-remark-use-frontmatter-path",
					{
						resolve: `gatsby-remark-highlight-code`,
						options: {
							// theme: `material`,
							// lineNumbers: true,
						},
					},
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 800,
							// showCaptions: true,
							quality: 55,
							withWebp: true,
						},
					},
				],
			},
		},
		{
			resolve: `gatsby-plugin-postcss`,
			options: {
				postCssPlugins: [
					require(`tailwindcss`)(tailwindConfig),
					require(`autoprefixer`),
					...(process.env.NODE_ENV == "production"
						? [require(`cssnano`)]
						: []),
				],
			},
		},
		// {
		// 	resolve: `gatsby-plugin-manifest`,
		// 	options: {
		// 		name: `Blog Murilo Boareto Delefrate`,
		// 		short_name: `BlogMBD`,
		// 		start_url: `/`,
		// 		background_color: `#663399`,
		// 		theme_color: `#663399`,
		// 		display: `minimal-ui`,
		// 		icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
		// 	},
		// },
		// `gatsby-plugin-offline`,
	],
};
