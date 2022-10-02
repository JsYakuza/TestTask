<template>
  <div class="header">
    <form class="new_record_form" @submit.prevent="submitForm">
      <div class="formBlock">
        <Input
          className="name"
          placeholder="FullName"
          v-model.trim="fullName"
        />
        <p class="warning" v-if="!$v.fullName.required">FullName required!</p>
        <p class="warning" v-if="!$v.fullName.checkName">
          FullName must with 1 space and two words
        </p>
      </div>
      <div class="formBlock">
        <Input
          type="email"
          className="email"
          placeholder="Email"
          v-model.trim="$v.email.$model"
        />
        <p class="warning" v-if="!$v.email.required">Email required!</p>
        <p class="warning" v-if="!$v.email.email">Email invalid!</p>
      </div>
      <div class="formBlock">
        <Input
          className="phone"
          v-model.trim="$v.phone.$model"
          placeholder="Phone"
        />
        <p class="warning" v-if="!$v.phone.required">Phone required!</p>
        <p class="warning" v-if="!$v.phone.checkPhoneMask">
          Phone format must be +375 (XX) XXX-XX-XX !
        </p>
      </div>
      <Button type="submit" className="add_button" text="ADD" />
    </form>
  </div>
</template>

<script>
import Input from "./Ui/Input.vue";
import Button from "./Ui/Button.vue";
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "Header",
  components: {
    Input,
    Button,
  },
  computed: {
    fullName: {
      get() {
        return this.$store.state.fullName;
      },
      set(event) {
        this.$store.commit("setFullName", event.target.value);
      },
    },
    email: {
      get() {
        return this.$store.state.email;
      },
      set(event) {
        this.$store.commit("setEmail", event.target.value);
      },
    },
    phone: {
      get() {
        return this.$store.state.phone;
      },
      set(event) {
        this.$store.commit("setPhone", event.target.value);
      },
    },
  },
  methods: {
    submitForm() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      this.$store.dispatch("addUser");
    },
  },
  validations: {
    fullName: {
      required,
      checkName: (value) =>
        value.split(" ").filter((el) => el !== "").length === 2 || value === "",
    },
    email: {
      required,
      email,
    },
    phone: {
      required,
      checkPhoneMask: (value) =>
        /\+375 \(\d{2}\) \d{3}-\d{2}-[\d{2}]/.test(value) && value.length <= 19 || value === "",
    },
  },
};
</script>