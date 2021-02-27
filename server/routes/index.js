import { Router } from "express";

const musicRouter = require("./music-router");

const router = Router();

// To call the music router
router.use("/music", musicRouter);

module.exports = router;
