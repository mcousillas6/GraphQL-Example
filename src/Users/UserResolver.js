const repository = require('./UserRepository');

class UserResolver {
  user({ id }) {
    return repository.find(id);
  }

  create(user) {
    return repository.create(user);
  }
}

module.exports = new UserResolver();
