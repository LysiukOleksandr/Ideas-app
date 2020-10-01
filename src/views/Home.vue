<template>
  <div class="home">
    <v-container>
      <add-form></add-form>
    </v-container>
  </div>
</template>

<script>
import AddForm from "../components/add-form.vue";
export default {
  name: "Home",
  components: {
    "add-form": AddForm
  }
};
</script>
