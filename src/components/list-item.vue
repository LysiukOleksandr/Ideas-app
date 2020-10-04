<template>
  <v-layout>
    <v-row>
      <v-col cols="12" sm="10" class="pt-0 pb-0">
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
        class="d-flex flex-column align-center justify-center"
      >
        <v-btn icon>
          <v-icon color="orange darken-1">mdi-thumb-up</v-icon>
        </v-btn>

        <div style="font-weight:700">{{ likes }}</div>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
export default {
  name: "list-item",
  props: {
    id: Number,
    title: String,
    description: String,
    date: String,
    user: String,
    likes: Number,
    category: String
  }
};
</script>
