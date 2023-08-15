# Overview

Steroids for React is a framework designed for building complex and flexible SPA (Single Page Application) projects using React.

By leveraging traditional libraries, we've created an ecosystem with a well-thought-out architecture that includes features such as routing, authentication, localization, forms, lists, backend integration, state management, and more. This allows for a rapid project start.

## Key Features

- Well-thought-out architecture suitable for a wide range of projects.
- A set of UI components for creating ERP (Enterprise Resource Planning) web applications.
- Components divided into "core" and "view" parts, enabling changes not only to styles but also to JSX markup.
- Usage of pre-defined metadata for entities.
- Written in TypeScript with type definitions.

## Dependencies Used

Under the hood, we utilize familiar libraries to accelerate the developer's immersion:

- [react](https://www.npmjs.com/package/react)
- [redux](https://www.npmjs.com/package/redux)
- [history](https://www.npmjs.com/package/history)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [redux-form](https://www.npmjs.com/package/redux-form)
- [axios](https://www.npmjs.com/package/axios)
- [draft-js](https://www.npmjs.com/package/draft-js)
- [lodash](https://www.npmjs.com/package/lodash)
- [moment](https://www.npmjs.com/package/moment)
- [webpack](https://www.npmjs.com/package/webpack)
- [babel](https://www.npmjs.com/package/babel)
- [storybook](https://www.npmjs.com/package/storybook)

## Supported Environments

- All modern desktop and mobile browsers
- Server-Side Rendering (SSR)
- Electron

Support for older browsers is achieved through polyfills and can be configured using `@babel/preset-env`.

## Installation

Use our provided application template (boilerplate) to kickstart your project: [https://github.com/steroids/boilerplate-react](https://github.com/steroids/boilerplate-react)

Alternatively, install packages using `npm` or `yarn`:

```sh
yarn add @steroidsjs/core @steroidsjs/bootstrap @steroidsjs/webpack
```

## Links

- [Getting Started](getting-started.md)
- [Project Architecture](project-architecture.md)
- [UI Components Architecture](ui-architecture.md)
- [Routing](routes.md)