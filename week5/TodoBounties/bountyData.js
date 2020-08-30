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

module.exports = bounties 