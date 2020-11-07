<template>
  <v-layout>
    <v-row>
      <v-col cols="12" sm="10" class="pt-0 pb-0 ">
        <v-card-title style="color:orange">{{ title }}</v-card-title>
        <v-card-text>
          {{ description }}
        </v-card-text>
        <div class="d-flex align-center pl-4 pb-5">
          <div><v-icon>mdi-account</v-icon> {{ user }}</div>
          <div class="ml-4"><v-icon>mdi-calendar</v-icon>{{ date }}</div>
        </div>
      </v-col>
      <v-col
        cols="12"
        sm="2"
        class="d-flex flex-row flex-sm-column align-center justify-center"
      >
        <settings-modal v-if="getRole" :id="id"></settings-modal>
        <v-btn icon v-if="getRole" @click="onClickListItem">
          <v-icon color="red">mdi-delete</v-icon>
        </v-btn>
        <v-btn icon @click="onLike">
          <v-icon color="orange darken-1">mdi-thumb-up</v-icon>
        </v-btn>
        <div style="font-weight:700;">
          {{ likes.likesCount }}
        </div>
      </v-col>
    </v-row>
  </v-layout>
</template>
// class="d-flex flex-column align-center justify-center"

<script>
import SettingsModal from "./settings-modal";
export default {
  name: "list-item",
  components: {
    "settings-modal": SettingsModal
  },
  props: {
    id: Number,
    title: String,
    description: String,
    date: String,
    user: String,
    likes: Object,
    category: String
  },
  data() {
    return {
      active: this.isLiked
    };
  },
  methods: {
    async onLike() {
      const payload = {
        id: this.id,
        userEmail: this.getUserEmail
      };
      try {
        await this.$store.dispatch("likePost", payload);
        await this.$store.dispatch("getIdeasFromStore");
      } catch {
        console.log("Something went wrong");
      }
    },
    onClickListItem() {
      const answer = confirm(
        `Вы действительно хотите удалить пост "${this.title}"?`
      );
      if (answer) {
        this.$store.dispatch("deleteIdea", this.id);
      }
    }
  },
  computed: {
    getUserEmail() {
      return this.$store.getters.getEmail;
    },
    getRole() {
      return this.$store.getters.getRole;
    }
  }
};
</script>
