const mysql = require('mysql2');

const myConnectionString = "mysql://netuser:netpass@localhost:3306/netdb";
const connection = mysql.createPool(myConnectionString);

const myConnectionString2 = "mysql://netuser:netpass@localhost:3306/arviointi";
const connection2 = mysql.createPool(myConnectionString2);

//Vaati vähän säätöä niin että olemassa oleviin tiedostoihin ei tarvitse tehdä muutoksia
//mutta arviointi, opiskelija ja opintojakso käyttävät eri tietokantaa.
//Nyt query:LLÄ netdb:stä ja queryA:lla arviointitietokannasta

const dbConnection = {
    query: function(sql, params, callback) {
      return connection.query(sql, params, callback);
    },
    queryA: function(sql, params, callback) {
      return connection2.query(sql, params, callback);
    }
}

module.exports = dbConnection;

connection.query('SHOW TABLES', function(err, result, fields){
    if (err) {
      console.error('Database connection error:', err);
    } else {
      console.log('Database connection successful', result);
    }
});