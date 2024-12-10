'use client';
import React from 'react';
// material ui
import { Box, Grid, Stack, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
// images
import AboutImage from '../../../../public/images/about-banner.jpg';
import AboutImage2 from '../../../../public/images/about-banner1.jpg';
// components
import WhyUs from '../home/whyUs';
import Team from './team';

const Data = [
  {
    name: 'Vendors',
    range: '65k+',
    description: 'Contrary to popular belief, Lorem is not simply random text.'
  },
  {
    name: 'Earnings',
    range: '$45B+',
    description: 'Contrary to popular belief, Lorem is not simply random text.'
  },
  {
    name: 'Sold',
    range: '25M+',
    description: 'Contrary to popular belief, Lorem is not simply random text.'
  },
  {
    name: 'Products',
    range: '70k+',
    description: 'Contrary to popular belief, Lorem is not simply random text.'
  }
];

export default function Index() {
  const theme = useTheme();

  return (
    <>
      <Box sx={{ my: 8 }}>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <Stack direction="row" spacing={3} mt={5}>
              <Box sx={{ position: 'relative', width: '100%', height: 418, borderRadius: 4, overflow: 'hidden' }}>
                <Image src={AboutImage} alt="" fill placeholder="blur" objectFit="cover" />
              </Box>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: 418,
                  borderRadius: 4,
                  overflow: 'hidden',
                  transform: 'translateY(-40px)'
                }}
              >
                <Image src={AboutImage2} alt="" fill placeholder="blur" objectFit="cover" />
              </Box>
            </Stack>
          </Grid>
          <Grid item md={6} xs={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="h6" fontSize="16px" textTransform="uppercase" color="primary">
              Who We Are?
            </Typography>
            <Typography variant="h2" fontWeight={800}>
              Creating a World Where Fashion is a Lifestyle
            </Typography>
            <Typography variant="body1" fontWeight={400} color="text.secondary" mt={2}>
            Explore our online store for exquisite Indian traditional wear, featuring a wide range of sarees, kurtas, and lehengas, crafted with the finest fabrics and attention to detail. We pride ourselves on offering top-quality products that ensure 100% customer satisfaction. From timeless classics to contemporary designs, we bring you the best in women’s traditional styling, perfect for every celebration and occasion.Our collection celebrates the rich heritage of Indian fashion with elegant designs that blend tradition and modern flair. Each piece is carefully curated for comfort, quality, and style, ensuring you feel confident and beautiful. Shop with us for a seamless experience and enjoy fast delivery, hassle-free returns, and exceptional customer care "Whether you're dressing for a wedding, festival, or any special occasion, our clothing is designed to make you shine. We offer a wide variety of sizes and styles, ensuring every woman can find her perfect fit and look.""
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ marginTop: 5 }}>
          <Typography variant="h3" fontWeight={700} textAlign="center">
            Our Services
          </Typography>
          <Typography
            variant="body1"
            fontWeight={400}
            color="text.secondary"
            sx={{ maxWidth: 350, textAlign: 'center', mx: 'auto' }}
          >
            Customer service should not be a department. It should be the entire company.
          </Typography>
        </Box>
      </Box>
      {/* WhyUs  */}
      <WhyUs />
      <Box sx={{ marginY: { md: 10, sm: 8, xs: 5 } }}>
        <Grid container spacing={3}>
          {Data.map((item, idx) => (
            <Grid item md={3} sm={6} xs={12} key={Math.random()}>
              <Stack
                textAlign="center"
                sx={{ border: `1px solid ${theme.palette.divider}`, borderRadius: 2, p: 2 }}
                key={idx}
              >
                <Typography variant="h3" color="text.secondary">
                  {item.range}
                </Typography>
                <Typography variant="h3" color="text.primary">
                  {item.name}
                </Typography>
                <Typography
                  variant="body1"
                  fontWeight={400}
                  color="text.secondary"
                  sx={{ maxWidth: 350, textAlign: 'center', mx: 'auto' }}
                >
                  {item.description}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ paddingBottom: 10 }}>
        <Typography variant="h3" fontWeight={700} textAlign="center">
          Our Team
        </Typography>
        <Typography
          variant="body1"
          fontWeight={400}
          color="text.secondary"
          sx={{ maxWidth: 350, textAlign: 'center', mx: 'auto' }}
        >
          Meet out expert team members.
        </Typography>
        <Grid container spacing={3} mt={5}>
          {[1, 2, 3, 4].map((index) => (
            <Grid item md={3} sm={2} xs={6} key={index}>
              <Team />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
