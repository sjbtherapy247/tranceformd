import PropTypes from 'prop-types';
import { Stack, Avatar, Typography, IconButton } from '@mui/material';
// _mock
import { _socials } from 'src/_mock';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function BlogSidebarAuthor({ author }) {
  const { name, role, picture } = author;

  return (
    <Stack spacing={2} direction="row" sx={{ mb: { md: 5 } }}>
      <Avatar src={picture} sx={{ width: 64, height: 64 }} />

      <Stack>
        <Typography variant="h5">{name}</Typography>

        <Typography variant="body2" sx={{ mt: 0.5, mb: 2, color: 'text.secondary' }}>
          {role}
        </Typography>

        <Stack direction="row">
          {_socials.map((social) => (
            <IconButton key={social.value}>
              <Iconify icon={social.icon} sx={{ color: social.color }} />
            </IconButton>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}

BlogSidebarAuthor.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string,
    picture: PropTypes.string,
    role: PropTypes.string,
  }),
};
