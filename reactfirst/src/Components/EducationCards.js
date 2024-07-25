import "./EducationCards.css";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { Box, Button, CardActions, CardMedia } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
export function GridOfEducationCards(){
    const ref = useRef(null); // We will use React useRef hook to reference the wrapping div:
  const { events } = useDraggable(ref); // Now we pass the reference to the useDraggable hook:
  const someNumbers = [...Array(30).keys()];
  return (
    <Grid container spacing = {2}
      className="ClassCardBackground"
      {...events}
      ref={ref} // add reference and events to the wrapping div
    >
        
        <Grid item>
        <Class202/>
        </Grid>
        <Grid item>
        <Class210/>
        </Grid>
        <Grid item>
        <Class211/>
        </Grid>
        <Grid item>
        <Class212/>
        </Grid>
        <Grid item>
        <Class240/>
        </Grid>
        <Grid item>
        <Class260/>
        </Grid>
         <Grid item>
        <Class210/>
        </Grid>
        <Grid item>
        <Class210/>
        </Grid>
        <Grid item>
        <Class210/>
        </Grid>
        <Grid item>
        <Class210/>
        </Grid>
        <Grid item>
        <Class210/>
        </Grid>
        <Grid item>
        <Class210/>
        </Grid>
    </Grid>

  );
}



export function Class202() { 
  return (
          <Card  className="ClassCard" sx={{ minWidth: 275, boxShadow:3,
            ':hover': {
          boxShadow: 20,}}}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
               CSCD202
              </Typography>
              <Typography variant="h5" component="div">
              Computing Ethics
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                A-
              </Typography>
              <Typography variant="body2">
              his course explores the uses of computing technologies from a socio-cultural and ethical perspective, including the impacts of information systems on individuals, organization, and society and future direction in which the forces of technology and computing are tending to move us.
              
              </Typography>
            </CardContent>

          </Card>
      
  )
  
}

export function Class210() { 
    return (
            <Card  className="ClassCard" sx={{ minWidth: 275, boxShadow:3,
              ':hover': {
            boxShadow: 20,}}}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                 CSCD210
                </Typography>
                <Typography variant="h5" component="div">
                Java Principals
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  A
                </Typography>
                <Typography variant="body2">
                Topics include primitive data types, number systems, file I/O classes, control structures, method design and usage, array–sorting and searching algorithms.
                
                </Typography>
              </CardContent>

            </Card>
        
    )
    
}
export function Class211() { 
  return (
          <Card  className="ClassCard" sx={{ minWidth: 275, boxShadow:3,
            ':hover': {
          boxShadow: 20,}}}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
               CSCD211
              </Typography>
              <Typography variant="h5" component="div">
              Java Principals II
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                A
              </Typography>
              <Typography variant="body2">
              Topics include composition, recursion, data abstraction, polymorphism, inheritance, interfaces, inner classes, abstract classes, object cloning, array lists, linked lists, and exception handling.
              </Typography>
            </CardContent>
          </Card>
  )
}

export function Class212() { 
  return (
          <Card  className="ClassCard" sx={{ minWidth: 275, boxShadow:3,
            ':hover': {
          boxShadow: 20,}}}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
               CSCD212
              </Typography>
              <Typography variant="h5" component="div">
              Object Oriented Programming
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                B+
              </Typography>
              <Typography variant="body2">
              This course involves a deeper look at object-oriented principles including commonly used design patterns. UML class diagrams, unit testing, and code versioning.
              </Typography>
            </CardContent>
          </Card>
  )
}

export function Class240() { 
  return (
          <Card  className="ClassCard" sx={{ minWidth: 275, boxShadow:3,
            ':hover': {
          boxShadow: 20,}}}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
               CSCD240
              </Typography>
              <Typography variant="h5" component="div">
              C and Unix Programming
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                B-
              </Typography>
              <Typography variant="body2">
              UNIX topics include interactive shells, common text editors, utility programs, file system structure, libraries and operating system calls and system programming. C topics include data types, structures, pointers and pointer arithmetic, arrays, linked lists, and function design and use.             
              </Typography>
              </CardContent>
              
          </Card>
  )
}
export function Class260() { 
  return (
          <Card  className="ClassCard" sx={{ minWidth: 275, boxShadow:3,
            ':hover': {
          boxShadow: 20,}}}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
               CSCD260
              </Typography>
              <Typography variant="h5" component="div">
              Architecture And Organization
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                A-
              </Typography>
              <Typography variant="body2">
              This course involves a deeper look at object-oriented principles including commonly used design patterns. UML class diagrams, unit testing, and code versioning.
              </Typography>
            </CardContent>
          </Card>
  )
}

