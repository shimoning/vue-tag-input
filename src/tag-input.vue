<template>
  <div class="tag-input">
    <Tags
      :tags="tags"
      @remove-tag="handleRemoveTag"
    />
    <Editor
      @add-tag="handleAddTag"
    />
  </div>
</template>

<script>
import Tags from './elements/tags.vue'
import Editor from './elements/editor.vue'

export default {
  components: { Tags, Editor },
  props: {
    value: {
      type: String,
      default: '',
    },
    separator: {
      type: String,
      default: ' ',
    }
  },
  data() {
    return {
      tags: [],
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(newVal) {
        if (!newVal) {
          return
        }
        this.tags.splice(
          0,
          this.tags.length,
          ...newVal.split(this.separator),
        )
      }
    },
  },
  methods: {
    handleAddTag(value) {
      if (!value) {
        return
      }

      this.tags.push({
        index: this.tags.length,
        name: value.replace(this.separator, ''),
        value,
      })
    },
    handleRemoveTag(index) {
      this.tags.splice(index, 1)
    },
  },
}
</script>

<style scoped>
.tag-input {
  padding: 0.5em;
}
.tag-input::after {
  content: "";
  clear: both;
  display: table;
}
</style>
