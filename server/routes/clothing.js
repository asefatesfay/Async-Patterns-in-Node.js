import express from 'express';
import fs from 'fs';
import { resolve } from 'dns';
import { rejects } from 'assert';
const datafile = 'server/data/clothing.json';
const router = express.Router();

/* GET all clothing */
router.route('/')
  .get(function(req, res) {
    getClothingData().then(data => res.send(data))
    .catch(err => res.status(500).send(err));
    console.log("Doing more work after");
  });


  function getClothingData(callback) {
    return new Promise((resolve, reject) => {
      fs.readFile(datafile, "utf8", (err, data) => {
        if(err) {
          reject(err);
        }
        else {
          let clothingData = JSON.parse(data);
          resolve(clothingData);
        }
      });
    });
  }

export default router;
