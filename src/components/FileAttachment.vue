<template>
  <n-card :title="label || 'Файл'" size="small" embedded>
    <n-space align="center">
      <n-icon :component="AttachOutline" />
      <n-a :href="url" target="_blank" download>
        {{ name }}
      </n-a>
    </n-space>
  </n-card>
</template>

<script setup lang="ts">
import { NCard, NSpace, NA, NIcon } from 'naive-ui'
import { AttachOutline } from '@vicons/ionicons5'

defineProps<{
  name: string    // Видиме ім'я файлу
  url: string     // Посилання на файл
  label?: string  // Заголовок картки (необов’язково)
}>()
</script>
