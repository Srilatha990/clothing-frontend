import React from 'react';

// components
import ProductList from 'src/components/_admin/products/productList';
import HeaderBreadcrumbs from 'src/components/headerBreadcrumbs';

// Meta information
export const metadata = {
  title: 'Products - FemmeFlair',
  applicationName: 'FemmeFlair',
  authors: 'FemmeFlair'
};
export default async function AdminProducts() {
  return (
    <>
      <HeaderBreadcrumbs
        admin
        heading="Categories List"
        links={[
          {
            name: 'Dashboard',
            href: '/'
          },
          {
            name: 'Products'
          }
        ]}
        action={{
          href: `/vendor/products/add`,
          title: 'Add Product'
        }}
      />
      <ProductList isVendor />
    </>
  );
}
