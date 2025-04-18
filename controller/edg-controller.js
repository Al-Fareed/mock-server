const { request, response } = require("express");
const Invoice = require('../models.js/edgSchema');
const { faker } = require("@faker-js/faker");
const createInvoice = async (request, response) => {
    try {
        const { amount } = request.body;
        console.log("Body", amount);
        const invoice = new Invoice({
            invoice_id: faker.string.numeric(18),
            title: "",
            amount: amount,
            balance: faker.number.int({ min: 0, max: amount }),
            due_date: faker.date.future(),
            description: "",
            meta_data: [
                {
                    label: "Reference Code",
                    value: faker.string.numeric(13)
                },
                {
                    label: "Customer Name",
                    value: faker.person.fullName()
                },
                {
                    label: "Start Date",
                    value: faker.date.past().toISOString().split('T')[0]
                },
                {
                    label: "Period",
                    value: faker.date.month({ context: true }) + faker.date.past().getFullYear().toString().slice(2)
                },
                {
                    label: "Pay Times",
                    value: faker.number.int({ min: 1, max: 24 }).toString()
                }
            ]
        });

        const savedInvoice = await invoice.save();
        return response.status(201).json({
            message: "Created Sucessfully",
            body: savedInvoice
        })
    } catch (error) {
        console.error('Error creating invoice:', error.message);
        return response.status(500).json({
            message: 'Failed to create invoice',
            error: error.message
        });
    }
}
const updateInvoice = async (request, response) => {
    try {

    } catch (error) {

    }
}
const listInvoices = async (request, response) => {
    try {
        const invoices = await Invoice.find();

        return response.status(200).json({
            status: 200,
            body: invoices
        });
    } catch (error) {
        console.error('Error fetching invoices:', error.message);
        return response.status(500).json({
            message: 'Failed to fetch invoices',
            error: error.message
        });
    }
}
const deleteInvoice = async (request, response) => {
    try {
        const {invoice_id} = request.body;
        const result = await Invoice.deleteOne({ invoice_id });

        if (result.deletedCount === 0) {
            return response.status(404).json({ message: 'Invoice not found' });
        }

        return response.status(200).json({ message: 'Invoice deleted successfully' });
    } catch (error) {
        return response.status(500).json({ message: 'Error deleting invoice', error: error.message });
    }

}
module.exports = { createInvoice, updateInvoice, listInvoices, deleteInvoice };