import { css } from "@emotion/css";
import styled from "@emotion/styled";

import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const root = css`
    width: 445px;    
    max-height: 100px;
`;

const tileImage = css`
    width: 100px;
    height: 100px;
    padding: 10px 10px;
    margin-right: 10px;
`;

const Tile = styled.div`
    display: flex;        
`;

const TileContent = styled.div`
    display: flex;
    flexDirection: column;    
    margin-top: 5px;
`;

const TileCard = ({title, link, image, description}: {title: string, link: string, image: string, description: string}) => (    
    <Link href={link}>
        <Card className={root}>
            <CardActionArea>
                <Tile>
                    <CardMedia                    
                        image={image}
                        className={tileImage}                    
                        title={title}
                        component='img'
                    />
                    <TileContent>
                        <CardContent>
                            <Typography component="h5" variant="h5">
                                {title}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {description}
                            </Typography>
                        </CardContent>          
                    </TileContent>            
                </Tile>
            </CardActionArea>
        </Card>        
    </Link>
);

export default TileCard;
