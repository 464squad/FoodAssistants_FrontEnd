import React from 'react'
import{useTable} from reacr-useTable
import MOCK_DATA from './MOCK_DATA.json'
import {COLUMNS} from './columns'
import { useState, useEffect, useMemo } from 'react';

export default function BasicTable() {
    const columns = useMemo(()=> COLUMNS, [])
    const data = useMemo(()=> MOCK_DATA, [])

  const tableInstance =  useTable({
        columns,
        data
    })
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance

  return (
    <table>
        <thead>
            <tr>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td></td>

            </tr>
        </tbody>
    </table>
  )
}
