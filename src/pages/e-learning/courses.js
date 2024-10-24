// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { ElearningCoursesView } from 'src/sections/_e-learning/view';

// ----------------------------------------------------------------------

ElearningCoursesPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function ElearningCoursesPage() {
  return (
    <>
      <Head>
        <title>Courses | ZONE UI</title>
      </Head>

      <ElearningCoursesView />
    </>
  );
}
