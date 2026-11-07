# Native Plant App — MongoDB Database

| | |
|---|---|
| **Database name** | `nativePlantDB` |
| **Collection name** | `plants` |
| **Data files** | `data/db/*.wt` (WiredTiger files, committed to this repo) |

## Plant document schema

| Field | Type | Example |
|---|---|---|
| `name` | String | `"Purple Coneflower"` |
| `scientificName` | String | `"Echinacea purpurea"` |
| `description` | String | `"Hardy perennial with large pink-purple flowers..."` |
| `sunlight` | String | `"Full sun"` |
| `soil` | String | `"Well-drained"` |
| `water` | String | `"Low to moderate"` |
| `height` | String | `"2-4 ft"` |
| `bloomSeason` | String | `"Summer (Jun-Sep)"` |
| `nativeRange` | String | `"Eastern and central United States"` |
| `wildlifeBenefits` | Array of strings | `["Bees", "Butterflies"]` |
| `image` | String (path/URL) | `"images/purple-coneflower.jpg"` |

The collection enforces this schema with a `$jsonSchema` validator (see `01_create_and_insert.js`).

## Files

| File | Purpose |
|---|---|
| `01_create_and_insert.js` | Creates database + collection, inserts 12 plants |
| `02_query.js` | Query examples (filter by sunlight, water, wildlife, season; sort) |
| `03_update_delete.js` | `updateOne`, `updateMany`, `deleteOne`, `deleteMany` |
| `data/db/` | MongoDB data directory containing the `.wt` files |

## How to run

```bash
# Terminal 1 — start MongoDB with its data stored inside this repo
mongod --dbpath ./data/db --port 27018

# Terminal 2 — run the scripts in order
mongosh --port 27018 --file 01_create_and_insert.js
mongosh --port 27018 --file 02_query.js
mongosh --port 27018 --file 03_update_delete.js
```
Stop `mongod` with Ctrl+C before committing so the data is written into the `.wt` files.

## Screenshots
See the `screenshots/` folder.
