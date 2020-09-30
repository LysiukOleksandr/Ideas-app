<template>
  <v-container>
    <v-card max-width="550px" class="mx-auto">
      <v-card-title class="justify-center mt-2 mb-3" style="font-size:35px">
        Log in
      </v-card-title>
      <v-form>
        <v-row justify="center">
          <v-col cols="12" sm="8" class="pt-0 pb-0 ">
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
          <v-col cols="12" sm="8" class="mt-2 text-center">
            <v-btn class="primary" dark width="130" type="submit">Log in</v-btn>
          </v-col>
          <v-col cols="12" sm="8" class="mb-5 pt-0 text-center">
            <div>
              New to ideas app?
              <router-link
                class="text-decoration-none"
                router
                to="/registration"
                >Get started</router-link
              >
            </div>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  }
};
</script>
