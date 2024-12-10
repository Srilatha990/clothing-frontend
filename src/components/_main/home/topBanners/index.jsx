'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// mui
import { Box, Card, Grid, Stack, Typography, Button, Container } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
// images
// import banner1Img from '../../../../../public/images/short-banner1.png';
// import banner2Img from '../../../../../public/images/short-banner2.png';
import banner1Img from '../../../../../public/images/kurtisbanner2.jpg';
import banner2Img from '../../../../../public/images/shortbanner2.webp';

export default function Index() {
  const theme = useTheme();
  const isDeskTop = useMediaQuery(theme.breakpoints.up('xl'));
  const isDeskTopBtn = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Box mb={2} mt={2}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item lg={6} md={6} xs={12} sm={6}>
            <Card
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderRadius: '12px',
                height: '100%',
                px: { lg: 3, md: 1 },
                position: 'relative'
              }}
            >
              <Image
                draggable="false"
                src={banner1Img}
                alt="banner-1"
                placeholder="blur"
                layout="fill"
                static
                sizes="100vw"
                objectFit="cover"
              />
              <Stack
                spacing={isDeskTop ? 2 : 1.5}
                sx={{ p: { sm: '24px', xs: '12px', zIndex: 99, position: 'relative' } }}
              >
                <Typography
                  variant={'h4'}
                  lineHeight={1.3}
                  sx={{
                    width: {
                      xl: '320px !important',
                      lg: '300px !important',
                      md: '220px !important',
                      xs: '170px !important'
                    },
                    fontSize: {
                      xl: 23,
                      lg: 23,
                      md: 22,
                      sm: 16,
                      xs: 14
                    },
                    color: {
                      xl: '#E0E0E0',
                      lg: '#E0E0E0',
                      md: '#E0E0E0',
                      sm: '#E0E0E0',
                    },
                  }}
                >
                  {/* Elegant Kurtas for Every Occasion */}
                </Typography>

                <Typography
                  variant={isDeskTop ? 'body1' : 'body2'}
                  mb={2}
                  display={{ md: 'block', xs: 'none' }}
                  width={{ xl: 270 }}
                >
                  {/* A convenient way to access variety of fresh seafood. */}
                </Typography>
                <Box>
                  <Button
                    component={Link}
                    href="/products"
                    variant="contained"
                    color={'primary'}
                    size={isDeskTopBtn ? 'large' : 'small'}
                    sx={{
                      borderRadius: 6,
                      marginTop:'90px',
                      height:'45px',
                      marginLeft:'42px'
                    }}
                  >
                    View Collection
                  </Button>
                </Box>
              </Stack>
            </Card>
          </Grid>
          {/* card 2  */}
          <Grid item lg={6} md={6} xs={12} sm={6}>
            <Card
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderRadius: '12px',
                height: '100%',
                py: { xs: 0, md: 3 },
                px: { lg: 3, md: 1, xs: 1 },
                position: 'relative'
              }}
            >
              <Image
                draggable="false"
                src={banner2Img}
                alt="banner-1"
                placeholder="blur"
                layout="fill"
                static
                sizes="100vw"
                objectFit="cover"
              />

              {/* <div style={{ position: 'relative', height: '80px' }}>  
                <Image
                  draggable="false"
                  src={banner2Img}
                  alt="banner-1"
                  placeholder="blur"
                  layout="fill"
                  static
                  sizes="100vw"
                  objectFit="cover"
                />
              </div> */}


              <Stack spacing={isDeskTop ? 1 : 1.5} sx={{ p: { sm: '24px', xs: '12px', zIndex: 99 } }}>
                <Typography
                  variant={'h4'}
                  lineHeight={1.3}
                  sx={{
                    width: {
                      xl: '320px !important',
                      lg: '300px !important',
                      md: '220px !important',
                      xs: '170px !important'
                    },
                    fontSize: {
                      xl: 25,
                      lg: 25,
                      md: 24,
                      sm: 18,
                      xs: 16
                    }
                  }}
                >
                  {/* Timeless Sarees, Timeless Elegance */}
                </Typography>

                <Typography
                  variant={isDeskTop ? 'body1' : 'body2'}
                  mb={2}
                  display={{ md: 'block', xs: 'none' }}
                  width={{ xl: 270 }}
                >
                  {/* FemmeFlair stores offer a range of options directly from coastal regions. */}
                </Typography>
                <Box>
                  <Button
                    component={Link}
                    href="/products"
                    variant="contained"
                    color={'primary'}
                    size={isDeskTopBtn ? 'large' : 'small'}
                    sx={{
                      borderRadius: 6,
                      marginTop:'90px',
                      height:'45px',
                      marginLeft:'42px'
                    }}
                  >
                    View Collection
                  </Button>
                </Box>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
