<template>
  <div>
    <VSnackbar
      v-model="snackbarStore.isShow"
      :color="snackbarStore.type"
      class="elevation-10"
      location="top"
      timeout="2000"
    >
      <div class="d-flex align-center">
        <VIcon class="mr-2">
          {{ getIcon(snackbarStore.type) }}
        </VIcon>
        <span> {{ snackbarStore.message }}</span>
      </div>
      
      <template v-slot:actions>
        <VBtn color="on-primary" icon="ri-close-line" @click="snackbarStore.isShow = false" />
      </template>
    </VSnackbar>
  </div>
</template>

<script setup>
import { useSnackbarStore } from '@/store/snackbarStore.js'

const snackbarStore = useSnackbarStore()

const getIcon = type => {
  const icon = {
    info: 'ri-information-fill',
    success: 'ri-checkbox-circle-fill',
    error: 'ri-alert-fill',
    warning: 'ri-error-warning-fill',
  }
  
  return icon[type]
}
</script>
