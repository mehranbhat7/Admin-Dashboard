// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import { styled } from '@mui/material/styles';
// import React from 'react';

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     [`&.${tableCellClasses.head}`]: {
//         backgroundColor: theme.palette.common.black,
//         color: theme.palette.common.white,
//     },
//     [`&.${tableCellClasses.body}`]: {
//         fontSize: 14,
//     },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     '&:nth-of-type(odd)': {
//         backgroundColor: theme.palette.action.hover,
//     },
//     // hide last border
//     '&:last-child td, &:last-child th': {
//         border: 0,
//     },
// }));

// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
// }

// const rows = [
//     createData('ADMIN', 159, 6.0, 24, 4.0),
//     createData('MANAGER', 237, 9.0, 37, 4.3),
//     createData('SECURITY ANALYST', 262, 16.0, 24, 6.0),
//     createData('DEVELOPER', 305, 3.7, 67, 4.3),
//     createData('PROJECT MANAGER', 356, 16.0, 49, 3.9),
// ];

// function Roles() {
//     return (
//         <TableContainer component={Paper}>
//             <Table sx={{ minWidth: 600 }} aria-label="customized table">
//                 <TableHead>
//                     <TableRow>
//                         <StyledTableCell>Roles</StyledTableCell>
//                         <StyledTableCell align="right">Calories</StyledTableCell>
//                         <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
//                         <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
//                         <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                     {rows.map((row) => (
//                         <StyledTableRow key={row.name}>
//                             <StyledTableCell component="th" scope="row">
//                                 {row.name}
//                             </StyledTableCell>
//                             <StyledTableCell align="right">{row.calories}</StyledTableCell>
//                             <StyledTableCell align="right">{row.fat}</StyledTableCell>
//                             <StyledTableCell align="right">{row.carbs}</StyledTableCell>
//                             <StyledTableCell align="right">{row.protein}</StyledTableCell>
//                         </StyledTableRow>
//                     ))}
//                 </TableBody>
//             </Table>
//         </TableContainer>
//     );
// }

// export default Roles;

// import Button from '@mui/material/Button';
// import Paper from '@mui/material/Paper';
// import { DataGrid } from '@mui/x-data-grid';
// import * as React from 'react';
// import Sidebar from '../Sidebar/Sidebar';

// const columns = [
//     { field: 'id', headerName: 'ID', width: 250, headerAlign: 'center', align: 'center' },
//     { field: 'firstName', headerName: 'Roles', width: 400, align: 'center', headerAlign: 'center' },
//     // { field: 'lastName', headerName: 'Last name', width: 130 },
//     {
//         field: 'ACTION',
//         headerName: 'ACTION',
//         width: 100,
//         renderCell: (params) => (
//             <Button variant="contained" color="success" onClick={() => alert('edited')}>
//                 {params.value}
//             </Button>
//         ),
//         headerAlign: 'center',
//         align: 'center',
//     },
// ];

// const rows = [
//     { id: 1, lastName: 'Lannister', firstName: 'MANAGER', ACTION: 'EDIT' },
//     { id: 2, lastName: 'Lannister', firstName: 'MANAGER', ACTION: 'EDIT' },
//     { id: 3, lastName: 'Lannister', firstName: 'SECURITY HEAD', ACTION: 'EDIT' },
//     { id: 4, lastName: 'Stark', firstName: 'SECURITY ASSOCIATE', ACTION: 'EDIT' },
//     { id: 5, lastName: 'Targaryen', firstName: 'SOC ANALYST', ACTION: 'EDIT' },
//     { id: 6, lastName: 'Melisandre', firstName: 'FRONTEND DEVELOPER', ACTION: 'EDIT' },
//     { id: 7, lastName: 'Clifford', firstName: 'DEVELOPER', ACTION: 'EDIT' },
// ];

// const paginationModel = { page: 0, pageSize: 5 };

// function Roles() {
//     return (
//         <>
//             <Sidebar />
//             <Paper sx={{ height: 600, width: '80%', marginLeft: '125px' }}>
//                 <DataGrid
//                     rows={rows}
//                     columns={columns}
//                     initialState={{ pagination: { paginationModel } }}
//                     pageSizeOptions={[5, 10]}
//                     checkboxSelection
//                     sx={{
//                         border: 0,
//                         '& .MuiDataGrid-cell': {
//                             display: 'flex',
//                             justifyContent: 'space-evenly', // This spreads out the content
//                             alignItems: 'center',
//                         },
//                         '& .MuiDataGrid-columnHeader': {
//                             display: 'flex',
//                             justifyContent: 'space-evenly', // This ensures column headers are spaced out
//                             alignItems: 'center',
//                         },
//                     }}
//                 />
//             </Paper>
//         </>
//     );
// }
// export default Roles;
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import Sidebar from '../Sidebar/Sidebar'; // Sidebar component

const rows = [
    { id: 1, lastName: 'Lannister', firstName: 'ADMIN', ACTION: 'EDIT' },
    { id: 2, lastName: 'Lannister', firstName: 'MANAGER', ACTION: 'EDIT' },
    { id: 3, lastName: 'Lannister', firstName: 'SECURITY HEAD', ACTION: 'EDIT' },
    { id: 4, lastName: 'Stark', firstName: 'SECURITY ASSOCIATE', ACTION: 'EDIT' },
    { id: 5, lastName: 'Targaryen', firstName: 'SOC ANALYST', ACTION: 'EDIT' },
    { id: 6, lastName: 'Melisandre', firstName: 'FRONTEND DEVELOPER', ACTION: 'EDIT' },
    { id: 7, lastName: 'Clifford', firstName: 'DEVELOPER', ACTION: 'EDIT' },
    { id: 8, lastName: 'Ali', firstName: 'USER', ACTION: 'EDIT' },
];
const columns = [
    { field: 'id', headerName: 'ID', width: 250, headerAlign: 'center', align: 'center' },
    { field: 'firstName', headerName: 'Roles', width: 400, align: 'center', headerAlign: 'center' },
    // { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'ACTION',
        headerName: 'ACTION',
        width: 100,
        renderCell: (params) => (
            <Button variant="contained" color="success" onClick={() => alert('edited')}>
                {params.value}
            </Button>
        ),
        headerAlign: 'center',
        align: 'center',
    },
];
function Roles() {
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ width: '250px' }}>
                <Paper elevation={3} sx={{ height: '100vh', padding: '20px' }}>
                    <Sidebar />
                </Paper>
            </div>

            <div style={{ flexGrow: 1, marginLeft: '20px' }}>
                <Paper sx={{ height: 600, width: '90%', marginLeft: '6px', marginTop: '160px' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                        sx={{
                            border: 0,
                            '& .MuiDataGrid-cell': {
                                display: 'flex',
                                justifyContent: 'space-evenly',
                                alignItems: 'center',
                            },
                            '& .MuiDataGrid-columnHeader': {
                                display: 'flex',
                                justifyContent: 'space-evenly',
                                alignItems: 'center',
                            },
                        }}
                    />
                </Paper>
            </div>
        </div>
    );
}

export default Roles;
