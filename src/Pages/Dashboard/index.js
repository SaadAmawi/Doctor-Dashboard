import React from 'react'
import './index.scss'
import Layout from '../Layout'
import LineChart from '../../Components/lineChart'
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../Data/MockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import QuizIcon from '@mui/icons-material/Quiz';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../Components/Header";
import StatBox from "../../Components/StatBox";
import ProgressCircle from "../../Components/ProgressCircle";
import BarChart from '../../Components/BarChart'
import Loader from 'react-loaders'
import Sidebar from '../Sidebar';


function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  return (
    <>
    <Sidebar/>
    <div className='dashboard'>
    <Box ml="120px" mr="30px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              fontFamily:"Coolvetica"
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[500]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="20px"

        >
          <StatBox
            title="21.8"
            subtitle="Average Scores"
            progress="0.14"
            increase="+14%"
            icon={
              <SsidChartIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[500]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="20px"
        >
          <StatBox
            title="122"
            subtitle="New Tests"
            progress="0.21"
            increase="+21%"
            icon={
              <QuizIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[500]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="20px"
        >
          <StatBox
            title="15"
            subtitle="New Patients"
            progress="0.05"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[500]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="20px"

        >
          <StatBox
            title="325,134"
            subtitle="Traffic Received"
            progress="0.43"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[300]}
          borderRadius="20px"
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Patient Results
              </Typography>
              
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="300px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[300]}
          overflow="auto"
          borderRadius="20px"

        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[400]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Tests
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                {transaction.cost}/30
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[500]}
          p="30px"
          borderRadius="20px"

        >
          <Typography variant="h5" fontWeight="600">
            Patient Assessments
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
            
          >
            <ProgressCircle size="125" progress='0.26'/>
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              +26% improvment in test scores
            </Typography>
            <Typography>Past 30 Days</Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[500]}
          borderRadius="20px"

        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Disease per Region
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[500]}
          padding="30px"
          borderRadius="20px"
        >
          <Typography variant="h5" fontWeight="600">
            Patient Disease Progress Rate
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
            
          >
            <ProgressCircle size="125" progress='0.33'/>
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              -33% degradation over 1 year
            </Typography>
            <Typography>Based on clinical trial</Typography>
          </Box>
          {/* <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box> */}
        </Box>
      </Box>
    </Box>
    </div>
    <Loader type="ball-clip-rotate-multiple"/>

    </>
  );
};


export default Dashboard
