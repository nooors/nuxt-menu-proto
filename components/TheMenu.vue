<template>
  <div class="text-center">
    <v-menu
      :v-model="menu"
      :close-on-content-click="false"
      nudge-width="200"
      offset-x
      persistent
      allow-overflow
      shaped
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="pink"
          fab
          dark
          x-small
          absolute
          bottom
          right
          v-on="on"
          v-bind="attrs"
        >
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </template>
      <v-card shaped class="pa-3">
        <v-form ref="family-form">
          <v-text-field
            v-model="family.name"
            :value="family.name"
          ></v-text-field>
        </v-form>
        <v-card-actions>
          <v-btn
            color="pink"
            fab
            dark
            absolute
            bottom
            right
            x-small
            @click="deleteFamily(family.id)"
          >
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>
<script>
export default {
  name: "TheMenu",
  data: () => ({
    fav: true,
    menu: false,
    hints: true,
  }),
};
</script>
