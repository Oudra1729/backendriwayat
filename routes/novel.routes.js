const express = require('express');

const router = express.Router();
const { getNovels, createNovel, updateNovel, deleteNovel ,getNovelById } = require('../controllers/novel.controller');

router.get("/", getNovels);
router.get("/:id", getNovelById);
router.post("/", createNovel);
router.put("/:id", updateNovel);
router.delete("/:id", deleteNovel);

module.exports = router;
