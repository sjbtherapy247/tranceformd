import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import { Box, Accordion, Typography, AccordionSummary, AccordionDetails } from '@mui/material';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function SupportContent({ contents }) {
  const [expanded, setExpanded] = useState(false);

  const handleChangeExpanded = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ pl: { md: 10 } }}>
      {contents.map((faq) => (
        <Accordion
          key={faq.id}
          expanded={expanded === faq.question}
          onChange={handleChangeExpanded(faq.question)}
        >
          <AccordionSummary
            sx={{
              '& .MuiAccordionSummary-content': {
                my: 4,
                ...(expanded === faq.question && {
                  mb: 2.5,
                }),
              },
            }}
          >
            <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
              {faq.question}
            </Typography>

            <Iconify
              icon={expanded === faq.question ? 'carbon:chevron-down' : 'carbon:chevron-right'}
            />
          </AccordionSummary>

          <AccordionDetails>
            <Typography sx={{ color: 'text.secondary' }}>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}

SupportContent.propTypes = {
  contents: PropTypes.array,
};
