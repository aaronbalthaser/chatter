var fs = require('fs');
var file = __dirname + '/db.json';

let Database = {

  get: function() {
    return new Promise((resolve, reject) => {
      fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(JSON.parse(data));
        }
      });
    });
  },

  post: function(message) {
    this.get(message)
      .then(data => {
        data.push(message);

        return new Promise((resolve, reject) => {
          fs.writeFile(file, JSON.stringify(data), (err) => {
            if (err) {
              reject(err);
            } else {
              resolve(data);
            }
          })
        });
      }
    );
  }
}

module.exports = Database;
