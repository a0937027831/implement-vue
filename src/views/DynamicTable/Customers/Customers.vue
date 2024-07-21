<template>
  <div>
    <h1>Customer</h1>
    <p v-if="!data">Loading...</p>
    <GenericTable v-else :value="data.data || []" :columns="[]" />
  </div>
</template>

<script setup lang="ts">
import GenericTable from '@/components/table/GenericTable.vue';
import { useCustomers } from '@/infrastructure/api/useCustomers';

const { data } = useCustomers();
</script>
