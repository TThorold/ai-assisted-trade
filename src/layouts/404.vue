<script setup>
import misc404 from '@images/pages/404.png'
import tree from '@images/pages/tree.png'
import { useTheme } from 'vuetify'
import miscMaskLight from '@images/pages/misc-mask-light.png'
import miscMaskDark from '@images/pages/misc-mask-dark.png'

const vuetifyTheme = useTheme()

const authThemeMask = computed(() => {
  return vuetifyTheme.global.name.value === 'light' ? miscMaskLight : miscMaskDark
})
</script>

<template>
  <div class="misc-wrapper">
    <div class="text-center mb-4">
      <!-- 👉 Title and subtitle -->
      <h1 class="header-title font-weight-medium">
        404
      </h1>
      <h5 class="text-h5 font-weight-medium mb-3">
        页面未找到 ⚠️
      </h5>
      <p>我们找不到您要查找的页面。</p>
    </div>
    <!-- 👉 Image -->
    <div class="misc-avatar w-100 text-center">
      <VImg
        :max-width="800"
        :src="misc404"
        alt="Coming Soon"
        class="mx-auto"
      />
      <VBtn
        class="mt-10"
        to="/"
      >
        Back to Home
      </VBtn>
    </div>
    
    <!-- 👉 Footer -->
    <VImg
      :src="tree"
      class="misc-footer-tree d-none d-md-block"
    />
    
    <VImg
      :src="authThemeMask"
      class="misc-footer-img d-none d-md-block"
    />
  </div>
</template>

<style lang="scss" scoped>
@use "@core/scss/template/pages/misc.scss";

.header-title {
  font-size: clamp(3rem, 5vw, 6rem);
  line-height: clamp(3rem, 5vw, 6rem);
}

.misc-footer-tree {
  inline-size: 15.625rem;
  inset-block-end: 3.5rem;
  inset-inline-start: 0.375rem;
}
</style>
