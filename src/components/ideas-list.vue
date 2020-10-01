<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="6">
        <v-card class="mt-5">
          <list-item> </list-item>
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
  }
};
</script>
