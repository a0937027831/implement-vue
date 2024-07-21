import { useQuery } from '@tanstack/vue-query';
import type { Customer } from '@/domain/customer';
import type { DynamicTableDto } from '@/infrastructure/common/dynamicTableDto';

export const useCustomers = () => {
  return useQuery<DynamicTableDto<Customer>>({
    queryKey: ['Customers'],
    queryFn: async () => {
      const response = await fetch('/api/v1/customer');
      return response.json();
    },
  });
};
