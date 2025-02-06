# YachtJet Website — Team Project GoIT

---

## Project Description

**[This project](https://andriiyakymiv.github.io/project-nexus/) was created as
part of the [GoIT](https://goit.global/ua/) curriculum as the final project of
the HTML/CSS module. Our task was to create a website for a company specializing
in renting luxury premium yachts. The project was developed based on the
provided layout, adhering to modern web development standards.**

## Team

**Team Lead** — [Andri Yakymiv](https://github.com/andriiyakymiv)

**Scrum Master and Developer** —
[Vladislav Mashirov](https://github.com/FoUndY121)

**Developer** — [Eduard Prudyus](https://github.com/llDeRuNll)

**Developer** — [Nastassya Dragun](https://github.com/nas-tassia)

**Developer** — [Yaroslav Yakubovsky](https://github.com/shopogolikraj)

**Developer** — [Mykyta Glyadyaev](https://github.com/w0lfram00)

**Developer** — [Nikita Naskalnyi](https://github.com/Nikita-Naskalnyi)

**Developer** — [Halyna Moldovianu](https://github.com/MoldovianuHalyna)

### Project Goal

To create a website that allows customers to easily find, browse and book yachts
for unforgettable sea voyages. The site is user-friendly and creates an
atmosphere of luxury and adventure through an attractive design and
user-friendly interface.

### Main sections of the site

**Homepage** — contains a call to action, attractive images of yachts and
seascapes.

**Header** -

**Hero** -

**About the company** — information about the brand and its mission.

**Yachts** — a detailed catalog with vessel characteristics.

**Reviews** — a section with customer comments.

**Advantages** — reasons to choose this particular company.

**Yacht rental** — functionality for booking a yacht.

**Footer** -

### Solutions to the main problems

1. Difficulty in searching and booking.

   - **Convenient online service for quick selection and booking of a yacht.**

2. Lack of information about yachts

   - **Detailed description of characteristics, capacity and cost.**

3. Lack of a centralized platform

   - Single website with catalog, prices and booking option.

4. Low mobility and accessibility

   - Adaptive design for correct display on different devices.

5. Lack of feedback

   - Feedback form for quick responses.

## Technologies

| ![Web Page](./assets/readme-tech-html.png) |
![Web Page](./assets/readme-tech-css.png) |
![Web Page](./assets/readme-tech-js.png) |
![Web Page](./assets/readme-tech-node.png) |
![Web Page](./assets/readme-tech-vs.png) |
![Web Page](./assets/readme-tech-figma.png) |
![Web Page](./assets/readme-tech-git.png) |
![Web Page](./assets/readme-tech-github.png) |
![Web Page](./assets/readme-tech-vite.png) |
![Web Page](./assets/readme-tech-trello.png) |

## Adaptive layout

**The layout is designed with adaptability for different devices without a
separate mobile version:**

- Mobile — from 320px, adaptation from 375px.

- Tablet — adaptation from 768px.

- Desktop — adaptation from 1280px, support for 1440px.

## Semantic HTML structure

Use of semantic HTML5 tags (header, nav, main, article, section, footer).

Accessibility ensured (aria-labels, alt, correct structure of headings).

Optimization for SEO and UX.

## Graphics optimization

Raster images (JPG, PNG): size reduction without loss of quality, lazy loading.

Vector graphics (SVG): code optimization, use of SVG sprites.

Retina screen support: high-resolution images (@2x), flexible scaling.

## Fonts

Connected via Google Fonts.

Optimized for fast loading.

System fonts were used as a fallback.

--This project was a great experience for our team, allowing us to hone our
development skills and create a modern, functional website that will help
customers easily rent premium yachts.

## Vanilla App Template

Цей проект було створено за допомогою Vite. Для знайомства та налаштування
додаткових можливостей [звернись до документації](https://vitejs.dev/).

## Створення репозиторію за шаблоном

Використовуй цей репозиторій організації GoIT як шаблон для створення
репозиторію свого проекту. Для цього натисни на кнопку `«Use this template»` і
обери опцію `«Create a new repository»`, як показано на зображенні.

![Creating repo from a template step 1](./assets/template-step-1.png)

На наступному етапі відкриється сторінка створення нового репозиторію. Заповни
поле його імені, переконайся, що репозиторій публічний, після чого натисни
кнопку `«Create repository from template»`.

![Creating repo from a template step 2](./assets/template-step-2.png)

Після того, як репозиторій буде створено, необхідно перейти в налаштування
створеного репозиторію на вкладку `Settings` > `Actions` > `General` як показано
на зображенні.

![Settings GitHub Actions permissions step 1](./assets/gh-actions-perm-1.png)

Проскроливши сторінку до самого кінця, в секції `«Workflow permissions»` обери
опцію `«Read and write permissions»` і постав галочку в чекбоксі. Це необхідно
для автоматизації процесу деплою проекту.

![Settings GitHub Actions permissions step 2](./assets/gh-actions-perm-2.png)

Тепер у тебе є особистий репозиторій проекту, зі структурою файлів та папок
репозиторію-шаблону. Далі працюй з ним, як з будь-яким іншим особистим
репозиторієм, клонуй його собі на комп'ютер, пиши код, роби коміти та відправляй
їх на GitHub.

## Підготовка до роботи

1. Переконайся, що на комп'ютері встановлено LTS-версію Node.js.
   [Скачай та встанови](https://nodejs.org/en/) її якщо необхідно.
2. Встанови базові залежності проекту в терміналі командою `npm install`.
3. Запусти режим розробки, виконавши в терміналі команду `npm run dev`.
4. Перейдіть у браузері за адресою
   [http://localhost:5173](http://localhost:5173). Ця сторінка буде автоматично
   перезавантажуватись після збереження змін у файли проекту.

## Файли і папки

- Файли розмітки компонентів сторінки повинні лежати в папці `src/partials` та
  імпортуватись до файлу `index.html`. Наприклад, файл з розміткою хедера
  `header.html` створюємо у папці `partials` та імпортуємо в `index.html`.
- Файли стилів повинні лежати в папці `src/css` та імпортуватись до HTML-файлів
  сторінок. Наприклад, для `index.html` файл стилів називається `index.css`.
- Зображення додавай до папки `src/img`. Збирач оптимізує їх, але тільки при
  деплої продакшн версії проекту. Все це відбувається у хмарі, щоб не
  навантажувати твій комп'ютер, тому що на слабких компʼютерах це може зайняти
  багато часу.

## Деплой

Продакшн версія проекту буде автоматично збиратися та деплоїтись на GitHub
Pages, у гілку `gh-pages`, щоразу, коли оновлюється гілка `main`. Наприклад,
після прямого пуша або прийнятого пул-реквесту. Для цього необхідно у файлі
`package.json` змінити значення прапора `--base=/<REPO>/`, для команди `build`,
замінивши `<REPO>` на назву свого репозиторію, та відправити зміни на GitHub.

```json
"build": "vite build --base=/<REPO>/",
```

Далі необхідно зайти в налаштування GitHub-репозиторію (`Settings` > `Pages`) та
виставити роздачу продакшн версії файлів з папки `/root` гілки `gh-pages`, якщо
це не було зроблено автоматично.

![GitHub Pages settings](./assets/repo-settings.png)

### Статус деплою

Статус деплою крайнього коміту відображається іконкою біля його ідентифікатора.

- **Жовтий колір** - виконується збірка та деплой проекту.
- **Зелений колір** - деплой завершився успішно.
- **Червоний колір** - під час лінтингу, збірки чи деплою сталася помилка.

Більш детальну інформацію про статус можна переглянути натиснувши на іконку, і в
вікні, що випадає, перейти за посиланням `Details`.

![Deployment status](./assets/deploy-status.png)

### Жива сторінка

Через якийсь час, зазвичай кілька хвилин, живу сторінку можна буде подивитися за
адресою, вказаною на вкладці `Settings` > `Pages` в налаштуваннях репозиторію.
Наприклад, ось посилання на живу версію для цього репозиторію

[https://goitacademy.github.io/vanilla-app-template/](https://goitacademy.github.io/vanilla-app-template/).

Якщо відкриється порожня сторінка, переконайся, що у вкладці `Console` немає
помилок пов'язаних з неправильними шляхами до CSS та JS файлів проекту
(**404**). Швидше за все у тебе неправильне значення прапора `--base` для
команди `build` у файлі `package.json`.

## Як це працює

![How it works](./assets/how-it-works.png)

1. Після кожного пуша у гілку `main` GitHub-репозиторію, запускається
   спеціальний скрипт (GitHub Action) із файлу `.github/workflows/deploy.yml`.
2. Усі файли репозиторію копіюються на сервер, де проект ініціалізується та
   проходить лінтинг та збірку перед деплоєм.
3. Якщо всі кроки пройшли успішно, зібрана продакшн версія файлів проекту
   відправляється у гілку `gh-pages`. В іншому випадку, у лозі виконання скрипта
   буде вказано в чому проблема.
