<template>
  <div class="footer">
    <Button @clickOnButton="deleteUsers" className="delete_button" text="Delete" />
    <Search />
  </div>
</template>

<script>
import Button from "./Ui/Button.vue";
import Search from "./Search.vue";
import { mapActions } from 'vuex';

export default {
  name: "Footer",
  components: {
    Button,
    Search,
  },
  methods: {
    ...mapActions(['deleteUsers']),
  }
};
</script>