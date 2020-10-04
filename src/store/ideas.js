export default {
  state: {
    ideas: []
  },
  mutations: {
    ADD_IDEA(state, payload) {
      state.ideas.push(payload);
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
      console.log(payload);
      commit("ADD_IDEA", payload);
    }
  },
  getters: {
    getIdeas: state => {
      return state.ideas;
    }
  }
};
