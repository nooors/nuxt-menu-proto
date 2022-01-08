<template>
  <item-card-content
    :contentName="content.name"
    :contentItem="content.family"
    :contentItems="content.families"
    :getContent="content.getters"
  />
</template>

<script>
import ItemCardcContent from "~/components/ItemCardContent.vue";
export default {
  components: { ItemCardcContent },
  layout: "default",
  data() {
    return {
      content: {
        name: "Custom Name",
        family: [],
        families: this.$store.getters.getFamilies,
      },
    };
  },
};
</script>

<style></style>
