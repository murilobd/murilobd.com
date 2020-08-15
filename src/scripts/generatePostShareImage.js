#!/usr/bin/env node
const { existsSync } = require("fs");
const { join, dirname } = require("path");
const glob = require("glob");
const puppeteer = require("puppeteer");
const availableBackgrounds = require("../helpers/backgrounds.json");
const colors = require("../helpers/colors.json");

const baseUrl = process.argv[2] || "http://localhost:8000";

const takeScreenshot = async (url, width, height, destination) => {
	const browser = await puppeteer.launch({
		args: ["--no-sandbox", "--disable-setuid-sandbox"],
	});
	const page = await browser.newPage();
	await page.setViewport({
		width: 1300,
		height: 800,
		deviceScaleFactor: 1,
	});
	await page.goto(url, {
		waitUntil: "load", // consider navigation to be finished when there are no more than 2 network connections for at least 500 ms.
	});
	await page.screenshot({
		path: destination,
		clip: {
			x: 0,
			y: 25,
			width,
			height,
		},
	});

	await browser.close();
};

const getArticleFiles = () => {
	const files = glob.sync(join(process.cwd(), "src", "pages", "**", "*.md"));
	return files.map(file => {
		const dir = dirname(file).split("/pages")[1];

		const fileSplit = file.split("/");
		const slug = fileSplit[fileSplit.length - 1].replace(".md", "");

		return {
			url: [dir, slug].join("/"),
			slug,
		};
	});
};

const main = async () => {
	const files = getArticleFiles();
	const socialMedias = {
		twitter: {
			width: 440,
			height: 220,
		},
		facebook: {
			width: 1200,
			height: 628,
		},
		linkedin: {
			width: 1104,
			height: 736,
		},
	};

	// get a random color and background to be used for all social medias
	const color = colors[Math.floor(Math.random() * colors.length)].color;
	const background =
		availableBackgrounds[Math.floor(Math.random() * colors.length)];

	for (const file of files) {
		for (const socialMedia in socialMedias) {
			const destinationFile = join(
				process.cwd(),
				"src",
				"images",
				"meta-share-images",
				`${file.slug}-${socialMedia}.png`
			);

			if (!existsSync(destinationFile)) {
				console.log("image not found", destinationFile);
				await takeScreenshot(
					`${baseUrl}${file.url}/image_share?socialMedia=${socialMedia}&color=${color}&background=${background}`,
					socialMedias[socialMedia].width,
					socialMedias[socialMedia].height,
					destinationFile
				);
				console.log(`Created ${destinationFile}`);
			}
		}
	}
};

main();
