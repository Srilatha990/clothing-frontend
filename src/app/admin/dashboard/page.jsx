import React from 'react';

// components
import Dashboard from 'src/components/_admin/dashboard';

// Meta information
export const metadata = {
  title: 'FemmeFlair - Dashboard',
  description: 'Welcome to the FemmeFlair Dashboard. Manage your e-commerce operations with ease.',
  applicationName: 'FemmeFlair Dashboard',
  authors: 'FemmeFlair',
  keywords: 'dashboard, e-commerce, management, FemmeFlair',
  icons: {
    icon: '/icon.jpg'
  }
};

export default function page() {
  return (
    <>
      <Dashboard />
    </>
  );
}
