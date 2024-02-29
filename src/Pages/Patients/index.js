import React from 'react'
import Layout from '../Layout'
import Loader from 'react-loaders'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import {mockDataPatients} from '../../Data/MockData';
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined"
import SecurityOutlined from "@mui/icons-material/SecurityOutlined"
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import Header from '../../Components/Header';

import './index.scss'
import { color } from '@mui/system';
import { Typography, colors } from '@mui/material';
function Patients() {

   const columns = [
    {field: "id", headerName:"Patient ID",width:90,headerAlign:'start',align:"center",cellClassName:"id-col",headerClassName:"id-head"},
    {field:"name", headerName:"Patient Name",flex:1 ,width:250,cellClassName:"id-col",headerClassName:"id-head",headerAlign:"center",align:"center"},
    {field:"age", headerName:"Patient Age",width:250,type:"number",align:"center",headerAlign:"center",cellClassName:"id-col",headerClassName:"id-head"},
    {field:"phone", headerName:"Patient Phone Number",width:250,headerAlign:"center",align:"center",cellClassName:"id-col",headerClassName:"id-head"},
    {field:"Registered_Caregiver", headerName:"Registered Caregiver",flex:1 ,width:150,cellClassName:"id-col",headerClassName:"id-head", align:"center",headerAlign:"center"},
    {field:"caregiver_phone", headerName:"Caregiver Phone Number",width:250,headerAlign:"center",align:"center",cellClassName:"id-col",headerClassName:"id-head"},
    {field:"access", headerName:"Patient Access",width:250,headerAlign:"center",headerClassName:"id-head",align:"center",renderCell:({row:{access}})=>{
      return (
        <Box
        width="60%"
        m="0 auto"
        p="10px"
        display="flex"
        justifyContent="center"
        backgroundColor=
        {
          access==="admin"
          ? "green"
          : "lightgreen"
        }
        borderRadius="4px"
        >
          {access === "admin" && <AdminPanelSettingsOutlinedIcon/>}
          {access === "manager" && <SecurityOutlined/>}
          {access === "user" && <LockOpenOutlinedIcon style={{fill: "green"}}/>}
          <Typography className='access'>
            {access}
          </Typography>
        </Box>
      )
    }},
    
  ]
  return (
        <>
        <Layout/>
      <div className='patient-container'>
    <div className='header'>
   
    <Header title="PATIENTS" subtitle="View and Manage Patient Data"/>
    </div>
      <Box className="box">
    <DataGrid className='grid' sx={{border:3,m:3}}
      rows={mockDataPatients}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 10,
          },
        },
      }}
      pageSizeOptions={[10]}
      checkboxSelection
      disableRowSelectionOnClick
    />
      </Box>
    </div>
      <Loader type="ball-clip-rotate-multiple"/>
        </>
  )
}

export default Patients
