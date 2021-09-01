<template>
  <svg
    class="remove"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    version="1.1"
    viewBox="0 0 16 16"
    @click.stop.prevent="$emit('click')"
  >
    <line class="remove-line" x1="1" y1="1" x2="15" y2="15" />
    <line class="remove-line" x1="1" y1="15" x2="15" y2="1" />
  </svg>
</template>

<style scoped>
.remove {
  cursor: pointer;
  display: block;
  position: absolute;
  right: 0.75em;
  top: 0.5em;
  margin: 0;
  padding: 0;
  width: 1em;
  height: 1em;
  border-radius: 100%;
}
.remove:hover {
  background-color: #2491D1;
}

.remove-line {
  stroke: #303030;
}
.remove:hover .remove-line {
  stroke: #FFFAFA;
}
</style>
