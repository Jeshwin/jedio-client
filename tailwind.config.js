/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {},
		fontFamily: {
			montserrat: ["Montserrat"],
			quicksand: ["Quicksand"],
			jost: ["Jost"],
			opensans: ["Open Sans"],
		},
	},
	plugins: [],
};
