import React from 'react'

//참고: https://material-ui.com/components/tables/#table

//table using materialUI
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Paper from '@material-ui/core/Paper'


//react-bootstrap-table for using table layout
// import {BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
// import './Tablecss.css';

const StyledTableCell = withStyles(theme=> ({
    head: {
        backgroundColor: '#C6DCF0',
        color: theme.palette.common.black,
        fontSize: 25,
    },
    body: {
        fontSize: 20,
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
    //   '&:nth-of-type(odd)': {
    //     backgroundColor: theme.palette.background.default,
    //   },
        alignSelf: 'center',
    },
  }))(TableRow);


class BoardTableBox extends React.Component {
    render() {
        let{data} = this.props;
        //userId, id, title, body
        return (
            <div style={{width: '70%', margin: '30px auto'}}>
            <TableContainer component={Paper} style={{borderRadius: '8px'}}>
                <Table style={{minWidth: 500}} aria-label="Notice">
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell align='right'>#</StyledTableCell>
                            <StyledTableCell align='center'>Title</StyledTableCell>
                            <StyledTableCell align='center'>UserID</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(d => (
                            <StyledTableRow key={d.id}>
                                <StyledTableCell  align='right' component="th" scope="row">
                                    {d.id}
                                </StyledTableCell>
                                <StyledTableCell>{d.title}</StyledTableCell>
                                <StyledTableCell align='center'>{d.userId}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </div>
            /*<div style={{textAlign:"center"}}>
                 <BootstrapTable data={data}>
                    <TableHeaderColumn dataField='userId' isKey={true}>user ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='id'>id</TableHeaderColumn>
                    <TableHeaderColumn dataField='title'>title</TableHeaderColumn>
                </BootstrapTable>
        </div>*/
        );
    }
}

export default BoardTableBox;