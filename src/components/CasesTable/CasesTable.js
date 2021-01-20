import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import { Paper } from '@material-ui/core';

import useStyles from './CasesTable.styles';

const CasesTable = ({ countries }) => {
  const classes = useStyles();

  return (
    <TableContainer className={classes.table} component={Paper}>
      <Table aria-label="Live Cases Table">
        <TableBody>
          {
            countries.map(({ name, cases }, index) => (
              <TableRow key={name}>
                <TableCell component="th" scope="row"> <span>{index + 1}</span> {name}</TableCell>
                <TableCell align="right"> <strong>{cases}</strong> </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CasesTable;