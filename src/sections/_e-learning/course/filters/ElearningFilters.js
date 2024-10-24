import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import { Stack, Drawer, Typography, TextField, InputAdornment } from '@mui/material';
// hooks
import useResponsive from 'src/hooks/useResponsive';
// config
import { NAV } from 'src/config-global';
// components
import Iconify from 'src/components/iconify';
//
import {
  ElearningFilterFee,
  ElearningFilterLevel,
  ElearningFilterRating,
  ElearningFilterLanguage,
  ElearningFilterDuration,
  ElearningFilterCategories,
} from './components';

// ----------------------------------------------------------------------

const defaultValues = {
  filterDuration: [],
  filterCategories: [],
  filterRating: null,
  filterFee: [],
  filterLevel: [],
  filterLanguage: [],
};

ElearningFilters.propTypes = {
  mobileOpen: PropTypes.bool,
  onMobileClose: PropTypes.func,
};

export default function ElearningFilters({ mobileOpen, onMobileClose }) {
  const isMdUp = useResponsive('up', 'md');

  const [filters, setFilters] = useState(defaultValues);

  const handleChangeRating = (event) => {
    setFilters({
      ...filters,
      filterRating: event.target.value,
    });
  };

  const handleChangeCategory = (keyword) => {
    setFilters({
      ...filters,
      filterCategories: keyword,
    });
  };

  const handleChangeLevel = (event) => {
    const {
      target: { value },
    } = event;
    setFilters({
      ...filters,
      filterLevel: typeof value === 'string' ? value.split(',') : value,
    });
  };

  const handleChangeFee = (event) => {
    const {
      target: { value },
    } = event;
    setFilters({
      ...filters,
      filterFee: typeof value === 'string' ? value.split(',') : value,
    });
  };

  const handleChangeDuration = (event) => {
    const {
      target: { value },
    } = event;
    setFilters({
      ...filters,
      filterDuration: typeof value === 'string' ? value.split(',') : value,
    });
  };

  const handleChangeLanguage = (keyword) => {
    setFilters({
      ...filters,
      filterLanguage: keyword,
    });
  };

  const renderContent = (
    <Stack
      spacing={2.5}
      sx={{
        flexShrink: 0,
        width: { xs: 1, md: NAV.W_DRAWER },
      }}
    >
      <TextField
        fullWidth
        hiddenLabel
        placeholder="Search..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Iconify icon="carbon:search" width={24} sx={{ color: 'text.disabled' }} />
            </InputAdornment>
          ),
        }}
      />

      <Block title="Ratings">
        <ElearningFilterRating
          filterRating={filters.filterRating}
          onChangeRating={handleChangeRating}
        />
      </Block>

      <Block title="Duration">
        <ElearningFilterDuration
          filterDuration={filters.filterDuration}
          onChangeDuration={handleChangeDuration}
        />
      </Block>

      <Block title="Category">
        <ElearningFilterCategories
          filterCategories={filters.filterCategories}
          onChangeCategory={handleChangeCategory}
        />
      </Block>

      <Block title="Level">
        <ElearningFilterLevel filterLevel={filters.filterLevel} onChangeLevel={handleChangeLevel} />
      </Block>

      <Block title="Fee">
        <ElearningFilterFee filterFee={filters.filterFee} onChangeFee={handleChangeFee} />
      </Block>

      <Block title="Language">
        <ElearningFilterLanguage
          filterLanguage={filters.filterLanguage}
          onChangeLanguage={handleChangeLanguage}
        />
      </Block>
    </Stack>
  );

  return (
    <>
      {isMdUp ? (
        renderContent
      ) : (
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={onMobileClose}
          ModalProps={{ keepMounted: true }}
          PaperProps={{
            sx: {
              pt: 5,
              px: 3,
              width: NAV.W_DRAWER,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </>
  );
}

// ----------------------------------------------------------------------

Block.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

function Block({ title, children }) {
  return (
    <Stack spacing={1.5}>
      <Typography variant="overline" sx={{ color: 'text.disabled' }}>
        {title}
      </Typography>

      {children}
    </Stack>
  );
}
