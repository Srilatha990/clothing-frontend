import React from 'react';

// Components
import CompaignList from 'src/components/_admin/compaigns/compaignList';
import HeaderBreadcrumbs from 'src/components/headerBreadcrumbs';

// Meta information
export const metadata = {
  title: 'Deals - FemmeFlair',
  applicationName: 'FemmeFlair',
  authors: 'FemmeFlair'
};
export default function Compaigns() {
  return (
    <>
      <HeaderBreadcrumbs
        admin
        heading="Deals List"
        links={[
          {
            name: 'Admin Dashboard',
            href: '/admin/dashboard'
          },
          {
            name: 'Deals'
          }
        ]}
        action={{
          href: `/admin/compaigns/add`,
          title: 'Add Compaign'
        }}
      />
      <CompaignList />
    </>
  );
}
