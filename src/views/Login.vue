<template>
  <v-container>
    <v-card max-width="550px" class="mx-auto">
      <v-card-title class="justify-center mt-2 mb-3" style="font-size:35px">
        Log in
      </v-card-title>
      <v-form>
        <v-row justify="center">
          <v-col cols="12" sm="8" class="pt-0 pb-0">
            <v-text-field label="Email"></v-text-field>
          </v-col>
          <v-col cols="12" sm="8" class="pt-2 pb-0">
            <v-text-field label="Password"></v-text-field>
          </v-col>
          <v-col cols="12" sm="8" class="mt-2 text-center">
            <v-btn width="130" type="submit">Log in</v-btn>
          </v-col>
          <v-col cols="12" sm="8" class="mb-5 pt-0 text-center">
            <div>
              New to ideas app?
              <a href="#" class="text-decoration-none">Get started</a>
            </div>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Login"
};
</script>
