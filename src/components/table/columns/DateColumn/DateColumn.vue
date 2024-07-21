<template>
  <div>{{ formatDate(date) }}</div>
</template>

<script setup lang="ts">
import type { DateColumnProps } from './DateColumnProps';

const formatDate = (date: string | Date) =>
  new Date(date).toLocaleDateString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

defineProps<DateColumnProps>();
</script>
