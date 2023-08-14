# SSR (Server-Side Rendering)

Серверный рендеринг (SSR) - это механизм, позволяющий выполнять рендеринг вашего веб-приложения на сервере перед отправкой его клиенту. Это обеспечивает улучшенную производительность и удобство взаимодействия с поисковыми системами.

## Запуск SSR

Для запуска SSR вам потребуется выполнить следующую команду:

```
node webpack production ssr && node public/server.js
```

## Настройка Webpack

Для настройки SSR в конфигурации `@steroidsjs/webpack` вы можете передать несколько параметров:

- `serverPath`: Путь до файла, в котором запускается SSR. По умолчанию - `node_modules/@steroidsjs/ssr/index.ts`.
- `applicationPath`: Файл, который экспортирует компонент `Application` и переменную `config`. В переменной `config` содержится конфигурация с типом `IApplicationHookConfig` для хука `useApplication`. Без этих данных SSR работать не будет. По умолчанию - `src/Application.tsx`.
- `initActionPath`: Файл, который экспортирует функцию `initAction`. Эта функция передается в хук `useLayout` и нужна для первоначальной подгрузки данных с бэкенда и инициализации приложения. По умолчанию - `src/shared/Layout/Layout.tsx`.
- `ssr`: Дополнительная конфигурация Webpack для серверной сборки. По умолчанию - `{}`.
- `languages`: Языки приложения в порядке приоритета. Нужны, чтобы SSR в зависимости от `accept-language` понимал, какой перевод следует отдать на клиент. По умолчанию - `['en']`.

Пример:

```js
require('@steroidsjs/webpack')
  .config({
    port: 9991,
    sourcePath: __dirname + '/src',
    staticPath: '',
    baseUrl: 'frontend/',
    serverPath: '/node_modules/@steroidsjs/ssr/index.ts',
    applicationPath: 'src/Application.tsx',
    initActionPath: 'src/shared/Layout/Layout.tsx',
    ssr: {
      module: {
        rules: {...}
      }
    },
    languages: ['ru', 'en'],
  })
  .base(__dirname + '/src/index.tsx');
```

## Предзагрузка данных

На этапе серверного рендеринга вы можете подгрузить данные для хука `useFetch` и компонента `List`. Для этого:

1. Вынесите пропсы из `useFetch` / `List` в константы.
2. В дереве роутов для нужной страницы укажите поле `preloadData`, в котором поместите функцию, принимающую параметры URL и возвращающую массив с пропсами.

Хук `useFetch` и компонент `List` не будут повторно инициализироваться и делать запросы на клиенте, если подгруженные данные существуют.

Пример:

```tsx
// 'routes/ProductPage.tsx'
export const fetchConfig = match => ({ url: `/api/products/${match.params.productId}` });
export const listConfig = { listId: 'favoritesList', action: '/api/favorites' };
```

```tsx
// 'routes/index.ts'
import { fetchConfig, listConfig } from './DetailPage';

export default {
    id: ROUTE_ROOT,
    exact: true,
    path: '/',
    title: 'Home',
    component: IndexPage,
    roles,
    items: {
        [ROUTE_PRODUCT_PAGE]: {
            path: '/catalog/:productId',
            component: ProductPage,
            roles,
            preloadData: match => [fetchConfig(match), listConfig],
        },
    },
};
```

Пропсы компонента `List` следует передавать в `preloadData`, даже если `items` не нужно подгружать с бэкенда. Иначе компонент не отрендерится на сервере.

## HTML-теги

Чтобы добавить в HTML-разметку теги `title`, `meta`, `script`, `link`, `styles`, `noscript`, используйте компонент `@steroidsjs/core/ui/layout/Meta`. Общие для всего сайта теги можно указать в компоненте `Layout`, а теги, характерные для каждой страницы, - в

 компонентах страниц (т.е. `title`, `description` и т.п.), они перезапишут общие.

Пример:

```tsx
<Meta
  title={__('Заголовок страницы')}
  description={__('Описание страницы')}
  meta={[
      {
          name: 'yandex-verification',
          content: 'ce38...39e6'
      },
      {
          name: 'google-site-verification',
          content: 'sdf8...39e6'
      }
  ]}
  scripts={[
      {src: 'https://some-script.min.js'},
  ]}
/>
```
