'use client';
import React from 'react';
import Link from 'next/link';
// mui
import { Box, Typography, Grid, Button, Container, Stack } from '@mui/material';
// icons
import { IoIosArrowForward } from 'react-icons/io';

// blur image
// import bannerImg from '../../../../../public/images/new-banner.webp';
import bannerImg from '../../../../../public/images/newbanner.jpg';
// components
import BlurImage from 'src/components/blurImage';

export default function Banner() {
  return (
    <Box
      sx={{
        mt: 2,
        overflow: 'hidden',
        position: 'relative',
        display: { md: 'block', xs: 'none' }
      }}
    >
      <Box
        sx={{
          mt: 1,
          py: 12,
          position: 'relative'
        }}
      >
        <BlurImage
          src={bannerImg}
          alt="banner-3"
          placeholder="blur"
          layout="fill"
          static
          sizes="700px"
          objectFit="cover"
        />
        <Container maxWidth="xl">
          <Grid container alignItems="center" spacing={0}>
            <Grid item xs={6} md={6}>
              <Stack spacing={2}>
                <Typography sx={{ zIndex: 11 }} variant="h2" fontWeight={700}>
                Celebrate Your Unique Style !
                </Typography>
                <Typography sx={{ zIndex: 11 }} variant="body1" color="text.success">
                "Discover a curated collection of fashion that blends comfort, elegance, and the latest trends to empower every woman’s unique style. Each piece is thoughtfully designed to inspire confidence and make you feel your best, every day."
                </Typography>
                <Box>
                  <Button
                    component={Link}
                    href="/products"
                    variant="contained"
                    // color="secondary"
                    color={'primary'}
                    size="large"
                    endIcon={<IoIosArrowForward />}
                    sx={{
                      borderRadius: 6
                    }}
                  >
                    View more
                  </Button>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
