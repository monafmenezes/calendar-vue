<template>
  <div>
    <span>Add Task</span>
    <d-button @click="handleClick" class="handle">
      <font-awesome-icon
      icon="fa-solid fa-plus"
    />
    </d-button>
    <d-calendar/>
  </div>
</template>

<script>
import DCalendar from '../components/DCalendar.vue'
import DButton from '../components/DButton.vue'
export default {
  components: {
    DCalendar,
    DButton
  },
  methods: {
    handleClick(){
      this.$store.commit("modalFalse");
    }
  }
}
</script>

<style scoped>
.handle {
  margin-bottom: 3rem;
}

</style>