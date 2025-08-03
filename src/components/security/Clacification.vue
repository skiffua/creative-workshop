<template>
  <n-card title="Що вважаємо загрозою?" size="medium" class="mb-4">
    <p>
      <strong>Інформаційна загроза</strong> — це будь-яке явище чи дія, що може завдати шкоди інформації або системі, яка з нею працює. Основні напрямки, які може порушити загроза:
    </p>
    <ul class="list-disc pl-6 mt-2">
      <li>
        <strong>Конфіденційність</strong> — коли сторонні особи отримують доступ до приватної або захищеної інформації
        (наприклад, крадіжка паролів).
      </li>
      <li>
        <strong>Цілісність</strong> — коли інформацію змінюють без дозволу або вона пошкоджується
        (наприклад, віруси, які спотворюють файли).
      </li>
      <li>
        <strong>Доступність</strong> — коли користувач не може отримати доступ до інформації або сервісу тоді, коли це потрібно
        (наприклад, DoS-атаки або збій системи).
      </li>
    </ul>
    <p class="mt-2">
      <strong>Загроза</strong> — це будь-яке порушення одного або кількох із цих принципів.
    </p>
  </n-card>

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
