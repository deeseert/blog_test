import Posts from './components/Posts'
import postsJSON from '../../data/posts.json';

function PostsPage() {
  return (
    <main>
      <Posts posts={postsJSON} />
    </main>
  )
}

export default PostsPage;