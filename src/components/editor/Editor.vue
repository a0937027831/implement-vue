<template>
  <div class="p-4">
    <div v-if="isOffline">Currently Offline</div>
    <textarea class="w-full" :rows="10"></textarea>
    <div>
      <h3>Buffered Content:</h3>
      <ul>
        <li v-for="(item, index) in bufferContent" :key="index">
          <strong>{{ item.timestamp }}:</strong> {{ item.content }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, ref, type Ref } from 'vue';
import type { EditorProps } from './EditorProps';

const props = defineProps<EditorProps>();

interface BufferItem {
  timestamp: Date;
  content: string;
}

const bufferContent = inject<Ref<BufferItem[]>>('bufferContent', ref([]));
const isOffline = inject<Ref<boolean>>('isOffline', ref(false));

console.log('bufferContent', bufferContent)

</script>
