// 01_create_and_insert.js — create the database, the collection, and INSERT documents
// Run: mongosh --port 27018 --file 01_create_and_insert.js
use("nativePlantDB");           // database name
db.plants.drop();               // start clean so the script can be re-run

// Create the collection with a schema validator
db.createCollection("plants", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "scientificName", "description", "sunlight", "soil",
                 "water", "height", "bloomSeason", "nativeRange", "wildlifeBenefits", "image"],
      properties: {
        name:             { bsonType: "string" },
        scientificName:   { bsonType: "string" },
        description:      { bsonType: "string" },
        sunlight:         { bsonType: "string" },
        soil:             { bsonType: "string" },
        water:            { bsonType: "string" },
        height:           { bsonType: "string" },
        bloomSeason:      { bsonType: "string" },
        nativeRange:      { bsonType: "string" },
        wildlifeBenefits: { bsonType: "array", items: { bsonType: "string" } },
        image:            { bsonType: "string" }
      }
    }
  }
});

// insertOne
db.plants.insertOne({
  name: "Purple Coneflower",
  scientificName: "Echinacea purpurea",
  description: "Hardy perennial with large pink-purple daisy-like flowers and a spiky orange center.",
  sunlight: "Full sun",
  soil: "Well-drained, tolerates clay and rocky soil",
  water: "Low to moderate",
  height: "2-4 ft",
  bloomSeason: "Summer (Jun-Sep)",
  nativeRange: "Eastern and central United States",
  wildlifeBenefits: ["Bees", "Butterflies", "Goldfinches eat seeds"],
  image: "images/purple-coneflower.jpg"
});

// insertMany
db.plants.insertMany([
  { name: "Black-eyed Susan", scientificName: "Rudbeckia hirta",
    description: "Cheerful golden-yellow flowers with dark brown centers; short-lived perennial that self-seeds.",
    sunlight: "Full sun to part shade", soil: "Adaptable, average to dry", water: "Low",
    height: "1-3 ft", bloomSeason: "Summer to fall (Jun-Oct)", nativeRange: "Most of North America",
    wildlifeBenefits: ["Bees", "Butterflies", "Birds eat seeds"], image: "images/black-eyed-susan.jpg" },
  { name: "Butterfly Milkweed", scientificName: "Asclepias tuberosa",
    description: "Bright orange flower clusters on a compact, deep-rooted plant.",
    sunlight: "Full sun", soil: "Sandy or well-drained", water: "Low",
    height: "1-3 ft", bloomSeason: "Summer (Jun-Aug)", nativeRange: "Eastern and southwestern United States",
    wildlifeBenefits: ["Monarch host plant", "Bees", "Butterflies"], image: "images/butterfly-milkweed.jpg" },
  { name: "Wild Bergamot", scientificName: "Monarda fistulosa",
    description: "Fragrant lavender pom-pom flowers; a member of the mint family.",
    sunlight: "Full sun to part shade", soil: "Average to dry", water: "Low to moderate",
    height: "2-4 ft", bloomSeason: "Summer (Jun-Aug)", nativeRange: "Most of North America",
    wildlifeBenefits: ["Hummingbirds", "Bees", "Butterflies"], image: "images/wild-bergamot.jpg" },
  { name: "New England Aster", scientificName: "Symphyotrichum novae-angliae",
    description: "Tall plant covered in violet-purple flowers with yellow centers in fall.",
    sunlight: "Full sun", soil: "Moist, average to rich", water: "Moderate",
    height: "3-6 ft", bloomSeason: "Late summer to fall (Aug-Oct)", nativeRange: "Eastern and central North America",
    wildlifeBenefits: ["Late-season nectar for migrating monarchs", "Bees"], image: "images/new-england-aster.jpg" },
  { name: "Cardinal Flower", scientificName: "Lobelia cardinalis",
    description: "Spikes of brilliant red tubular flowers, ideal for wet spots.",
    sunlight: "Part shade", soil: "Moist to wet, rich", water: "High",
    height: "2-4 ft", bloomSeason: "Summer to early fall (Jul-Sep)", nativeRange: "Eastern North America",
    wildlifeBenefits: ["Hummingbirds", "Swallowtail butterflies"], image: "images/cardinal-flower.jpg" },
  { name: "Eastern Redbud", scientificName: "Cercis canadensis",
    description: "Small tree with pink-magenta blossoms along bare branches in early spring and heart-shaped leaves.",
    sunlight: "Full sun to part shade", soil: "Adaptable, well-drained", water: "Moderate",
    height: "20-30 ft", bloomSeason: "Spring (Mar-Apr)", nativeRange: "Eastern United States",
    wildlifeBenefits: ["Early-season nectar for bees", "Host for some moths"], image: "images/eastern-redbud.jpg" },
  { name: "Serviceberry", scientificName: "Amelanchier canadensis",
    description: "Small tree or large shrub with white spring flowers, edible berries, and orange-red fall color.",
    sunlight: "Full sun to part shade", soil: "Moist, well-drained", water: "Moderate",
    height: "15-25 ft", bloomSeason: "Spring (Mar-Apr)", nativeRange: "Eastern North America",
    wildlifeBenefits: ["Birds eat berries", "Early pollinators"], image: "images/serviceberry.jpg" },
  { name: "Little Bluestem", scientificName: "Schizachyrium scoparium",
    description: "Clumping native grass with blue-green summer blades that turn coppery-bronze in fall.",
    sunlight: "Full sun", soil: "Dry, poor, well-drained", water: "Low",
    height: "2-4 ft", bloomSeason: "Late summer to fall (Aug-Oct)", nativeRange: "Most of North America",
    wildlifeBenefits: ["Seeds for birds", "Winter cover for insects and small animals"], image: "images/little-bluestem.jpg" },
  { name: "Virginia Bluebells", scientificName: "Mertensia virginica",
    description: "Spring ephemeral with nodding clusters of pink buds opening to sky-blue bells.",
    sunlight: "Part shade to shade", soil: "Moist, rich, woodland", water: "Moderate",
    height: "1-2 ft", bloomSeason: "Spring (Mar-May)", nativeRange: "Eastern North America",
    wildlifeBenefits: ["Bumblebees", "Early-season pollinators"], image: "images/virginia-bluebells.jpg" },
  { name: "Foxglove Beardtongue", scientificName: "Penstemon digitalis",
    description: "Tall spikes of white tubular flowers above dark green foliage.",
    sunlight: "Full sun to part shade", soil: "Average, well-drained", water: "Low to moderate",
    height: "2-5 ft", bloomSeason: "Late spring to early summer (May-Jun)", nativeRange: "Eastern and central United States",
    wildlifeBenefits: ["Bumblebees", "Hummingbirds"], image: "images/foxglove-beardtongue.jpg" },
  { name: "Joe-Pye Weed", scientificName: "Eutrochium purpureum",
    description: "Tall plant topped with large, fluffy mauve flower clusters.",
    sunlight: "Full sun to part shade", soil: "Moist, rich", water: "Moderate to high",
    height: "4-7 ft", bloomSeason: "Summer to early fall (Jul-Sep)", nativeRange: "Eastern United States",
    wildlifeBenefits: ["Butterflies", "Bees"], image: "images/joe-pye-weed.jpg" }
]);

console.log("Database:", db.getName());
console.log("Collection: plants");
console.log("Total documents:", db.plants.countDocuments()); // expect 12
