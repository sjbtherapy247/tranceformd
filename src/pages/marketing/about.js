// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { MarketingAboutView } from 'src/sections/_marketing/view';

// ----------------------------------------------------------------------

MarketingAboutPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function MarketingAboutPage() {
  return (
    <>
      <Head>
        <title>About Us | ZONE UI</title>
      </Head>

      <MarketingAboutView />
    </>
  );
}
