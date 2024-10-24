import PropTypes from 'prop-types';
// @mui
import { Box, TableRow, Checkbox, TableCell, TableHead, TableSortLabel } from '@mui/material';
//
import { visuallyHidden } from './utils';

// ----------------------------------------------------------------------

export default function EcommerceAccountOrdersTableHead({
  order,
  onSort,
  orderBy,
  rowCount,
  headCells,
  numSelected,
  onSelectAllRows,
}) {
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllRows}
          />
        </TableCell>

        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'normal' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{ width: headCell.width, minWidth: headCell.minWidth }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={() => onSort(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EcommerceAccountOrdersTableHead.propTypes = {
  headCells: PropTypes.array,
  numSelected: PropTypes.number,
  onSelectAllRows: PropTypes.func,
  onSort: PropTypes.func,
  order: PropTypes.string,
  orderBy: PropTypes.string,
  rowCount: PropTypes.number,
};
