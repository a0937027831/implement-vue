<template>
  <div class='flex justify-content-center m-auto p-3'>
    <table>
      <thead>
        <tr>
          <th>
            Header
          </th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import type { TableProps } from './TableProps';

defineProps<TableProps<object>>();
</script>
