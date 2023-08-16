# Server-Side Rendering (SSR)

Server-Side Rendering (SSR) is a mechanism that allows rendering your web application on the server before sending it to the client. This provides improved performance and better interaction with search engines.

## Running SSR

To run SSR, execute the following command:

```
node webpack production ssr && node public/server.js
```

## Webpack Configuration

For configuring SSR in the `@steroidsjs/webpack` configuration, you can pass several parameters:

- `serverPath`: The path to the file that initiates SSR. By default, it's `node_modules/@steroidsjs/ssr/index.ts`.
- `applicationPath`: The file exporting the `Application` component and the `config` variable. The `config` variable contains configuration of type `IApplicationHookConfig` for the `useApplication` hook. SSR won't work without this data. Default is `src/Application.tsx`.
- `initActionPath`: The file exporting the `initAction` function. This function is passed to the `useLayout` hook and is required for the initial data loading from the backend and application initialization. Default is `src/shared/Layout/Layout.tsx`.
- `ssr`: Additional Webpack configuration for server build. Default is `{}`.
- `languages`: Application languages in priority order. These are used for SSR to understand which translation to send to the client based on the `accept-language` header. Default is `['en']`.

Example:

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

## Data Preloading

During server-side rendering, you can preload data for the `useFetch` hook and the `List` component. To achieve this:

1. Extract props from `useFetch` / `List` into constants.
2. In the route tree for the relevant page, specify the `preloadData` field, which contains a function taking URL parameters and returning an array with props.

The `useFetch` hook and the `List` component won't reinitialize or make requests on the client if the preloaded data exists.

Example:

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

Make sure to pass `List` component props to `preloadData`, even if `items` don't need to be loaded from the backend. Otherwise, the component won't render on the server.

## HTML Tags

To add HTML tags such as `title`, `meta`, `script`, `link`, `styles`, and `noscript`, use the `@steroidsjs/core/ui/layout/Meta` component. Tags common to the entire site can be specified in the `Layout` component, while tags specific to each page should be set in page components (i.e., `title`, `description`, etc.), which will override the common tags.

Example:

```tsx
<Meta
  title={__('Page Title')}
  description={__('Page Description')}
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