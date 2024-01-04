import PostalSchema from "../models/postal.js";

const ADD_POSTAL_SERVICE = async (req, res) => {
	try {
		const courier = new PostalSchema({
			courier: req.body.courier,
			country: req.body.country,
			weight: req.body.weight,
			price: req.body.price,
			package_size: req.body.package_size,
		});

		courier.id = courier._id;

		const response = await courier.save();

		return res.status(201).json({ response: response });
	} catch (error) {
		console.error("Error adding courier:", error);
		return res.status(500).json({ error: "Internal Server Error" });
	}
};

const GET_POSTAL_SERVICES = async (req, res) => {
	try {
		const response = await PostalSchema.find();
		console.log("response: ", response);
		return res.json(response);
	} catch (err) {
		console.error("ERROR: ", err);
		res.status(500).json({ response: "Something went wrong" });
	}
};

export { ADD_POSTAL_SERVICE, GET_POSTAL_SERVICES };
