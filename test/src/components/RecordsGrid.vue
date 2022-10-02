<template>
  <div class="records" :class="{ loading_block: loading }">
    <Loader v-if="loading" />
    <table v-if="!loading && !error" class="records_table">
      <thead class="records_table__head">
        <tr>
          <td>
            <Input type="checkbox" className="record_table__checkbox" />
          </td>
          <td @click="sortUsers">Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
      </thead>
      <tbody class="records_table__body">
        <tr v-for="user in filteredUsers" :key="user.id">
          <td>
            <Input
              @input="setIdForDelete($event, user.id)"
              type="checkbox"
              className="record_table__checkbox"
            />
          </td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
        </tr>
      </tbody>
    </table>
    <p class="error" v-else>{{ error }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import Input from "./Ui/Input.vue";
import Loader from "./Ui/Loader.vue";

export default {
  components: {
    Input,
    Loader,
  },
  computed: {
    ...mapGetters(["filteredUsers"]),
    ...mapState(["loading", "error"]),
  },
  methods: {
    ...mapActions(["fetchUsers", "sortUsers"]),
    setIdForDelete(event, id) {
      if (event.target.checked) {
        this.$store.commit("setChosenId", id);
      } else {
        this.$store.dispatch("deleteChosenId", id);
      }
    },
  },
  mounted() {
    this.fetchUsers();
  },
};
</script>