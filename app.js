// const apps = Vue.createApp({
//   template: '<h1>Hello Wiwa</h1>',
// });

const apps = Vue.createApp({
  data() {
    return {
      firstName: 'john',
      lastName: 'doe',
      email: 'john@doe.mail.com',
      gender: 'male',
      img: 'https://randomuser.me/api/portraits/men/10.jpg',
    };
  },
  // here this method can display data this keyword on data()
  methods: {
    async getUser() {
      // console.log(this.firstName); //john

      const res = await fetch('https://randomuser.me/api/');
      const { results } = await res.json();

      console.log(results);
      this.firstName = results[0].name.first;
      this.lastName = results[0].name.last;
      this.email = results[0].email;
      this.gender = results[0].gender;
      this.img = results[0].picture.large;
    },
  },
});

apps.mount('#app');
