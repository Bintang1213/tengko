import foodModel from "../models/foodModel.js";

const addFood = async (req, res) => {
    console.log("REQ.FILE:", req.file); // Debug file upload
    console.log("REQ.BODY:", req.body); // Debug data input

    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Gambar tidak ditemukan! Pastikan Anda mengunggah file."
            });
        }

        let image_filename = req.file.filename;

        const food = new foodModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: image_filename
        });

        await food.save();
        res.json({ success: true, message: "Food added successfully" });

    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

export { addFood };
