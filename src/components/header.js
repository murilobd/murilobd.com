import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Header = ({ title = null, description = null, siteTitle }) => (
	<div className="pb-36">
		<nav className="bg-gray-800">
			<div className="max-w-5xl mx-auto sm:px-6 lg:px-8">
				<div className="border-b border-gray-700">
					<div className="flex items-center justify-between h-16 px-4 sm:px-0">
						<div className="flex items-center">
							<div className="flex-shrink-0 text-white">
								<Link
									className="text-xl leading-9 font-bold hover:text-gray-300"
									to="/"
								>
									{siteTitle}
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
		{title !== null && (
			<header className="bg-gray-800 py-10 text-center">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h1 className="text-3xl leading-9 font-bold text-white">
						{title}
					</h1>
					{description !== null && (
						<div className="text-sm font-light leading-6 text-gray-500 py-1">
							{description}
						</div>
					)}
				</div>
			</header>
		)}
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
