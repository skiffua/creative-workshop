<template>
  <div class="flex flex-row gap-8 items-start px-6 py-8 bg-white rounded-xl shadow">
    Приклади класичних фішингових атак з використанням електронних листів, СМС, повідомлення в соц. мережах, кнопках, посиланнях.

    <div class="gmail-container">
      <div class="email-header">
        <div class="email-subject">Пропозиція на $12,000.00 – Конфіденційно</div>
        <div class="email-info">Від: Джеймс М. Гольдман &lt;james.millionaire@outlook.com&gt;<br>До: Ви</div>
      </div>
      <div class="email-body">
        <p>Шановний друже,</p>
        <p>Я є спадкоємцем великого бізнесу і наразі маю $12,000.00, які бажаю передати на збереження довіреній особі через політичні проблеми в моїй країні.</p>
        <p>Якщо ви готові допомогти мені, ви отримаєте 30% від суми. Це безпечно і легально.</p>
        <p>Будь ласка, натисніть кнопку нижче, щоб підтвердити свій намір:</p>

        <a href="https://secure-your-reward.com" class="phishing-button">Отримати 12 000 $</a>
        <span class="fake-link">secure-your-reward.com (НЕСПРАВЖНІЙ САЙТ)</span>

        <div class="explain-toggle" @click="toggleExplain('exp1')">Пояснити, чому це фішинг</div>
        <div id="exp1" class="tooltip" style="display: none">
          Пропозиції великих грошей від незнайомців — класична схема шахрайства. Перевіряйте адресу відправника, не переходьте за підозрілими посиланнями.
        </div>

        <hr>
        <p><strong>Інші приклади кнопок у фішингових листах:</strong></p>

        <div>
          <a href="https://reset-password-alert.com" class="phishing-button">Відновити доступ</a>
          <span class="fake-link">reset-password-alert.com</span>
        </div>
        <div>
          <a href="https://icloud-verify-id.com" class="phishing-button">Підтвердити акаунт iCloud</a>
          <span class="fake-link">icloud-verify-id.com</span>
        </div>
        <div>
          <a href="https://amazon-gift-free.com" class="phishing-button">Отримати подарунок Amazon</a>
          <span class="fake-link">amazon-gift-free.com</span>
        </div>
        <div>
          <a href="https://privat24-login-verification.com" class="phishing-button">Увійти в Приват24</a>
          <span class="fake-link">privat24-login-verification.com</span>
        </div>
      </div>

      <div class="email-body">
        <hr>
        <p><strong>Фішинг у SMS:</strong></p>
        <div class="sms" data-source="SMS від monobank">
          Ваш акаунт заблоковано. Увійдіть: http://mono-check.xyz
          <div class="explain-toggle" @click="toggleExplain('exp2')">Пояснити</div>
          <div id="exp2" class="tooltip" style="display: none">
            Адреса виглядає як справжня, але має іншу доменну зону. monobank НІКОЛИ не надсилає такі повідомлення з посиланнями.
          </div>
        </div>

        <p><strong>Фішинг у соцмережах:</strong></p>
        <div class="messenger" data-source="Facebook Messenger">
          Привіт! Подивись це відео, ти тут позначений: http://facebook.video-check.ru
          <div class="explain-toggle" @click="toggleExplain('exp3')">Пояснити</div>
          <div id="exp3" class="tooltip" style="display: none">
            Посилання не веде на справжній facebook.com. Це спроба вкрасти ваш пароль.
          </div>
        </div>
      </div>
    </div>
    <div style="max-width: 600px; margin: 40px auto; border: 1px solid #ddd; border-radius: 8px; font-family: 'Segoe UI', sans-serif; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
      <!-- Header -->
      <div style="background-color: #f2f2f2; padding: 16px; border-bottom: 1px solid #ccc;">
        <strong style="font-size: 1.1em;">🔐 Ваш обліковий запис Gmail буде призупинено</strong><br>
        <span style="color: #888;">Від: <span style="color: #333;">Google Security &lt;security-alerts@goog1e.support&gt;</span></span>
      </div>

      <!-- Body -->
      <div style="padding: 24px; line-height: 1.6;">
        <p>Доброго дня!</p>

        <p>Ми виявили <strong>підозрілу активність</strong> у вашому акаунті. Щоб уникнути блокування, будь ласка, підтвердьте ваші дані за посиланням нижче:</p>

        <a href="https://goog1e.support/verify" target="_blank"
           style="display: inline-block; margin: 16px 0; background-color: #1a73e8; color: white; padding: 10px 18px; border-radius: 6px; text-decoration: none; font-weight: bold;">
          👉 Підтвердити обліковий запис
        </a>

        <p>Якщо ви не виконаєте дію протягом <strong>24 годин</strong>, ваш обліковий запис буде призупинено.</p>

        <p>З повагою,<br>
          Команда підтримки Google</p>
      </div>

      <!-- Explain Button -->
      <div style="padding: 0 24px 20px;">
        <button onclick="alert('⚠️ Це фішинг! Справжній домен Google — google.com. Тут використано goog1e.support (з цифрою 1 замість літери L). Такі листи часто створюють паніку, щоб змусити вас натиснути.')"
                style="background: none; border: none; color: #666; text-decoration: underline; cursor: pointer;">
          Пояснити
        </button>
      </div>
    </div>

    <div style="max-width: 600px; margin: 40px auto; border: 1px solid #ccc; border-radius: 8px; font-family: 'Segoe UI', sans-serif; box-shadow: 0 6px 16px rgba(0,0,0,0.1);">
      <!-- Header -->
      <div style="background-color: #f0f4f8; padding: 16px; border-bottom: 1px solid #bbb;">
        <strong style="font-size: 1.1em;">🏍️ Запрошення на благодійний мотозаїзд "Вініл і Допомога"</strong><br>
        <span style="color: #888;">Від: <span style="color: #333;">Motomedica support@motomedica-events.org></span></span>
      </div>

      <!-- Body -->
      <div style="padding: 24px; line-height: 1.6;">
        <p>Доброго дня, шановний лікарю!</p>

        <p>Ми дізнались, що ви не тільки професіонал своєї справи, а й палкий шанувальник мотоциклів 🏍️ та вінілових платівок 🎶. Саме тому запрошуємо вас на щорічний <strong>мотозаїзд “Вініл і Допомога”</strong>, що об’єднує медиків та байкерів задля благодійності.</p>

        <p>Захід відбудеться у найближчі вихідні. Для участі потрібно підтвердити реєстрацію:</p>

        <a href="https://motomedica-events.org/confirm?id=5489" target="_blank"
           style="display: inline-block; margin: 16px 0; background-color: #28a745; color: white; padding: 10px 18px; border-radius: 6px; text-decoration: none; font-weight: bold;">
          ✅ Підтвердити участь
        </a>

        <p>Кожен учасник отримає спеціальне видання вінілової платівки “Healing Beats Vol. 2” та безкоштовний огляд мотоцикла!</p>

        <p>Не проґавте цю унікальну подію – кількість місць обмежена.</p>

        <p>З найкращими побажаннями,<br>
          Команда Motomedica</p>
      </div>

      <!-- Explain Button -->
      <div style="padding: 0 24px 20px;">
        <button onclick="alert('⚠️ Це фішинг! Написаний персоналізовано на основі відкритої інформації про хобі та професію. Такі листи викликають довіру, щоб змусити натиснути на посилання.')"
                style="background: none; border: none; color: #555; text-decoration: underline; cursor: pointer;">
          Пояснити
        </button>
      </div>
    </div>


    <div style="max-width: 400px; font-family: sans-serif; border: 1px solid #ccc; border-radius: 10px; padding: 16px; margin: 20px auto; box-shadow: 0 2px 8px rgba(0,0,0,0.1); background: #fff;">
      <div style="display: flex; align-items: center; gap: 12px;">
        <img src="/people/maria.jpg" alt="Марія Коваль" style="width: 60px; height: 60px; border-radius: 50%; object-fit: cover; border: 1px solid #ddd;">
        <div>
          <strong style="font-size: 1.1em;">Марія Коваль</strong><br>
          хоче додати вас у друзі
        </div>
      </div>

      <RouterLink
          to="/facebook"
          style="display: inline-block; margin-top: 16px; padding: 10px 16px; background-color: #1877f2; color: white; text-decoration: none; border-radius: 6px; font-weight: bold;"
      >Додати</RouterLink>

      <button onclick="alert('⚠️ Це фішинг!\nПосилання веде на підроблений сайт. Завжди перевіряйте, щоб домен був саме facebook.com, а не щось подібне.')"
              style="margin-top: 12px; background: transparent; color: #666; border: none; text-decoration: underline; cursor: pointer;">
        Пояснити
      </button>
    </div>
    <n-button @click="showUsers = !showUsers">{{ showUsers ? 'Показати користувачів' : 'Сховати користувачів' }}</n-button>
    <UserTable v-if="showUsers" />

    <div>Приклади фішингових атак:</div>
    <Link
        text='Фейковий Бред Пітт виманив у жінки 830 тисяч євро, її ... (2025)'
        url='https://suspilne.media/culture/927161-pisla-efiru-pro-fejkovogo-breda-pitta-zinka-zitknulasa-z-hvileu-kiberbulingu-programu-zrestou-vidalili/'
    />
    <Link
        text='Кіберполіція за сприяння ПриватБанку викрила шахрая, який використовував фішинг  ... '
        url='https://privatbank.ua/news/2022/9/26/kiberpoliciya-za-spriyannya-privatbanku-vikrila-shahraya-yakiy-vikoristovuvav-fishing-na-platformi-ogoloshen'
    />
    <Link
        text='Шахрайство на сайті: жителька Тернопільщини втратила 30 тисяч гривень  ... '
        url='https://suspilne.media/ternopil/262119-sahrajstvo-na-sajti-zitelka-ternopilsini-vtratila-30-tisac-griven/'
    />


  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Link from '../Link.vue';
import UserTable from '../UserTable.vue';

const toggleExplain = (id) => {
  const el = document.getElementById(id);
  el.style.display = el.style.display === 'none' ? 'block' : 'none';
}

const showUsers = ref(false);
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
