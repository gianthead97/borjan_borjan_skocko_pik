const MongoClient = require('mongodb').MongoClient;

function connectTODB(url, base) {
    MongoClient.connect(url, (err, db) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(db.db(base));
        return db.db(base);
    });

}





var getTable = () => {
    var db = connectTODB('mongodb://localhost:27017', 'results');
    console.log(db);
    db.collection('scores').find({}).toArray((err, result) => {
        if (err) throw err;
        return result
    });

    
}

//module.exports.insertToDB = 
module.exports.getNewHighScoreTable = getTable;