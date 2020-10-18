
const express = require ("express")
const app = express()
const port = 3002
const fs = require("fs")
const {getUsers, deleteUser, createUser, getImage, getCreditCardInfo} = require ("./usersEP")
const {getInterests, deleteInterest, createInterest} = require("./interestsEP")
const {getMatches, deleteMatch, newMatch} = require("./matchesEP")



app.get("/users", isAuthorized, getUsers )
app.delete("/users/:userID", isAuthorized, deleteUser )
app.post("/users", isAuthorized, createUser )
app.get("/users/:userID/images", isAuthorized, getImage )
app.get("/users/:userID/creditcard", isAuthorized, getCreditCardInfo )

app.get("/users/:userID/interests", isAuthorized, getInterests )
app.delete("/users/:userID/interests/:interest", isAuthorized, deleteInterest )
app.post("/users/:userID/interests", isAuthorized, createInterest )

app.get("/users/:userID/matches", isAuthorized, getMatches )
app.delete("/users/:userID/matches/:match", isAuthorized, deleteMatch )
app.post("/users/:userID/matches", isAuthorized, newMatch )



app.listen(port, 
    () => console.log(`Listening on port ${port} `));







