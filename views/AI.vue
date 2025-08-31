<template>
  <n-page>
    <n-space vertical>
      <n-h2>Популярні AI-платформи та сервіси</n-h2>
      <n-grid cols="1 s:2 m:3 l:4" responsive="screen" x-gap="16" y-gap="16">
        <n-grid-item v-for="service in aiServices" :key="service.name">
          <n-card hoverable>
            <template #header>
              <div style="text-align: center;">
                <n-text strong>{{ service.name }}</n-text>
              </div>
            </template>
            <n-ellipsis expand-trigger="click" line-clamp="3">
              {{ service.description }}
            </n-ellipsis>
            <template #footer>
              <n-button type="primary" tag="a" target="_blank" :href="service.link">Перейти</n-button>
            </template>
          </n-card>
        </n-grid-item>
      </n-grid>
    </n-space>
  </n-page>
</template>

<script setup lang="ts">
const aiServices = [
  {
    name: 'Aixploria',
    description: 'Платформа для пошуку та аналізу AI-інструментів і стартапів з різних сфер.',
    link: 'https://www.aixploria.com/en/'
  },
  {
    name: 'Futurepedia',
    description: 'Велика бібліотека AI-інструментів і генеративних моделей, що постійно оновлюється.',
    link: 'https://www.futurepedia.io/'
  },
  {
    name: 'Hugging Face',
    description: 'Спільнота та репозиторій моделей штучного інтелекту з відкритим кодом.',
    link: 'https://huggingface.co/'
  },
  {
    name: 'OpenAI',
    description: 'Провідна платформа зі створення AI-моделей, включно з GPT, Codex та іншими.',
    link: 'https://openai.com/'
  },
  {
    name: 'Runway ML',
    description: 'Платформа для створення творчих AI-проєктів без кодування.',
    link: 'https://runwayml.com/'
  }
];
</script>
