import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


class TableView extends Component {

    render() {
       const rows = this.props.children[3];
       const columns = this.props.children[1];
        return (
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            {columns ?
                                columns.map((column, index) => {
                                    return (
                                 <TableCell key={index}>{column.label}</TableCell>
                                )
                            })
                            : null
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows ?
                            rows.map((row, index) => {
                                return columns.map((column, colIndex) => {
                                    return (
                                        <TableCell key={colIndex}>
                                            {row[column.name]}
                                        </TableCell>
                                    )
                                })
                            })
                        :null
                        }
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}

export default TableView;