import { createRouter, createWebHistory } from 'vue-router'
import ClassSelectorView from '../views/ClassSelectorView.vue'
import CombatRulesView from '../views/CombatRulesView.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ClassSelectorView,
    },
    {
      path: '/class/:classId',
      name: 'class',
      component: ClassSelectorView,
      props: true,
    },
    {
      path: '/rules',
      name: 'rules',
      component: CombatRulesView,
    },
  ],
})
