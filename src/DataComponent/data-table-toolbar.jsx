import PropTypes from 'prop-types';
import Tooltip from '@mui/material/Tooltip';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Iconify from '../components/iconify/Iconify';


export default function DataTableToolbar({ numSelected, filterName, onFilterName }) {

    return (
        <Toolbar sx={{
            height: 96,
            display: 'flex',
            justifyContent: 'space-between',
            p: (theme) => theme.spacing(0, 1, 0, 3),
            ...(numSelected > 0 && {
              color: 'primary.main',
              bgcolor: 'primary.lighter',
            }),
          }}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                >
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    Data
                </Typography>
            )}
            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton>
                        <i className="fas fa-trash"></i>
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title="Filter list">
                    <IconButton>    
                        <i className="fas fa-filter"></i>
                    </IconButton>   
                </Tooltip>
            )}
            <OutlinedInput
                size="small"
                value={filterName}
                onChange={onFilterName}
                placeholder="Search..."
                startAdornment={
                    <InputAdornment position="start">
                        <i className="fas fa-search"></i>
                    </InputAdornment>
                }
            />
        </Toolbar>
    );
}   

DataTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,

}
