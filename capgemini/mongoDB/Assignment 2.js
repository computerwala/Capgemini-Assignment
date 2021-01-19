use population
db.createCollection("zipcodes")
db.zipcodes.insert()

/* insert given zip.json file*/

db.zipcodes.find({$and : [{"city": "ATLANTA"},{ "state": "GA"}]}) 

db.zipcodes.aggregate(
  { $match : {$and : [
 { "city": "ATLANTA"} , { "state": "GA" } 
    ] }
  })

db.zipcodes.aggregate ( {
$match : { "city" : "ATLANTA" } },
{ $group : { _id : { city : "$city" },count : { $sum : 1 } }
} ) 


db.zipcodes.aggregate ( [
    { $match : { "city" : "ATLANTA" } },
    { $group : { _id : { city : "$city" }, totalPop : { $sum: "$pop" } } }
    ] )


/*population by state
 use aggregate to calculate the total population for each state*/
db.zipcodes.aggregate([
    { $group: { _id: { state: "$state" }, totalpop: { $sum: "$pop" } } },
 ] ) 


//sort the results by population, highest first 
 db.zipcodes.aggregate([
    { $group : { _id : { state : "$state" }, totalPop : { $sum : "$pop" } } },
    { $sort : { "totalPop" : -1 } }
    ])

 /*   limit the results to just the first 3 results. What are the top 3 states in
population? */
db.zipcodes.aggregate([
    {$group : {_id : { state : "$state" }, totalPop : { $sum : "$pop" }}},
    {$sort : { "totalPop" : -1 }},
    {$limit : 3}
    ]) 
    
    /*Top 3 Cities population
    1)NY
    2)CA
    3)TX
    */

//Population by cities
//o calculate the total population for each city

db.zipcodes.aggregate ([
    {$group : {_id : {state : "$state", city : "$city" },
    totalPop : { $sum : "$pop" }}}
    ]) 
    
//sort population by highest first
db.zipcodes.aggregate ([
    {$group : {_id : {state : "$state",city : "$city" },
    totalPop : {$sum : "$pop" }}},
    {$sort : {totalPop : -1 }}
    ]) 
     
//limit 3 cities
db.zipcodes.aggregate ([
    {$group : {_id : {state : "$state",city : "$city" },
    totalPop : {$sum : "$pop" }}},
    {$sort : {totalPop : -1}},
    {$limit : 3}
    ])

    /*3 cites 
    1. CHICAGO
    2. BROOKLYN
    3. LA
    */

//population in texas
db.zipcodes.aggregate ([
    {$ match :{state : "TX" }},
    {$group:{_id:{ state : "$state" ,city : "$city"} , totalPop : { $sum : "$pop" } } },
    {$ sort : { totalPop : -1 }} ,
    {$limit : 3}
    ]) 
/*
    1. DALLAS
    2. HOUSTON
    3. SAN ANTINIO
 */

 //bonus
 1.) 
 db.zipcodes.aggregate ([
    {$group: {_id: {state: "$state", city: "$city"},pop: {$sum: "$pop" } } },
    {$group: {_id: "$_id.state", avgCityPop: {$avg:"$pop" }}}])

2.)
db.zipcodes.aggregate([
    {$group: {_id: {state: "$state", city: "$city"}, pop: {$sum: "$pop"}}},
    {$group: {_id: "$_id.state",avgCityPop: {$avg: "$pop" }}},
    {$sort : {"avgCityPop" : -1 }},
    {$limit : 3}]) 