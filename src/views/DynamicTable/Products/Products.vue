<template>
  <div>
    <h1>Products</h1>
    <p v-if="!data">Loading...</p>
    <GenericTable v-else :value="data.data || []" :columns="[]" />
  </div>
</template>

<script setup lang="ts">
import GenericTable from '@/components/table/GenericTable.vue';
import { useProducts } from '@/infrastructure/api/useProducts';

const { data } = useProducts();
</script>
