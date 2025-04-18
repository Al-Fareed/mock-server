const mongoose = require("mongoose");

const MetaDataSchema = new mongoose.Schema({
    label: {
      type: String,
      required: true
    },
    value: {
      type: String, 
      required: true
    }
  }, { _id: false });

const InvoiceSchema = new mongoose.Schema({
    invoice_id: {
      type: String,
      required: true,
      unique: true
    },
    title: {
      type: String,
      default: ""
    },
    amount: {
      type: Number,
      required: true
    },
    balance: {
      type: Number,
      required: true
    },
    due_date: {
      type: Date,
      required: true
    },
    description: {
      type: String,
      default: ""
    },
    meta_data: {
      type: [MetaDataSchema],
      default: []
    }
  }, {
    timestamps: true // adds createdAt and updatedAt
  })

  module.exports = mongoose.model("Invoice", InvoiceSchema);