<template>
  <div class="about">
    <v-container class="d-flex flex-column align-center">
      <div class="title">
        Oleksandr Lysiuk
      </div>
      <div class="mt-5">
        Front-end developer
      </div>
      <div class="mt-5">
        Email: olysiuk01@gmail.com
      </div>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="mt-5"
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
            href="https://github.com/LysiukOleksandr"
            >Github</v-btn
          >
        </template>
        <span>My github profile</span>
      </v-tooltip>
      <h2 class="mt-10 mb-5">О проекте</h2>
      <div style="text-align:center">
        <p>
          В данном приложении пользователи могут оставлять свои идеи для видео.
        </p>
        <p>
          Приложение состоит из страниц: Регистрация, Авторизация, Главная, а
          так-же этой.
        </p>
        <p>Главная страница будет доступна только после авторизации.</p>
        <p>Для форм авторизации, регистрации реализована валидация</p>
        <p>
          После авторизации, в toolbar мы увидим кнопку для выхода из аккаунта,
          а так-же почту авторизованного пользователя. Если открыть меню слева
          мы увидим место под аватарку, почту, нашу роль и кнопки для перехода
          по страницам.
        </p>
        <p>
          На данный момент реализовано 2 роли: администратор и обычный
          пользователь.
        </p>
      </div>
      <h4>Возможности пользователя</h4>
      <ul
        class="mt-2"
        style="display:flex;flex-direction:column;align-items:center"
      >
        <li>Добавлять идеи</li>
        <li>Лайкать идеи</li>
      </ul>
      <h4>Возможности администратора</h4>
      <ul
        class="mt-2"
        style="display:flex;flex-direction:column;align-items:center"
      >
        <li>Добавлять идеи</li>
        <li>Лайкать идеи</li>
        <li>Удалять идеи</li>
        <li>Изменять категорию идей</li>
      </ul>

      <h2>Главная</h2>
      <div style="text-align:center">
        <p>
          На главной странице мы видим форму для создания идеи, три категории и
          список идей.
        </p>
        <p>
          Карточка идеи состоит из: темы, описания, имени пользователя который
          её создал,даты, лайков. Для администратора так-же видны кнопки для
          удаления и изменения категории идеи.
        </p>
      </div>
      <h4>При разработке использовались</h4>
      <p>Vue JS, Vuex, Vuelidate, Vuetify, Firebase</p>
      <h5>Проект будет дополняться по возможности</h5>
    </v-container>
  </div>
</template>
