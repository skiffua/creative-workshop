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
          <n-a href="https://docs.google.com/document/d/1FQagd1eCAWjzj8flKBKhLd0H7eR8i-Qmh7odA4SkKBs/edit?usp=sharing" target="_blank">
            10-А
          </n-a>
        </n-li>
        <n-li>
          <n-a href="https://docs.google.com/document/d/1BxClHfL5PDfsankT5YuV15q7GEcQI5hChhLDCx0B_cQ/edit?usp=sharing" target="_blank">
            10-Б
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
