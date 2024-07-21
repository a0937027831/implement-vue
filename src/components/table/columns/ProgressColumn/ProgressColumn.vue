<template>
  <ProgressBar :value="value" :showValue="false" style="height: 6px"></ProgressBar>
</template>

<script setup lang="ts">
import type { ProgressColumnProps } from './ProgressColumnProps';
import ProgressBar from 'primevue/progressbar';

defineProps<ProgressColumnProps>();
</script>
