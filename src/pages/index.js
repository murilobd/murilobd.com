import React from "react";

import SEO from "../components/seo";
import Header from "../components/home/header.js";
import WhoAmI from "../components/home/who-am-i.js";
import Skills from "../components/home/skills.js";
import Projects from "../components/home/projects.js";
import Footer from "../components/home/footer.js";

const IndexPage = () => {
	return (
		<>
			<SEO title="Murilo Boareto Delefrate" />
			<Header />
			<WhoAmI />
			<Skills />
			<Projects />
			<Footer />
		</>
	);
};

export default IndexPage;
