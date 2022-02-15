<template>
  <item-content-layout
    :name="item.name"
    :items="item.departments"
    :label="item.label"
    @addNewItem="addNewDepartment"
    @updateItem="updateDepartment"
    @deleteItem="deleteDepartment"
  >
    <template v-slot:new-item>
      Departments
    </template>

    <template v-slot:new-tooltip>
      <span>New Department</span>
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
        name: "Departments",
        departments: [],
        label: "New Deparment",
      },
    };
  },
  async fetch() {
    await this.$store.dispatch("getDepartments");
  },
  computed: {
    departmentsStore: function () {
      return this.$store.getters.getDepartments;
    },
  },
  watch: {
    departmentsStore: function () {
      this.item.departments = this.$store.getters.getDepartments.map((a) => {
        return { ...a };
      });
    },
  },
  methods: {
    addNewDepartment: function (payload) {
      this.$store.dispatch("addDepartment", payload);
    },
    updateDepartment: function (id, name) {
      this.$store.dispatch("updateDepartment", { id: id, name: name });
    },
    deleteDepartment: function (id) {
      if (this.item.departments.length > 0) {
        this.$store.dispatch("deleteDepartment", id).catch(() => {
          console.log("dispatch-error");
        });
      }
    },
  },
};
</script>
