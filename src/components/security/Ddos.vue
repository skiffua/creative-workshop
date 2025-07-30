<template>
  <n-space vertical :size="20">
    <n-card title="🌐 DoS / DDoS-атаки" embedded>
      <n-p>
        Атаки, метою яких є зробити сайт або сервер недоступним для користувачів. Зловмисники перевантажують систему численними запитами, через що вона перестає відповідати.
      </n-p>

      <n-divider />

      <n-p strong>Як це працює:</n-p>
      <n-ul>
        <n-li><strong>DoS (Denial of Service):</strong> атака з одного пристрою, що надсилає велику кількість запитів.</n-li>
        <n-li><strong>DDoS (Distributed Denial of Service):</strong> атака одночасно з багатьох пристроїв (ботнет), що ускладнює захист.</n-li>
        <n-li>Сервер не встигає обробляти всі запити і стає недоступним.</n-li>
      </n-ul>

      <n-divider />

      <n-p strong>Приклади та наслідки:</n-p>
      <n-ul>
        <n-li>Атаки на банки, урядові сайти, школи, ЗМІ під час політичних конфліктів.</n-li>
        <n-li>Можуть використовуватись для шантажу або саботажу.</n-li>
        <n-li>Втрата доступу користувачів, зниження довіри до сервісу, фінансові збитки.</n-li>
      </n-ul>

      <n-divider />

      <n-p strong>Як захиститися:</n-p>
      <n-ul>
        <n-li>Використовувати анти-DDoS сервіси (Cloudflare, Google Shield та ін.).</n-li>
        <n-li>Обмежувати трафік та фільтрувати підозрілі IP-адреси.</n-li>
        <n-li>Використовувати CDN і кешування контенту для розвантаження серверів.</n-li>
        <n-li>Моніторити трафік і оперативно реагувати на аномалії.</n-li>
      </n-ul>
    </n-card>
    <Link
        text='Кіберфахівці ГУР атакували Центробанк РФ (2025)'
        url='https://suspilne.media/801393-kiberfahivci-gur-atakuvali-centrobank-rf/'
    />
  </n-space>
</template>

<script setup lang="ts">
import { NSpace, NCard, NDivider, NUl, NLi, NP } from 'naive-ui';
import Link from '../Link.vue';
</script>
