<template>
  <Rating :modelValue="value" :readOnly="true" :cancel="false" />
</template>

<script setup lang='ts'>
import type { StarColumnProps } from './StarColumnProps';
import Rating from 'primevue/rating';

defineProps<StarColumnProps>();
</script>
<!--import type { StarColumnProps } from './StarColumnProps';-->
<!--import Rating from 'primevue/rating';-->

<!--export function StarColumn(props: StarColumnProps) {-->
<!--  return <Rating modelValue={props.value} readOnly cancel={false} />;-->
<!--}-->
