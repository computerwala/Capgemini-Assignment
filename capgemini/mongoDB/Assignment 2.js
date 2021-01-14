use population
db.createCollection("zipcodes")
db.zipcodes.insert()

/* insert given zip.json file*/

db.zipcodes.find({city: "ATLANTA", state: "GA"}) 
db.zipcodes.aggregate(
    [
{ $match: { city: "ATLANTA", state: "GA" } }
    ]
)
db.zipcodes.aggregate([
    {"$group" : {_id: "$zip" , count: {$sum:1}}}
])
db.zipcodes.aggregate([
    {"$group" : {_id:"$pop", count:{$sum:1}}}
])


//population of each state
db.zipcodes.aggregate( [
    { $group: { _id: { state: "$state", city: "$city" }, pop: { $sum: "$pop" } } },
 ] ) 