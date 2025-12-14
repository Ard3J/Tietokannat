const db = require('../database');

const arviointi = {
  getAll: function(callback) {
    return db.queryA('select * from arviointi', callback);
  },
  getOne: function(id, callback) {
    return db.queryA('select * from arviointi where idArviointi=?', [id], callback);
  },
  add: function(arviointi, callback) {
    return db.queryA(
      'insert into arviointi (idOpiskelija,idOpintojakso,Päivämäärä,Arvosana) values(?,?,?,?)',
      [arviointi.idOpiskelija,arviointi.idOpintojakso, arviointi.Päivämäärä, arviointi.Arvosana],
      callback
    );
  },
  delete: function(id, callback) {
    return db.queryA('delete from arviointi where idArviointi=?', [id], callback);
  },
  update: function(id, arviointi, callback) {
    return db.queryA(
      'update arviointi set idOpiskelija=?,idOpintojakso=?, Päivämäärä=?, Arvosana=? where idArviointi=?',
      [arviointi.idOpiskelija, arviointi.idOpintojakso, arviointi.Päivämäärä,arviointi.Arvosana, id],
      callback
    );
  }
};
module.exports = arviointi;