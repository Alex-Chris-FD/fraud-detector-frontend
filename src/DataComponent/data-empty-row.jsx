import proptypes from 'prop-types';
import TableRow from '@mui/material/TableRow';  
import TableCell from '@mui/material/TableCell';

export default function DataTableEmptyRows({emptyRows, height}) {
    if (!emptyRows) {
        return null;
    }
    
    return (
        <TableRow
            sx={{
                ...(height && { height: height * emptyRows,
                }),
            }}
        >
            <TableCell colSpan={6} />
        </TableRow>
    );
}

DataTableEmptyRows.propTypes = {
    emptyRows: proptypes.number,
    height: proptypes.number
}