
import App from './components/App'
import Index from './components/Index'
import PostList from './components/PostList'
import Post from './components/Post'

const baseurl = '/fornewyork/'

const routes = [
  {
    path: baseurl,
    component: App,
    indexRoute: {
      component: Index
    },
    childRoutes: [
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

