<template>
  <n-space vertical :size="20">
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

    <!-- Практична робота №1 -->
    <n-card embedded>
      <template #header>
        <n-p>
          🧪 <strong>Практична робота №1: Кіберзагрози та віруси. Основи безпеки</strong>
        </n-p>
      </template>
      <n-ul>
        <n-li>
          <n-a href="https://docs.google.com/document/d/1Jd9NOHvvVZ-lN8ocvONw4s1bkJGn1uv1dN6Z1Q79LR8/edit?usp=sharing" target="_blank">
            10-А
          </n-a>
        </n-li>
        <n-li>
          <n-a href="https://docs.google.com/document/d/1f--gajAeR8uJ3PmD0Sc8d3OjjCGNyvcTLN3o9O9dPuE/edit?usp=sharing" target="_blank">
            10-Б
          </n-a>
        </n-li>
        <n-li>
          <n-a href="https://docs.google.com/document/d/1xbO-C9tAxRAEWXZz4rxTD4rLB6_5FkRL5rbH99VC93Q/edit?usp=sharing" target="_blank">
            10-В
          </n-a>
        </n-li>
      </n-ul>
    </n-card>
  </n-space>
</template>

<script setup lang="ts">
import {
  NCard,
  NUl,
  NLi,
  NSpace,
  NA,
  NP
} from 'naive-ui'
</script>
