// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { CareerJobView } from 'src/sections/_career/view';

// ----------------------------------------------------------------------

CareerJobPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function CareerJobPage() {
  return (
    <>
      <Head>
        <title>Marketing Coordinator | ZONE UI</title>
      </Head>

      <CareerJobView />
    </>
  );
}
