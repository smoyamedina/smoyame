const axios = require("../../node_modules/axios");

module.exports = async () => {
	try {
		const homeGet = await axios.get(
			"http://localhost:1337/api/homepage?populate=*"
		);
		// axios delivers it as JS object already thank goodness

		return homeGet.data.data.attributes;
	} catch (error) {
		console.error(error);
	}
};
