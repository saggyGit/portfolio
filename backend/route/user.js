const express = require('express');

const router = express.Router();


router.post("/", require("../controllers/user").createuser);
router.get("/", require("../controllers/user").getall);


module.exports = router;