<template>
  <div>
    <h1>Description of the event</h1>
    <h3>{{item.title}}</h3>
    <p>{{item.description}}</p>
    <span>{{item.start}}</span>

    <router-link to="/">
        <d-button>Home</d-button>
    </router-link>
  </div>
</template>

<script>
import DButton from '../components/DButton.vue';
export default {
    computed: {
        item() {
            return this.$store.state.events.events.filter((item) => item.id === parseInt(this.$route.params.publicId))[0];
        },
    },
    mounted() {
        console.log();
    },
    components: { DButton }
};
</script>

<style>
</style>