<template>
  <content-layout :layoutName="contentLayout.name">
    <template v-slot:content-layout>
      <the-card v-for="item in theCard.items" :key="item.id" :name="item.name">
        <template v-slot:menu-activator>
          <menu-card-update>
            <template v-slot:menu-content>
              <card-update
                :cardName="item.name"
                @setModel="cardModel = item.name"
                @deleteItem="deleteDepartment(item.id)"
                ><template v-slot:card-content>
                  <v-form>
                    <v-text-field :value="item.name"> </v-text-field>
                  </v-form> </template
              ></card-update>
            </template>
          </menu-card-update>
        </template>
      </the-card>
    </template>
    <template v-slot:buttons-layout>
      <tooltip-button
        :icon="tooltip.icon"
        :title="tooltip.title"
        @addItem="addNewItem"
      ></tooltip-button>
    </template>
  </content-layout>
</template>

<script>
import contentLayout from "~/components/contentLayout.vue";
import TheCard from "~/components/TheCard.vue";
import MenuCardUpdate from "~/components/MenuCardUpdate.vue";
import CardUpdate from "~/components/CardUpdate.vue";
import TooltipButton from "~/components/TooltipButton.vue";

export default {
  components: {
    contentLayout,
    TheCard,
    MenuCardUpdate,
    CardUpdate,
    TooltipButton,
  },
  data() {
    return {
      theCard: {
        name: "Tester",
        items: [],
      },
      contentLayout: {
        name: "Departments",
      },
      cardUpdate: {
        model: "",
      },
      tooltip: {
        icon: "mdi-plus",
        title: "Add New Item",
      },
    };
  },
  async fetch() {
    await this.$store.dispatch("getDepartments");
    this.theCard.items = this.$store.getters.getDepartments;
  },
  methods: {
    deleteDepartment: function (id) {
      alert(`Delete Department id: ${id}`);
    },
    setModel: function (payload) {
      alert("custom event");
      this.cardUpdate.model = payload;
    },
    addNewItem: function () {
      alert("new Item");
    },
  },
};
</script>

<style>
.v-menu__content {
  overflow: unset;
  contain: unset;
}
</style>
