import Link from 'next/link';
import { BlogPost } from '../../types';

interface Props {
    post: BlogPost | undefined;
}
const Posts: React.FC<Props> = async ({ post }) => {
    if (!post) {
        return <div>Not found...</div>;
    }

    return (
        <article>
            <header>
                <h1>{post.title}</h1>
            </header>
            <section>
                <p>{post.content}</p>
            </section>
            <footer>
                <p>By {post.author}</p>
            </footer>
            <Link href={`/`}>Go back</Link>
        </article>
    );
};

export default Posts;
