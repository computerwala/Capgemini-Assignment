/* MongoDB Exercise in mongo shell 
Connect to a running mongo instance, use a database named mongo_practice. 
Document all your queries in a javascript file to use as a reference */

/*
use mongo_practice
db.createCollection("movies")
db.movies.insert()

    title : Fight Club writer : Chuck Palahniuko year : 1999 actors : [   Brad Pitt   Edward Norton ] 
 
    title : Pulp Fiction writer : Quentin Tarantino year : 1994 actors : [   John Travolta   Uma Thurman ] 
     
    title : Inglorious Basterds writer : Quentin Tarantino year : 2009 actors : [   Brad Pitt   Diane Kruger   Eli Roth ] 
     
    title : The Hobbit: An Unexpected Journey writer : J.R.R. Tolkein year : 2012 franchise : The Hobbit 
     
    title : The Hobbit: The Desolation of Smaug writer : J.R.R. Tolkein 
    year : 2013 franchise : The Hobbit 
     
    title : The Hobbit: The Battle of the Five Armies writer : J.R.R. Tolkein year : 2012 franchise : The Hobbit synopsis : Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness. 
     
    title : Pee Wee Herman's Big Adventure 
     
    title : Avatar

Query  Find Documents 
Query the movies collection to */

1) db.movies.find().pretty()
2) db.movies.find({writer : "Quentin Tarantino"})
3) db.movies.find({actors : "Brad Pitt"})
4) db.movies.find({franchise : "The Hobbit"})
5) db.movies.find({year:{$gt : "1990", $lt : "2000"}})
6) db.movies.find({$or : [{year :{$gt : "2010"}}, {year : {$lt : "2000"}}]})

/*Update Documents:

1. add a synopsis to "The Hobbit: An Unexpected Journey" : "A reluctant hobbit, 
    Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home
 - and the gold within it - from the dragon Smaug." 
 
2. add a synopsis to "The Hobbit: The Desolation of Smaug" : "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug.
 Bilbo Baggins is in possession of a mysterious and magical ring."
 
3. add an actor named "Samuel L. Jackson" to the movie "Pulp Fiction" */

1) db.movies.update({_id:ObjectId("5ffecc***********")}, 
            {$set:{synopsis:"A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug."}})
2) db.movies.update({_id:ObjectId("5ffecc***********")}, 
            {$set:{synopsis:"The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring."}})
3) db.movies.update({_id:ObjectId("5ffecc***********")}, 
            {$push:{actors:"Samuel L. Jackson"}})


//Text Search:


1) db.movies.find({synopsis:{$regex:"Bilbo"}})
2) db.movies.find({synopsis:{$regex:"Gandalf"}})
3) db.movies.find({$and:[{synopsis:{$regex:"Bilbo"}}, {synopsis:{$not:/Gandalf/}}]})
4) db.movies.find({$or:[{synopsis:{$regex:"dwarves"}}, {synopsis:{$regex:"hobbit"}}]})
5) db.movies.find({$and:[{synopsis:{$regex:"gold"}}, {synopsis:{$regex:"dragon"}}]})


//Delete Documents:


1) db.movies.remove({_id:ObjectId("5ffecc*****************")})
2) db.movies.remove({_id:ObjectId("5ffecc*****************")})





//Relationships:
//Users:

1)db.users.insert({_id:1,username:"GoodGuyGreg", first_name:"Good Guy", last_name:"Greg"})
2)db.users.insert({_id:2, username:"ScumbagSteve", fullname:{first: "Scumbag", last:"Steve"}})

//Posts:

1) db.posts.insert({username:"GoodGuyGreg", title:"Passes out at Party", body:"Raises your credit score"})
2) db.posts.insert({ username:"GoodGuyGreg", title:"Steals your identity", body:"Raises your credit score"})
3) db.posts.insert({username:"GoodGuyGreg", title:"Reports a bug in your code", body:"Sends you a pull request"})
4) db.posts.insert({ username:"ScumbagSteve", title:"Borrows something", body:"Sells it"})
5) db.posts.insert({ username:"ScumbagSteve", title:"Borrows everything", body:"The end"})
6) db.posts.insert({username:"ScumbagSteve", title:"Forks your repo on github", body:"Sets to private"})

//Comments:

1) db.comments.insert({ username:"GoodGuyGreg", comment:"Hope you got a good deal!", post:ObjectId("5ffed2*************")})
2) db.comments.insert({username:"GoodGuyGreg", comment:"What's mine is yours!", post:ObjectId("5ffed2*************")})
3) db.comments.insert({username:"GoodGuyGreg", comment:"Don't violate the licensing agreement!", post:ObjectId("5ffed2****************")})
4) db.comments.insert({username:"ScumbagSteve", comment:"It still isn't clean", post:ObjectId("5ffed2***************")})
5) db.comments.insert({username:"ScumbagSteve", comment:"Denied your PR cause I found a hack", post:ObjectId("5ffed2***************")})


//Querying related collections

1) db.users.find().pretty()
2) db.posts.find().pretty()
3) db.posts.find({username:"GoodGuyGreg"})
4) db.posts.find({username:"ScumbagSteve"})
5) db.comments.find().pretty()
6) db.comments.find({username:"GoodGuyGreg"})
7) db.comments.find({username:"ScumbagSteve"})
8) db.comments.find({post:ObjectId("5ffed2*****************")}