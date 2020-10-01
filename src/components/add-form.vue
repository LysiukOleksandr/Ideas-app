<template>
  <v-container>
    <v-card class="mx-auto" max-width="500">
      <v-form class="justify-center">
        <v-row justify="center">
          <v-col cols="12" sm="12" class="pb-0 pt-0">
            <v-text-field
              label="Idea Tag"
              class="pl-5 pr-5"
              color="black"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="12" class="pt-0">
            <v-textarea
              label="Description"
              class="pl-5 pr-5 pt-0"
              color="black"
              no-resize
              rows="3"
            ></v-textarea>
          </v-col>
          <v-col cols="12" sm="12" class="text-end pt-0 pb-5">
            <v-btn class="ml-5 mr-5" color="primary">Add idea</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "add-form"
};
</script>
