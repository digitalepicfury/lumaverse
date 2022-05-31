import styled from '@emotion/styled'
import type { NextPage } from 'next'
import Router from 'next/router'
import React from 'react';
import GoogleMapComponent from '../comps/google-map/v1/component';
import SearchBar from '../comps/google-map/v1/searchbar';
import GoogleMapWrapper from '../comps/google-map/v1/wrapper'
import AppMenu from '../comps/page/appbar-component';

const Container = styled.div`
  width: 100%;    
  height: 100%;    
`;

const SearchMenu = styled.div`  
  display: flex;  
  justify-content: center;
  align-items: center;

  position: absolute;
  width: 100%;
  height: 80px;     
  z-index: 1000000;

  / * To allow clicking through the DIV */
  pointer-events: none;

  /* For Testing */
  // background-color: red;
`;

const SearchItem = styled.div`  
  position: absolute;
  width: 300px;  

  / * To allow clicking onto the DIV */
  pointer-events: auto;

  /* For Testing */
  // background-color: green;
`;

const Map: NextPage = () => {   
  const searchClick = (event: any, optionSelected: any) => {
    console.log(optionSelected);
    Router.push({
      pathname: '/map',
      query: { id: optionSelected },
    });
  }
  
  return (    
    <Container>     
      <AppMenu />     
      
      <SearchMenu>
        <SearchItem>
          <SearchBar searchClick={searchClick} />
        </SearchItem>
      </SearchMenu>
      
      <GoogleMapWrapper>
        <GoogleMapComponent/>
      </GoogleMapWrapper>   
    </Container>
  )
}

export default Map
