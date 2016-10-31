export default [
  {
    path: '/',
    name: 'login-page',
    component: require('components/LoginPageView')
  },
  {
    path: '/home',
    name: 'home-page',
    component: require('components/HomeView'),
    children: [
      {
        path: 'following',
        component: require('components/HomeView/Following'),
        name: 'following'
      },
      {
        path: 'followers',
        component: require('components/HomeView/Followers'),
        name: 'followers'
      },
      {
        path: 'browse',
        component: require('components/HomeView/Browse'),
        name: 'browse'
      }
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
]
