// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { ElearningBlogView } from 'src/sections/_e-learning/view';

// ----------------------------------------------------------------------

ElearningBlogPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function ElearningBlogPage() {
  return (
    <>
      <Head>
        <title>Blog | ZONE UI</title>
      </Head>

      <ElearningBlogView />
    </>
  );
}
