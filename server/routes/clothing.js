import express from 'express';
import { promises } from 'fs';
import { raw } from 'body-parser';
const datafile = 'server/data/clothing.json';
const router = express.Router();

/* GET all clothing */
router.route('/')
  .get(async function (req, res) {
    try {
      let data = await getClothingData();
      res.send(data);
    }
    catch (error) {
      res.status(500).send(error);
    }
    
  });


async function getClothingData() {
  const rawData = await promises.readFile(datafile, "utf-8");
  const clothingData = JSON.parse(rawData);
  return clothingData;
}

export default router;
