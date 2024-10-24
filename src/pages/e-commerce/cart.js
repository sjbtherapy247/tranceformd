// next
import Head from 'next/head';
// layouts
import MainLayout from 'src/layouts/main';
// sections
import { EcommerceCartView } from 'src/sections/_e-commerce/view';

// ----------------------------------------------------------------------

EcommerceCartPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function EcommerceCartPage() {
  return (
    <>
      <Head>
        <title>Cart | ZONE UI</title>
      </Head>

      <EcommerceCartView />
    </>
  );
}
