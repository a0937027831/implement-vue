import type { BufferClient } from './BufferClient';

export interface BufferProps<T> {
  client: BufferClient<T>;
}
