import React from 'react'
import {Grid, Card, CardHeader, CardContent, Typography, Divider } from '@material-ui/core';
import useStyles from './styles'
import Form from './Form/Form'

const Main = ({title}) => {
    const classes=useStyles();
    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="Powered by Speechly"/>
            <CardContent>
                <Typography align="center" variant="h5">
                    Total balance $100
                </Typography>
                <Typography variant="subtitle1" style={{lineHeight:'1.5rem', marginTop:'20px'}}>
                    {/* infocard */}
                    Try saying:add income in category salary for monday...
                </Typography>
                <Divider/>
                {/* form */}
                <Form/>
            </CardContent>
            <CardContent classname={classes.CardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        {/* list */}
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main;