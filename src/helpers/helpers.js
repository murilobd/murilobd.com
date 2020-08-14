import * as backgrounds from "hero-patterns";
import availableBackgrounds from "./backgrounds.json";
import colors from "./colors.json";

/**
 * Get color object. If not specified, a random color will be returned
 */
export const getColor = color => {
	const randomInt = randomInteger(colors.length);
	if (!color) {
		return colors[randomInt];
	}

	return colors.find(_color => _color.color === color) || colors[randomInt];
};

/**
 * Get sizes based on socialMedia
 *
 * @param {string} socialMedia
 * @returns {object}
 */
export const getSizes = socialMedia => {
	const defaultSizes = {
		width: 440,
		height: 220,
		font: "1.5rem",
	};

	switch (socialMedia) {
		case "twitter":
			return defaultSizes;

		case "facebook":
			return {
				width: 1200,
				height: 628,
				font: "4rem",
			};
		case "linkedin":
			return {
				width: 1104,
				height: 736,
				font: "4rem",
			};

		default:
			return defaultSizes;
	}
};

/**
 * Get background from availableBackgrounds
 *
 * @param {string} color
 * @param {number|null} opacity
 * @param {string|null} background
 * @returns {string}
 */
export const getBackgroundImage = (color, opacity = 1, background) => {
	if (background && availableBackgrounds.includes(background)) {
		return backgrounds[background](color, opacity);
	}

	const randomInt = randomInteger(availableBackgrounds.length);
	return backgrounds[availableBackgrounds[randomInt]](color, opacity);
};

/**
 * Generate random integer between 0 and max (non-included)
 *
 * @param {integer} max
 * @returns {integer}
 */
function randomInteger(max) {
	return Math.floor(Math.random() * max);
}
