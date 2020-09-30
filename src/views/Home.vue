<template>
  <div class="home">
    <v-container>
      <text-field></text-field>
    </v-container>
  </div>
</template>

<script>
import TextField from "../components/text-field.vue";
export default {
  name: "Home",
  components: {
    "text-field": TextField
  }
};
</script>
