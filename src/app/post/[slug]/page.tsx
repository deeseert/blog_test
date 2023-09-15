import Post from '@/app/components/Post';
import postsJSON from '../../../../data/posts.json';

interface Props {
    params: {
        slug: string;
    };
    searchParams: {};
}

const fetchPost = (slug: string) => {
    const posts = postsJSON;
    const post = posts.find((post) => post.slug === slug);
    return post;
};

const PostPage = ({ params: { slug } }: Props) => {
    const post = fetchPost(slug);

    return (
        <main className="p-4 md:p-8 mx-auto max-w-3xl">
            <Post post={post} />
        </main>
    );
};

export default PostPage;
