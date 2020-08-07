const colors = [
	{
		color: "gray",
		background: "#f9fafb",
		backgroundIcon: "#d2d6dc",
		panel: "#e5e7eb",
		text: "#374151",
	},
	{
		color: "cool-gray",
		background: "#fbfdfe",
		backgroundIcon: "#cfd8e3",
		panel: "#e2e8f0",
		text: "#364152",
	},
	{
		color: "red",
		background: "#fdf2f2",
		backgroundIcon: "#f8b4b4",
		panel: "#fbd5d5",
		text: "#c81e1e",
	},
	{
		color: "orange",
		background: "#fff8f1",
		backgroundIcon: "#fdba8c",
		panel: "#fcd9bd",
		text: "#b43403",
	},
	{
		color: "yellow",
		background: "#fdfdea",
		backgroundIcon: "#faca15",
		panel: "#fce96a",
		text: "#8e4b10",
	},
	{
		color: "green",
		background: "#f3faf7",
		backgroundIcon: "#84e1bc",
		panel: "#bcf0da",
		text: "#046c4e",
	},
	{
		color: "teal",
		background: "#edfafa",
		backgroundIcon: "#7edce2",
		panel: "#afecef",
		text: "#036672",
	},
	{
		color: "blue",
		background: "#ebf5ff",
		backgroundIcon: "#a4cafe",
		panel: "#c3ddfd",
		text: "#1a56db",
	},
	{
		color: "indigo",
		background: "#f0f5ff",
		backgroundIcon: "#b4c6fc",
		panel: "#cddbfe",
		text: "#5145cd",
	},
	{
		color: "purple",
		background: "#f6f5ff",
		backgroundIcon: "#cabffd",
		panel: "#dcd7fe",
		text: "#6c2bd9",
	},
	{
		color: "pink",
		background: "#fdf2f8",
		backgroundIcon: "#f8b4d9",
		panel: "#fad1e8",
		text: "#bf125d",
	},
];

const availableBackgrounds = [
	"jigsaw",
	"overcast",
	"formalInvitation",
	"topography",
	"texture",
	"jupiter",
	"architect",
	"cutout",
	"hideout",
	"graphPaper",
	"yyy",
	"squares",
	"fallingTriangles",
	"pianoMan",
	"pieFactory",
	"dominos",
	"hexagons",
	"charlieBrown",
	"autumn",
	"temple",
	"stampCollection",
	"deathStar",
	"churchOnSunday",
	"iLikeFood",
	"overlappingHexagons",
	"fourPointStars",
	"bamboo",
	"bathroomFloor",
	"corkScrew",
	"happyIntersection",
	"kiwi",
	"lips",
	"lisbon",
	"randomShapes",
	"steelBeams",
	"tinyCheckers",
	"xEquals",
	"anchorsAway",
	"bevelCircle",
	"brickWall",
	"fancyRectangles",
	"heavyRain",
	"overlappingCircles",
	"plus",
	"roundedPlusConnected",
	"volcanoLamp",
	"wiggle",
	"bubbles",
	"cage",
	"connections",
	"current",
	"diagonalStripes",
	"flippedDiamonds",
	"floatingCogs",
	"glamorous",
	"houndstooth",
	"leaf",
	"linesInMotion",
	"moroccan",
	"morphingDiamonds",
	"rails",
	"rain",
	"skulls",
	"squaresInSquares",
	"stripes",
	"ticTacToe",
	"zigZag",
	"aztec",
	"bankNote",
	"boxes",
	"circlesAndSquares",
	"circuitBoard",
	"curtain",
	"diagonalLines",
	"endlessClouds",
	"eyes",
	"floorTile",
	"groovy",
	"intersectingCircles",
	"melt",
	"overlappingDiamonds",
	"parkayFloor",
	"pixelDots",
	"polkaDots",
	"signal",
	"slantedStars",
	"wallpaper",
];

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
 * @param {string|null} background
 * @returns {string}
 */
export const getBackground = background => {
	const randomInt = randomInteger(availableBackgrounds.length);
	if (!background) {
		return availableBackgrounds[randomInt];
	}

	return availableBackgrounds[background] || availableBackgrounds[randomInt];
};

function randomInteger(max) {
	return Math.floor(Math.random() * max);
}

export default getColor;
