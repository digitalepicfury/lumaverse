import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { buildDataSource } from '../../utils';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Name',
    width: 250,
    editable: false,
  },
  {
    field: 'a',
    headerName: 'Address',
    width: 250,
    editable: false,
  },
  {
    field: 'y',
    headerName: 'Latitude',
    type: 'number',
    width: 110,
    editable: false,
  },
  {
    field: 'x',
    headerName: 'Longitude',
    type: 'number',
    width: 110,
    editable: false,
  },
];

const rows = buildDataSource();

export default function DataTable() {
  return (
    <div style={{ height: 650, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}