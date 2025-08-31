<template>
  <n-page>
    <n-space vertical size="large">
      <n-h1>Державні сервіси України</n-h1>
      <n-grid :cols="1" :x-gap="16" :y-gap="16">
        <n-gi v-for="service in services" :key="service.name">
          <n-card :title="service.name" hoverable>
            <template #header-extra>
              <n-tag v-if="service.forYouth" type="success" bordered>
                до 18 років
              </n-tag>
            </template>
            <p>{{ service.description }}</p>
            <n-button tag="a" :href="service.link" target="_blank" type="primary" ghost>
              Перейти на сайт
            </n-button>
          </n-card>
        </n-gi>
      </n-grid>
    </n-space>
  </n-page>
</template>

<script setup lang="ts">
const services = [
  {
    name: 'Дія (Diia)',
    description: 'Цифрові документи, COVID-сертифікати, реєстрація бізнесу, державні послуги.',
    link: 'https://diia.gov.ua/',
    forYouth: true,
  },
  {
    name: 'Державні послуги (ЦНАП онлайн)',
    description: 'Подання заяв, витягів, консультації онлайн через ЦНАП.',
    link: 'https://my.gov.ua/',
    forYouth: false,
  },
  {
    name: 'Електронний кабінет платника податків',
    description: 'Податкова звітність, перевірка заборгованостей, реєстри.',
    link: 'https://cabinet.tax.gov.ua/',
    forYouth: false,
  },
  {
    name: 'Портал відкритих даних',
    description: 'Доступ до відкритих державних даних — для аналітики та досліджень.',
    link: 'https://data.gov.ua/',
    forYouth: true,
  },
  {
    name: 'Prozorro',
    description: 'Платформа прозорих державних закупівель — можна досліджувати тендери.',
    link: 'https://prozorro.gov.ua/',
    forYouth: true,
  },
  {
    name: 'ЄДЕБО',
    description: 'Інформація про ВНЗ, подання документів, перевірка дипломів.',
    link: 'https://info.edbo.gov.ua/',
    forYouth: true,
  },
  {
    name: 'Дія.Бізнес',
    description: 'Освітні курси, підтримка підприємців, стартапів та школярів.',
    link: 'https://business.diia.gov.ua/',
    forYouth: true,
  },
  {
    name: 'Всеукраїнська школа онлайн',
    description: 'Платформа дистанційного навчання для учнів 5–11 класів.',
    link: 'https://lms.e-school.net.ua/',
    forYouth: true,
  },
  {
    name: 'Національна дитяча "гаряча лінія"',
    description: 'Психологічна підтримка, консультації з прав дітей.',
    link: 'https://www.la-strada.org.ua/',
    forYouth: true,
  }
];
</script>
