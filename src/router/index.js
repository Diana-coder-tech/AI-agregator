import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: () => import('../views/Auth/Login.vue') },
  { path: '/register', component: () => import('../views/Auth/Register.vue') },
  { path: '/forgot-password', component: () => import('../views/Auth/ForgotPassword.vue') },
  { path: '/support-request', component: () => import('../views/Auth/SupportRequest.vue') },

  {
    path: '/dashboard',
    component: () => import('../components/layout/Sidebar.vue'),
    children: [
      { path: '', component: () => import('../views/Dashboard/DashboardHome.vue') },
      { path: 'generator/latest', component: () => import('../views/Dashboard/PostGenerator/Latest.vue') },
      { path: 'generator/create', component: () => import('../views/Dashboard/PostGenerator/Create.vue') },
      { path: 'generator/drafts', component: () => import('../views/Dashboard/PostGenerator/Drafts.vue') },
      { path: 'planner/week', component: () => import('../views/Dashboard/Planner/Weekly.vue') },
      { path: 'planner/month', component: () => import('../views/Dashboard/Planner/Monthly.vue') },
      { path: 'library/no-folders', component: () => import('../views/Dashboard/Library/NoFolders.vue') },
      { path: 'library/folders', component: () => import('../views/Dashboard/Library/WithFolders.vue') },
      { path: 'library/batch', component: () => import('../views/Dashboard/Library/BatchSelect.vue') },
      { path: 'reports', component: () => import('../views/Dashboard/Reports/ReportsHome.vue') },
      { path: 'reports/analytics', component: () => import('../views/Dashboard/Reports/Analytics.vue') },
      { path: 'settings/accounts', component: () => import('../views/Dashboard/Settings/Accounts.vue') },
      { path: 'settings/groups', component: () => import('../views/Dashboard/Settings/Groups.vue') },
      { path: 'settings/user-paid', component: () => import('../views/Dashboard/Settings/UserPaid.vue') },
      { path: 'settings/user-unpaid', component: () => import('../views/Dashboard/Settings/UserUnpaid.vue') },
      { path: 'support', component: () => import('../views/Dashboard/Support.vue') }
    ]
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
