<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="7" class="pb-0">
        <v-textarea loading="true" label="Print your idea" solo no-resize>
        </v-textarea>
      </v-col>
      <v-col cols="12" sm="6" class="text-end pt-0">
        <v-btn depressed color="primary" width="100">Add</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "text-field"
};
</script>
