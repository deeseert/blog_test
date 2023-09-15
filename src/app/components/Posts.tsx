import Link from 'next/link';
import { BlogPost } from '../../types';

interface Props {
    posts: BlogPost[];
}
const Posts: React.FC<Props> = async ({ posts }) => {
    return (
        <section className="p-4 md:p-8">
            <header>
                <h1 className="text-2xl md:text-4xl font-semibold mb-6">
                    Welcome to my blog!
                </h1>
            </header>
            <ul className="space-y-4">
                {posts.map((post) => (
                    <li key={post.id} className="border-b border-gray-200 pb-2">
                        <Link
                            href={`/post/${post.slug}`}
                            className="text-lg hover:text-blue-500"
                        >
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Posts;
