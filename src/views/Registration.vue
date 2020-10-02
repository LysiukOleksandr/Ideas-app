<template>
  <v-container>
    <v-card max-width="550px" class="mx-auto">
      <v-card-title class="justify-center mt-2 mb-3" style="font-size:35px">
        Регистрация
      </v-card-title>
      <v-form @submit.prevent="onSubmit">
        <v-row justify="center">
          <v-col cols="12" sm="8" class="pt-0 pb-0">
            <v-text-field
              v-model.trim="email"
              :error-messages="emailErrors"
              @blur="$v.email.$touch()"
              class="pl-5 pr-5"
              label="Почта"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="8" class="pt-2 pb-0">
            <v-text-field
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              :error-messages="passwordErrors"
              @blur="$v.password.$touch()"
              class="pl-5 pr-5"
              label="Пароль"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="8" class="pt-2 pb-0">
            <v-text-field
              v-model="confirmPassword"
              :type="showPassword ? 'text' : 'password'"
              :error-messages="confirmPasswordErrors"
              @blur="$v.confirmPassword.$touch()"
              class="pl-5 pr-5"
              label="Повторите пароль"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="8" class="mt-2 mb-0 pt-0 pb-0 text-center">
            <v-checkbox label="Согласиться" v-model="agree" class="pl-5 pr-5" />
          </v-col>
          <v-col cols="12" sm="8" class="mt-2 mb-5 text-center">
            <v-btn class="primary" dark width="130" type="submit"
              >Регистрация</v-btn
            >
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";
export default {
  name: "Registration",
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      showPassword: false,
      agree: false,
      submitStatus: null
    };
  },
  methods: {
    onSubmit() {
      this.$v.$touch();
      if (!this.$v.$invalid && this.agree) {
        this.submitStatus = "submit";
        const user = {
          email: this.email,
          password: this.password
        };
        this.$store
          .dispatch("registerUser", user)
          .then(() => {
            alert("Вы успешно зарегистрированы");
            this.$router.push("/");
          })
          .catch(() => {
            alert(this.$store.getters.getError);
            this.email = "";
            this.password = "";
            this.confirmPassword = "";
            this.agree = false;
          });
      } else if (!this.$v.$invalid && !this.agree) {
        alert("Пожалуйста, согласитесь с нашими правилами");
      } else {
        this.submitStatus = "error";
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
    },
    confirmPasswordErrors() {
      const errors = [];
      if (!this.$v.confirmPassword.$dirty) return errors;
      !this.$v.confirmPassword.sameAsPassword &&
        errors.push("Пароли не совпадают");
      !this.$v.confirmPassword.required && errors.push("Это поле обязательно");
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
    },
    confirmPassword: {
      required,
      sameAsPassword: sameAs("password")
    }
  }
};
</script>

<style></style>
