import { ref,computed, onMounted, onUnmounted } from 'vue';

export interface NetworkState {
  isOnline: boolean;
  isOffline: boolean;
  offlineAt?: number;
  onlineAt?: number;
}

export function useNetwork(): NetworkState {
  const isOnline = ref(navigator.onLine);
  const offlineAt = ref<number | undefined>(undefined);
  const onlineAt = ref<number | undefined>(undefined);

  console.log(isOnline)

  const handleOnline = () => {
    console.log('online')
    isOnline.value = true;
    onlineAt.value = Date.now();
  };

  const handleOffline = () => {
    console.log('Offline')
    isOnline.value = false;
    offlineAt.value = Date.now();
  };

  onMounted(() => {
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
  });

  onUnmounted(() => {
    window.removeEventListener('online', handleOnline);
    window.removeEventListener('offline', handleOffline);
  });

  return {
    isOnline: isOnline.value,
   isOffline: computed(() => !isOnline.value),
    offlineAt: offlineAt.value,
    onlineAt: onlineAt.value,
  };
}