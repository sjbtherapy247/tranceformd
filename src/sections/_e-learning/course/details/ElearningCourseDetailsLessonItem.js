import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Accordion, Typography, AccordionSummary, AccordionDetails } from '@mui/material';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  '&.Mui-expanded': {
    overflow: 'hidden',
    borderRadius: '8px !important',
    marginBottom: theme.spacing(2.5),
    boxShadow: theme.customShadows.z16,
  },
}));

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  '&.Mui-expanded': {
    minHeight: 'auto',
    backgroundColor: theme.palette.action.selected,
  },
  '& .MuiAccordionSummary-content': {
    margin: theme.spacing(2, 0),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
    '&.Mui-expanded': { margin: theme.spacing(2, 0) },
  },
}));

// ----------------------------------------------------------------------

export default function ElearningCourseDetailsLessonItem({
  lesson,
  expanded,
  selected,
  onExpanded,
  onOpen,
}) {
  const { title, duration, description, isUnLock } = lesson;

  const handleOpen = () => {
    if (!isUnLock) {
      onOpen();
    }
  };

  const playIcon = selected ? 'carbon:pause-outline' : 'carbon:play';

  return (
    <Box sx={{ position: 'relative' }}>
      <Iconify
        width={24}
        icon={isUnLock ? 'carbon:locked' : playIcon}
        onClick={handleOpen}
        sx={{
          mr: 2,
          top: 18,
          left: 8,
          zIndex: 9,
          cursor: 'pointer',
          position: 'absolute',
          ...(selected && {
            color: 'primary.main',
          }),
          ...(isUnLock && {
            color: 'text.disabled',
          }),
        }}
      />

      <StyledAccordion expanded={expanded} onChange={onExpanded} disabled={isUnLock}>
        <StyledAccordionSummary>
          <Typography
            variant="subtitle1"
            sx={{
              flexGrow: 1,
              pl: 3,
              ...(selected && {
                color: 'primary.main',
              }),
            }}
          >
            {title}
          </Typography>

          <Typography variant="body2" sx={{ mr: 2 }}>
            {duration} m
          </Typography>

          <Iconify
            icon={expanded ? 'carbon:chevron-down' : 'carbon:chevron-right'}
            sx={{
              color: 'text.secondary',
              ...(isUnLock && { color: 'text.disabled' }),
            }}
          />
        </StyledAccordionSummary>

        <AccordionDetails sx={{ p: 2 }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {description}
          </Typography>
        </AccordionDetails>
      </StyledAccordion>
    </Box>
  );
}

ElearningCourseDetailsLessonItem.propTypes = {
  expanded: PropTypes.bool,
  lesson: PropTypes.shape({
    description: PropTypes.string,
    duration: PropTypes.number,
    isUnLock: PropTypes.bool,
    title: PropTypes.string,
  }),
  onExpanded: PropTypes.func,
  onOpen: PropTypes.func,
  selected: PropTypes.bool,
};
