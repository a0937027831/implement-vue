<template>
  <div class="flex align-items-center gap-2">
    <img alt="flag" src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" :class="['flag', `flag-${code}`]" style="width: 24px" />
    <span>{{ name }}}</span>
  </div>
</template>

<script setup lang="ts">
import './flags.css';
import type { CountryColumnProps } from './CountryColumnProps';

defineProps<CountryColumnProps>();
</script>

<!--import './flags.css';-->
<!--import { CountryColumnProps } from './CountryColumnProps';-->

<!--export function CountryColumn(props: CountryColumnProps) {-->
<!--  return (-->
<!--    <div className='flex align-items-center gap-2'>-->
<!--      <img alt='flag' src='https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png'-->
<!--           className={`flag flag-${props.code}`} style={{ width: '24px' }} />-->
<!--      <span>{props.name}</span>-->
<!--    </div>-->
<!--  );-->
<!--}-->
