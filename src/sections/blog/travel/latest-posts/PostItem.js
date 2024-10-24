import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { Stack, Typography, Link, Avatar } from '@mui/material';
// routes
import { paths } from 'src/routes/paths';
// utils
import { fDate } from 'src/utils/formatTime';
// components
import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';
//
import PostTimeBlock from '../../components/PostTimeBlock';

// ----------------------------------------------------------------------

export default function PostItem({ post }) {
  const { title, duration, coverImg, author, createdAt } = post;

  return (
    <Stack spacing={2.5}>
      <Image src={coverImg} alt={title} ratio="1/1" sx={{ borderRadius: 2 }} />

      <Stack spacing={1}>
        <PostTimeBlock createdAt={fDate(createdAt)} duration={duration} />

        <Link component={NextLink} href={paths.travel.post} color="inherit">
          <TextMaxLine variant="h6" persistent>
            {title}
          </TextMaxLine>
        </Link>
      </Stack>

      <Stack spacing={1} direction="row" alignItems="center">
        <Avatar src={author.picture} sx={{ width: 32, height: 32 }} />
        <Typography variant="body2">{author.name}</Typography>
      </Stack>
    </Stack>
  );
}

PostItem.propTypes = {
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
    duration: PropTypes.string,
    title: PropTypes.string,
  }),
};
