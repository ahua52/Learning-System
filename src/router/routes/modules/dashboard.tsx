import { Suspense, lazy } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { SvgIcon } from '@/components/icon';
import { CircleLoading } from '@/components/loading';

import { AppRouteObject } from '#/router';

const HomePage = lazy(() => import(`@/pages/dashboard/workbench`));

const dashboard: AppRouteObject = {
  // order: 1,
  path: 'home',
  element: (
    <Suspense fallback={<CircleLoading />}>
      <HomePage />
    </Suspense>
  ),
  meta: {
    label: 'sys.menu.home',
    icon: <SvgIcon icon="ic-analysis" className="ant-menu-item-icon" size="24" />,
    key: '/home'
  }
};

export default dashboard;
