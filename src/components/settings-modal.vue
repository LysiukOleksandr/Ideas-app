<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="310">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon color="primary" dark v-bind="attrs" v-on="on">
          <v-icon color="grey">mdi-cursor-move</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">
          Переместить в другую категорию
        </v-card-title>
        <v-radio-group>
          <v-radio
            v-for="radio in items"
            :key="radio.id"
            :label="radio.label"
            :value="radio.value"
            @change="value = radio.value"
          ></v-radio>
        </v-radio-group>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="onClick()">
            Подтвердить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      value: "",
      items: [
        { id: 0, label: "Выполненные", value: "completed" },
        { id: 1, label: "Закрытые", value: "closed" }
      ]
    };
  },
  props: {
    id: Number
  },
  methods: {
    onClick() {
      const payload = {
        id: this.id,
        category: this.value
      };
      this.$store
        .dispatch("changeIdeaCategory", payload)
        .then(() => {
          this.$store.dispatch("getIdeasFromStore");
        })
        .catch(err => {
          console.log(err);
        });
      this.dialog = false;
    }
  }
};
</script>
