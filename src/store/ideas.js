import { db } from "../main";

export default {
  state: {
    ideas: []
  },
  mutations: {
    ADD_IDEA(state, payload) {
      state.ideas.push(payload);
    },
    SET_IDEAS(state, payload) {
      state.ideas = payload;
    }
  },
  actions: {
    uploadIdea({ commit, state }, { title, description, userEmail }) {
      let today = new Date();
      const day = String(today.getDate()).padStart(2, "0");
      const month = String(today.getMonth() + 1).padStart(2, "0");
      const year = today.getFullYear();
      today = `${day}.${month}.${year}`;
      const payload = {
        id: state.ideas.length,
        title,
        description,
        userEmail,
        date: today,
        likes: 0,
        category: "last"
      };
      commit("ADD_IDEA", payload);
    },
    async getIdeasFromStore({ commit }) {
      let ideasData = [];
      await db
        .collection("ideas")
        .get()
        .then(response => {
          response.forEach(item => {
            ideasData.push(item.data());
          });
        })
        .catch(error => {
          console.log(error);
        });
      commit("SET_IDEAS", ideasData);
    }
  },
  getters: {
    getIdeas: state => {
      return state.ideas;
    }
  }
};
