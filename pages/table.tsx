import styled from '@emotion/styled'
import type { NextPage } from 'next'
import DataTable from '../comps/data-table';
import AppMenu from '../comps/page/appbar-component';

const Container = styled.div`
  width: 100%;    
  height: 100%;      
`;

const TableWrapper = styled.div`   
  padding: 25px 25px;
`;

const Table: NextPage = () => {
  return (    
    <Container>     
      <AppMenu />  
      <TableWrapper>
        <DataTable />
      </TableWrapper>   
    </Container>
  )
}

export default Table
