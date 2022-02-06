<template>
  <item-content-layout
    :name="item.name"
    :items="item.ptypes"
    :label="item.label"
    @addNewItem="addNewPtype"
    @updateItem="updatePtype"
    @deleteItem="deletePtype"
  >
    <template v-slot:new-item>
      New Product Type
    </template>

    <template v-slot:new-tooltip>
      <span>New Product Type</span>
    </template>
  </item-content-layout>
</template>

<script>
import ItemContentLayout from "~/components/ItemContentLayout.vue";
export default {
  components: { ItemContentLayout },
  data() {
    return {
      item: {
        name: "Product Types",
        ptypes: [],
        label: "New Product Type",
      },
    };
  },
  async fetch() {
    await this.$store.dispatch("getPtypes");
  },
  computed: {
    ptypesStore: function () {
      return this.$store.getters.getPtypes;
    },
  },
  watch: {
    ptypesStore: function () {
      this.item.ptypes = this.$store.getters.getPtypes.map((a) => {
        return { ...a };
      });
    },
  },
  methods: {
    addNewPtype: function (payload) {
      alert("newFamily");
      this.$store.dispatch("addPtype", payload);
    },
    updatePtype: function (id, name) {
      this.$store.dispatch("updatePtypes", { id: id, name: name });
    },
    deletePtype: function (id) {
      if (this.item.departments.length > 0) {
        this.$store.dispatch("deletePtype", id).catch(() => {
          console.log("dispatch-error");
        });
      }
    },
  },
};
</script>

<style></style>
