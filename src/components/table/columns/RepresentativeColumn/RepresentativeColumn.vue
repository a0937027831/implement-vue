<template>
  <div class="flex align-items-center gap-2">
    <img :alt="name" :src="image" width="32" />
    <span>{{ name }}</span>
  </div>
</template>

<script setup lang="ts">
import type { RepresentativeColumnProps } from './RepresentativeColumnProps';

defineProps<RepresentativeColumnProps>();
</script>
