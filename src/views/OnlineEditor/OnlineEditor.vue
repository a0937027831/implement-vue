<template>
  <div style="padding-left: 300px">
    <h1>OnlineEditor</h1>
    <Description />
    <Buffer :client="client">
      <Editor />
    </Buffer>
  </div>
</template>

<script setup lang="ts">
import Editor from '@/components/editor/Editor.vue';
import Buffer from '@/components/buffer/Buffer.vue';
import { StringBufferClient } from '@/components/buffer/stringBufferClient';
import { Description } from './Description';

const client = new StringBufferClient();
</script>
