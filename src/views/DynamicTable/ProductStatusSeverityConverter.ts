import type { ProductStatus } from '@/domain/product';
import type { SeverityConverter } from '@/components/table/columns/TagColumn/SeverityConverter';
import type { Severity } from '@/domain/common/severity';

export class ProductStatusSeverityConverter implements SeverityConverter<ProductStatus> {
  convert(value: ProductStatus): Severity {
    switch (value) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return null;
    }
  }
}
