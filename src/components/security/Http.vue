<template>
  <n-space vertical :size="20">
    <n-card title="🌐 HTTP (HyperText Transfer Protocol)" size="large" embedded>
      <n-timeline>
        <!-- Ранні HTTP та браузери -->
        <n-timeline-item title="HTTP/0.9" content="1991 — перший простий протокол для передачі HTML, лише GET-запити" />
        <n-timeline-item title="Браузер Mosaic" content="1993 — перший популярний графічний браузер" />
        <n-timeline-item title="SSL 2.0 / 3.0" content="1995 / 1996 — перші спроби шифрування HTTP, небезпечні версії SSL" />
        <n-timeline-item title="HTTP/1.0" content="1996 — базова версія з підтримкою статус-кодів та заголовків" />
        <n-timeline-item title="HTTP/1.1" content="1997 — покращене кешування, keep-alive, chunked transfer encoding" />
        <n-timeline-item title="TLS 1.0" content="1999 — перший стандарт безпечного шифрування, заміна SSL" />

        <!-- Браузери 2000-х -->
        <n-timeline-item title="Інші браузери" content="Firefox (2002), Safari (2003), Chrome (2008), Edge (2015)" />
        <n-timeline-item type="success" title="Зелена адресна стрічка (EV сертифікати)">
          <div>2007 — браузери почали позначати сайти з EV-сертифікатами зеленим замком і назвою компанії</div>
          <img
              src="/ssl-sertificate-website-icon.png"
              alt="EV Certificate Bar"
              style="max-width: 100%; margin-top: 8px; border-radius: 4px;"
          />
        </n-timeline-item>

        <!-- Новіші протоколи та TLS -->
        <n-timeline-item title="HTTP/2" content="2015 — мультиплексування, стиснення заголовків, пріоритезація потоків" />
        <n-timeline-item title="TLS 1.3" content="2018 — швидке та більш безпечне шифрування, починаючи з першого байту" />

        <!-- Події 2020+ -->
        <n-timeline-item type="warning" title="Скасування зеленої адреси" content="2020 — Chrome та інші перестали виділяти EV сертифікати зеленим, залишився тільки замок" />
        <n-timeline-item title="HTTP/3" content="2020 — швидше й стабільніше з’єднання завдяки QUIC поверх UDP" />
        <n-timeline-item title="Впровадження HTTP/3 у браузерах" content="2021–2022 — підтримка HTTP/3 включена у Chrome, Firefox, Edge, Safari" />
        <n-timeline-item title="TLS 1.3 поширюється" content="2021–2023 — більшість сайтів та CDN переходять на TLS 1.3 для швидшого та безпечнішого з’єднання" />
      </n-timeline>

      <n-p>
        HTTP — основа взаємодії між клієнтом і сервером. HTTPS забезпечує захист через TLS.
      </n-p>
      <n-code language="text">https://example.com/page</n-code>
    </n-card>

    <n-card title="✉️ mailto" size="medium" embedded>
      <n-p>
        Протокол для відкриття поштового клієнта. Використовується в браузерах з 1990-х років.
      </n-p>
      <n-button tag="a" type="info" href="mailto:info@example.com?subject=Питання" icon-placement="left">
        Написати листа
      </n-button>
      <n-code language="html">
        &lt;a href="mailto:info@example.com?subject=Питання"&gt;Написати листа&lt;/a&gt;
      </n-code>
    </n-card>

    <n-card title="📁 FTP (File Transfer Protocol)" size="medium" embedded>
      <n-p>Розроблений у 1971 році для передавання файлів у мережах ARPANET.</n-p>
      <n-code>ftp://ftp.example.com</n-code>
    </n-card>

    <n-card title="📞 tel" size="medium" embedded>
      <n-p>Схема для виклику телефонного номера з мобільного пристрою або додатку.</n-p>
      <n-button tag="a" type="success" href="tel:+380631234567" icon-placement="left">
        Подзвонити
      </n-button>
      <n-code language="html">
        &lt;a href="tel:+380631234567"&gt;Подзвонити&lt;/a&gt;
      </n-code>
    </n-card>

    <n-card title="📚 Інші популярні URI-схеми" size="medium" embedded>
      <n-table :bordered="false" :single-line="false">
        <thead>
        <tr>
          <th>Схема</th>
          <th>Призначення</th>
        </tr>
        </thead>
        <tbody>
        <tr><td>https://</td><td>Захищений веб-протокол (через TLS)</td></tr>
        <tr><td>file://</td><td>Доступ до локальних файлів</td></tr>
        <tr><td>data:</td><td>Вбудовані ресурси, напр. зображення в base64</td></tr>
        </tbody>
      </n-table>

      <n-p>
        🛠 У Windows можна також зареєструвати <strong>власний URI-протокол</strong>, наприклад:
        <n-code>myapp://open?id=123</n-code> — він відкриватиме вашу програму.
      </n-p>
    </n-card>

    <n-card title="⚠️ Чому HTTP вразливий" size="large" embedded>
      <n-ul>
        <n-li>
          <strong>Немає шифрування</strong> — усі дані передаються відкритим текстом, їх легко перехопити (наприклад, через Wireshark).
        </n-li>
        <n-li>
          <strong>Уразливий до MITM-атак</strong> — зловмисник між користувачем і сайтом може підмінити дані або вкрасти логіни.
        </n-li>
        <n-li>
          <strong>Не захищає персональні дані</strong> — введені паролі, e-mail, картки можуть бути перехоплені.
        </n-li>
        <n-li>
          <strong>Фальшиві сайти</strong> — HTTP-сайт не гарантує, що ви спілкуєтесь саме з тим сервером, що потрібно.
        </n-li>
        <n-li>
          <strong>Браузери позначають HTTP як "Небезпечний"</strong> — особливо якщо сторінка містить форми вводу.
        </n-li>
      </n-ul>

      <n-p>
        🔒 <strong>Висновок:</strong> Використання HTTPS — єдиний безпечний варіант у сучасному Інтернеті.
      </n-p>
    </n-card>

    <n-card title="Порівняння HTTP та HTTPS">
      <n-space vertical>
        <n-alert title="У чому різниця?" type="info" show-icon>
          HTTPS шифрує дані між клієнтом і сервером, тому безпечніший. Браузери часто блокують HTTP-контент, якщо сторінка вже відкрита по HTTPS.
          Також, багато API або iframe не дозволяють завантаження небезпечного (HTTP) контенту всередині безпечного (HTTPS) сайту.
        </n-alert>
      </n-space>
    </n-card>

    <n-card title="⚠️ Увага: небезпека HTTP-сайтів у публічних мережах" size="large">
      <n-alert title="HTTP-з'єднання не шифрується" type="error" closable>
        Якщо ви відкриваєте <code>http://</code> сайт у публічному Wi-Fi (наприклад, у кафе), зловмисник у мережі може:
        <ul>
          <li>Перехопити вміст сторінки</li>
          <li>Підмінити HTML або JavaScript</li>
          <li>Змінити або вкрасти дані, які ви надсилаєте</li>
        </ul>
      </n-alert>

      <n-space vertical :size="12" class="mt-4">
        <n-alert type="warning" title="Особливо небезпечно">
          Якщо вводите <b>фінансову інформацію</b> або <b>особисті дані</b> — вони можуть бути викрадені.
        </n-alert>

        <n-alert type="success" title="Що робити">
          Перевіряйте, що адреса сайту починається з <code>https://</code> — це гарантія шифрування і безпеки з'єднання.
        </n-alert>
      </n-space>

      <n-space class="mt-6" vertical>
        <n-text strong>Приклад:</n-text>
        <n-a href="https://simple-form-for-edu.netlify.app/" target="_blank">https://simple-form-for-edu.netlify.app/</n-a>
        <n-text>
          А ось та сама форма по HTTP (небезпечно):
          <n-a href="http://simple-form.free.nf/?i=1" target="_blank">http://simple-form.free.nf/?i=1</n-a>
        </n-text>
      </n-space>
    </n-card>

  </n-space>
</template>

<script setup lang="ts">
import {
  NCard,
  NSpace,
  NTimeline,
  NTimelineItem,
  NCode,
  NP,
  NTable,
  NButton
} from 'naive-ui'
</script>
