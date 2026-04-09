const express = require("express");
const router = express.Router();

const { sendEmail } = require("../controller/usercontroller");

// POST route for creating user

router.post("/email", sendEmail);



module.exports = router;