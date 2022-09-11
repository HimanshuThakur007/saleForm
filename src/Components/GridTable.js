import { AgGridReact } from 'ag-grid-react'
import { useState } from 'react';
import React from 'react'
import 'ag-grid-community/styles/ag-grid.css'; 
import 'ag-grid-community/styles/ag-theme-alpine.css';

const GridTable = (props) => {

    const [rowData] = useState([
        {SN:'1',Item:'himanshu',Qty:'1',Uint:"1",Price:20,Amount:50},
    {SN:'2',Item:'himanshu',Qty:'1',Uint:"1",Price:20,Amount:50},
    {SN:'3',Item:'himanshu',Qty:'1',Uint:"1",Price:20,Amount:50},
    {SN:'4',Item:'himanshu',Qty:'1',Uint:"1",Price:20,Amount:50},
    {SN:'5',Item:'himanshu',Qty:'1',Uint:"1",Price:20,Amount:50},
    {SN:'6',Item:'himanshu',Qty:'1',Uint:"1",Price:20,Amount:50}
    ]);

// const data = [
//     {SN:'1',Item:'himanshu',Qty:'1',Uint:"1",Price:20,Amount:50},
//     {SN:'2',Item:'himanshu',Qty:'1',Uint:"1",Price:20,Amount:50},
//     {SN:'3',Item:'himanshu',Qty:'1',Uint:"1",Price:20,Amount:50},
//     {SN:'4',Item:'himanshu',Qty:'1',Uint:"1",Price:20,Amount:50},
//     {SN:'5',Item:'himanshu',Qty:'1',Uint:"1",Price:20,Amount:50},
//     {SN:'6',Item:'himanshu',Qty:'1',Uint:"1",Price:20,Amount:50}
// ]

// const column = [
//     {
//         headerName:"SN",field:'SN'
//     },
//     {
//         headerName:"Item",field:'Item',editable:true,
//     },
//     {
//         headerName:"Qty",field:"Qty"
//     },
//     {
//         headerName:"Unit",field:"Unit"
//     },
//     {
//         headerName:"Price(Rs.)",field:"Price"
//     },
//     {
//         headerName:"Amount(Rs.)",field:"Amount"
//     }
// ]


const [columnDefs] = useState([
   {
    headerName:"SN",field:'SN', maxWidth:76
},
{
    headerName:"Item",field:'Item',editable:true
},
{
    headerName:"Qty",field:"Qty",maxWidth:100
},
{
    headerName:"Unit",field:"Unit",maxWidth:110
},
{
    headerName:"Price(Rs.)",field:"Price",maxWidth:110
},
{
    headerName:"Amount(Rs.)",field:"Amount",maxWidth:120
}
])


  return (
    <div className="ag-theme-alpine" style={{height: 260, width: 760}}>
        <AgGridReact rowData={rowData} columnDefs={columnDefs} />
        
    </div>
    
  )
}

export default GridTable