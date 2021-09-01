<template>
  <input
    type="text"
    class="editor"
    :placeholder="placeholder"
    @keydown.enter.prevent="handleEnter"
    @compositionstart="composing = true"
    @compositionend="composing = false"
  />
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: 'ここに入力',
    },
  },
  data() {
    return {
      composing: false,
    }
  },
  methods: {
    handleEnter(event) {
      if (this.composing) {
        return false
      }

      const value = event.target.value
      if (!value || typeof value !== 'string' || !value.trim()) {
        return
      }
      this.$emit('add-tag', value.trim())

      event.target.value = ''
    },
  },
}
</script>

<style scoped>
.editor {
  float: left;
  border: 0px;
  outline: 0;
  background: transparent;
  padding: 3px 4px;
  min-width: 5em;
  width: auto;
}
</style>
