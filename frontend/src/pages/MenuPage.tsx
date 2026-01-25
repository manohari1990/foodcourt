import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { getMenuByStall } from "../api/menu"

// const MenuPage = () => {

//     const LIMIT = 10
//     const {stallId} = useParams()
//     const [page, setPage] = useState(1)
//     //react query

//     const {data:menu, isLoading, error, isFetching} = useQuery({
//         queryKey:['menu', page, LIMIT, stallId],
//         queryFn: getMenuByStall,
//         keepPreviousData: false
//     })

//     if(isLoading) return <p>Fetching menu...</p>
//     if(error) return <p>{error.message}</p>

//     console.log(menu?.data)
//     return (
//         <>
//         <table>
//             <tr>
//                 <th>Sr No.</th>
//                 <th>Thumbnail</th>
//                 <th>Name</th>
//                 <th>Price + discount</th>
//                 <th>Serving Quantity</th>
//             </tr>
//             {menu && menu?.data && menu?.data?.map((item:any) =>{
//                 return (<tr>
//                     <td>0</td>
//                     <td>{item.image}</td>
//                     <td>{item.name}</td>
//                     <td>{item.price}</td>
//                     <td>{item.serving_quantity} {item.serving_quantity_units}</td>
//                 </tr>)
//             })}
//         </table>
//         </>
//     )
// }


// export default MenuPage


import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
// import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import image1 from '../assets/image1.png';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
  price: number,
  image: string
) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    image,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          {/* <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton> */}
        </TableCell>
        <TableCell component="th" scope="row">
          <img src={`${row.image || image1}`} width={200} height='auto'/>
        </TableCell>
        <TableCell align="right">{row.name}</TableCell>
        <TableCell align="right">{row.price}</TableCell>
        {/* <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell> */}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))} */}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
//   createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
//   createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
//   createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
// ];
export default function MenuPage() {
    const LIMIT = 10
    const {stallId} = useParams()
    const [page, setPage] = useState(1)
    //react query

    const {data:menu, isLoading, error, isFetching} = useQuery({
        queryKey:['menu', page, LIMIT, stallId],
        queryFn: getMenuByStall,
        keepPreviousData: false
    })

    if(isLoading) return <p>Fetching menu...</p>
    if(error) return <p>{error.message}</p>

    console.log(menu?.data)
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Thumbnail</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Price</TableCell>
            {/* <TableCell align="right"></TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {menu && menu?.data && menu?.data.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
