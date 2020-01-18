class UserRepository {
  constructor() {
    this.idCounter = 1;
    this.users = {
      5: { email: 'r@r.com', id: 5 },
    };
  }

  create({ email }) {
    const user = { id: this.idCounter, email };
    this.idCounter += 1;
    this.users[user.id] = user;
    return user;
  }

  find(id) {
    return this.users[id];
  }
}

module.exports = new UserRepository();
