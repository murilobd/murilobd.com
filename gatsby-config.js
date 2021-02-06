const tailwindConfig = require("./tailwind.config.js");

module.exports = {
	siteMetadata: {
		title: `MuriloBD.com`,
		description: `Software Engineer Murilo Boareto Delefrate`,
		author: `Murilo Boareto Delefrate`,
		twitter: "@murilobd",
		url: "https://murilobd.com",
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
		"gatsby-plugin-use-query-params",
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Murilo Boareto Delefrate`,
				short_name: `@murilobd`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/ico588x588.png`,
			},
		},
		{
			resolve: `gatsby-plugin-modal-routing`,
			options: {
				modalProps: {
					style: {
						overlay: { zIndex: 200 },
					},
				},
			},
		},
		/**
		 * Get JSON project files to transform into pages
		 */ `gatsby-transformer-json`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `projects`,
				path: `${__dirname}/src/pages/projects`,
			},
		},

		`gatsby-plugin-offline`,
	],
};
