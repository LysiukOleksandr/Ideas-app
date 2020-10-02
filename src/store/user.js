import firebase from "firebase/app";

export default {
  state: {
    user: {
      userId: null,
      email: null
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
          alert(error.message);
        });
      const userData = {
        userId: user.user.uid,
        email: email
      };
      console.log(user);
      commit("SET_USER", userData);
    },
    async signIn({ commit }, { email, password }) {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(error => {
          alert(error);
        });
      const userData = {
        userId: user.user.uid,
        email: email
      };
      commit("SET_USER", userData);
    }
  },
  getters: {
    getEmail: state => {
      return state.user.email;
    },
    checkUser: state => {
      return state.user.userId !== null;
    }
  }
};
