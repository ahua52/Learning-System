import { faker } from '@faker-js/faker';

import { BasicStatus, PermissionType } from '#/enum';


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
  name: 'About',
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
  order: 4,
  children: [
    {
      id: '2478488238255411',
      parentId: '2271615060673773',
      label: 'sys.menu.grade7',
      name: 'Grade7',
      type: PermissionType.MENU,
      route: 'grade7',
      component: '/grade/index.tsx',
    },
    {
      id: '20135770744679571',
      parentId: '2271615060673773',
      label: 'sys.menu.videocourse',
      name: 'videocourse',
      hide: true,
      type: PermissionType.MENU,
      route: 'videocourse',
      component: '/grade/video-player.tsx',
    },
    {
      id: '6755238352318767',
      parentId: '2271615060673773',
      label: 'sys.menu.grade8',
      name: 'Grade8',
      type: PermissionType.MENU,
      route: 'grade8',
      component: '/grade/index.tsx',
    },
    {
      id: '9992476513546805',
      parentId: '2271615060673773',
      label: 'sys.menu.grade9',
      name: 'Grade9',
      type: PermissionType.MENU,
      route: 'grade9',
      component: '/grade/index.tsx',
    },
    {
      id: '2122547769468069',
      parentId: '2271615060673773',
      label: 'sys.menu.grade10',
      name: 'Grade10',
      type: PermissionType.MENU,
      route: 'grade10',
      component: '/grade/index.tsx',
    },
    {
      id: '2501920741714350',
      parentId: '2271615060673773',
      label: 'sys.menu.grade11',
      name: 'Grade11',
      type: PermissionType.MENU,
      route: 'grade11',
      component: '/grade/index.tsx',
    },
    {
      id: '2013577074467956',
      parentId: '2271615060673773',
      label: 'sys.menu.grade12',
      name: 'Grade12',
      type: PermissionType.MENU,
      route: 'grade12',
      component: '/grade/index.tsx',
    }
  ],
};
const EFATEAM_PERMISSION = {
  id: '8132044808088488',
  parentId: '',
  label: 'sys.menu.efateam',
  name: 'efateam',
  type: PermissionType.MENU,
  route: 'efateam',
  order: 3,
  component: '/functions/index.tsx',
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
    component: '/apply/index.tsx',
  },
  {
    id: '7728048658221587',
    parentId: '',
    label: 'sys.menu.contact',
    name: 'Contact',
    type: PermissionType.MENU,  // tag new feature
    route: 'contact',
    // newFeature: true,
    component: '/contact/index.tsx',
  }
];

export const PERMISSION_LIST = [
  HOME_PERMISSION, //1
  ABOUT_PERMISSION, //2
  COMPONENTS_PERMISSION, //3
  EFATEAM_PERMISSION, //4
  Activities_PERMISSION, //5
  MANAGEMENT_PERMISSION, //6
  ...OTHERS_PERMISSION, //7
];


/**
 * User role mock  加入数据库
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
