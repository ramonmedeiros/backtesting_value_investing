import React from 'react';

import { useParams } from 'react-router-dom';
import Title from './template/Title';
import CustomGrid from './template/CustomGrid';
import { Grid, Link, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import { ResponsiveContainer } from 'recharts';


export default function Market() {
    const params: { market: string } = useParams()

    return (
        <CustomGrid>
            <Title>{params.market} market insights</Title>
            <ResponsiveContainer>
                <Grid container >
                    <Grid item xs>
                        <ListItem button component={Link} href={`/#/market/${params.market}/dividends`}>
                            <ListItemIcon>
                                <MonetizationOnIcon style={{ fontSize: 120 }} />
                            </ListItemIcon>
                            <ListItemText primary="Dividends" />
                        </ListItem>
                    </Grid >
                    <Grid item xs>
                        <ListItem button component={Link} href={`/#/market/${params.market}/analysis`}>
                            <ListItemIcon>
                                <TrendingUpIcon style={{ fontSize: 120 }} />
                            </ListItemIcon>
                            <ListItemText primary="Cheap Value Stocks" />
                        </ListItem>
                    </Grid >
                </Grid >
            </ResponsiveContainer>
        </CustomGrid>)
}