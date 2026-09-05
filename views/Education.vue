<template>
  <n-page>
    <n-space vertical>
      <n-h2>Платформи для онлайн-навчання</n-h2>
      <n-grid cols="1 s:2 m:3 l:4" responsive="screen" x-gap="16" y-gap="16">
        <n-grid-item v-for="platform in platforms" :key="platform.name">
          <n-card hoverable>
            <template #header>
              <div style="text-align: center;">
                <n-space align="center" justify="center">
                  <n-text strong>{{ platform.name }}</n-text>
                  <n-tag v-if="platform.forYouth" type="success" size="small">до 18 років</n-tag>
                </n-space>
              </div>
            </template>
            <n-ellipsis expand-trigger="click" line-clamp="3">
              {{ platform.description }}
            </n-ellipsis>
            <template #footer>
              <n-button type="primary" tag="a" target="_blank" :href="platform.link">Перейти</n-button>
            </template>
          </n-card>
        </n-grid-item>
      </n-grid>
    </n-space>
  </n-page>
</template>

<script setup lang="ts">
const platforms = [
  {
    name: 'Prometheus',
    description: 'Українська платформа масових онлайн-курсів від провідних університетів.',
    link: 'https://prometheus.org.ua/',
    forYouth: true
  },
  {
    name: 'Coursera',
    description: 'Міжнародна платформа для онлайн-курсів з сертифікатами, доступ до багатьох курсів безкоштовний.',
    link: 'https://coursera.org/',
    forYouth: true
  },
  {
    name: 'EdEra',
    description: 'Освітній проєкт, який створює інтерактивні онлайн-курси та освітні продукти.',
    link: 'https://www.ed-era.com/',
    forYouth: true
  },
  {
    name: 'Udemy',
    description: 'Масштабна платформа з курсами з програмування, дизайну, бізнесу тощо.',
    link: 'https://www.udemy.com/',
    forYouth: true
  },
  {
    name: 'Дія.Цифрова освіта',
    description: 'Національна онлайн-платформа з цифрової грамотності.',
    link: 'https://osvita.diia.gov.ua/',
    forYouth: true
  },
  {
    name: 'Khan Academy',
    description: 'Безкоштовні освітні відео та тести з математики, фізики, економіки тощо.',
    link: 'https://uk.khanacademy.org/',
    forYouth: true
  },
  {
    name: 'Codecademy',
    description: 'Інтерактивне навчання програмуванню з практичними вправами.',
    link: 'https://www.codecademy.com/',
    forYouth: true
  },
  {
    name: 'edX',
    description: 'Освітня платформа з курсами від провідних університетів світу: MIT, Harvard, Berkeley.',
    link: 'https://www.edx.org/',
    forYouth: true
  }
];
</script>
