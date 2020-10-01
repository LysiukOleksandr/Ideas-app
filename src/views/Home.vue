<template>
  <div class="home">
    <v-container>
      <add-form></add-form>
      <categories></categories>
    </v-container>
  </div>
</template>

<script>
import AddForm from "../components/add-form.vue";
import Categories from "../components/categories.vue";
export default {
  name: "Home",
  components: {
    "add-form": AddForm,
    categories: Categories
  }
};
</script>
