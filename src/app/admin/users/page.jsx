import React from 'react';

// components
import HeaderBreadcrumbs from 'src/components/headerBreadcrumbs';
import UsersList from 'src/components/_admin/users/userList';

// Meta information
export const metadata = {
  title: 'User - FemmeFlair',
  applicationName: 'FemmeFlair',
  authors: 'FemmeFlair'
};
export default function page() {
  return (
    <>
      <HeaderBreadcrumbs
        admin
        heading="Users List"
        links={[
          {
            name: 'Dashboard',
            href: '/admin/dashboard'
          },
          {
            name: 'Users'
          }
        ]}
      />
      <UsersList />
    </>
  );
}
