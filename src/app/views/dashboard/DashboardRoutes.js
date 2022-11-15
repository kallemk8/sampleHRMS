import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';
import Designation from '../department/Designation';

const Analytics = Loadable(lazy(() => import('./Analytics')));
const Department = Loadable(lazy(() => import('./../department/department')));

const dashboardRoutes = [
  { path: '/dashboard/default', element: <Analytics />, auth: authRoles.admin },
  { path: '/company/department', element: <Department />, auth: authRoles.admin },
  { path: '/company/designation', element: <Designation />, auth: authRoles.admin },
];

export default dashboardRoutes;
