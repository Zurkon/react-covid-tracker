import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import { Paper } from '@material-ui/core';
import numeral from 'numeral';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import useStyles from './CasesTable.styles';

const CasesTable = ({ countries }) => {
  const classes = useStyles();

  return (
    <TableContainer className={classes.root} component={Paper}>
      <SimpleBar className={classes.table}>
        <Table aria-label="Live Cases Table">
          <TableBody>
            {
              countries.map(({ name, cases }, index) => (
                <TableRow key={name}>
                  <TableCell component="th" scope="row"> <span>{index + 1}</span> {name}</TableCell>
                  <TableCell align="right"> <strong>{numeral(cases).format('0,0')}</strong> </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </SimpleBar>
    </TableContainer>
  )
}

export default CasesTable;