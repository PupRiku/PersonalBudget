const express = require("express");
const router = express.Router();

const { getEnvelopes } = require("../controllers/envelopes");

/**
 * @swagger
 * /api/v1/envelopes:
 *  get:
 *      summary: Get all envelopes
 *      produces:
 *          - applicationm/json
 *      tags:
 *          - Envelopes
 *      responses:
 *          "200":
 *              description: returns a list of all envelopes
 * 
 */
router.get("/", getEnvelopes);

module.exports = router;