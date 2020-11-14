import { db } from "../main";

export default {
  state: {
    ideas: [],
    currentCategory: "last"
  },
  mutations: {
    SET_IDEAS(state, payload) {
      state.ideas = payload;
    },
    SET_CURRENT_CATEGORY(state, payload) {
      state.currentCategory = payload;
    }
  },
  actions: {
    uploadIdea({ state }, { title, description, userEmail }) {
      let today = new Date();
      const day = String(today.getDate()).padStart(2, "0");
      const month = String(today.getMonth() + 1).padStart(2, "0");
      const year = today.getFullYear();
      today = `${day}.${month}.${year}`;
      const idArr =
        state.ideas.length === 0
          ? [0]
          : state.ideas.map(item => {
              return item.id;
            });
      const lastId = Math.max(...idArr) + 1;
      const payload = {
        id: lastId,
        title,
        description,
        userEmail,
        date: today,
        likes: {
          likesCount: 0,
          likedIt: []
        },
        category: "last"
      };
      db.collection("ideas")
        .doc(`${lastId}`)
        .set(payload);
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
    },
    likePost(_, payload) {
      let docRef = db.collection("ideas").doc(`${payload.id}`);
      let userEmail = payload.userEmail;
      docRef
        .get()
        .then(function(doc) {
          let array = doc.data().likes.likedIt;
          let count = doc.data().likes.likesCount;
          if (doc.data().likes.likedIt.indexOf(userEmail) != -1) {
            const elemIndex = array.findIndex(item => item === userEmail); // find userEmail index
            array.splice(elemIndex, 1); // delete userEmail from array by index
            docRef.update({
              likes: {
                likesCount: count - 1,
                likedIt: array
              }
            });
          } else {
            array.push(userEmail);
            docRef.update({
              likes: {
                likesCount: count + 1,
                likedIt: array
              }
            });
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    async getActiveCategory({ commit }, payload) {
      commit("SET_CURRENT_CATEGORY", payload);
      let ideasData = [];
      const ideasRef = db.collection("ideas");
      await ideasRef
        .where("category", "==", `${payload}`)
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(item) {
            ideasData.push(item.data());
          });
        })
        .catch(function(error) {
          console.log(error);
        });
      commit("SET_IDEAS", ideasData);
    },
    deleteIdea({ commit, state }, payload) {
      db.collection("ideas")
        .doc(`${payload}`)
        .delete()
        .then(function() {
          const newIdeasArray = state.ideas.filter(idea => idea.id !== payload);
          commit("SET_IDEAS", newIdeasArray);
        });
    },
    changeIdeaCategory({ commit }, payload) {
      commit("SET_CURRENT_CATEGORY", payload.category);
      let ideasRef = db.collection("ideas").doc(`${payload.id}`);
      ideasRef
        .update({
          category: payload.category
        })
        .then(() => {
          this.dispatch("getActiveCategory", payload.category);
          alert("Категория для идеи была изменена");
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  getters: {
    getIdeas: state => {
      return state.ideas;
    },
    getCurrentCategory: state => {
      return state.currentCategory;
    }
  }
};
