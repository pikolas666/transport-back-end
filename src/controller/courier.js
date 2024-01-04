import CourierSchema from "../models/courier.js";

const ADD_COURIER = async (req, res) => {
	try {
		const courier = new CourierSchema({
			courier: req.body.courier,
			country: req.body.country,
			weight: req.body.weight,
			price: req.body.price,
		});

		courier.id = courier._id;

		const response = await courier.save();

		return res.status(201).json({ response: response });
	} catch (error) {
		console.error("Error adding courier:", error);
		return res.status(500).json({ error: "Internal Server Error" });
	}
};

const GET_COURIERS = async (req, res) => {
	try {
		const response = await CourierSchema.find();
		console.log("response: ", response);
		return res.json(response);
	} catch (err) {
		console.error("ERROR: ", err);
		res.status(500).json({ response: "Something went wrong" });
	}
};

export { GET_COURIERS, ADD_COURIER };
