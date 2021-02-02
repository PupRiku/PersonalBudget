const express = require("express");
const router = express.Router();

const {
    getEnvelopes,
    getEnvelopesById
} = require("../controllers/envelopes");

/**
 * @swagger
 * /api/v1/envelopes:
 *  get:
 *      summary: Get all envelopes
 *      produces:
 *          - application/json
 *      tags:
 *          - Envelopes
 *      responses:
 *          "200":
 *              description: returns a list of all envelopes
 * 
 */
router.get("/", getEnvelopes);

/**
 * @swagger
 * /api/v1/envelopes/{id}:
 *  get:
 *      summary: Get an envelopes
 *      produces:
 *          - application/json
 *      tags:
 *          - Envelopes
 *      parameters:
 *          -in: path
 *          -name: id
 *          -description: envelope id
 *          -type: integer
 *          -required: true
 *          -example: 1
 *      responses:
 *          "200":
 *              description: Returns an envelope along with its data
 *          "404":
 *              description: User not found
 *          "500":
 *              description: Internal server error
 */
router.get("/:id", getEnvelopesById);

module.exports = router;