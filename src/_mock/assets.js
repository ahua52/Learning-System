import { faker } from '@faker-js/faker';

import { BasicStatus, PermissionType } from '#/enum';

/**
 * Organization data mock
 */
export const ORG_LIST = [
  {
    id: '1',
    name: 'East China Branch',
    status: 'enable',
    desc: faker.lorem.words(),
    order: 1,
    children: [
      { id: '1-1', name: 'R&D Department', status: 'disable', desc: '', order: 1 },
      { id: '1-2', name: 'Marketing Department', status: 'enable', desc: '', order: 2 },
      { id: '1-3', name: 'Finance Department', status: 'enable', desc: '', order: 3 },
    ],
  },
  {
    id: '2',
    name: 'South China Branch',
    status: 'enable',
    desc: faker.lorem.words(),
    order: 2,
    children: [
      { id: '2-1', name: 'R&D Department', status: 'disable', desc: '', order: 1 },
      { id: '2-2', name: 'Marketing Department', status: 'enable', desc: '', order: 2 },
      { id: '2-3', name: 'Finance Department', status: 'enable', desc: '', order: 3 },
    ],
  },
  {
    id: '3',
    name: 'Northwest Branch',
    status: 'enable',
    desc: faker.lorem.words(),
    order: 3,
    children: [
      { id: '3-1', name: 'R&D Department', status: 'disable', desc: '', order: 1 },
      { id: '3-2', name: 'Marketing Department', status: 'enable', desc: '', order: 2 },
      { id: '3-3', name: 'Finance Department', status: 'enable', desc: '', order: 3 },
    ],
  },
];

/**
 * User permission mock
 */
const HOME_PERMISSION = {
  id: '9100714781927703',
  parentId: '',
  label: 'sys.menu.home',
  name: 'Home',
  type: PermissionType.MENU,
  route: 'home',
  component: '/dashboard/workbench/index.tsx',
  order: 1,
};
const ABOUT_PERMISSION = {
  id: '0901673425580518',
  parentId: '',
  label: 'sys.menu.about',
  name: 'Management',
  type: PermissionType.MENU,
  route: 'about',
  component: '/management/index.tsx',
  order: 2
};
const COMPONENTS_PERMISSION = {
  id: '2271615060673773',
  parentId: '',
  label: 'sys.menu.classes',
  name: 'Classes',
  type: PermissionType.CATALOGUE,
  route: 'classes',
  order: 3,
  children: [
    {
      id: '2478488238255411',
      parentId: '2271615060673773',
      label: 'sys.menu.icon',
      name: 'Icon',
      type: PermissionType.MENU,
      route: 'icon',
      component: '/components/icon/index.tsx',
    },
    {
      id: '6755238352318767',
      parentId: '2271615060673773',
      label: 'sys.menu.animate',
      name: 'Animate',
      type: PermissionType.MENU,
      route: 'animate',
      component: '/components/animate/index.tsx',
    },
    {
      id: '9992476513546805',
      parentId: '2271615060673773',
      label: 'sys.menu.scroll',
      name: 'Scroll',
      type: PermissionType.MENU,
      route: 'scroll',
      component: '/components/scroll/index.tsx',
    },
    {
      id: '1755562695856395',
      parentId: '2271615060673773',
      label: 'sys.menu.markdown',
      name: 'Markdown',
      type: PermissionType.MENU,
      route: 'markdown',
      component: '/components/markdown/index.tsx',
    },
    {
      id: '2122547769468069',
      parentId: '2271615060673773',
      label: 'sys.menu.editor',
      name: 'Editor',
      type: PermissionType.MENU,
      route: 'editor',
      component: '/components/editor/index.tsx',
    },
    {
      id: '2501920741714350',
      parentId: '2271615060673773',
      label: 'sys.menu.i18n',
      name: 'Multi Language',
      type: PermissionType.MENU,
      route: 'i18n',
      component: '/components/multi-language/index.tsx',
    },
    {
      id: '2013577074467956',
      parentId: '2271615060673773',
      label: 'sys.menu.upload',
      name: 'upload',
      type: PermissionType.MENU,
      route: 'Upload',
      component: '/components/upload/index.tsx',
    },
    {
      id: '7749726274771764',
      parentId: '2271615060673773',
      label: 'sys.menu.chart',
      name: 'Chart',
      type: PermissionType.MENU,
      route: 'chart',
      component: '/components/chart/index.tsx',
    },
  ],
};
const EFATEAM_PERMISSION = {
  id: '8132044808088488',
  parentId: '',
  label: 'sys.menu.efateam',
  name: 'efateam',
  type: PermissionType.MENU,
  route: 'efateam',
  order: 4,
  component: '/functions/clipboard/index.tsx',
};
const Activities_PERMISSION = {
  id: '0194818428516575',
  parentId: '',
  label: 'sys.menu.activities',
  name: 'Activities',
  type: PermissionType.MENU,
  route: 'activities',
  component: '/menu-level/index.tsx',
  order: 5,
};
const MANAGEMENT_PERMISSION = {
  id: '0901673425580518',
  parentId: '',
  label: 'sys.menu.management',
  name: 'Management',
  hide: true,
  icon: 'ic-management',
  type: PermissionType.CATALOGUE,
  route: 'management',
  order: 2,
  children: [
    {
      id: '2781684678535711',
      parentId: '0901673425580518',
      label: 'sys.menu.user.index',
      name: 'User',
      type: PermissionType.CATALOGUE,
      route: 'user',
      children: [
        {
          id: '4754063958766648',
          parentId: '2781684678535711',
          label: 'sys.menu.user.profile',
          name: 'Profile',
          type: PermissionType.MENU,
          route: 'profile',
          component: '/management/user/profile/index.tsx',
        },
        {
          id: '2516598794787938',
          parentId: '2781684678535711',
          label: 'sys.menu.user.account',
          name: 'Account',
          type: PermissionType.MENU,
          route: 'account',
          component: '/management/user/account/index.tsx',
        },
      ],
    },
    {
      id: '0249937641030250',
      parentId: '0901673425580518',
      label: 'sys.menu.system.index',
      name: 'System',
      type: PermissionType.CATALOGUE,
      route: 'system',
      children: [
        {
          id: '1985890042972842',
          parentId: '0249937641030250',
          label: 'sys.menu.system.organization',
          name: 'Organization',
          type: PermissionType.MENU,
          route: 'organization',
          component: '/management/system/organization/index.tsx',
        },
        {
          id: '4359580910369984',
          parentId: '0249937641030250',
          label: 'sys.menu.system.permission',
          name: 'Permission',
          type: PermissionType.MENU,
          route: 'permission',
          component: '/management/system/permission/index.tsx',
        },
        {
          id: '1689241785490759',
          parentId: '0249937641030250',
          label: 'sys.menu.system.role',
          name: 'Role',
          type: PermissionType.MENU,
          route: 'role',
          component: '/management/system/role/index.tsx',
        },
        {
          id: '0157880245365433',
          parentId: '0249937641030250',
          label: 'sys.menu.system.user',
          name: 'User',
          type: PermissionType.MENU,
          route: 'user',
          component: '/management/system/user/index.tsx',
        },
      ],
    },
  ],
};
const OTHERS_PERMISSION = [
  {
    id: '3981225257359246',
    parentId: '',
    label: 'sys.menu.apply',
    name: 'Apply',
    type: PermissionType.MENU,
    route: 'apply',
    component: '/sys/others/calendar/index.tsx',
  },
  {
    id: '7728048658221587',
    parentId: '',
    label: 'sys.menu.contact',
    name: 'Contact',
    type: PermissionType.MENU,  // tag new feature
    route: 'contact',
    // newFeature: true,
    component: '/sys/others/blank.tsx',
  }
];

