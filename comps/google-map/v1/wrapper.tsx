import Settings from '../../../settings';

import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { Alert } from '@mui/material';
import LoadingCard from '../../page/loading-component';

const render = (status: any) => {
  switch (status) {
    case Status.LOADING:
      return <LoadingCard />;
    case Status.FAILURE:
      return <Alert severity="error">Failed to Load Google Maps</Alert>;
    case Status.SUCCESS:
      return; // Do nothing
  }
};

// https://github.com/googlemaps/react-wrapper/blob/main/examples/basic.tsx
// https://github.com/googlemaps/react-wrapper
const GoogleMapWrapper = ({ children }: any) => (  
  // @ts-ignore - Fix Typescript Issue here
  <Wrapper apiKey={Settings.googleMaps.apiKey} render={render}>
    {children}
  </Wrapper>
);

export default GoogleMapWrapper;