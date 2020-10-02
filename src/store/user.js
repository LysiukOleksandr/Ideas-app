import firebase from "firebase/app";

export default {
  state: {
    user: {
      userId: null,
      email: null
    },
    error: null
  },
  mutations: {
    SET_USER(state, { userId, email }) {
      state.user = {
        userId: userId,
        email: email
      };
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
    CLEAR_ERROR(state) {
      state.error = null;
    }
  },
  actions: {
    async registerUser({ commit }, { email, password }) {
      commit("CLEAR_ERROR");
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(error => {
          console.log(error);
          commit("SET_ERROR", error.message);
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
      return state.user.userId !== null;
    },
    getError: state => {
      return state.error;
    }
  }
};
