import { Suspense, lazy } from 'react';

import { Outlet } from 'react-router-dom';
import { SvgIcon } from '@/components/icon';

import { Iconify } from '@/components/icon';
import { CircleLoading } from '@/components/loading';

import { AppRouteObject } from '#/router';

const HomePage = lazy(() => import(`@/pages/dashboard/workbench`));
const Calendar = lazy(() => import('@/pages/sys/others/calendar'));
// const ProfilePage = lazy(() => import('@/pages/management/user/profile'));

function Wrapper({ children }: any) {
  return <Suspense fallback={<CircleLoading />}>{children}</Suspense>;
}
const others: AppRouteObject[] = [
  {
    // order: 1,
    path: 'home',
    element: (
      <Suspense fallback={<CircleLoading />}>
        <HomePage />
      </Suspense>
    ),
    meta: {
      label: 'sys.menu.home',
      key: '/home'
    }
  },
  {
    order: 2,
    path: 'about',
    element: (
      <Suspense fallback={<CircleLoading />}>
        <Outlet />
      </Suspense>
    ),
    meta: {
      label: 'sys.menu.about',
      key: '/about',
    }
  },
  {
    order: 3,
    path: 'efateam',
    element: (
      <Suspense fallback={<CircleLoading />}>
        <Outlet />
      </Suspense>
    ),
    meta: {
      label: 'sys.menu.efateam',
      key: '/efateam',
    }
  },
  {
    order: 5,
    path: 'menu_level',
    element: (
      <Suspense fallback={<CircleLoading />}>
        <Outlet />
      </Suspense>
    ),
    meta: {
      label: 'sys.menu.activities',
      icon: <SvgIcon icon="ic-menulevel" className="ant-menu-item-icon" size="24" />,
      key: '/activities',
    }
  },
  {
    path: 'apply',
    element: (
      <Wrapper>
        <Calendar />
      </Wrapper>
    ),
    meta: {
      label: 'sys.menu.apply',
      icon: <Iconify icon="solar:calendar-bold-duotone" size={24} />,
      key: '/apply',
    },
  },
  {
    path: 'contact',
    element: (
      <Wrapper>
        <Outlet />
      </Wrapper>
    ),
    meta: {
      label: 'sys.menu.contact',
      key: '/contact',
    },
  },
  {
    path: 'contact',
    element: (
      <Wrapper>
        <div >contact</div>
      </Wrapper>
    ),
    meta: {
      label: 'sys.menu.contact',
      key: '/contact',
    },
  }
  
];

export default others;
