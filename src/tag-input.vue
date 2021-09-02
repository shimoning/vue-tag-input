<template>
  <div class="tag-input">
    <input
      type="hidden"
      :name="name"
      :value="tags.map(t => t.name || t.value || '*').join(separator)"
    />
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
    name: {
      type: String,
      default: 'tags',
    },
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
          ...newVal.split(this.separator).map((v, i) => ({
            index: i,
            name: v,
            value: v,
          })),
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
