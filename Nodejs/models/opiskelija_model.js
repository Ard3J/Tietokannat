const db = require('../database');

const opiskelija = {
  getAll: function(callback) {
    return db.queryA('select * from opiskelija', callback);
  },
  getOne: function(id, callback) {
    return db.queryA('select * from opiskelija where idOpiskelija=?', [id], callback);
  },
  add: function(opiskelija, callback) {
    return db.queryA(
      'insert into opiskelija (Etunimi,Sukunimi,Osoite,Luokkatunnus) values(?,?,?,?)',
      [opiskelija.Etunimi,opiskelija.Sukunimi, opiskelija.Osoite, opiskelija.Luokkatunnus],
      callback
    );
  },
  delete: function(id, callback) {
    return db.queryA('delete from opiskelija where idOpiskelija=?', [id], callback); 
  },
  update: function(id, opiskelija, callback) {
    return db.queryA(
      'update opiskelija set Etunimi=?,Sukunimi=?, Osoite=?, Luokkatunnus=? where idOpiskelija=?',
      [opiskelija.Etunimi,opiskelija.Sukunimi, opiskelija.Osoite, opiskelija.Luokkatunnus, id],
      callback
    );
  }
};
module.exports = opiskelija;