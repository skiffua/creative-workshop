<template>
  <div class="flex flex-row gap-8 items-start px-6 py-8 bg-white rounded-xl shadow">
    <n-card title="🛡 Як віруси потрапляють у систему" size="large">
      <n-list>
        <n-list-item>Через флешки, заражені файли.</n-list-item>
        <n-list-item>Через email-вкладення.</n-list-item>
        <n-list-item>Через вебсайти.</n-list-item>
        <n-list-item>Через піратське ПЗ або активатори.</n-list-item>
        <n-list-item>Через соцмережі та фішинг.</n-list-item>
      </n-list>
    </n-card>
    Типи вірусів:
    <h4>Файлові віруси</h4>
    Вірус може змінити або знищити важливі системні чи користувацькі файли, втрата документів, фото, програм.
    Вірус може змінити системні файли. Може викликати "синій екран смерті" (BSOD) або неможливість запуску ОС.
    Деякі файлові віруси відкривають канал для віддаленого доступу.
    <h4>Макро віруси</h4>
    Це шкідливий код, який використовує макроси (автоматизовані інструкції) у програмах, таких як Microsoft Word, Excel, PowerPoint.
    Нижче файл для завантаження із вбудованим макро кодом. Завантажте, відкрийте і проаналізуйте вміст - як можна зрозуміти наявність
    макросів у файлі.
    <FileAttachment
        name="Файл PowerPoint. Безпечно для завантаження ;)"
        url="/files/presentation.pptm"
        label="Файл презентації з макро вмістом"
    />

    <h4>Віруси-вимагачі (Ransomware)</h4>
    <n-space vertical :size="20">
      <n-card title="🛑 Як часто заражаються вірусами-вимагачами" embedded>
        <n-p>
          Ransomware — це шкідливе ПЗ, яке шифрує ваші файли й вимагає викуп. Навіть після оплати
          <strong>немає гарантії</strong>, що ви отримаєте доступ назад.
        </n-p>

        <n-p>
          Один із найпоширеніших сценаріїв зараження — через <strong>фальшиві плеєри на піратських сайтах</strong>:
        </n-p>

        <n-ul>
          <n-li>Користувач заходить на сайт, де "має бути відео" (наприклад, фільм чи серіал).</n-li>
          <n-li>Замість відео з'являється повідомлення: <em>“Щоб переглянути, встановіть плеєр / кодек”</em>.</n-li>
          <n-li>Файл завантажується, виглядає як інсталятор, але насправді це вірус.</n-li>
          <n-li>Після запуску шифрує файли, а потім з’являється вікно з вимогою переказати гроші.</n-li>
        </n-ul>

        <n-p>
          ❗ Такий спосіб атак часто використовується, бо апелює до звичайної допитливості користувача.
          Не варто довіряти подібним "плеєрам" чи програмам із невідомих сайтів.
        </n-p>

      </n-card>
    </n-space>

    <h5>Приклади вірусних атак:</h5>
    <Link
        text='Вірус WannaCry пошкодив комп&#39;ютери у 99 країнах світу (2017)'
        url='https://www.bbc.com/ukrainian/features-39907984'
    />
    <Link
        text='10 найстрашніших комп’ютерних вірусів в історії (2025)'
        url='https://ai360.com.ua/10-naystrashnishykh-komp-iuternykh-virusiv-v-istorii/'
    />
    <Link
        text='Найбільша IT-компанія України стала жертвою кібератаки.  ... (2020)'
        url='https://hromadske.ua/posts/najbilsha-it-kompaniya-ukrayini-stala-zhertvoyu-kiberataki-yak-take-moglo-statisya-i-chi-postrazhdali-dani-kliyentiv'
    />
    <Link
        text='Our Top 10 Email Malware of All Time (2018)'
        url='https://www.n-able.com/es/blog/our-top-10-email-malware-all-time'
    />
  </div>
</template>

<script setup lang="ts">
import Link from '../Link.vue';
import FileAttachment from '../FileAttachment.vue';
const toggleExplain = (id) => {
  const el = document.getElementById(id);
  el.style.display = el.style.display === 'none' ? 'block' : 'none';
}
</script>

<style scoped>
.gmail-container {
  max-width: 900px;
  margin: auto;
  min-height: 100vh;
  box-shadow: 0 0 5px rgba(0,0,0,0.1);
  padding-bottom: 30px;
  font-family: Arial, sans-serif;
  background-color: #f1f3f4;
}
.email-header {
  padding: 16px;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
}
.email-subject {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
}
.email-info {
  font-size: 14px;
  color: #555;
}
.email-body {
  padding: 20px;
  line-height: 1.6;
}
.email-body p {
  margin-bottom: 1em;
}
.phishing-button {
  display: inline-block;
  margin: 10px 5px;
  padding: 10px 15px;
  background-color: #1a73e8;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
}
.phishing-button:hover {
  background-color: #1558b0;
}
.fake-link {
  font-size: 12px;
  color: gray;
  margin-top: 2px;
  display: block;
}
.sms, .messenger {
  background: #e5e5ea;
  border-radius: 10px;
  padding: 10px;
  margin: 20px;
  max-width: 400px;
  position: relative;
}
.sms:before, .messenger:before {
  content: attr(data-source);
  font-size: 12px;
  color: #999;
  position: absolute;
  top: -18px;
  left: 0;
}
.tooltip {
  background-color: #fff3cd;
  color: #856404;
  border: 1px solid #ffeeba;
  padding: 10px;
  font-size: 14px;
  border-radius: 5px;
  margin-top: 10px;
}
.explain-toggle {
  margin-top: 15px;
  cursor: pointer;
  color: #1a73e8;
  text-decoration: underline;
}
</style>
