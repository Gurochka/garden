var users = require('./db/users.js');
var trees = require('./db/trees.js');

module.exports = () => {
  return {
    users: users,
    trees: trees
  }
}