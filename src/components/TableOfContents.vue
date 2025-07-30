<template>
  <div class="flex flex-row gap-8 items-start px-6 py-8 bg-white rounded-xl shadow">
    <!-- Sidebar -->
    <aside class="w-60 shrink-0">
      <n-card size="small" :bordered="true">
        <n-anchor :show-rail="false" ignore-gap>
          <n-anchor-link
              v-for="item in items"
              :key="item.id"
              :href="'#' + item.id"
              :title="item.title"
              class="mb-1 text-left"
          />
        </n-anchor>
      </n-card>
    </aside>

    <!-- Main content -->
    <section class="flex-1">
      <div
          v-for="item in items"
          :key="item.id"
          :id="item.id"
          class="scroll-mt-24 item"
      >
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">
          {{ item.title }}
        </h2>
        <component :is="item.content" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { NCard, NAnchor, NAnchorLink } from 'naive-ui'

interface Item {
  id: string
  title: string
  content: string
}

defineProps<{
  items: Item[]
}>()
</script>

<style scoped>
.item {
  text-align: left;
  padding: 16px;
}
</style>
