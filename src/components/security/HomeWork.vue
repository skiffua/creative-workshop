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
        <n-a href="https://drive.google.com/your-link-1" target="_blank">
          🧪 Практична робота №1: Кіберзагрози та віруси. Основи безпеки
        </n-a>
      </template>

      <n-ul>
        <n-li>
          <strong>1.1:</strong> Оберіть тип вірусу (троян, черв’як, ransomware тощо) і знайдіть приклад його використання в реальній атаці.
          Опишіть <em>шкоду, причину вразливості, як запобігли в майбутньому</em>. Додайте <strong>посилання на джерела</strong> та <strong>ілюстрації</strong>.
        </n-li>
        <n-li>
          <strong>1.2:</strong> Увімкніть <strong>двофакторну аутентифікацію (2FA)</strong> на Gmail
          (після введення пароля система також попросить підтвердити вхід <strong>на телефоні</strong>).
          Напишіть, як вона працює та як захищає обліковий запис.
        </n-li>
        <n-li>
          <strong>1.3:</strong> Вербування та пропаганда: чому підлітки можуть стати вразливими, які методи використовують, як <strong>уникнути впливу</strong>.
        </n-li>
      </n-ul>
    </n-card>

    <!-- Практична робота №2 -->
    <n-card embedded>
      <template #header>
        <n-a href="https://drive.google.com/your-link-3" target="_blank">
          🧪 Практична робота №2: HTTP та безпека в інтернеті
        </n-a>
      </template>

      <n-ul>
        <n-li>
          <strong>2.1:</strong> Як розпізнати HTTP-сайт? У чому ризик введення даних на таких сайтах?
          Чи потрібно писати <code>http://</code> або <code>https://</code> в адресному рядку вручну?
        </n-li>
        <n-li>
          <strong>2.2:</strong> Як Wireshark показує дані HTTP-запитів? Чому в HTTPS-запитах вміст не видно?
          Зробіть висновок, чому це важливо для <strong>захисту особистих даних</strong>.
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
