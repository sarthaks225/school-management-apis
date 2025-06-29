const School = require("../models/school");
const calculateDistance = require("../utils/distanceCalculator");

const addSchool = async (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  if (!name || !address || !latitude || !longitude) {
    return res.status(400).json({
      message: "All fields are required: name, address, latitude, longitude",
    });
  }

  try {
    const school = await School.create({ name, address, latitude, longitude });
    res.status(201).json({
      message: "School added successfully",
      id: school.id,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error adding school" });
  }
};

const listSchools = async (req, res) => {
  const { latitude, longitude } = req.query;

  if (!latitude || !longitude) {
    return res
      .status(400)
      .json({ message: "Latitude and longitude are required" });
  }

  try {
    const schools = await School.findAll();
    const schoolsWithDistance = schools.map((school) => ({
      ...school.toJSON(),
      distance: calculateDistance(
        parseFloat(latitude),
        parseFloat(longitude),
        school.latitude,
        school.longitude
      ),
    }));

    schoolsWithDistance.sort((a, b) => a.distance - b.distance);
    res.status(200).json(schoolsWithDistance);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching schools" });
  }
};

module.exports = { addSchool, listSchools };
