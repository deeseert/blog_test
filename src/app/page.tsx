import Posts from './components/Posts'
import postsJSON from '../../data/posts.json';

const PostsPage = () => {
  return (
    <main className="p-4 md:p-8 mx-auto max-w-3xl">
      <Posts posts={postsJSON} />
    </main>
  )
}

export default PostsPage;