const { reset } = require("nodemon");
const db = require("../config/db");
const { createId, findById, deleteById } = require("../helpers/db-helpers");
const router = require("../routes/envelopes")

// @desc        Get all Envelopes
// @route       GET /api/v1/envelopes
exports.getEnvelopes = async (req, res, next) => {
    try {
        const envelopes = await db;
        res.status(200).send(envelopes);
    } catch (e) {
        res.status(400).send(e);
    }
}

// @desc		Get an Envelopes
// @route		GET /api/v1/envelopes/:id
exports.getEnvelopesById = async (req, res) => {
    try {
        const { id } = req.params;
        const envelopes = await db;
        const envelope = findById(envelopes, id);

        if(!envelope) {
            return res.status(404).send({
                message: "Envelope Not Found",
            });
        }

        return res.status(200).send(envelope);
    } catch (e) {
        res.status(500).send(e);
    }
}

// @desc		Create an Envelope
// @route		POST /api/v1/envelopes
exports.addEnvelope = async (req, res) => {
    try {
        const { title, budget } = req.body;
        const envelopes = await db;
        const newId = createId(envelopes);
        const newEnvelope = {
            id: newId,
            title,
            budget,
        };
        envelopes.push(newEnvelope);
        res.status(201).send(newEnvelope);
    } catch (e) {
        res.status(500).send(err);
    }
};

// @desc		Delete an Envelope
// @route		DELETE /api/v1/envelopes/:id
exports.deleteEnvelope = async (req, res) => {
    try {
        const { id } = req.params;
        const envelopes = await db;
        const envelope = findById(envelopes, id);

        if(!envelope) {
            return res.status(404).send({
                message: "Envelope Not Found",
            });
        }

        const updatedEnvelopes = deleteById(envelopes, id);
        return res.status(204).send(updatedEnvelopes);
    } catch (e) {
        res.status(500).send(e);
    }
};