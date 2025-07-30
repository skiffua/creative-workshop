<template>
  <n-card size="small" embedded hoverable class="source-note">
    <div class="content">
      <n-icon :size="20" color="#888">
        <LinkIcon />
      </n-icon>
      <div class="text">
        <div>{{ text }}</div>
        <n-a :href="url" target="_blank">{{ sourceLabel }}</n-a>
      </div>
    </div>
  </n-card>
</template>

<script setup lang="ts">
import { NCard, NA, NIcon } from 'naive-ui'
import { Link as LinkIcon } from '@vicons/ionicons5'

const props = withDefaults(defineProps<{
  text: string
  url: string
  sourceLabel?: string
}>(), {
  sourceLabel: 'Джерело'
})
</script>

<style scoped>
.source-note {
  margin: 12px 0;
  background-color: #f9f9fb;
  border-left: 4px solid #18a058;
  padding: 12px 16px;
}

.content {
  display: flex;
  align-items: start;
  gap: 12px;
}

.text {
  display: flex;
  flex-direction: column;
  font-size: 14px;
}

</style>
