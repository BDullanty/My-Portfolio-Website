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
        <Class160/>
        </Grid>
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
        <Class300/>
        </Grid>
        <Grid item>
        <Class303/>
        </Grid>
        <Grid item>
        <Class320/>
        </Grid>
        <Grid item>
        <Class327/>
        </Grid>
        <Grid item>
        <Class330/>
        </Grid>
        <Grid item>
        <Class340/>
        </Grid>
        <Grid item>
        <Class350/>
        </Grid>
    </Grid>

  );
}

export function Class160() { 
  return (
          <Card  className="ClassCard" sx={{ minWidth: 275, boxShadow:3,
            ':hover': {
          boxShadow: 20,}}}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
               EENG160
              </Typography>
              <Typography variant="h5" component="div">
              Digital Circuits
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                B+
              </Typography>
              <Typography variant="body2">
              Topics include the fundamentals of digital computer design such as number systems, boolean algebra, and basic digital circuits. Computer laboratory work involved the use of current software for the design, analysis, and simulation of digital circuits.

              </Typography>
            </CardContent>

          </Card>
      
  )
  
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
              This course explored the uses of computing technologies from a socio-cultural and ethical perspective, including the impacts of information systems on individuals, organization, and society and future direction in which the forces of technology and computing were tending to move us.
              
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
                Topics included primitive data types, number systems, file I/O classes, control structures, method design and usage, array–sorting and searching algorithms.
                
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
              Topics included composition, recursion, data abstraction, polymorphism, inheritance, interfaces, inner classes, abstract classes, object cloning, array lists, linked lists, and exception handling.
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
              This course involved a deeper look at object-oriented principles including commonly used design patterns. UML class diagrams, unit testing, and code versioning.
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
              UNIX topics included interactive shells, common text editors, utility programs, file system structure, libraries and operating system calls and system programming. C topics included data types, structures, pointers and pointer arithmetic, arrays, linked lists, and function design and use.             
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
              This course involved a deeper look at object-oriented principles including commonly used design patterns. UML class diagrams, unit testing, and code versioning.
              </Typography>
            </CardContent>
          </Card>
  )
}

export function Class300() { 
  return (
          <Card  className="ClassCard" sx={{ minWidth: 275, boxShadow:3,
            ':hover': {
          boxShadow: 20,}}}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
               CSCD300
              </Typography>
              <Typography variant="h5" component="div">
              Data Structures
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                A-
              </Typography>
              <Typography variant="body2">
              Topics included linked lists, stacks, queues, hashing, recursion, complexity analysis of algorithms, and binary search trees.
            </Typography>
            </CardContent>
          </Card>
  )
}

export function Class303() { 
  return (
          <Card  className="ClassCard" sx={{ minWidth: 275, boxShadow:3,
            ':hover': {
          boxShadow: 20,}}}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
               CSCD303
              </Typography>
              <Typography variant="h5" component="div">
              Computer and information Security
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                A
              </Typography>
              <Typography variant="body2">
              This course covered fundamentals of computing security, including threat types, how computers become infected with viruses and malware, how to avoid viruses and malware, and how to secure your computers and information stored on them. Topics included operating system security, email security, internet security, virus and spyware scanners, browser tools, firewalls and other defensive techniques. The course includded hands-on practice with security tools and techniques.
               </Typography>
            </CardContent>
          </Card>
  )
}

export function Class320() { 
  return (
          <Card  className="ClassCard" sx={{ minWidth: 275, boxShadow:3,
            ':hover': {
          boxShadow: 20,}}}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
               CSCD300
              </Typography>
              <Typography variant="h5" component="div">
              Algorithms
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                B
              </Typography>
              <Typography variant="body2">
              This course focused on data structures and algorithms, with emphasis on algorithmic strategies such as dynamic programming and emphasis on non-linear data structures such as trees and graphs.
                          </Typography>
            </CardContent>
          </Card>
  )
}

export function Class327() { 
  return (
          <Card  className="ClassCard" sx={{ minWidth: 275, boxShadow:3,
            ':hover': {
          boxShadow: 20,}}}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
               CSCD327
              </Typography>
              <Typography variant="h5" component="div">
              Relational Database Systems
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                A-
              </Typography>
              <Typography variant="body2">
              This course covered the basic concepts in relational database systems, including data manipulation language and data definition language. Relational models were covered in depth together with an overview of SQL, Relational Algebra, Entity-Relationship Model and its role in application development.
              </Typography>
            </CardContent>
          </Card>
  )
}
export function Class330() { 
  return (
          <Card  className="ClassCard" sx={{ minWidth: 275, boxShadow:3,
            ':hover': {
          boxShadow: 20,}}}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
               CSCD330
              </Typography>
              <Typography variant="h5" component="div">
              Computer Networks
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                A
              </Typography>
              <Typography variant="body2">
              This course covered fundamental concepts, protocol mechanisms and programming skills for computer networks. It includes a technical overview of telecommunication media and fundamental protocols for the Internet such as ISO/OSI layers, Ethernet, collision detection and channel allocation.
              </Typography>
            </CardContent>
          </Card>
  )
}

export function Class340() { 
  return (
          <Card  className="ClassCard" sx={{ minWidth: 275, boxShadow:3,
            ':hover': {
          boxShadow: 20,}}}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
               CSCD340
              </Typography>
              <Typography variant="h5" component="div">
              Operating Systems
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                A
              </Typography>
              <Typography variant="body2">
              This course covered major concepts in the design and modeling of operating systems for digital computers. Topics included historical development of operating systems; methods used in simulations, memory management, system protection mechanisms, I/O management, CPU scheduling, process management and file systems. Programming assignments, program analyses and written reports were required.

              </Typography>
            </CardContent>
          </Card>
  )
}

export function Class350() { 
  return (
          <Card  className="ClassCard" sx={{ minWidth: 275, boxShadow:3,
            ':hover': {
          boxShadow: 20,}}}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
               CSCD350
              </Typography>
              <Typography variant="h5" component="div">
              Software Development Principles
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                A-
              </Typography>
              <Typography variant="body2">
              This course covers formal approaches and tools for conceiving, understanding, analyzing, designing,building, testing, deploying, documenting and maintaining large software systems. Topics may include software lifecycle models; project and team management; verification and validation techniques; legal and ethical issues; practical development and application of skills in critical thinking, communication and professionalism. A major team-based software development project was required.
              </Typography>
            </CardContent>
          </Card>
  )
}
