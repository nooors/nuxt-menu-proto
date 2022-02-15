<template>
  <div>
    <h1>Edited</h1>
    <pre>

    {{ edited }}
    </pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      edited: null,
    };
  },
  created() {
    this.edited = this.$route.query;
  },
};
</script>

<style></style>
