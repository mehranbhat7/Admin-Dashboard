// import Button from '@mui/material/Button';
// import Paper from '@mui/material/Paper';
// import { DataGrid } from '@mui/x-data-grid';
// import React from 'react';
// import Sidebar from '../Sidebar/Sidebar'; // Sidebar component

// const rows = [
//     { id: 1, lastName: 'Lannister', firstName: 'abc', ACTION: 'EDIT' },
//     { id: 2, lastName: 'Lannister', firstName: 'MANAGER', ACTION: 'EDIT' },
//     { id: 3, lastName: 'Lannister', firstName: 'SECURITY HEAD', ACTION: 'EDIT' },
//     { id: 4, lastName: 'Stark', firstName: 'SECURITY ASSOCIATE', ACTION: 'EDIT' },
//     { id: 5, lastName: 'Targaryen', firstName: 'SOC ANALYST', ACTION: 'EDIT' },
//     { id: 6, lastName: 'Melisandre', firstName: 'FRONTEND DEVELOPER', ACTION: 'EDIT' },
//     { id: 7, lastName: 'Clifford', firstName: 'DEVELOPER', ACTION: 'EDIT' },
// ];
// const columns = [
//     { field: 'id', headerName: 'Username', width: 250, headerAlign: 'center', align: 'center' },
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
// function Roles() {
//     return (
//         <div style={{ display: 'flex' }}>
//             <div style={{ width: '250px' }}>
//                 <Paper elevation={3} sx={{ height: '100vh', padding: '20px' }}>
//                     <Sidebar />
//                 </Paper>
//             </div>

//             <div style={{ flexGrow: 1, marginLeft: '20px' }}>
//                 <Paper sx={{ height: 600, width: '90%', marginLeft: '6px', marginTop: '160px' }}>
//                     <DataGrid
//                         rows={rows}
//                         columns={columns}
//                         pageSizeOptions={[5, 10]}
//                         checkboxSelection
//                         sx={{
//                             border: 0,
//                             '& .MuiDataGrid-cell': {
//                                 display: 'flex',
//                                 justifyContent: 'space-evenly',
//                                 alignItems: 'center',
//                             },
//                             '& .MuiDataGrid-columnHeader': {
//                                 display: 'flex',
//                                 justifyContent: 'space-evenly',
//                                 alignItems: 'center',
//                             },
//                         }}
//                     />
//                 </Paper>
//             </div>
//         </div>
//     );
// }

// export default Roles;

import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import Sidebar from '../Sidebar/Sidebar'; // Sidebar component

const rows = [
    {
        id: 'Lannister',
        lastName: 'Lannister',
        firstName: 'abc',
        permissions: ['read', 'write'],
        ACTION: 'EDIT',
    },
    {
        id: 'Stark',
        lastName: 'Lannister',
        firstName: 'MANAGER',
        permissions: ['read'],
        ACTION: 'EDIT',
    },
    {
        id: 'Targaryen',
        lastName: 'Lannister',
        firstName: 'SECURITY HEAD',
        permissions: ['read', 'delete'],
        ACTION: 'EDIT',
    },
    {
        id: 'Melisandre',
        lastName: 'Stark',
        firstName: 'SECURITY ASSOCIATE',
        permissions: ['write'],
        ACTION: 'EDIT',
    },
    {
        id: 'Clifford',
        lastName: 'Targaryen',
        firstName: 'SOC ANALYST',
        permissions: ['read', 'write', 'delete'],
        ACTION: 'EDIT',
    },
    {
        id: 'Lannister',
        lastName: 'Melisandre',
        firstName: 'FRONTEND DEVELOPER',
        permissions: ['write'],
        ACTION: 'EDIT',
    },
    {
        id: 'Stark',
        lastName: 'Clifford',
        firstName: 'DEVELOPER',
        permissions: ['read', 'write'],
        ACTION: 'EDIT',
    },
    {
        id: 'Clifford',
        lastName: 'Targaryen',
        firstName: 'SOC ANALYST',
        permissions: ['read', 'write', 'delete'],
        ACTION: 'EDIT',
    },
];

const columns = [
    { field: 'id', headerName: 'Username', width: 150, headerAlign: 'center', align: 'center' },
    { field: 'firstName', headerName: 'Roles', width: 400, align: 'center', headerAlign: 'center' },
    {
        field: 'permissions',
        headerName: 'Permissions',
        width: 400,
        renderCell: ({ row }) => (
            <div style={{ display: 'flex', justifyContent: 'space-evenly', marginLeft: '15px' }}>
                <label htmlFor={`read-${row.id}`} style={{ marginRight: '10px' }}>
                    Read
                    <input type="checkbox" checked={row.permissions.includes('read')} />
                </label>
                <label htmlFor={`read-${row.id}`} style={{ marginRight: '10px' }}>
                    Write
                    <input type="checkbox" checked={row.permissions.includes('write')} />
                </label>
                <label htmlFor={`read-${row.id}`} style={{ marginRight: '10px' }}>
                    Delete
                    <input type="checkbox" checked={row.permissions.includes('delete')} />
                </label>
            </div>
        ),
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'ACTION',
        headerName: 'Action',
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

function Permission() {
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
                        pageSize={10}
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

export default Permission;
