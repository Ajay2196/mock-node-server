
const express = require('express');
const router = express.Router();
const mockDataStore = require('../stores/mockDataStore')

router.get('/',(req,res,err)=>{

res.json(mockDataStore.blogTitles);

    })

module.exports = router;

