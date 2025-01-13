<script setup>
import clipboard from '@/utils/clipboardUtils.js'

// Props
const props = defineProps({
  // Text to copy to clipboard
  text: {
    type: String,
    default: '',
  },
})

// ToolTip
const tooltip = ref('复制')

// SnackBar
const snackbar = ref(false)
const timeout = ref('1000')
const copiedText = '复制成功!'

// Copy Animation Flag
const heartBeat = ref(false)

const { text } = toRefs(props)

// Copy Text
const copyText = (text, event) => {
  console.log(text)
  clipboard(String(text), event)
  heartBeat.value = true
  snackbar.value = true
  tooltip.value = '已复制!'
  setTimeout(() => {
    heartBeat.value = false
    tooltip.value = '复制!'
  }, 1000)
}
</script>

<template>
  <VSnackbar v-model="snackbar" :timeout="timeout">
    {{ copiedText }}
    <template v-slot:actions>
      <v-btn color="blue" variant="text" @click="snackbar = false">
        Close
      </v-btn>
    </template>
  </VSnackbar>
  <VTooltip location="bottom">
    <template v-slot:activator="{ props }">
      <span
        :class="{
          heartBeat: heartBeat === true,
        }"
        class="text"
        v-bind="props"
        @click.stop.prevent="copyText(text, $event)"
      >
        {{ text }}
      </span>
    </template>
    <span>{{ tooltip }}</span>
  </VTooltip>
</template>

<style lang="scss" scoped>
.text {
  cursor: pointer;
  display: inline-block;
  border-bottom: 1px dashed;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
