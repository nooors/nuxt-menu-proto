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
      <slot name="menu-content"></slot>
    </v-menu>
  </div>
</template>
<script>
export default {
  name: "MenuCardUpdate",
  data: () => ({
    fav: true,
    menu: false,
    hints: true,
  }),
};
</script>
