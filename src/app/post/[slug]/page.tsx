import Post from '@/app/components/Post';
import React from 'react';
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
        <main>
            <Post post={post} />
        </main>
    );
};

export default PostPage;
