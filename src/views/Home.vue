<template>
  <div class="home">
    <v-container>
      <add-form></add-form>
      <categories></categories>
      <ideas-list></ideas-list>
    </v-container>
  </div>
</template>

<script>
import AddForm from "../components/add-form.vue";
import Categories from "../components/categories.vue";
import IdeasList from "../components/ideas-list.vue";
export default {
  name: "Home",
  components: {
    "add-form": AddForm,
    categories: Categories,
    "ideas-list": IdeasList
  }
};
</script>
