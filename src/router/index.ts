import { createRouter, createWebHistory } from 'vue-router';
import OnlineEditor from '@/views/OnlineEditor/OnlineEditor.vue';
import Notification from '@/views/Notification/Notification.vue';
import DynamicTable from '@/views/DynamicTable/DynamicTable.vue';

import Customers from '@/views/DynamicTable/Customers/Customers.vue';
import Products from '@/views/DynamicTable/Products/Products.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/editor',
      name: 'editor',
      component: OnlineEditor,
    },
    {
      path: '/notifications',
      name: 'notifications',
      component: Notification,
    },
    {
      path: '/dynamic-table',
      name: 'dynamic-table',
      component: DynamicTable,
      children: [
        {
          path: 'Customers',
          name: 'Customers',
          component: Customers,
        },
        {
          path: 'Products',
          name: 'Products',
          component: Products,
        },
      ],
    },
  ],
});

export default router;
