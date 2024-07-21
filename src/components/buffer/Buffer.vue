<template>
  <div class="app-buffer">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import type { BufferProps } from './BufferProps';
import { useNetwork } from '@/composition/useNetwork';

defineProps<BufferProps<string>>();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const network = useNetwork();
</script>
