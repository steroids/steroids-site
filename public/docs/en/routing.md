# Routing

Steroids allows you to define a unified tree of routes for your project, acting as a site map.

In your project, the route tree is typically defined in the `routes/index.ts` file. The root route `root` represents the main page (usually with the address `/`), and nested branches of the tree are defined using `items`. Each page is described by an object conforming to the `IRouteItem` interface.

By setting up this route tree, you gain several advantages:

- You can create links based on route IDs: `<Link toRoute='root'>...</Link>'`.
- You can choose a slice of the tree and render navigation based on it: `<Nav items='profile'/>`.
- Link labels and page titles are derived from the defined route tree.
- The relative path to pages (URL) is described only in the route tree, making it easily changeable without project-wide refactoring.
- Developers can visually see the entire project's structure by opening this file.
- Routes can be assigned roles (roles) to restrict access to pages based on user roles.

Here's an example route tree with three pages: the main page and two profile pages:

```ts
import IndexPage from './IndexPage';
import ProfileGeneral from './ProfileGeneral';
import ProfileSettings from './ProfileSettings';
import { IRouteItem } from '@steroidsjs/core/ui/nav/Router/Router';

export const ROUTE_ROOT = 'root';
export const ROUTE_PROFILE = 'profile';
export const ROUTE_PROFILE_GENERAL = 'profile_general';
export const ROUTE_PROFILE_SETTINGS = 'profile_settings';

export default {
    id: ROUTE_ROOT,
    exact: true,
    path: '/',
    label: __('Main Page'),
    component: IndexPage,
    roles: [null, 'user'], // Visible to guests and authenticated users
    items: {
        [ROUTE_PROFILE]: {
            label: __('Profile'),
            path: '/profile',
            redirectTo: true,
            roles: [null, 'user'], // Visible only to authenticated users
            items: {
                [ROUTE_PROFILE_GENERAL]: {
                    label: __('General Information'),
                    path: '/profile/general',
                    component: ProfileGeneral,
                    // Roles are not specified here, they are inherited from the parent
                },
                [ROUTE_PROFILE_SETTINGS]: {
                    label: __('Settings'),
                    path: '/profile/settings',
                    component: ProfileSettings,
                },
            },
        },
    },
} as IRouteItem;
```

## Route Configuration

The `path` and `exact` parameters are passed directly to React Router. You can find their descriptions in the official documentation: [https://reactrouter.com/web/api/Route/route-props](https://reactrouter.com/web/api/Route/route-props).

## Name and Label

For each route, you can provide a `label` and `title`. The application can decide how to use them, but the initial intention is that `label` is used for link names, and `title` is used for page titles (and if not provided, `label` is used).

## Redirect

To set up automatic redirection to another page, you can use the `redirectTo` property, specifying the `path` to the target page.

Often, you might want to redirect to a child page of a section. For instance, to redirect `/profile` to `/profile/general`, where `general` is one of the profile's child pages. In such cases, you can set `redirectTo` to `true` to redirect to the first child page.