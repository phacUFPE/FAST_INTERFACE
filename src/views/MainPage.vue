<template>
  <v-layout justify-center>
    <v-col cols="6">
      <v-card class="ma-10">
        <v-card-title class="justify-center">
          Tests Prioritization
        </v-card-title>
        <v-card-text>
          <v-file-input
            class="mb-3"
            webkitdirectory
            dense
            filled
            label="Choose a folder"
          />
          <v-select
            class="mb-3"
            dense
            filled
            persistent-hint
            label="Choose an entity"
            :hint="entityHint"
            :items="entityItems"
          />
          <v-select
            class="mb-3"
            dense
            filled
            persistent-hint
            label="Choose an algorithm"
            :hint="algorithmHint"
            :items="algorithmItems"
          />
          <v-text-field
            v-model="repetitions"
            persistent-hint
            type="number"
            hint="Fill in how many times the prioritization will be repeated"
          />
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn>
            Clear
          </v-btn>
          <v-spacer />
          <v-btn
            class="white--text"
            color="green darken-1"
          >
            Execute
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-layout>
</template>

<script>
export default {
  name: 'MainPage',
  data: function () {
    return {
      repetitions: 1,
      entityHint: 'Entity Hint',
      entityItems: [],
      algorithmHint: 'Algorithm Hint',
      algorithmItems: []
    }
  }
}
</script>
