import PropTypes from 'prop-types';
// @mui
import {
  Link,
  Stack,
  Avatar,
  Typography,
  CardActionArea,
  Unstable_Grid2 as Grid,
} from '@mui/material';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function PostPrevAndNext({ prevPost, nextPost }) {
  return (
    <Grid container spacing={5} sx={{ py: 8 }}>
      <Grid xs={12} md={6}>
        <PostItem
          title={prevPost?.title}
          coverImg={prevPost?.coverImg}
          icon={<Iconify icon="carbon:chevron-left" width={24} sx={{ color: 'text.disabled' }} />}
        />
      </Grid>

      <Grid xs={12} md={6}>
        <PostItem
          isNext
          title={nextPost?.title}
          coverImg={nextPost?.coverImg}
          icon={<Iconify width={24} icon="carbon:chevron-right" sx={{ color: 'text.disabled' }} />}
        />
      </Grid>
    </Grid>
  );
}

PostPrevAndNext.propTypes = {
  nextPost: PropTypes.object,
  prevPost: PropTypes.object,
};

// ----------------------------------------------------------------------

function PostItem({ coverImg, title, icon, isNext }) {
  return (
    <CardActionArea sx={{ borderRadius: 2 }}>
      <Link color="inherit" underline="none">
        <Stack
          alignItems="center"
          direction={isNext ? 'row-reverse' : 'row'}
          spacing={2}
          sx={{
            p: 2.5,
            pl: 1,
            ...(isNext && {
              pr: 1,
            }),
          }}
        >
          {icon}

          <Avatar src={coverImg} sx={{ width: 64, height: 64 }} />

          <Stack
            spacing={0.5}
            sx={{
              ...(isNext && {
                textAlign: 'right',
              }),
            }}
          >
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>
              {isNext ? 'Next Post' : 'Previous Post'}
            </Typography>

            <Typography variant="subtitle1">{title}</Typography>
          </Stack>
        </Stack>
      </Link>
    </CardActionArea>
  );
}

PostItem.propTypes = {
  coverImg: PropTypes.string,
  icon: PropTypes.node,
  isNext: PropTypes.bool,
  title: PropTypes.string,
};
