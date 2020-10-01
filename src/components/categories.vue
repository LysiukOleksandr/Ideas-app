<template>
  <v-container>
    <v-row justify="center">
      <v-col
        v-for="category in categories"
        :key="category.id"
        cols="12"
        sm="3"
        md="2"
        xl="1"
        class="pl-1 pr-1"
      >
        <v-btn width="100%" color="primary">{{ category.name }}</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "categories",
  data() {
    return {
      categories: [
        { id: 1, name: "Последние", category: "last" },
        { id: 2, name: "Выполненные", category: "completed" },
        { id: 3, name: "Закрыто", category: "closed" }
      ]
    };
  }
};
</script>
