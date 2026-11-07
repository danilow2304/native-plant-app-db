// 03_update_delete.js — UPDATE and DELETE documents
// Run: mongosh --port 27018 --file 03_update_delete.js
use("nativePlantDB");

console.log("\n--- UPDATE one: change water need ---");
printjson(db.plants.updateOne({ name: "Black-eyed Susan" }, { $set: { water: "Low to moderate" } }));
printjson(db.plants.findOne({ name: "Black-eyed Susan" }, { _id: 0, name: 1, water: 1 }));

console.log("\n--- UPDATE one: add a wildlife benefit ($push) ---");
printjson(db.plants.updateOne({ name: "Purple Coneflower" }, { $push: { wildlifeBenefits: "Songbirds" } }));
printjson(db.plants.findOne({ name: "Purple Coneflower" }, { _id: 0, name: 1, wildlifeBenefits: 1 }));

console.log("\n--- UPDATE many: add a field to every full-sun plant ---");
printjson(db.plants.updateMany({ sunlight: "Full sun" }, { $set: { pollinatorFriendly: true } }));

console.log("\n--- DELETE one ---");
printjson(db.plants.deleteOne({ name: "Joe-Pye Weed" }));

console.log("\n--- DELETE many (remove the two trees) ---");
printjson(db.plants.deleteMany({ name: { $in: ["Eastern Redbud", "Serviceberry"] } }));

console.log("\nDocuments remaining:", db.plants.countDocuments());
