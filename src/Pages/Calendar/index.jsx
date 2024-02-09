import React from 'react'
import { useState } from 'react'
import { formatDate } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugIn from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import Loader from 'react-loaders';
import "./index.scss"
import{
    Box,
    List,
    ListItem,
    ListItemText,
    Typography,
    useTheme
}from '@mui/material'
import Sidebar from '../Sidebar'

function Calendar() {
    
    const[currEvents,setCurrEvents]=useState([]);
   
    const handleDateClick = (selected) => {
        const title=prompt("Please enter a new title for this appointment");
        const calendarAPI=selected.view.calendar;
        calendarAPI.unselect();

        if(title){
            calendarAPI.addEvent({
                id:`${selected.dateString}-${title}`,
                title,
                start:selected.startStr,
                end:selected.endStr,
                allDay:selected.allDay 
            });
            
        };
    };
    const handleEventClick = (selected) =>{
        if(window.confirm(`Are you sure you want to delete the event '${selected.event.title}'` )){
            selected.event.remove();
        }
    };
            return (
                <>
                <Sidebar/>
            <div className='calendar-container'>
                <Box m='20px' ml="120px">
                    <h1>Schedule</h1>
                    <h2>Create aand view Appointment</h2>
                    <Box display='flex' justifyContent='space-between'>
                    <Box flex='1 1 20%' backgroundColor='rgb(23, 61, 156)' p="15px" borderRadius="4px" border="solid 2px black">
                        <Typography variant="h5" color="white" fontFamily="Coolvetica">Events</Typography>
                        <List> 
                            {currEvents.map((event)=>(
                                <ListItem
                                key={event.id}
                                sx={{backgroundColor:"aliceBlue", margin:"10px 0",borderRadius:"2px"}}

                                >
                                    <ListItemText
                                    primary={event.title}
                                    secondary={
                                        <Typography>
                                            {formatDate(event.start,{
                                                year:"numeric",
                                                month:"short",
                                                day:"numeric",
                                                hour:"numeric",
                                                minute:"numeric"
                                            })}
                                        </Typography>
                                    }/>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                    <Box flex="1 1 100%" ml="15px" >
                        <FullCalendar
                        height="75vh"
                        plugins={[
                            dayGridPlugin,
                            interactionPlugIn,
                            listPlugin,
                            timeGridPlugin
                        ]}
                        headerToolbar={{
                            left:"prev,next today",
                            center:"title",
                            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
                        }}
                        initialView='dayGridMonth'
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        select={handleDateClick}
                        eventClick={handleEventClick}
                        eventsSet={(events)=>setCurrEvents(events)}
                      
                        />
                    </Box>
                    </Box>
            </Box>
            </div>
            <Loader type="ball-clip-rotate-multiple"/>

            </>
            )

}

export default Calendar
