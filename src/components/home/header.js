import React from "react";
import { Link } from "gatsby";

const HomeHeader = () => {
	return (
		<div className="relative bg-gray-50 overflow-hidden">
			<div
				className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"
				aria-hidden="true"
			>
				<div className="relative h-full max-w-7xl mx-auto">
					<svg
						className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
						width="404"
						height="484"
						fill="none"
						viewBox="0 0 404 484"
					>
						<defs>
							<pattern
								id="f210dbf6-a58d-4871-961e-36d5016a0f49"
								x="0"
								y="0"
								width="20"
								height="20"
								patternUnits="userSpaceOnUse"
							>
								<rect
									x="0"
									y="0"
									width="4"
									height="4"
									className="text-gray-200"
									fill="currentColor"
								/>
							</pattern>
						</defs>
						<rect
							width="404"
							height="784"
							fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
						/>
					</svg>
				</div>
			</div>

			<div className="relative pt-6 pb-8">
				<div className="max-w-7xl mx-auto px-4 sm:px-6">
					<nav
						className="relative flex items-center justify-between sm:h-10 md:justify-center"
						aria-label="Global"
					>
						<div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
							<div className="flex items-center justify-between w-full md:w-auto">
								<Link to="/">
									<span className="h-8 w-auto sm:h-10">
										MuriloBD.com
									</span>
								</Link>
							</div>
						</div>
						<div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0 md:space-x-5">
							<Link
								to="https://consultant.murilobd.com/"
								className="font-medium text-gray-500 hover:text-gray-900"
							>
								Consultant
							</Link>
						
							<Link
								to="/blog"
								className="font-medium text-gray-500 hover:text-gray-900"
							>
								Blog
							</Link>
						</div>
					</nav>
				</div>
			</div>

			<main className="mt-8 mx-auto max-w-7xl px-4 sm:mt-24 mb-32">
				<div className="text-center">
					<h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
						<span className="block xl:inline">
							Murilo Boareto Delefrate
						</span>
					</h1>
					<p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
						Software Engineer
					</p>
				</div>
			</main>
		</div>
	);
};

export default HomeHeader;
