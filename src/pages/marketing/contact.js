// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { MarketingContactView } from 'src/sections/_marketing/view';

// ----------------------------------------------------------------------

MarketingContactPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function MarketingContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us | ZONE UI</title>
      </Head>

      <MarketingContactView />
    </>
  );
}
