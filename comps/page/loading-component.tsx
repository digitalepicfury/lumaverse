import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CircularProgress } from '@mui/material';
import styled from '@emotion/styled';

const Container = styled.div`
    position: absolute;
    top: calc(50% - 75px);
    left: calc(50% - 75px);
`;

export default function LoadingCard() {
  return (
    <Container>
        <Card sx={{ width: '130px', height: '130px', padding: '20px 20px', }}>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Loading...
            </Typography>
            <CircularProgress />
        </CardContent>      
        </Card>
    </Container>
  );
}