import Link from 'next/link';
import { BlogPost } from '../../types';

interface Props {
    post: BlogPost | undefined;
}
const Posts: React.FC<Props> = async ({ post }) => {
    if (!post) {
        return <div className="p-4 text-red-600">Not found...</div>;
    }

    return (
        <article className="p-4 md:p-8">
            <header>
                <h1 className="text-2xl md:text-4xl font-semibold mb-6">
                    {post.title}
                </h1>
            </header>
            <section className="mb-8">
                <p className="text-base leading-relaxed">{post.content}</p>
            </section>
            <footer>
                <p className="text-gray-600">
                    By <span className="font-medium">{post.author}</span>
                </p>
            </footer>
            <div className="mt-4">
                <Link
                    href={`/`}
                    className="border border-gray-300 hover:bg-gray-100 p-2 rounded"
                >
                    Go back
                </Link>
            </div>
        </article>
    );
};

export default Posts;
