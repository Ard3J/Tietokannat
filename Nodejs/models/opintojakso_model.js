const db = require('../database');

const opintojakso = {
  getAll: function(callback) {
    return db.queryA('select * from opintojakso', callback);
  },
  getOne: function(id, callback) {
    return db.queryA('select * from opintojakso where idOpintojakso=?', [id], callback);
  },
  add: function(opintojakso, callback) {
    return db.queryA(
      'insert into opintojakso (Nimi,Lajuus,Tunnus) values(?,?,?)',             //Lajuus kirjoitettu tietokannassa väärin. En näe
      [opintojakso.Nimi, opintojakso.Lajuus, opintojakso.Tunnus],                 //järkeväksi tässä vaiheessa sitä korjata
      callback
    );
  },
  delete: function(id, callback) {
    return db.queryA('delete from opintojakso where idOpintojakso=?', [id], callback);
  },
  update: function(id, opintojakso, callback) {
    return db.queryA(
      'update opintojakso set Nimi=?, Lajuus=?, Tunnus=? where idOpintojakso=?',
      [opintojakso.Nimi, opintojakso.Lajuus, opintojakso.Tunnus, id],
      callback
    );
  }
};
module.exports = opintojakso;