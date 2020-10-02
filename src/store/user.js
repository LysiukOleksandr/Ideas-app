import firebase from "firebase/app";

export default {
  state: {
    user: {
      userId: "",
      email: ""
    }
  },
  mutations: {
    SET_USER(state, { userId, email }) {
      state.user = {
        userId: userId,
        email: email
      };
    }
  },
  actions: {
    async registerUser({ commit }, { email, password }) {
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(error => {
          console.log(error);
        });
      const userData = {
        userId: user.user.uid,
        email: email
      };
      console.log(user);
      commit("SET_USER", userData);
    }
  },
  getters: {
    getUser: state => {
      return state.user.email;
    },
    checkUser: state => {
      return state.user.uid !== null;
    }
  }
};
