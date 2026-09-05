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

      <n-space vertical :size="20" style="text-align: left">
        <!-- Загальне пояснення -->
        <n-card embedded>
          <n-p>
            📝 <strong>Увага!</strong> Всі відповіді потрібно оформлювати <strong>у документі за посиланням</strong> з Google Drive, наведеним для кожної практичної роботи.
            Бажано <strong>зробити резервну копію</strong> у себе локально (Google Docs, Word тощо).
          </n-p>
          <n-p>
            🤖 <strong>Під час використання AI — аналізуйте текст самостійно 😉</strong>. Важливо розуміти, що ви пишете.
          </n-p>
        </n-card>

        <!-- Практична робота №2 -->
        <n-card embedded style="text-align: left">
          <template #header>
            <n-p>
              🧪 <strong>Практична робота №2: Електронне урядування, штучний інтелект</strong>
            </n-p>
          </template>
          <n-ul>
            <n-li>
              <n-a href="https://docs.google.com/document/d/1JzX25MhAfeh0hv3Fx5ssQwB3rmArG3ZoU-4vlIXuTzY/edit?usp=sharing" target="_blank">
                10-А
              </n-a>
            </n-li>
            <n-li>
              <n-a href="https://docs.google.com/document/d/1JzX25MhAfeh0hv3Fx5ssQwB3rmArG3ZoU-4vlIXuTzY/edit?usp=sharing" target="_blank">
                10-Б
              </n-a>
            </n-li>
          </n-ul>
        </n-card>
      </n-space>
    </n-space>

    <!-- Практична робота №1 -->
    <n-card embedded>
      <template #header>
        <n-p>
          🧪 <strong>Творче завдання №2: ШІ для навчання та творчості. Системи електронного врядування</strong>
        </n-p>
      </template>
      <n-ul>
        <n-li>
          <n-a href="https://docs.google.com/document/d/1maaP7xen477cmxDyR58TdR2Ryi3gArIoG1uhtuspQe8/edit?usp=sharing" target="_blank">
            10-А
          </n-a>
        </n-li>
        <n-li>
          <n-a href="https://docs.google.com/document/d/1Az1JxbYiZupLe5rwM9JANtAbaQSMZg67xyQ_kyEabnc/edit?usp=sharing" target="_blank">
            10-Б
          </n-a>
        </n-li>
      </n-ul>
    </n-card>
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
