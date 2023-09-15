import { BlogPost } from '../../types';

interface Props {
    posts: BlogPost[];
}
const Posts: React.FC<Props> = async ({ posts }) => {
    return (
        <section>
            <header>
                <h1>Blog Posts</h1>
            </header>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <a href={`/post/${post.slug}`}>{post.title}</a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Posts;
