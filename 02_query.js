// 02_query.js — QUERY documents
// Run: mongosh --port 27018 --file 02_query.js
use("nativePlantDB");

console.log("\n--- All plants (name + scientificName) ---");
printjson(db.plants.find({}, { _id: 0, name: 1, scientificName: 1 }).toArray());

console.log("\n--- One plant by name ---");
printjson(db.plants.findOne({ name: "Purple Coneflower" }));

console.log("\n--- Plants that need full sun ---");
printjson(db.plants.find({ sunlight: "Full sun" }, { _id: 0, name: 1, sunlight: 1 }).toArray());

console.log("\n--- Low-water plants ---");
printjson(db.plants.find({ water: "Low" }, { _id: 0, name: 1, water: 1 }).toArray());

console.log("\n--- Plants that benefit hummingbirds ---");
printjson(db.plants.find({ wildlifeBenefits: "Hummingbirds" }, { _id: 0, name: 1, wildlifeBenefits: 1 }).toArray());

console.log("\n--- Plants that bloom in spring (regex) ---");
printjson(db.plants.find({ bloomSeason: /^Spring/ }, { _id: 0, name: 1, bloomSeason: 1 }).toArray());

console.log("\n--- Sorted by name A-Z ---");
printjson(db.plants.find({}, { _id: 0, name: 1 }).sort({ name: 1 }).toArray());
