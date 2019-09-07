
const User = (function () {
  return {
    user: {
      name: 'Jonathan',
      lastname: 'Araya',
      birthdate: '27/07/89',
      username: 'j0araya',
      email: 'jonathan.araya.m@gmail.com',
      social: {
        GitHub: 'https://github.com/j0araya',
        LinkedIn: 'https://www.linkedin.com/in/j0araya/',
      },
    },
    getUser: () => this.user,
    modifyUser: (data) => {
      this.user = { ...data, ...this.user };
    }
  }
})();

export default User;