import React from 'react'

//react-bootstrap-table for using table layout
import {BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import './Tablecss.css';

class BoardTableBox extends React.Component {
    render() {
        let{data} = this.props;
        //userId, id, title, body
        return (
            <div style={{textAlign:"center"}}>
                 <BootstrapTable data={data}>
                    <TableHeaderColumn dataField='userId' isKey={true}>user ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='id'>id</TableHeaderColumn>
                    <TableHeaderColumn dataField='title'>title</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}

export default BoardTableBox;