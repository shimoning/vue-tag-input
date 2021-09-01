<template>
  <span class="tag">
    <span class="name">{{ name }}</span>
    <RemoveIcon @click="$emit('remove')" />
  </span>
</template>

<script>
import RemoveIcon from './remove-icon.vue'

export default {
  components: { RemoveIcon },
  props: {
    name: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.tag {
  float: left;
  position: relative;
  background-color: #DBF2FB;
  padding: 0.25em 2em 0.25em 0.75em;
  margin-right: 0.5em;
  border-radius: 1em;
  box-sizing: border-box;
}
.name {
  color: #303030;
}
</style>
