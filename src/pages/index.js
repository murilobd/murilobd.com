import React from "react";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = () => (
	<Layout title="Home">
		<SEO title="Home" />
		<div class="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
			<h1>Hi people</h1>
			<p>Welcome to your new Gatsby site.</p>
			<p>Now go build something great.</p>
			<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
				<Image />
			</div>
		</div>
	</Layout>
);

export default IndexPage;
