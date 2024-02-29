import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { formatDate } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugIn from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import Loader from 'react-loaders';
import Header from '../../Components/Header';
import { getDatabase, ref, set, push,remove,onValue } from "firebase/database";
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
import app from "../../Database"
// import { initializeApp } from "firebase/app";


function Calendar() {

    const[currEvents,setCurrEvents]=useState([]);
    const [loading, setLoading] = useState(true);
    const calendarRef = useRef(null);

   useEffect(()=>{
    // function load(){
        const db = getDatabase(app);
        const addedEventIds = new Set();

        const meetingRef = ref(db, "Meetings" );
        onValue(meetingRef,(snapshot)=>{
            const data = snapshot.val();
            if(data){
                const eventsArray = Object.entries(data).map(([title, event]) => ({
                    id: title,
                    title,
                    start: event.start,
                    end: event.end ? new Date(event.end) : null,
                    allDay: event.allDay,
                }));
                setCurrEvents(eventsArray);
                const calendarAPI = calendarRef.current.getApi();
      
                // Initialize FullCalendar events when data is loaded
                eventsArray.forEach((event) => {
                  if (!addedEventIds.has(event.id)) {
                    calendarAPI.addEvent(event);
                    addedEventIds.add(event.id);
                  }
                });
              }
              setLoading(false);
            });
          }, []);

          
          const handleDateClick = (selected) => {
              const title = prompt('Please enter a new title for this appointment');
              const calendarAPI = selected.view.calendar;
              calendarAPI.unselect();

              if (!/^[a-zA-Z0-9 ]+$/.test(title)) {
                alert('Title must contain only letters and numbers.');
                return;
              }

        else if (title) {
          const newEvent = {
            id: `${selected.dateString}-${title}`,
            title,
            start: selected.startStr,
            end: selected.endStr,
            allDay: selected.allDay,
          }
      
        //   setCurrEvents((prevEvents) => [...prevEvents, newEvent]);
      
          // Update the FullCalendar events data
        //   calendarAPI.addEvent(newEvent);
    
          // Add the new event to the Firebase Realtime Database
          const db = getDatabase(app);
          set(ref(db, 'Meetings/' + title), {
            start: selected.startStr,
            end: selected.endStr,
            allDay: selected.allDay,
          })
            .then(() => {
              alert('Data saved successfully');
            })
            .catch((error) => {
              alert('Error', error.message);

});
};
};
    const handleEventClick = (selected) =>{
        if(window.confirm(`Are you sure you want to delete the event '${selected.event.title}'` )){
            selected.event.remove();
            const db = getDatabase(app);
            const dbRef = ref(db,  "Meetings/"+`${selected.event.title}`);
            remove(dbRef)

        }
    };
            return (
                <>
                <Sidebar/>
            <div className='calendar-container'>
                <Box m='20px' ml="120px">
                    <Header title="SCHEDULE" subtitle="Create and View Appointments"/>

                    <Box display='flex' justifyContent='space-between'>
                    <Box flex='1 1 20%' backgroundColor='rgb(54, 78, 139)' p="15px" borderRadius="4px" border="solid 2px black" maxHeight="71.5vh">
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
                          ref={calendarRef}

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
                            right: "dayGridMonth,timeGridWeek,timeGridDay"
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
