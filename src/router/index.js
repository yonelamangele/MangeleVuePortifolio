import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ResumeView from '../views/ResumeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import TestimonialsView from '../views/TestimonialsView.vue'
import ContactsView from '../views/ContactsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component:AboutView
  },
  {
    path:'/resume',
    name:'resume',
    component: ResumeView
  },
  {
    path:'/projects',
    name:'projects',
    component: ProjectsView
  },
  {
    path:'/testimonials',
    name:'testimonials',
    component: TestimonialsView
  },
  {
    path:'/contacts',
    name:'contacts',
    component: ContactsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
