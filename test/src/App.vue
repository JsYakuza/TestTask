<template>
  <div id="app">
    <Header />
    <RecordsGrid />
    <Footer />
  </div>
</template>

<script>
import RecordsGrid from "./components/RecordsGrid.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    RecordsGrid,
    Header,
    Footer,
  },
};
</script>
