import React from 'react';

// components
import HeaderBreadcrumbs from 'src/components/headerBreadcrumbs';
import AccountGeneral from 'src/components/_main/profile/edit/accountGeneral';

// Meta information
export const metadata = {
  title: 'Setting - FemmeFlair',
  applicationName: 'FemmeFlair',
  authors: 'FemmeFlair'
};
export default function page() {
  return (
    <div>
      <HeaderBreadcrumbs
        heading="Dashboard"
        admin
        links={[
          {
            name: 'Dashboard',
            href: '/admin/dashboard'
          },
          {
            name: 'Settings'
          }
        ]}
      />
      <AccountGeneral />
    </div>
  );
}
