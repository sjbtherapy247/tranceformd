// next
import NextLink from 'next/link';
// fb
import { db } from 'src/lib/createFirebaseApp';
import { update, ref, serverTimestamp, get } from 'firebase/database';
// RHF
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// mui
import { Box, Button, Unstable_Grid2 as Grid, IconButton, InputAdornment, Link, Stack, Typography, alpha, useTheme } from '@mui/material';
import { _socialsSimo } from 'src/_mock';
import Iconify from 'src/components/iconify/Iconify';
// import { useRef, useState } from 'react';
import { useSettingsContext } from 'src/components/settings';
import { RHFTextField } from 'src/components/hook-form';
import FormProvider from 'src/components/hook-form/FormProvider';
import LoadingButton from 'src/theme/overrides/LoadingButton';

const Footer = () => {
  // something
  const theme = useTheme();

  const {
    dispatch,
    state: { alert, modal },
    // clients,
  } = useSettingsContext();

  const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
    fname: Yup.string().required('First name is required').max(20).min(3),
  });
  const methods = useForm({
    resolver: yupResolver(ResetPasswordSchema),
    defaultValues: {
      email: '',
      fname: '',
    },
  });
  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    // all new subscriptions are stored under a timestamp
    let subs = [];
    const getdoc = (await get(ref(db, `InSights/`))).val();
    if (getdoc) {
      subs = Object?.values(getdoc);
      if (subs?.filter((sub) => sub.email === data.email).length !== 0) {
        dispatch({
          type: 'UPDATE_ALERT',
          payload: {
            ...alert,
            open: true,
            severity: 'success',
            message: `Thank you ${data.fname} for subscribing to InSights.  ${data.email} is registered.`,
            duration: 5000,
            posn: 'bottom',
          },
        });
        return;
      }
    }
    update(ref(db, `InSights/${Date.now()}`), { first_name: data.fname, email: data.email, timestamp: serverTimestamp() });
    dispatch({
      type: 'UPDATE_ALERT',
      payload: {
        ...alert,
        open: true,
        severity: 'success',
        message: `Thank you ${data.fname} for subscribing to InSights.  ${data.email} is registered.`,
        duration: 5000,
        posn: 'bottom',
      },
    });
  };

  return (
    <>
      <Grid container justifyContent={{ md: 'space-between' }}>
        <Grid xs={12} md={5.5} sx={{ p: 4, bgcolor: 'background.primary', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Stack spacing={{ xs: 3, md: 5 }}>
            <Box display="grid" gridTemplateColumns="repeat(3, 1fr)">
              <Stack spacing={1} alignItems="center">
                <Link component={NextLink} href="/services" variant="body2" sx={{ color: 'text.primary' }}>
                  Services
                </Link>
                <Link component={NextLink} href="/sitemap.xml" variant="body2" sx={{ color: 'text.primary' }}>
                  Sitemap
                </Link>
              </Stack>
              <Stack spacing={1} alignItems="center">
                <Link component={NextLink} href="/mission" variant="body2" sx={{ color: 'text.primary' }}>
                  Our Mission
                </Link>
                <Link component={NextLink} href="/" variant="body2" sx={{ color: 'text.primary' }}>
                  Privacy
                </Link>
              </Stack>
              <Stack spacing={1} alignItems="center">
                <Link component={NextLink} href="/insights" variant="body2" sx={{ color: 'text.primary' }}>
                  InSights
                </Link>
                <Link component={NextLink} href="/" variant="body2" sx={{ color: 'text.primary' }}>
                  Contact Us
                </Link>
              </Stack>
            </Box>
            <Stack alignItems="flex-start" spacing={0}>
              <Typography variant="body2" textAlign="center" sx={{ color: 'text.secondary', opacity: 0.8 }}>
                Simon Baker is a Sydney based Clinical Hypnotherapist and Strategic Psychotherapist, who will give you the mental edge no matter what you&apos;re here for. Whether it&apos;s for performance, anxiety, weight loss or something else,
                you&apos;re in the right place.{' '}
              </Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                Website by TezD
              </Typography>

              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                © 2022-2024. All rights reserved
              </Typography>
            </Stack>
          </Stack>
        </Grid>

        {/* <Grid xs={12} md={6} sx={{ p: 4, backgroundColor: 'primary.main' }}> */}
        <Grid xs={12} md={6.5} sx={{ p: 4, backgroundColor: alpha(theme.palette.primary.main, 0.1) }}>
          <Stack spacing={2}>
            <Stack spacing={1} sx={{ alignItems: 'center' }}>
              <Typography variant="h5">InSights In Your Inbox</Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                <br />
                The newsletter that will inspire you to continue your improvement journey.
              </Typography>
            </Stack>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={1} direction={{ xs: 'column', sm: 'row' }} justifyContent="center">
                <RHFTextField name="fname" hiddenLabel placeholder="First Name" sx={{ minWidth: 160, maxWidth: 180 }} />
                <RHFTextField
                  name="email"
                  fullWidth
                  aria-label="email"
                  hiddenLabel
                  placeholder="Enter your email"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button type="submit" size="large" color="primary" variant="contained" sx={{ p: 0, height: 53, borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}>
                          <Iconify icon="carbon:send" />
                        </Button>
                      </InputAdornment>
                    ),
                    sx: { pr: 0 },
                  }}
                  // sx={{ maxWidth: 360 }}
                />
              </Stack>
              {/* <FormHelperText id="my-helper-text">We will never share your details.</FormHelperText> */}
            </FormProvider>
          </Stack>

          <Stack direction="row" alignItems="center" justifyContent="center" sx={{ pt: 4 }}>
            <Typography variant="body2" sx={{ letterSpacing: '3px', mr: 3 }}>
              FIND ME ON
            </Typography>
            {_socialsSimo.map((social) => (
              <Link key={social.value} href={social.href} target="_blank">
                <IconButton color="primary">
                  <Iconify icon={social.icon} />
                </IconButton>
              </Link>
            ))}
          </Stack>
        </Grid>
      </Grid>
      {/* <Divider /> */}
      {/* <Container>
        <Stack spacing={2.5} direction="row" justifyContent="space-between" sx={{ py: 2, textAlign: 'center' }}>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            Website by TezD
          </Typography>

          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            © 2023. All rights reserved
          </Typography>

          <Stack direction="row" spacing={3} justifyContent="center">
            <Link variant="caption" sx={{ color: 'text.secondary' }}>
              Privacy
            </Link>

            <Link variant="caption" sx={{ color: 'text.secondary' }}>
              Terms
            </Link>
          </Stack>
        </Stack>
      </Container> */}
    </>
  );
};
export default Footer;
