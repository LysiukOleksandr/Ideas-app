<template>
  <v-container>
    <h2 class="text-center mb-5">Хотите предложить новую тему для видео?</h2>
    <v-card class="mx-auto" max-width="600">
      <v-form class="justify-center" @submit.prevent="onSendIdea">
        <v-row justify="center">
          <v-col cols="12" sm="12" class="pb-0 pt-0">
            <v-text-field
              v-model="title"
              class="pl-5 pr-5"
              color="black"
              placeholder="Заголовок темы"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="12" class="pt-0">
            <v-textarea
              v-model="description"
              class="pl-5 pr-5 pt-0"
              color="black"
              placeholder="Опишите подробно, какую тему вы хотите предложить для следующего видео"
              no-resize
              rows="2"
            ></v-textarea>
          </v-col>
          <v-col cols="12" sm="12" class="text-end pt-0 pb-5">
            <v-btn type="submit" class="ml-5 mr-5" color="primary"
              >Отправить</v-btn
            >
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "add-form",
  data() {
    return {
      title: "",
      description: ""
    };
  },
  methods: {
    onSendIdea() {
      const idea = {
        title: this.title,
        description: this.description,
        userEmail: this.$store.getters.getEmail
      };
      this.$store.dispatch("uploadIdea", idea);
      this.$store.dispatch("getIdeasFromStore");
      this.title = "";
      this.description = "";
    }
  }
};
</script>
