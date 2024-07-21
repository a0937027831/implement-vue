import type { Severity } from '@/domain/common/severity';
import type { SeverityConverter } from './SeverityConverter';

export interface TagColumnProps {
  value: string;
  severity?: Severity;
  severityConverter?: SeverityConverter;
}
