<template>
  <div class="modal">
    <font-awesome-icon
      icon="fa-solid fa-xmark"
      class="icon"
      @click="modalClose"
    />
    <h1>Add Event</h1>
    <span
      >Add a title and description. Then select the date on the calendar.</span
    >
    <label>Title</label>
    <input type="text" v-model="task" placeholder="Add title" />
    <label>Description</label>
    <input type="text" v-model="description" placeholder="Add description" />
    <button @click="addTask">Add Task</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      task: "",
      description: "",
    };
  },
  computed: {
    ...mapGetters(["newTask"]),
  },
  methods: {
    modalClose() {
      this.$store.commit("modalFalse");
    },
    addTask() {
      this.$store.commit("newTask", this.task);
      this.$store.commit("newDescription", this.description);
      this.$store.commit("modalFalse");
    },
  },
};
</script>

<style scoped>
.modal {
  position: absolute;
  border-radius: 4px;
  width: 350px;
  height: 350px;
  background: rgb(222, 238, 234);
  z-index: 99;
  bottom: 55%;
  left: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.modal input {
  height: 40px;
  width: 80%;
  border: none;
  border-radius: 4px;
  margin-bottom: 1rem;
}

.modal label {
  align-self: flex-start;
  margin-left: 2rem;
  margin-bottom: 0.5rem;
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

.modal span {
  font-size: 13px;
}

.icon {
  position: absolute;
  right: 15px;
  top: 10px;
  cursor: pointer;
}
</style>