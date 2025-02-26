
const { getUsers, getInterests, Interests  } = require("./script");

module.exports = {
    getInterests(req, res){
        const users = getUsers();    
        const userID = req.params.userID
        for (i =0; i < users.length; i++) {
            if (users[i].userID == userID)  {
                return res.status(200).send(users[i].interests);
            }
        }    
        return res.status(404).send("User doesn´t exist!")
    
    },
    deleteInterest(req, res){
        const users = getUsers(); 
        const interest =  req.params.interest  
        const userID = req.params.userID
        for (i =0; i < users.length; i++) {
            if (users[i].userID == userID)  {
                for (j =0; j < users[i].interests.length; j++) {
                    if (users[i].interests[j].name == interest)  {
                        users[i].interests.splice(j,1)
                    return res.status(200).send("Interest deleted!");
                }
            }
            return res.status(404).send("User doesn´t exist!");
        }
    }
    
        return res.status(404).send("Incorrect input");
                
    },


    createInterest(req,res){
        const users = getUsers();
        const interests = getInterests();
        const userID = req.params.userID
        const interest3 = new Interests ("Coding");
        interests.push(interest3)
        

        for (i =0; i < users.length; i++) {
            if (users[i].userID == userID)  {
                users[i].interests.push(interest3)
                return res.status(201).send(users[i].interests)
            }
        }
    }
};


