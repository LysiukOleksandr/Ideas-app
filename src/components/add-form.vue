<template>
  <v-container>
    <h2 class="text-center mb-5">Хотите предложить новую тему для видео?</h2>
    <v-card class="mx-auto" max-width="600">
      <v-form class="justify-center" @submit.prevent="onSendIdea">
        <v-row justify="center">
          <v-col cols="12" sm="12" class="pb-0 pt-0">
            <v-text-field
              v-model="title"
              :error-messages="titleErrors"
              @blur="$v.title.$touch()"
              required
              class="pl-5 pr-5"
              color="black"
              placeholder="Заголовок темы"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="12" class="pt-0">
            <v-textarea
              v-model="description"
              :error-messages="descriptionErrors"
              @blur="$v.description.$touch()"
              required
              class="pl-5 pr-5 pt-0"
              color="black"
              placeholder="Опишите подробно, какую тему вы хотите предложить для следующего видео"
              no-resize
              rows="2"
            ></v-textarea>
          </v-col>
          <v-col cols="12" sm="12" class="text-end pt-0 pb-5">
            <v-btn
              type="submit"
              class="ml-5 mr-5"
              color="primary"
              :disabled="$v.$invalid"
              >Отправить</v-btn
            >
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import { required, minLength, maxLength } from "vuelidate/lib/validators";

export default {
  name: "add-form",
  data() {
    return {
      title: "",
      description: ""
    };
  },
  methods: {
    async onSendIdea() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const idea = {
          title: this.title,
          description: this.description,
          userEmail: this.$store.getters.getEmail
        };
        await this.$store.dispatch("uploadIdea", idea);
        await this.$store.dispatch("getActiveCategory", "last");
        this.title = "";
        this.description = "";
      }
    }
  },
  computed: {
    titleErrors() {
      const errors = [];
      if (!this.$v.title.$dirty) return errors;
      !this.$v.title.minLength && errors.push("Должно быть минимум 5 символов");
      !this.$v.title.maxLength &&
        errors.push("Должно быть не более чем 20 символов");
      !this.$v.title.required && errors.push("Это поле обязательно");

      return errors;
    },
    descriptionErrors() {
      const errors = [];
      if (!this.$v.description.$dirty) return errors;
      !this.$v.description.minLength &&
        errors.push("Должно быть минимум 10 символов");
      !this.$v.description.maxLength &&
        errors.push("Должно быть не более чем 50 символов");
      !this.$v.description.required && errors.push("Это поле обязательно");
      return errors;
    }
  },
  validations: {
    title: {
      required,
      minLength: minLength(5),
      maxLength: maxLength(20)
    },
    description: {
      required,
      minLength: minLength(10),
      maxLength: maxLength(50)
    }
  }
};
</script>
