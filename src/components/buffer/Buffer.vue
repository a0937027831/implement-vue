<template>
  <div class="app-buffer">
    <slot></slot>
  </div>
</template>


<script setup lang="ts">
import { ref, watch, provide, defineProps } from 'vue';
import type { BufferProps } from './BufferProps';
import { useNetwork } from '@/composition/useNetwork';

const props = defineProps<BufferProps<string>>();

const networkState = useNetwork();
const localBuffer = ref(props.client.buffer);

provide('bufferContent', localBuffer);
provide('isOffline', ref(networkState.isOffline));

watch(() => networkState.isOnline, (value) => {
  console.log('isOnline', value);
});

watch(() => networkState.isOffline, (isOffline) => {
  console.log('isOffline :', isOffline)
  if (isOffline) {
    const content = JSON.stringify({
      maxSize: props.client.maxSize,
    });
    const timestamp = new Date();
    console.log('content', content);
    console.log('timestamp', timestamp);

    localBuffer.value.push({ timestamp, content });

    if (localBuffer.value.length > props.client.maxSize) {
      localBuffer.value.shift();
    }
  }
}, {
  deep: true,
});

</script>
