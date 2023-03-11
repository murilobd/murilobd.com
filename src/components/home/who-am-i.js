import React from "react";
import ProfileImg from "../../images/murilo-b-delefrate.jpg";

const HomeWhoAmI = () => {
	return (
		<section className="mx-auto px-8 py-8 lg:max-w-7xl bg-white overflow-hidden">
			<div className="lg:grid lg:grid-cols-12 lg:gap-8">
				<div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
					<p className="mt-3 font-normal text-4xl">Hi,</p>
					<p className="mt-3 text-base font-light text-gray-500 text-left sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
						I'm Murilo, nice to meet you. I have a B.S. in
						Electrical Engineer with emphasis in Computing from
						Uberlândia's Federal University, 7+ years of
						professional experience as a Software Engineer. I have
						already worked at some IT consulting companies, at AmBev
						(AB InBev group) and did some freelancing works. Since
						2018 I'm working at{" "}
						<a
							className="underline"
							href="https://wattsense.com"
							alt="Wattsense.com"
							rel="noreferrer nofollow"
							target="_blank"
						>
							Wattsense
						</a>{" "}
						as a Senior Front-End Engineer.
					</p>
					<p className="mt-3 text-base font-light text-gray-500 text-left sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
						Bellow there are some of my skills and the latest
						projects I've worked on.
					</p>
				</div>
				<div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
					<div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
						<div className="relative block w-full bg-white rounded-lg overflow-hidden">
							<img
								className="w-full"
								src={ProfileImg}
								alt="Murilo Boareto Delefrate"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomeWhoAmI;
