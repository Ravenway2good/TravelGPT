export const constantRouterMap = [
    { path: '/', component: () => import('../components/Login'), name: 'Login', meta: {}},
    { path: '/guide', component: () => import('../components/GuidePage'), name: 'GuidePage', meta: {}},
    { path: '/dataAnalysis', component: () => import('../components/DataAnalysisPage'), name: 'DataAnalysisPage', meta: {}},
];
export const asyncRouterMap = [];