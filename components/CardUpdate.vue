<template>
  <v-card shaped class="pa-3">
    <v-form ref="card-form">
      <v-text-field v-model="cardModel" :value="cardName"></v-text-field>
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
        @click="deleteItem"
      >
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "CardUpdate",
  props: ["cardName"],
  data() {
    return {
      cardModel: "",
    };
  },
  methods: {
    deleteItem: function () {
      this.$emit("deleteItem");
    },
  },
  watch: {
    cardModel: {
      inmediate: true,
      deep: true,
      handler: function () {
        this.$emit(`setModel`, this.cardModel);
      },
    },
  },
};
</script>

<style></style>
