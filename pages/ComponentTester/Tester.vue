<template>
  <div>
    <content-layout :layoutName="contentLayout.name">
      <template v-slot:content-layout>
        <the-card
          v-for="item in theCard.items"
          :key="item.id"
          :name="item.name"
        >
          <template v-slot:menu-activator>
            <menu-card-update>
              <template v-slot:menu-content>
                <card-update
                  :cardModel="item.name"
                  :cardName="item.name"
                  @deleteItem="deleteDepartment(item.id)"
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
        ></tooltip-button>
      </template>
    </content-layout>
  </div>
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
      cardUpdate: {},
      tooltip: {
        icon: "mdi-close",
        title: "discard-changes",
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
  },
};
</script>

<style>
.v-menu__content {
  overflow: unset;
  contain: unset;
}
</style>
