<template>
  <div class="p-4">
    <div v-if="disabled">Currently Offline</div>
    <textarea class="w-full" :rows="10"></textarea>
    <!--Display buffered content here -->
  </div>
</template>

<script setup lang="ts">
import type { EditorProps } from './EditorProps';

defineProps<EditorProps>();
</script>
