import firebase from "firebase/app";

export default {
  state: {
    user: {
      userId: null,
      email: null,
      isAdmin: null
    }
  },
  mutations: {
    SET_USER(state, { userId, email, isAdmin }) {
      state.user = {
        userId: userId,
        email: email,
        isAdmin: isAdmin
      };
    },
    SIGN_OUT(state) {
      state.user = {
        userId: null,
        email: null,
        isAdmin: null
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
        email: email,
        isAdmin: email === "admin@gmail.com" ? true : false
      };
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
        email: email,
        isAdmin: email === "admin@gmail.com" ? true : false
      };
      commit("SET_USER", userData);
    },
    signOut({ commit }) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          commit("SIGN_OUT");
        })
        .catch(error => {
          console.log(error);
        });
    },
    loggedUser({ commit }, payload) {
      const userData = {
        userId: payload.uid,
        email: payload.email,
        isAdmin: payload.email === "admin@gmail.com" ? true : false
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
    },
    getUserDetails: state => {
      return {
        userEmail: state.user.email,
        role: state.user.isAdmin === true ? "Admin" : "User"
      };
    },
    getRole: state => {
      return state.user.isAdmin;
    }
  }
};
