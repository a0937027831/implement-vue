<template>
  <div :style="{ paddingLeft: '300px' }">
    <h1>Notification</h1>
    <Description />
    <Button @click="reset">RESET</Button>
  </div>
</template>

<script setup lang="ts">
import { Description } from './Description';
import { onMounted, onUnmounted } from 'vue';
import { NotificationStream } from '@/views/Notification/NotificationStream';
import { KEY } from '@/mock/notification';

onMounted(() => {
  const source = NotificationStream.getSource();
  source.addEventListener('notification', (event) => {
    console.log(JSON.parse(event.data));
  });
  source.onerror = () => {
    console.error('EventSource failed');
  };
});

onUnmounted(() => {
  const source = NotificationStream.getSource();
  source.close();
});

const reset = () => {
  localStorage.removeItem(KEY);
  location.reload();
};
</script>
