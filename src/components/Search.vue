<template>

</template>

<script>
import algoliasearch from "algoliasearch";

export default {
  data() {
    return {
      indexName: 'communities',
      searchClient: algoliasearch(
        "U1ZL2LF7CY",
        "622b01f525130a78320a7b2e0cba056d"
      ),
      query: "",
    };
  },
};
</script>
<style lang="scss" scoped></style>
