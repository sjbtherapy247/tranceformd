// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { CareerBlogView } from 'src/sections/_career/view';

// ----------------------------------------------------------------------

CareerBlogPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function CareerBlogPage() {
  return (
    <>
      <Head>
        <title>Blog | ZONE UI</title>
      </Head>

      <CareerBlogView />
    </>
  );
}
