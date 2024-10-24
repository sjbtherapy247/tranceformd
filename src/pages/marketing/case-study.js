// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { MarketingCaseStudyView } from 'src/sections/_marketing/view';

// ----------------------------------------------------------------------

MarketingCaseStudyPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function MarketingCaseStudyPage() {
  return (
    <>
      <Head>
        <title>Bank of America - Case Study | ZONE UI</title>
      </Head>

      <MarketingCaseStudyView />
    </>
  );
}
