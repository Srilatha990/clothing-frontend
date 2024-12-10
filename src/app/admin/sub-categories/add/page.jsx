import React from 'react';

// components
import HeaderBreadcrumbs from 'src/components/headerBreadcrumbs';
import AddSubCategory from 'src/components/_admin/subCategories/addCategory';

// api
import * as api from 'src/services';

export default async function page() {
  const data = await api.getAllCategories();
  if (!data) {
    notFound();
  }
  const { data: categories } = data;
  return (
    <div>
      <HeaderBreadcrumbs
        admin
        heading="Subcategories List"
        links={[
          {
            name: 'Dashboard',
            href: '/admin/dashboard'
          },
          {
            name: 'Subcategories',
            href: '/admin/sub-categories'
          },
          {
            name: 'Add Sub Category'
          }
        ]}
      />
      <AddSubCategory categories={categories} />
    </div>
  );
}
