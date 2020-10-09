<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="mt-5" v-for="idea in ideas" :key="idea.id">
          <list-item
            :id="idea.id"
            :title="idea.title"
            :description="idea.description"
            :date="idea.date"
            :user="idea.userEmail"
            :likes="idea.likes"
            :category="idea.category"
          ></list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ListItem from "./list-item.vue";
export default {
  name: "ideas-list",
  components: {
    "list-item": ListItem
  },
  computed: {
    ideas() {
      return this.$store.getters.getIdeas;
    }
  },
  created: function() {
    this.$store.dispatch("getIdeasFromStore");
  }
};
</script>
