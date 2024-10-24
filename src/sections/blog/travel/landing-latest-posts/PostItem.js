import PropTypes from 'prop-types';
// next
import NextLink from 'next/link';
// @mui
import { Typography, Link, Divider } from '@mui/material';
// utils
import { fDate } from 'src/utils/formatTime';
// routes
import { paths } from 'src/routes/paths';
// components
import TextMaxLine from 'src/components/text-max-line';

// ----------------------------------------------------------------------

export default function PostItem({ post }) {
  const { title, description, createdAt } = post;

  return (
    <div>
      <Typography variant="caption" sx={{ color: 'primary.main' }}>
        {fDate(createdAt)}
      </Typography>

      <Link component={NextLink} href={paths.travel.post} sx={{ color: 'common.white' }}>
        <TextMaxLine variant="h5" sx={{ mt: 1, mb: 2 }}>
          {title}
        </TextMaxLine>
      </Link>

      <TextMaxLine variant="body2" sx={{ color: 'text.secondary' }}>
        {description}
      </TextMaxLine>

      <Divider sx={{ borderStyle: 'dashed', mt: 3 }} />
    </div>
  );
}

PostItem.propTypes = {
  post: PropTypes.shape({
    createdAt: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.instanceOf(Date),
    ]),
    description: PropTypes.string,
    title: PropTypes.string,
  }),
};
