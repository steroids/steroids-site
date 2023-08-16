# UI Components Architecture

Steroids has its own set of high-quality components for building modern web applications. There are many UI kit frameworks out there, such as Material UI, Ant Design, Blueprint, React Bootstrap, and more.

However, Steroids UI Kit has a distinctive feature - separate `core` and `view` parts for each component. This allows you to fully customize the rendering of the component, not just the styles, as suggested by the mentioned frameworks.

## Features and Advantages

- Separate `core` and `view` parts for each component.
- Style customization through SCSS variables.
- You can fully replace both `*.scss` and `*.tsx` component files for customization.
- Easily add your own new components using existing `HOC` wrappers.
- TypeScript interfaces are provided for components and their `view` parts.
- Global configuration (default props) can be set for all components or selected components.
- Components work in conjunction with application components, routing, and Redux, making them "smart" components and enhancing their usability.

## Component Structure

Each UI component (form element, list, modal window, etc.) consists of several logical parts:

1. Core - the heart of the component. It contains all the business logic of the component, receives and processes data from `props`, finds the appropriate `view` component, and passes prepared data to it. The core component does not contain `jsx` code and does not manipulate DOM elements. It can use one or multiple `HOC` components, which also contain business logic.

2. View - the visual representation of the component. This part is responsible for rendering the component. It contains only `jsx` code and `scss` component styles with minimal or no business logic code. When customizing the component, its `*View.tsx` and/or `*View.scss` files can be copied to the project and modified as needed.

## Customizing Components

You can customize the appearance of components using three methods, each building upon the previous method. This guide suggests the following order for determining the customization approach:

**1. Changing SCSS Variables.**

When using the `@steroidsjs/bootstrap` package, which in turn uses the CSS framework [Bootstrap](https://getbootstrap.com/) version 4, you can modify SCSS variables that affect colors, forms, fonts, and various component sizes. In many cases, these variables can get the components close to the desired style. If that's not enough, move on to the next step.

**2. Overriding `*.scss` Files.**

All style files are imported through the `@steroidsjs/bootstrap/index.scss` file in the styles. Copy the necessary component `*.scss` files to the project for overriding (for example, `ButtonView.scss`), duplicate the aforementioned `index.scss` file in the project, and change the import paths. This way, your project structure will look like this:

```
    style
        index.scss - the main style file, in which 'ui/index.scss' is imported
        variables.scss - SCSS variables
    ui
        form
            Button
                ButtonView.scss - overridden style file
        index.scss - copied from node_modules/steroidsjs/bootstrap/index.scss with changed path to ButtonView.scss
```

**3. Overriding `*.tsx` Files.**

If changing styles is not enough and you need to modify the `jsx` code of a component, in this case, fully copy the component's `*.tsx` file. These files are imported when initializing the application in the `Application.tsx` file:

```ts
@application({
    onInit: ({ui}) => {
        ui.addViews(require('ui').default); // Load the overridden list of component "views"
        ui.addFields(require('@steroidsjs/core/ui/form').default);
        ui.addFormatters(require('@steroidsjs/core/ui/format').default);
        ui.addIcons(require('@steroidsjs/bootstrap/icon/fontawesome').default);
    },
})
export default class Application extends React.Component {
    // ...
}
```

Your project structure will look like this:

```
    ui
        form
            Button
                ButtonView.scss - overridden style file
                ButtonView.tsx - overridden file with jsx code
        index.scss
        index.ts - copied from node_modules/steroidsjs/bootstrap/index.ts with changed path to ButtonView.tsx
    Application.tsx - this is where the ui.addViews() call was modified
```