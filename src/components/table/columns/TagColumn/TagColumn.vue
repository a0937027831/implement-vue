<template>
  <Tag :value="value" :severity="severity" />
</template>

<script setup lang='ts'>
import type { TagColumnProps } from './TagColumnProps';
import Tag from 'primevue/tag';

defineProps<TagColumnProps>();
</script>
