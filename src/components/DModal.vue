<template>
  <div class="modal">
    <font-awesome-icon
      icon="fa-solid fa-xmark"
      class="icon"
      @click="modalClose"
    />
    <h1>Add Task</h1>
    <input type="text" v-model="task" />
    <button>Add Task</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      task: "",
    };
  },
  methods: {
    modalClose() {
      this.$store.commit("modalFalse");
    },
    onDateClick(payload) {

    }
  },
};
</script>

<style scoped>
.modal {
  position: absolute;
  border-radius: 4px;
  width: 300px;
  height: 300px;
  background: rgb(222, 238, 234);
  z-index: 99;
  bottom: 25%;
  left: 40%;
}

.modal input {
  height: 40px;
  width: 80%;
  border: none;
  border-radius: 4px;
  margin-bottom: 2rem;
}

.modal button {
  height: 40px;
  border: none;
  border-radius: 4px;
  width: 50%;
  cursor: pointer;
  background: #2c3e50;
  color: #ffffff;
}

.modal button:hover {
  filter: brightness(0.8);
}

.icon {
  position: absolute;
  right: 15px;
  top: 10px;
  cursor: pointer;
}
</style>