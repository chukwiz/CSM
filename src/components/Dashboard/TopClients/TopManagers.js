import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    // minWidth: 650,
  },
});

function createData(rank, firstName, lastName,TotalTrades, profit) {
    return { rank, firstName, lastName,TotalTrades, profit };
  }

const rows = [
    createData(1,'Michael ', 'Antoinne',27, '$2,594,783'),
    createData(2,'Kathy ', 'Conley',18, '$2,300,450'),
    createData(3,'Andrew ', 'Clarkson',16, '$3,490,500'),
    createData(4,'Lee ', 'Anderson',38, '$1,294,000'),
    createData(5,'Alex ', 'Ackermann',29, '$1,485,040'),
    // createData(6,'Linda ', 'Greywalker',17, '$1,485,040'),
    // createData(7,'Jacqline ', 'Remdond',28,  '$1,485,040'),
    // createData(8,'Dale ', 'Maynaard',18, '$2,300,450'),
    // createData(9,'Ron ', 'Arnold', 40,'$1,485,040'),
    // createData(10,'David ', 'Salma',36, '$1,485,040'),
];

export default function TopManagers() {
  const classes = useStyles();

  return (

    <TableContainer component={Paper}>
    <h4 style = {{fontWeight:400}}>Top Managers</h4>
    <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">#</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Total Trades</TableCell>
            <TableCell align="right">Total Profit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell align="right">{row.rank}</TableCell>
              <TableCell align="right">{row.firstName}</TableCell>
              <TableCell align="right">{row.lastName}</TableCell>
              <TableCell align="right">{row.TotalTrades}</TableCell>
              <TableCell align="right">{row.profit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}