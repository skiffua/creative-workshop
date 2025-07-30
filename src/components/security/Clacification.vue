<template>
  <div class="flex flex-row gap-8 items-start px-6 py-8 bg-white rounded-xl shadow">
   Clacification
  </div>
</template>

<script setup lang="ts">
import { NCard, NAnchor, NAnchorLink } from 'naive-ui'

interface Item {
  id: string
  title: string
  content: string
}
</script>

<style scoped>
.item {
  text-align: left;
  padding: 16px;
}
</style>
