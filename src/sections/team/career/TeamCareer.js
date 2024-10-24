// @mui
import PropTypes from 'prop-types';
import { Typography, Stack, Box } from '@mui/material';
//
import TeamMember from './TeamMember';

// ----------------------------------------------------------------------

export default function TeamCareer({ members }) {
  return (
    <Stack
      sx={{
        pt: { xs: 5, md: 10 },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          mx: 'auto',
          maxWidth: 480,
          textAlign: 'center',
          mb: { xs: 8, md: 10 },
        }}
      >
        <Typography variant="h2">Our Team</Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis
          ante odio sit amet eros.
        </Typography>
      </Stack>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {members.map((member) => (
          <TeamMember key={member.id} member={member} />
        ))}
      </Box>
    </Stack>
  );
}

TeamCareer.propTypes = {
  members: PropTypes.array,
};
