# React English Dictionary

Англо-русский словарь для изучения React и чтения англоязычной технической документации.

## Демо

https://documentation-dictionary.vercel.app/

## Цель проекта

Основная идея — собрать в одном месте лексику, которая регулярно встречается в React-документации и технических материалах.

Словарь должен помогать не столько переводить отдельные слова, сколько постепенно привыкать к техническому английскому и узнавать термин в контексте.

Поэтому запись словаря содержит:

- английский термин;
- транскрипцию;
- перевод;
- пример употребления на английском;
- перевод примера;
- категорию.

## Стек

- React 19
- Vite
- JavaScript
- Tailwind CSS 4
- Lucide React
- ESLint

## Основной поток данных

```text
categories / words
        ↓
      App
        ↓
   filterWords
        ↓
    WordGrid
        ↓
    WordCard
```

При выборе карточки:

```text
WordCard
   ↓ onClick
WordGrid
   ↓ onWordClick
App
   ↓ setSelectedWord
WordModal
```

## Запуск проекта

Установить зависимости:

```bash
npm install
```

Запустить dev-сервер:

```bash
npm run dev
```

Проверить lint:

```bash
npm run lint
```

Собрать production-версию:

```bash
npm run build
```

Просмотреть production-сборку:

```bash
npm run preview
```

## Статус

Проект находится в активной разработке.
