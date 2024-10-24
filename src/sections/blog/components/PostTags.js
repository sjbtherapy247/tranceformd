// @mui
import PropTypes from 'prop-types';
import { Chip, Stack, Typography } from '@mui/material';

// ----------------------------------------------------------------------

export default function PostTags({ tags }) {
  return (
    <Stack direction="row" alignItems="center" flexWrap="wrap" sx={{ mt: 5 }}>
      <Typography variant="subtitle2" sx={{ mr: 1 }}>
        Tags:
      </Typography>

      {tags.map((tag) => (
        <Chip key={tag.label} size="small" label={tag.label} sx={{ m: 0.5 }} onClick={() => {}} />
      ))}
    </Stack>
  );
}

PostTags.propTypes = {
  tags: PropTypes.array,
};
