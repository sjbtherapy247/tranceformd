// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { MarketingServicesView } from 'src/sections/_marketing/view';

// ----------------------------------------------------------------------

MarketingServicesPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function MarketingServicesPage() {
  return (
    <>
      <Head>
        <title>Services | ZONE UI</title>
      </Head>

      <MarketingServicesView />
    </>
  );
}
