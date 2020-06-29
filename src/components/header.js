import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Header = ({ title, siteTitle }) => (
	<div class="bg-gray-800 pb-32">
		<nav class="bg-gray-800">
			<div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
				<div class="border-b border-gray-700">
					<div class="flex items-center justify-between h-16 px-4 sm:px-0">
						<div class="flex items-center">
							<div class="flex-shrink-0 text-white">
								<Link className="hover:text-gray-300" to="/">
									{siteTitle}
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
		<header class="py-10">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h1 class="text-3xl leading-9 font-bold text-white">{title}</h1>
			</div>
		</header>
	</div>
);

Header.propTypes = {
	siteTitle: PropTypes.string,
	title: PropTypes.string,
};

Header.defaultProps = {
	siteTitle: ``,
};

export default Header;
