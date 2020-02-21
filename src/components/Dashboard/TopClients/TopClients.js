import React from 'react';
import TopManagers from './TopManagers';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  table: {
    // minWidth: 650,
  },
});

function createData(rank, firstName, lastName, profit) {
  return { rank, firstName, lastName, profit };
}

const rows = [
  createData(1,'Michael ', 'Antoinne', '$2,594,783'),
  createData(2,'Kathy ', 'Conley', '$2,300,450'),
  createData(3,'Andrew ', 'Clarkson', '$3,490,500'),
  createData(4,'Lee ', 'Anderson', '$1,294,000'),
  createData(5,'Alex ', 'Ackermann', '$1,485,040'),
  // createData(6,'Linda ', 'Greywalker', '$1,485,040'),
  // createData(7,'Jacqline ', 'Remdond', '$1,485,040'),
  // createData(8,'Dale ', 'Maynaard', '$2,300,450'),
  // createData(9,'Ron ', 'Arnold', '$1,485,040'),
  // createData(10,'David ', 'Salma', '$1,485,040'),
];

export default function TopClients() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item md={6} xs = {12}>
    <TableContainer component={Paper}>
    <h4 style = {{fontWeight:400}}>Top Clients</h4>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">#</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Profit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell align="right">{row.rank}</TableCell>
              <TableCell align="right">{row.firstName}</TableCell>
              <TableCell align="right">{row.lastName}</TableCell>
              <TableCell align="right">{row.profit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
    <Grid item md={6} xs = {12}>
        <TopManagers />
    </Grid>
    </Grid>
  );
}