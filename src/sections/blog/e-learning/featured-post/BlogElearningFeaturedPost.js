import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { Typography, Container, Stack, Avatar, Link, Box } from '@mui/material';
// routes
import { paths } from 'src/routes/paths';
// utils
import { fDate } from 'src/utils/formatTime';
// components
import Image from 'src/components/image';
//
import PostTimeBlock from '../../components/PostTimeBlock';

// ----------------------------------------------------------------------

export default function BlogElearningFeaturedPost({ post }) {
  const { title, duration, coverImg, description, author, createdAt } = post;

  return (
    <Box
      sx={{
        bgcolor: 'background.neutral',
        py: { xs: 8, md: 10 },
      }}
    >
      <Container>
        <Stack direction={{ xs: 'column', md: 'row' }}>
          <Image src={coverImg} alt={title} sx={{ flexGrow: 1, height: 560, borderRadius: 2 }} />

          <Stack
            spacing={1}
            sx={{
              mx: 'auto',
              pl: { md: 8 },
              py: { xs: 3, md: 5 },
              maxWidth: { md: 408 },
            }}
          >
            <PostTimeBlock createdAt={fDate(createdAt)} duration={duration} />

            <Link component={NextLink} href={paths.eLearning.post} color="inherit" variant="h3">
              {title}
            </Link>

            <Typography sx={{ color: 'text.secondary', flexGrow: 1 }}>{description}</Typography>

            <Stack direction="row" alignItems="center" sx={{ pt: 1.5, typography: 'body2' }}>
              <Avatar src={author.picture} sx={{ mr: 1 }} />
              {author.name}
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

BlogElearningFeaturedPost.propTypes = {
  post: PropTypes.shape({
    author: PropTypes.shape({
      name: PropTypes.string,
      role: PropTypes.string,
      picture: PropTypes.string,
    }),
    coverImg: PropTypes.string,
    createdAt: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.instanceOf(Date),
    ]),
    description: PropTypes.string,
    duration: PropTypes.string,
    title: PropTypes.string,
  }),
};
