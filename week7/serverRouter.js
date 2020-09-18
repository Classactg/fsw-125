const express = require('express')
const musicRouter = express.Router()
const { v4 } = require("uuid")
const songs = require("./masterData.js")

// Get All 
musicRouter.get("/", (req, res) => {
    res.send(songs)
})
// Get One 
musicRouter.get("/:musicId", (req, res) => {
    const musicId = req.params.musicId
    const foundmusic = songs.find(music => music._id === musicId)
    res.send(foundmusic)
})
// Get by music Object
musicRouter.get("/search/living", (req, res) => {
    const living = req.query.living
    const filteredsongs = songs.filter(music => music.living === living)
})
// Post One
musicRouter.post("/", (req, res) => {
    const newmusic = req.body
    newmusic._id = v4()
    songs.push(newmusic)
    res.send(newmusic)
})
// Update One
musicRouter.put("/:musicId", (req, res) => {
    const musicId = req.params.musicId
    const musicIndex = songs.findIndex(music => music._id === musicId)
    res.send(updatemusic)
})
// Delete One
musicRouter.delete("/:musicId", (req, res) => {
    const musicId = req.params.musicId
    const musicIndex = songs.findIndex(music => music._id === musicId)
    songs.splice(musicIndex, 1)
    res.send("Successfully deleted music!")
})
module.exports = musicRouter