<template>
  <div>
    <n-card title="🧠 Вербування, пропаганда, фейкова інформація" embedded>
      <n-ul>
        <n-li>
          <strong>Вербування</strong> — процес залучення людини до певної ідеології або організації за допомогою маніпуляцій емоціями, довірою або страхом.
        </n-li>
        <n-li>
          <strong>Пропаганда</strong> — систематичне поширення ідей та інформації для впливу на думки та поведінку, часто з метою маніпуляції.
        </n-li>
        <n-li>
          <strong>Фейкова інформація</strong> — навмисно спотворена або вигадана інформація для введення в оману, дискредитації або створення соціальної напруги.
        </n-li>
      </n-ul>
      <n-p class="mt-4">
        <strong>Чому це важливо:</strong> ці явища можуть спричиняти конфлікти та радикалізацію, тому критичне мислення і перевірка фактів — головний захист.
      </n-p>
    </n-card>

    <Link
        text='НКЦК прийняв рішення обмежити використання Telegram ... (2024)'
        url='https://www.rnbo.gov.ua/ua/Diialnist/6994.html'
    />
    <Link
        text='росія все частіше використовує Telegram для вербовки українських підлітків ...'
        url='https://hmarochos.kiev.ua/2025/04/03/rosiya-vse-chastishe-verbuye-ditej-cherez-telegram-dlya-zdijsnennya-teraktiv/'
    />
    <Link
        text='Аналітики Molfar Intelligence Institute назвали найбезпечніші ... (2025)'
        url='https://ms.detector.media/internet/post/38154/2025-07-03-analityky-molfar-intelligence-institute-nazvaly-naybezpechnishi-mesendzhery-2025-roku/'
    />
  </div>
</template>

<script setup lang="ts">
import { NCard, NUl, NLi, NP } from 'naive-ui';
import Link from '../Link.vue';
</script>
