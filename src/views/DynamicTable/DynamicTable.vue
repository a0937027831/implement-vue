<script lang="ts">
import './styles.css';
import { ColumnTypes } from '@/components/table/columns/ColumnTypes';
import { faker } from '@faker-js/faker';
import { CustomerStatusSeverityConverter } from './CustomerStatusSeverityConverter';
import { ProductStatusSeverityConverter } from './ProductStatusSeverityConverter';

const customerSeverityConverter = new CustomerStatusSeverityConverter();
const productSeverityConverter = new ProductStatusSeverityConverter();
</script>

<template>
  <div class="w-full" style="padding-left: 300px">
    <h1>Dynamic Table Layout</h1>
    <Description />
    <h2>Column Types</h2>
    <div class="flex justify-content-center m-auto">
      <table class="border-1">
        <thead>
          <tr>
            <th>{{ ColumnTypes.STRING }}</th>
            <th>{{ ColumnTypes.COUNTRY }}</th>
            <th>{{ ColumnTypes.REPRESENTATIVE }}</th>
            <th>{{ ColumnTypes.CURRENCY }}</th>
            <th>{{ ColumnTypes.DATE }}</th>
            <th>{{ ColumnTypes.TAGS }}</th>
            <th>{{ ColumnTypes.PROGRESS }}</th>
            <th>{{ ColumnTypes.STAR }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>String Column</td>
            <td>
              <CountryColumn name="Malaysia" code="my" />
            </td>
            <td>
              <RepresentativeColumn name="Asiya Javayant" :image="faker.image.avatarGitHub()" />
            </td>
            <td>
              <CurrencyColumn :currency="1024" />
            </td>
            <td>
              <DateColumn date="2017-09-24" />
            </td>
            <td>
              <TagColumn value="unqualified" :severityConverter="customerSeverityConverter" />
              <TagColumn value="INSTOCK" :severityConverter="productSeverityConverter" />
            </td>
            <td>
              <ProgressColumn :value="75" />
            </td>
            <td>
              <StarColumn :value="4" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import CountryColumn from '@/components/table/columns/CountryColumn/CountryColumn.vue';
import RepresentativeColumn from '@/components/table/columns/RepresentativeColumn/RepresentativeColumn.vue';
import CurrencyColumn from '@/components/table/columns/CurrencyColumn/CurrencyColumn.vue';
import DateColumn from '@/components/table/columns/DateColumn/DateColumn.vue';
import TagColumn from '@/components/table/columns/TagColumn/TagColumn.vue';
import ProgressColumn from '@/components/table/columns/ProgressColumn/ProgressColumn.vue';
import StarColumn from '@/components/table/columns/StarColumn/StarColumn.vue';
import { Description } from './Description';
</script>
