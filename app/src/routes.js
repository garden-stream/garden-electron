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
        path: 'add',
        component: require('components/HomeView/AddContent'),
        name: 'add'
      },
      {
        path: 'user/:user',
        component: require('components/HomeView/UserProfile'),
        name: 'user-profile'
      },
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
        path: 'feed',
        component: require('components/HomeView/Feed'),
        name: 'feed'
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
