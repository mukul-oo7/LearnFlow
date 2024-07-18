const mongoose = require('mongoose');
const { Router } = require('express');

const { ensureAuth } = require("../middleware/auth");
const { ensureSingup, ensureCreator } = require("../middleware/user");

const router = new Router();

router.get("/create", ensureAuth, ensureSingup, ensureCreator, (req, res) => {
    res.render("create-post");
});

router.post("/create", ensureAuth, ensureSingup, ensureCreator, (req, res) => {
    try{

    } catch(error){
        console.log(error);
        res.status(500).send({error: "Something went wrong"});
    }
});

module.exports = router;