# goit-markup-hw-08

Вторая версия шапки сайта, не знал какую использовать:

<!--Шапка сайта с меню и контактами-->

    <header class="header">
      <div class="header__container container">
        <div class="header__box-mobail" logo-cover>
          <a href="" class="header__logo padding-list">
            <span class="header__logo-accent">Web</span>Studio
          </a>

          <!-- ----------- Кнопка меню --------- -->
          <button
            type="button"
            class="header__batton"
            aria-expanded="false"
            aria-controls="menu-container"
            data-menu-button
          >
            <svg
              class="header__icon-button header__icon-button--cross"
              width="18"
              height="18"
              aria-label="Переключатель мобильного меню"
            >
              <use href="./images/cross-menu_mobail.svg#icon-cross"></use>
            </svg>

            <svg
              class="header__icon-button header__icon-button--menu"
              width="24"
              height="16"
              aria-label="Переключатель мобильного меню"
            >
              <use href="./images/cross-menu_mobail.svg#icon-menu"></use>
            </svg>
          </button>
        </div>
        <!-- --------- Блок для мобильного меню ------- -->
        <div class="menu-mobail" id="menu-container" data-menu>
          <!-- ---------- Навигация ------- -->
          <nav class="navigation">
            <ul class="navigation__menu padding-list">
              <li class="navigation__item">
                <a href="./index.html" class="navigation__link navigation__link--carrent">Студия</a>
              </li>
              <li class="navigation__item">
                <a href="./portfolio.html" class="navigation__link">Портфолио</a>
              </li>
              <li class="navigation__item">
                <a href="" class="navigation__link">Контакты</a>
              </li>
            </ul>
          </nav>

          <!-- Коробка для контактов мобильной версии -->
          <div class="contacts-mobail-box">
            <!--Контакты mobail-->
            <ul class="contacts-mobail padding-list">
              <li class="contacts-mobail__item">
                <a href="tel:+380961111111" class="contacts-mobail__tell"> +38 096 111 11 11 </a>
              </li>
              <li class="contacts-mobail__item">
                <a href="mailto:info@devstudio.com" class="contacts-mobail__mail">
                  info@devstudio.com
                </a>
              </li>
            </ul>

            <!-- Соцсети в мобильно меню -->
            <ul class="social-network-menu padding-list">
              <li class="social-network-menu__item">
                <a href="" class="social-network-menu__link">Instagram</a>
              </li>
              <li class="social-network-menu__item">
                <a href="" class="social-network-menu__link">Twitter</a>
              </li>
              <li class="social-network-menu__item">
                <a href="" class="social-network-menu__link">Facebook</a>
              </li>
              <li class="social-network-menu__item">
                <a href="" class="social-network-menu__link">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>

        <!--Контакты Таблетка и ПК-->
        <ul class="contacts">
          <li class="contacts__item">
            <a href="mailto:info@devstudio.com" class="contacts__mail">
              <svg width="16" height="14" style="margin-right: 10px" class="contacts__icon-mail">
                <use href="./images/symbol-defs.svg#mail" width="16px" height="14px"></use>
              </svg>
              info@devstudio.com
            </a>
          </li>
          <li class="contacts__item">
            <a href="tel:+380961111111" class="contacts__tell">
              <svg width="11" height="16" style="margin-right: 10px" class="contacts__icon-tell">
                <use href="./images/symbol-defs.svg#tell" width="11px" height="16px"></use>
              </svg>
              +38 096 111 11 11
            </a>
          </li>
        </ul>
      </div>
    </header>
