import { createStore } from "vuex";

export default createStore({
  state: {
    order: {
      branch: "",
      seats: "",
      ourTerms: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      time: "",
    },
  },
  getters: {},
  mutations: {
    // setStateWelcome(state, value) {
    //   state.seats = value.seats;
    //   state.ourTerms = value.ourTerms;
    //   state.branch = value.branch;
    //   console.log(this.state);
    // },
    // setStateDate(state, value) {
    //   state.firstName = value.firstName;
    //   state.lastName = value.lastName;
    //   state.phoneNumber = value.phoneNumber;
    //   state.email = value.email;
    //   state.time = value.time;
    //   console.log(this.state);
    // },

    setState(state, value) {
      state.order={...state.order,...value}
      console.log(this.state.order);
    },
  },
  actions: {},
  modules: {},
});
