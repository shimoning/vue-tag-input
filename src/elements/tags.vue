<template>
  <span class="tags">
    <Tag
      v-for="(tag, index) in tags" :key="index"
      :name="tag.name || '*'"
      @remove="$emit('remove-tag', index)"
    />
  </span>
</template>

<script>
import Tag from './tag.vue'

export default {
  components: { Tag },
  props: {
    tags: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
