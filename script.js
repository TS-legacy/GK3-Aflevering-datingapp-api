class User {

    interests = [];
    matches = [];
    images = [];
    creditCard= [];

    constructor (firstName, lastName, gender, birthDay, userID){
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.birthDay = birthDay;
        this.userID = userID
    }

}

class PaymentUser extends User {
    
    constructor (firstName, lastName, gender, birthDay, userID){
        super (firstName, lastName, gender, birthDay, userID)
       
        }
        checkCardNumber() {
            if (this.cardNumber.length != int)
            return res.status(401).send("Cardnumber must be x digits");
        }
          
}
class FreeUser extends User{
    constructor (firstName, lastName, gender, birthDay, userID){
        super(firstName, lastName, gender, birthDay, userID);
    }
}
class Interests {
    constructor (name){
        this.name = name;
    }
}
class Match {
    constructor(user){
        this.user = user;
    }
}
class Images{
    constructor(url){
         this.url = url;
    }
}
class CreditCard{
    constructor(cardName, cardNumber, ccv){
        this.cardName = cardName;
        this.cardNumber = cardNumber;
        this.ccv = ccv;
    }
}
const interest1 = new Interests("Fitness");
const interest2 = new Interests("Handball");
const interests = [interest1, interest2];

const match1 = new Match ("Louise");
const match2 = new Match ("Mette");
const matches = [match1, match2];

const image1= new Images ("src = url1");
const image2 = new Images("src = url2");
const images = [image1, image2];

const creditCard1 = new CreditCard("Joakim Larsen", 987654321, 321);
const creditCards = [creditCard1];


const user1 = new PaymentUser("Joakim", "Larsen", "Male", [2000, 01, 01], 1);
const user2 = new FreeUser("Simon", "Hoej", "Male", [1998, 08,22], 2);
const users = [user1, user2];



user1.interests= [interest1, interest2];
user2.interests = [interest2];

user1.matches = [match2];
user2.matches = [match1, match2];

user1.images = [image1];
user2.images = [image2];

user1.creditCard = [creditCard1];


module.exports = {
    getUsers() {
        return users;
    },
    getInterests(){
        return interests;
    },

    getMatches(){
        return matches;
    },
    getImage(){
        return images;
    },
    getCreditCardInfo(){
        return creditCards;

    },


    FreeUser: FreeUser,
    PaymentUser: PaymentUser,
    CreditCard: CreditCard,
    Images: Images,
    Interests: Interests,
    Match: Match
}