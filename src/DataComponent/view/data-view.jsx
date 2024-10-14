import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import Iconify from '../../../components/iconify';
import DataTableRow from '../data-table-row';
import DataTableHead from '../data-table-head';
import DataTableEmptyRows from '../data-empty-row';
import DataTableToolbar from '../data-table-toolbar';
import { emptyRows, applyFilter, getComparator } from '../utils';

export default function DataView() {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('name');
    const [selected, setSelected] = useState([]);
    const [filterName, setFilterName] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [data, setData] = useState([]);

    async function fetchData() {
        try{
            const response = await fetch('http://localhost:3000/api/data');
            const data = await response.json();
            setData(data);
            setFilteredData(data);
        } catch (error) {
            console.error(error);

        }
        
    };

    useEffect(() => {
        fetchData();
    }, []);

};

//filtering data
