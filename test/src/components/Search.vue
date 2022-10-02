<template>
  <div class="search_block">
    <Input @input="searchHandler" className="search_block__input" placeholder="Search" />
    <span class="search_block__records_count_block">Users count: {{ usersCount }}</span>
  </div>
</template>
 
 <script>
import Input from "./Ui/Input.vue";
import { mapGetters, mapState } from "vuex";

export default {
  name: "Search",
  components: {
    Input,
  },
  computed: {
    ...mapState(['searchString']),
    ...mapGetters(["usersCount"]),
  },
  methods: {
    searchHandler(event) {
      this.$store.commit('setSearchString', event.target.value);
    }
  }
};
</script>