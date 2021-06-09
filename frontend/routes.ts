import { Route } from '@vaadin/router';
import './views/helloworld/hello-world-view';
import './views/main/main-view';

export type ViewRoute = Route & { title?: string; children?: ViewRoute[] };

export const views: ViewRoute[] = [
  // place routes below (more info https://vaadin.com/docs/latest/fusion/routing/overview)
  {
    path: '',
    component: 'hello-world-view',
    title: '',
  },
  {
    path: 'hello',
    component: 'hello-world-view',
    title: 'Hello World',
  },
  {
    path: 'about',
    component: 'about-view',
    title: 'About',
    action: async () => {
      await import('./views/about/about-view');
    },
  },
  {
    path: 'card-list',
    component: 'card-list-view',
    title: 'Card List',
    action: async () => {
      await import('./views/cardlist/card-list-view');
    },
  },
  {
    path: 'list',
    component: 'list-view',
    title: 'List',
    action: async () => {
      await import('./views/list/list-view');
    },
  },
  {
    path: 'master-detail',
    component: 'master-detail-view',
    title: 'Master-Detail',
    action: async () => {
      await import('./views/masterdetail/master-detail-view');
    },
  },
  {
    path: 'person-form',
    component: 'person-form-view',
    title: 'Person Form',
    action: async () => {
      await import('./views/personform/person-form-view');
    },
  },
  {
    path: 'address-form',
    component: 'address-form-view',
    title: 'Address Form',
    action: async () => {
      await import('./views/addressform/address-form-view');
    },
  },
  {
    path: 'credit-card-form',
    component: 'credit-card-form-view',
    title: 'Credit Card Form',
    action: async () => {
      await import('./views/creditcardform/credit-card-form-view');
    },
  },
  {
    path: 'map',
    component: 'map-view',
    title: 'Map',
    action: async () => {
      await import('./views/map/map-view');
    },
  },
  {
    path: 'editor',
    component: 'editor-view',
    title: 'Editor',
    action: async () => {
      await import('./views/editor/editor-view');
    },
  },
  {
    path: 'image-list',
    component: 'image-list-view',
    title: 'Image List',
    action: async () => {
      await import('./views/imagelist/image-list-view');
    },
  },
];
export const routes: ViewRoute[] = [
  {
    path: '',
    component: 'main-view',
    children: [...views],
  },
];
