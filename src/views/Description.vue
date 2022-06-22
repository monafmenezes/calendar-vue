<template>
  <div v-if="show" class="description">
    <h1>Description of the event</h1>
    <h3>{{ item.title }}</h3>
    <p>{{ item.description }}</p>
    <span>{{ item.start }}</span>
    <div>
      <router-link class="link" to="/">
        <d-button>Home</d-button>
      </router-link>
      <d-button @click="deleted">Delete</d-button>
    </div>
  </div>
</template>

<script>
import DButton from "../components/DButton.vue";
export default {
  components: { DButton },
  data(){
    return {
        show: true
    }
  },
  computed: {
    item() {
      return this.$store.state.events.events.filter(
        (item) => item.id === parseInt(this.$route.params.publicId)
      )[0];
    },
  },
  methods: {
    deleted() {
      this.$router.push({ path: "/" });
      this.show = false
      this.$store.commit("deleteEvent", this.item.id);
    },
  },
};
</script>

<style scoped>
.description {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.description div {
  margin-top: 3rem;
}
</style>