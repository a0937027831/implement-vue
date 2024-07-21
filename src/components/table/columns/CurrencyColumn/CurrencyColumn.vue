<template>
  <div>{{ formatCurrency(currency) }}</div>
</template>

<script setup lang="ts">
import type { CurrencyColumnProps } from './CurrencyColumnProps';

const formatCurrency = (value: number) => {
  return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

defineProps<CurrencyColumnProps>();
</script>
