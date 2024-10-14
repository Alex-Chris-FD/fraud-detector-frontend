import { useState } from 'react';
import PropTypes from 'prop-types';
import Popover from '@mui/material/Popover';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Iconify from '../components/iconify/Iconify';
import { TableMoreMenu } from '../components/table';
import { Stack } from '@mui/system';


export default function DataTableRow({ row, selected, onSelectRow, onEditRow, onDeleteRow }) {
    const [openMenu, setOpenMenu] = useState(null);

    const handleOpenMenu = (event) => {
        setOpenMenu(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setOpenMenu(null);
    };

    return (
        <TableRow hover selected={selected}>
            <TableCell padding="checkbox">  
                <Checkbox
                    color="primary"
                    checked={selected}
                    onChange={(event) => onSelectRow(event, row.id)}
                />
            </TableCell>
            <TableCell component="th" scope="row" padding="none">
                <Stack direction="row" alignItems="center" spacing={2}>
                    <Typography variant="subtitle2" noWrap>
                        {row.name}  
                    </Typography>
                </Stack>
            </TableCell>
            <TableCell align="left">{row.email}</TableCell>
            <TableCell align="left">{row.phone}</TableCell>
            <TableCell align="left">{row.address}</TableCell>
            <TableCell align="right">
                <IconButton size="large" color="inherit" onClick={handleOpenMenu}>
                    <Iconify icon={'eva:more-vertical-fill'} />
                </IconButton>   
            </TableCell>
            <Popover
                open={Boolean(openMenu)}
                anchorEl={openMenu}
                onClose={handleCloseMenu}
                anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                PaperProps={{
                    sx: {
                        p: 1,
                        width: 140,
                        '& .MuiMenuItem-root': {
                            px: 1,
                            typography: 'body2',
                            borderRadius: 0.75,
                        },
                    },
                }}
            >
                <MenuItem onClick={() => onEditRow(row.id)}>
                    <Iconify icon={'eva:edit-fill'} sx={{ mr: 2 }} />
                    Edit
                </MenuItem>
                <MenuItem onClick={() => onDeleteRow(row.id)}>
                    <Iconify icon={'eva:trash-2-outline'} sx={{ mr: 2 }} />
                    Delete
                </MenuItem>
            </Popover>
        </TableRow>
    );
}

DataTableRow.propTypes = {
    row: PropTypes.object.isRequired,
    selected: PropTypes.bool,
    onSelectRow: PropTypes.func,
    onEditRow: PropTypes.func,
    onDeleteRow: PropTypes.func,
};  