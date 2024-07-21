import { useQuery } from '@tanstack/vue-query';
import type { Product } from '@/domain/product';
import type { DynamicTableDto } from '@/infrastructure/common/dynamicTableDto';

export const useProducts = () => {
  return useQuery<DynamicTableDto<Product>>({
    queryKey: ['Products'],
    queryFn: async () => {
      const response = await fetch('/api/v1/product');
      return response.json();
    },
  });
};
