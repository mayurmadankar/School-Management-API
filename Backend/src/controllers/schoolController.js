import School from "../models/School.js";

export const addSchool = async (req, res) => {
  try {
    const { name, address, latitude, longitude } = req.body;

    if (!name || !address || latitude == null || longitude == null) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newSchool = new School({
      name,
      address,
      location: {
        type: "Point",
        coordinates: [parseFloat(longitude), parseFloat(latitude)]
      }
    });

    await newSchool.save();

    res.status(201).json({
      success: true,
      message: "School added successfully",
      school: newSchool
    });
  } catch (error) {
    console.error("Error adding school:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
export const listSchools = async (req, res) => {
  try {
    const { lat, lng } = req.query;

    if (!lat || !lng) {
      return res
        .status(400)
        .json({ message: "Latitude and longitude are required" });
    }

    const latitude = parseFloat(lat);
    const longitude = parseFloat(lng);

    const schools = await School.aggregate([
      {
        $geoNear: {
          near: {
            type: "Point",
            coordinates: [longitude, latitude]
          },
          distanceField: "distance",
          spherical: true
        }
      },
      {
        $addFields: {
          distanceInKm: { $divide: ["$distance", 1000] }
        }
      }
    ]);

    res.status(200).json({
      success: true,
      count: schools.length,
      data: schools
    });
  } catch (error) {
    console.error("Error fetching schools:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
