import { Router } from "express";
import { getMusicList } from "../controller/music-ctrl";

const router = Router();

// Route for getting reponse JSON
router.get("/", getMusicList);

module.exports = router;
