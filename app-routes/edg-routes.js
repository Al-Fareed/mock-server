const express = require("express");
const router = express.Router();
const {createInvoice,updateInvoice,listInvoices,deleteInvoice} = require("../controller/edg-controller")

router.post('/invoice/create',createInvoice);
router.get('/invoice/list',listInvoices);
router.delete('/invoice/remove',deleteInvoice);
router.patch('/invoice/update',updateInvoice);

module.exports = router;