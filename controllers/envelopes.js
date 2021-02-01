const { reset } = require("nodemon");
const db = require("../config/db");
const { createId, findById, deleteById } = require("../helpers/db-helpers");
const router = require("../routes/envelopes")

// @desc            Get all Envelopes
// @route           GET /api/v1/envelopes
exports.getEnvelopes = async (req, res, next) => {
    try {
        const envelopes = await db;
        res.status(200).send(envelopes);
    } catch (err) {
        res.status(400).send(err);
    }
}