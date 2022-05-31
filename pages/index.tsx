import styled from '@emotion/styled'
import type { NextPage } from 'next'
import AppMenu from '../comps/page/appbar-component';
import CardTile from '../comps/tiles/card-tile';

const Container = styled.div`
  width: 100%;    
  height: 100%;      
`;

const ContainerInner = styled.div`  
  display: flex;
  justify-content: flex-start;
  padding: 25px 25px;
`;

const CardSpacer = styled.div`  
  width: 50px;
  height: 100%;
`;

const Home: NextPage = () => {
  return (    
    <Container>
      <AppMenu />
      <ContainerInner>          
        <CardTile title="Map" link="/map" image="/map.png" description="View the Map" />
        <CardSpacer />
        <CardTile title="Table" link="/table" image="/table.png" description="View the Data in a Table" />              
      </ContainerInner>
    </Container>
  )
}

export default Home
