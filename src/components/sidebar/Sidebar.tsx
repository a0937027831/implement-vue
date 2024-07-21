import Menu from 'primevue/menu'
import type { MenuItem } from 'primevue/menuitem'
import { useRouter } from 'vue-router'

export function Sidebar() {
  const router = useRouter()
  const items: MenuItem[] = [
    {
      label: 'Q1. Online Editor',
      items: [
        {
          label: 'Editor',
          command: () => router.push('/editor')
        }
      ]
    },
    {
      separator: true
    },
    {
      label: 'Q2. Notifications',
      items: [
        {
          label: 'Notifications',
          command: () => router.push('/notifications')
        }
      ]
    },
    {
      separator: true
    },
    {
      label: 'Q3. Dynamic Table',
      items: [
        {
          label: 'Customers',
          command: () => router.push('/dynamic-table/Customers')
        },
        {
          label: 'Products',
          command: () => router.push('/dynamic-table/Products')
        }
      ]
    }
  ]

  return (
    <aside class="fixed left-0 top-0 h-full" style="width: 300px">
      <Menu model={items} class="w-full h-full" />
    </aside>
  )
}
