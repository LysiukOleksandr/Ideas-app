<template>
  <v-container>
    <v-card max-width="550px" class="mx-auto">
      <v-card-title class="justify-center mt-2 mb-3" style="font-size:35px">
        Авторизация
      </v-card-title>
      <v-form @submit.prevent="onSubmit">
        <v-row justify="center">
          <v-col cols="12" sm="8" class="pt-0 pb-0 ">
            <v-text-field
              v-model.trim="email"
              :error-messages="emailErrors"
              @blur="$v.email.$touch()"
              required
              label="Почта"
              class="pl-5 pr-5"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="8" class="pt-2 pb-0">
            <v-text-field
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              :error-messages="passwordErrors"
              @blur="$v.password.$touch()"
              required
              label="Пароль"
              class="pl-5 pr-5"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="8" class="mt-2 text-center">
            <v-btn class="primary" dark width="200" type="submit"
              >Авторизоваться</v-btn
            >
          </v-col>
          <v-col cols="12" sm="8" class="mb-5 pt-0 text-center">
            <div>
              Нет аккаунта?
              <router-link
                class="text-decoration-none"
                router
                to="/registration"
                >Начать</router-link
              >
            </div>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      showPassword: false
    };
  },
  methods: {
    onSubmit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        console.log("SUBMIT");
        const userData = {
          email: this.email,
          password: this.password
        };
        this.$store
          .dispatch("signIn", userData)
          .then(() => {
            alert("Вы успешно вошли");
            // this.$router.push("/");
          })
          .catch(() => {
            this.email = "";
            this.password = "";
          });
      } else {
        alert("Введите почту и пароль");
      }
    }
  },
  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Неправильная почта");
      !this.$v.email.required && errors.push("Это поле обязательно");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength &&
        errors.push("Пароль должен быть длиннее 6 символов");
      !this.$v.password.required && errors.push("Это поле обязательно");
      return errors;
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    }
  }
};
</script>
