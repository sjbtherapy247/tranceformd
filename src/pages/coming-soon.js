// next
import Head from 'next/head';
// layouts
import CompactLayout from 'src/layouts/compact';
// sections
import { ComingSoonView } from 'src/sections/status/view';

// ----------------------------------------------------------------------

ComingSoonPage.getLayout = (page) => <CompactLayout>{page}</CompactLayout>;

// ----------------------------------------------------------------------

export default function ComingSoonPage() {
  return (
    <>
      <Head>
        <title>Coming Soon | ZONE UI</title>
      </Head>

      <ComingSoonView />
    </>
  );
}
