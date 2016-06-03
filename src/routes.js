
import App from './components/App'
import Index from './components/Index'
import About from './components/About'
import PostList from './components/PostList'
import Post from './components/Post'

const baseurl = '/for-ny/'

const routes = [
  {
    path: baseurl,
    component: App,
    indexRoute: {
      component: Index
    },
    childRoutes: [
      {
        path: 'about',
        component: About
      },
      {
        path: 'posts',
        component: PostList
      },
      {
        path: 'posts/:name',
        component: Post
      }
    ]
  }
]

export default routes
