const express = require('express');

const Recipes = require('./recipe-model.js');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const item = await Recipes.find();
        res.status(200).json({ message: "Successfully ...", item });    
    } catch (e) {
        res.status(500).json({ message: "This is awkward...", error: e.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const item = await Recipes.findById(req.params.id);
        res.status(200).json({ message: "Successfully ...", item });    
    } catch (e) {
        res.status(500).json({ message: "This is awkward...", error: e.message });
    }
});

router.get('/:id/steps', async (req, res) => {
    try {
        const item = await Recipes.findStepsById(req.params.id);
        if(!!item){
            res.status(200).json({ message: "Successfully ...", item });    
        } else {
            res.status(404).json({ message: "No item", item });
        }
    } catch (e) {
        res.status(500).json({ message: "This is awkward...", error: e.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const item = await Recipes.add(req.body);
        res.status(200).json({ message: "Successfully ...", item });    
    } catch (e) {
        res.status(500).json({ message: "This is awkward...", error: e.message });
    }
});

router.post('/:id/steps', async (req, res) => {
    try {
        const item = await Recipes.findById(req.params.id);
        if(!!item){
            res.status(200).json({ message: "Adding step not supported", item });    
        } else {
            res.status(404).json({ message: "No item", item });
        }
    } catch (e) {
        res.status(500).json({ message: "This is awkward...", error: e.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const item = await Recipes.update(req.params.id, req.body);
        if(!!item){
            res.status(200).json({ message: "Successfully ...", item });    
        } else {
            res.status(404).json({ message: "No item", item });    
        }
    } catch (e) {
        res.status(500).json({ message: "This is awkward...", error: e.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const item = await Recipes.remove(req.params.id);
        if(!!item){
            res.status(200).json({ message: "Successfully deleted", item })
        } else {
            res.status(404).json({ message: "No item", item });
        }
    } catch (e) {
        res.status(500).json({ message: "This is awkward...", error: e.message });
    }
});

module.exports = router
