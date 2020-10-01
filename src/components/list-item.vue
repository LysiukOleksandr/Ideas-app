<template>
  <v-layout>
    <v-row>
      <v-col cols="12" sm="10" class="pt-0 pb-0">
        <v-card-title style="color:orange">Рассказать про axios</v-card-title>
        <v-card-text>
          Хотелось бы более детальней узать о том, как работает axios и чем он
          лучше
        </v-card-text>
        <div class="d-flex align-center pl-4 pb-5">
          <div><v-icon>mdi-account</v-icon> Гость</div>
          <div class="ml-4"><v-icon>mdi-calendar</v-icon> 24.10.2020</div>
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

        <div style="font-weight:700">12</div>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
export default {
  name: "list-item"
};
</script>
