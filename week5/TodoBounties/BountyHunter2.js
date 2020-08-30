const express = require('express')
const bountyRouter = express.Router()
const { v4 } = require("uuid")
const bounties = require("./bountyData")

// Get All 
bountyRouter.get("/", (req, res) => {
    res.send(bounties)
})
// Get One 
bountyRouter.get("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const foundBounty = bounties.find(bounty => bounty._id === bountyId)
    res.send(foundBounty)
})
// Get by Bounty Object
bountyRouter.get("/search/living", (req, res) => {
    const living = req.query.living
    const filteredbounties = bounties.filter(bounty => bounty.living === living)
})
// Post One
bountyRouter.post("/", (req, res) => {
    const newBounty = req.body
    newBounty._id = v4()
    bounties.push(newBounty)
    res.send(newBounty)
})
// Update One
bountyRouter.put("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    res.send(updateBounty)
})
// Delete One
bountyRouter.delete("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send("Successfully deleted Bounty!")
})
module.exports = bountyRouter