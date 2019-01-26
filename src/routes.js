import React from 'react';

const Admin1 = React.lazy(() => import('./containers/Admin1'));
const Admin2 = React.lazy(() => import('./containers/Admin2'));
const Admin3 = React.lazy(() => import('./containers/Admin3'));
const Admin4 = React.lazy(() => import('./containers/Admin4'));

const routes = [
    { path: '/', exact: true, name: 'Admin1', component: Admin1 },
    { path: '/admin2', name: 'Admin2', component: Admin2 },
    { path: '/admin3', name: 'Admin3', component: Admin3 },
    { path: '/admin4', name: 'Admin4', component: Admin4 },
];

export default routes;