export const PERMISSION_LIST = [
  HOME_PERMISSION,
  ABOUT_PERMISSION,
  COMPONENTS_PERMISSION,
  EFATEAM_PERMISSION,
  Activities_PERMISSION,
  MANAGEMENT_PERMISSION,
  ...OTHERS_PERMISSION,
];

/**
 * User role mock
 */
const ADMIN_ROLE = {
  id: '4281707933534332',
  name: 'Admin',
  label: 'admin',
  status: BasicStatus.ENABLE,
  order: 1,
  desc: 'Super Admin',
  permission: PERMISSION_LIST,
};
const TEST_ROLE = {
  id: '9931665660771476',
  name: 'Test',
  label: 'test',
  status: BasicStatus.ENABLE,
  order: 2,
  desc: 'test',
  permission: [HOME_PERMISSION, COMPONENTS_PERMISSION, EFATEAM_PERMISSION],
};
export const ROLE_LIST = [ADMIN_ROLE, TEST_ROLE];

/**
 * User data mock
 */
export const DEFAULT_USER = {
  id: faker.string.uuid(),
  username: 'admin@gmail.com',
  email: faker.internet.email(),
  avatar: faker.image.avatarLegacy(),
  createdAt: faker.date.anytime(),
  updatedAt: faker.date.recent(),
  password: 'demo1234',
  role: ADMIN_ROLE,
  permissions: ADMIN_ROLE.permission,
};
export const TEST_USER = {
  id: faker.string.uuid(),
  username: 'test@gmail.com',
  password: 'demo1234',
  email: faker.internet.email(),
  avatar: faker.image.avatarLegacy(),
  createdAt: faker.date.anytime(),
  updatedAt: faker.date.recent(),
  role: TEST_ROLE,
  permissions: TEST_ROLE.permission,
};
export const USER_LIST = [DEFAULT_USER, TEST_USER];
