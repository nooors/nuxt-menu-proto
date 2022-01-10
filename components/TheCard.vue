<template>
  <div
    class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0"
  >
    <v-card class="mb-7" shaped elevation="10" max-width="200">
      <v-card-text class="text-center body-1">
        {{ name }}
      </v-card-text>
      <v-card-actions class="mb-3">
        <v-fab-transition>
          <slot name="menu-activator"> </slot>
        </v-fab-transition>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "TheCard",
  props: ["name", "menu"],
};
</script>

<style></style>
