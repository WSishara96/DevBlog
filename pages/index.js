import Head from 'next/head';
import { Categories, PostCard, PostWidget } from '../components';
import { getPosts } from '../services';
import FeaturedPosts from '../section/FeaturedPosts';

// eslint-disable-next-line react/function-component-definition
export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-3 md:px-10 mb-8">
      <Head>
        <title>DevBlog</title>
        <meta name="description" content="DevBlog - Web Development Tutorial Blogger" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FeaturedPosts />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts?.map((post, index) => <PostCard post={post.node} key={index} />)}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

// eslint-disable-next-line react/function-component-definition
export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
