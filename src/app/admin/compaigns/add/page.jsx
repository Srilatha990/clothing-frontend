import React from 'react';

// components
import AddCompaign from 'src/components/_admin/compaigns/addCompaign';
import HeaderBreadcrumbs from 'src/components/headerBreadcrumbs';

export default function page() {
  return (
    <div>
      <HeaderBreadcrumbs
        admin
        heading="Deals List"
        links={[
          {
            name: 'Admin Dashboard',
            href: '/admin/dashboard'
          },
          {
            name: 'Deals',
            href: '/admin/compaigns'
          },
          {
            name: 'Add Compaign'
          }
        ]}
      />
      <AddCompaign />
    </div>
  );
}
