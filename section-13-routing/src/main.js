import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    //Define your routes here
    { path: '/', redirect: '/teams' },
    { path: '/teams', component: TeamsList },
    { path: '/users', component: UsersList },
    { path: '/teams/:teamId', component: TeamMembers },
    { path: '/:notFound(.*)', component: NotFound}
  ],
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    return {left: 0, top: 0}
  }
});

// called before each navigation
router.beforeEach(function (to, from, next){
  console.log('Global beforeEach');
  console.log(to, from);
  next();
});

const app = createApp(App)

app.use(router);

app.mount('#app');
