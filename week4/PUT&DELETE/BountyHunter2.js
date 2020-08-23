const express = require('express')
const bountyRouter = express.Router()
const { v4 } = require("uuid")
const bounties = [{
    title: "Kit Fisto",
    living: "true",
    bountyAmount: "5000",
    type: "Jedi",
    _id: v4()
},
{
    title: "Eeth Koth",
    living: "true",

    bountyAmount: "5000",
    type: "Jedi",
    _id: v4()
},
{
    title: "Barriss Offee",
    living: "true",
    bountyAmount: "5000",
    type: "Jedi",
    _id: v4()
},
{
    title: "Shaak Ti",
    living: "false",
    bountyAmount: "5000",
    type: "Jedi",
    _id: v4()
},
{
    title: "Aayla Secura",
    living: "true",
    bountyAmount: "5000",
    type: "Jedi",
    _id: v4()
},
{
    title: "Marka Ragnos",
    living: "false",
    bountyAmount: "500",
    type: "Sith",
    _id: v4()
},
{
    title: "Darth Nihilus",
    living: "false",
    bountyAmount: "300",
    type: "Sith",
    _id: v4()
},
{
    title: "Darth Bane",
    living: "true",
    bountyAmount: "1500",
    type: "Sith",
    _id: v4()
},
{
    title: "Darth Sidious",
    living: "true",
    bountyAmount: "3500",
    type: "Sith",
    _id: v4()
},
{
    title: "Darth Traya",
    living: "true",
    bountyAmount: "750",
    type: "Sith",
    _id: v4()
}
]
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