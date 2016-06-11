
import App from './components/App'
import Index from './components/Index'
import PostList from './components/PostList'
import SemIndex from './components/SemIndex'
import PostIndex from './components/PostIndex'
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
                component: PostIndex
            },
            {
                path: 'posts/:name',
                component: Post
            },
            {
                path: 'about',
                component: SemIndex
            }
        ]
    }
]

export default routes



