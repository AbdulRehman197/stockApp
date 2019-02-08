const express = require('express')
const blanceRouter = express.Router()
const blanceCon  = require('../controllers/blanceCon')


blanceRouter.get('/blance',blanceCon.totalBlance);
blanceRouter.get('/transactions',blanceCon.totalTransactions);
blanceRouter.get('/addblance',blanceCon.addBlance);
blanceRouter.get('/totalblance',blanceCon.totalBlance);
blanceRouter.post('/sellshare',blanceCon.sellShare);
blanceRouter.post('/puchaseshare',blanceCon.puchaseShare);

module.exports = blanceRouter;

