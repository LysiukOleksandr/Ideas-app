import { db } from "../main";

export default {
  state: {
    ideas: []
  },
  mutations: {
    SET_IDEAS(state, payload) {
      state.ideas = payload;
    }
  },
  actions: {
    uploadIdea({ state }, { title, description, userEmail }) {
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
        likes: {
          likesCount: 0,
          likedIt: []
        },
        category: "last"
      };
      db.collection("ideas")
        .doc(`${state.ideas.length}`)
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
    }
  },
  getters: {
    getIdeas: state => {
      return state.ideas;
    }
  }
};