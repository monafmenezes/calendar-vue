<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style>
.button {
  background: #2c3e50;
  color: #ffffff;
  border: none;
  border-radius: 2px;
  width: 2rem;
  height: 1.5rem;
  margin-left: 1rem;
  cursor: pointer;
}

.button:hover {
    filter: brightness(0.8);
}
</style>