<template>
  <v-container>
    <v-card max-width="550px" class="mx-auto">
      <v-card-title class="justify-center mt-2 mb-3" style="font-size:35px">
        Registration
      </v-card-title>
      <v-form>
        <v-row justify="center">
          <v-col cols="12" sm="8" class="pt-0 pb-0">
            <v-text-field
              label="Email"
              v-model="email"
              class="pl-5 pr-5"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="8" class="pt-2 pb-0">
            <v-text-field
              label="Password"
              v-model="password"
              class="pl-5 pr-5"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="8" class="pt-2 pb-0">
            <v-text-field
              label="Password again"
              v-model="repeatPassword"
              class="pl-5 pr-5"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="8" class="mt-2 mb-0 pt-0 pb-0 text-center">
            <v-checkbox label="Agree" v-model="agree" class="pl-5 pr-5" />
          </v-col>
          <v-col cols="12" sm="8" class="mt-2 mb-5 text-center">
            <v-btn class="primary" dark width="130" type="submit"
              >Registration</v-btn
            >
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Registration",
  data() {
    return {
      email: "",
      password: "",
      repeatPassword: "",
      agree: false
    };
  }
};
</script>

<style></style>
