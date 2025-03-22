import "./EducationCards.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { FadeInUp } from "./Animations";
export function GridOfEducationCards(){
  return (
    <Grid container spacing={2} className="ClassCardBackground">
    <Grid item>
        <FadeInUp delay='0.25s'>
            <Class371/>
        </FadeInUp>
    </Grid>
    <Grid item>
        <FadeInUp delay='0.25s'>
            <Class467/>
        </FadeInUp>
    </Grid>
    <Grid item>
        <FadeInUp delay='0.25s'>
            <Class437/>
        </FadeInUp>
    </Grid>
    <Grid item>
        <FadeInUp delay='0.5s'>
            <Class434/>
        </FadeInUp>
    </Grid>
    <Grid item>
        <FadeInUp delay='1.5s'>
            <Class327/>
        </FadeInUp>
    </Grid>
    <Grid item>
        <FadeInUp delay='2.75s'>
            <Class210/>
        </FadeInUp>
    </Grid>
    <Grid item>
        <FadeInUp delay='3s'>
            <Class211/>
        </FadeInUp>
    </Grid>
    <Grid item>
        <FadeInUp delay='0.75s'>
            <Class300/>
        </FadeInUp>
    </Grid>
    <Grid item>
        <FadeInUp delay='1s'>
            <Class484/>
        </FadeInUp>
    </Grid>
    <Grid item>
        <FadeInUp delay='1s'>
            <Class303/>
        </FadeInUp>
    </Grid>
    <Grid item>
        <FadeInUp delay='1.25s'>
            <Class320/>
        </FadeInUp>
    </Grid>

    <Grid item>
        <FadeInUp delay='1.75s'>
            <Class330/>
        </FadeInUp>
    </Grid>
    <Grid item>
        <FadeInUp delay='2s'>
            <Class340/>
        </FadeInUp>
    </Grid>
    <Grid item>
        <FadeInUp delay='2.25s'>
            <Class350/>
        </FadeInUp>
    </Grid>
    <Grid item>
        <FadeInUp delay='2.5s'>
            <Class429/>
        </FadeInUp>
    </Grid>

    <Grid item>
        <FadeInUp delay='3.25s'>
            <Class212/>
        </FadeInUp>
    </Grid>
    <Grid item>
        <FadeInUp delay='3.5s'>
            <Class240/>
        </FadeInUp>
    </Grid>
    <Grid item>
        <FadeInUp delay='3.75s'>
            <Class260/>
        </FadeInUp>
    </Grid>
    <Grid item>
        <FadeInUp delay='4s'>
            <Class202/>
        </FadeInUp>
    </Grid>
    <Grid item>
        <FadeInUp delay='4.25s'>
            <Class160/>
        </FadeInUp>
    </Grid>
</Grid>


  );
}

export function Class160() { 
  return (

          <Card  className="ClassCard" sx={{ minWidth: 250, boxShadow:3, background:'var(--card-background-color)', color:'var(--primary-text-color)',
            ':hover': {
          boxShadow: 20,}}}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="--secondary-text-color" gutterBottom>
               EENG160
              </Typography>
              <Typography variant="h5" component="div">
              Digital Circuits
              </Typography>
              <Typography sx={{ mb: 1.5 ,fontFamily:"PrimaryFont"}} color="--secondary-text-color">
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
          <Card  className="ClassCard" sx={{ minWidth: 250, boxShadow:3, background:'var(--card-background-color)', color:'var(--primary-text-color)',
            ':hover': {
          boxShadow: 20,}}}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="--secondary-text-color" gutterBottom>
               CSCD202
              </Typography>
              <Typography variant="h5" component="div">
              Computing Ethics
              </Typography>
              <Typography sx={{ mb: 1.5 ,fontFamily:"PrimaryFont"}} color="--secondary-text-color">
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
            <Card  className="ClassCard" sx={{ minWidth: 250, boxShadow:3, background:'var(--card-background-color)', color:'var(--primary-text-color)',
              ':hover': {
            boxShadow: 20,}}}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="--secondary-text-color" gutterBottom>
                 CSCD210
                </Typography>
                <Typography variant="h5" component="div">
                Java Principals
                </Typography>
                <Typography sx={{ mb: 1.5 ,fontFamily:"PrimaryFont"}} color="--secondary-text-color">
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
          <Card  className="ClassCard" sx={{ minWidth: 250, boxShadow:3, background:'var(--card-background-color)', color:'var(--primary-text-color)',
            ':hover': {
          boxShadow: 20,}}}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="--secondary-text-color" gutterBottom>
               CSCD211
              </Typography>
              <Typography variant="h5" component="div">
              Java Principals II
              </Typography>
              <Typography sx={{ mb: 1.5 ,fontFamily:"PrimaryFont"}} color="--secondary-text-color">
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
          <Card  className="ClassCard" sx={{ minWidth: 250, boxShadow:3, background:'var(--card-background-color)', color:'var(--primary-text-color)',
            ':hover': {
          boxShadow: 20,}}}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="--secondary-text-color" gutterBottom>
               CSCD212
              </Typography>
              <Typography variant="h5" component="div">
              Object Oriented Programming
              </Typography>
              <Typography sx={{ mb: 1.5 ,fontFamily:"PrimaryFont"}} color="--secondary-text-color">
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
          <Card  className="ClassCard" sx={{ minWidth: 250, boxShadow:3, background:'var(--card-background-color)', color:'var(--primary-text-color)',
            ':hover': {
          boxShadow: 20,}}}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="--secondary-text-color" gutterBottom>
               CSCD240
              </Typography>
              <Typography variant="h5" component="div">
              C and Unix Programming
              </Typography>
              <Typography sx={{ mb: 1.5 ,fontFamily:"PrimaryFont"}} color="--secondary-text-color">
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
          <Card  className="ClassCard" sx={{ minWidth: 250, boxShadow:3, background:'var(--card-background-color)', color:'var(--primary-text-color)',
            ':hover': {
          boxShadow: 20,}}}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="--secondary-text-color" gutterBottom>
               CSCD260
              </Typography>
              <Typography variant="h5" component="div">
              Architecture And Organization
              </Typography>
              <Typography sx={{ mb: 1.5 ,fontFamily:"PrimaryFont"}} color="--secondary-text-color">
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
          <Card  className="ClassCard" sx={{ minWidth: 250, boxShadow:3, background:'var(--card-background-color)', color:'var(--primary-text-color)',
            ':hover': {
          boxShadow: 20,}}}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="--secondary-text-color" gutterBottom>
               CSCD300
              </Typography>
              <Typography variant="h5" component="div">
              Data Structures
              </Typography>
              <Typography sx={{ mb: 1.5 ,fontFamily:"PrimaryFont"}} color="--secondary-text-color">
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
          <Card  className="ClassCard" sx={{ minWidth: 250, boxShadow:3, background:'var(--card-background-color)', color:'var(--primary-text-color)',
            ':hover': {
          boxShadow: 20,}}}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="--secondary-text-color" gutterBottom>
               CSCD303
              </Typography>
              <Typography variant="h5" component="div">
              Computer and Information Security
              </Typography>
              <Typography sx={{ mb: 1.5 ,fontFamily:"PrimaryFont"}} color="--secondary-text-color">
                A
              </Typography>
              <Typography variant="body2">
              This course covered fundamentals of computing security, including threat types, how computers become infected with viruses and malware, how to avoid viruses and malware, and how to secure your computers and information stored on them. Topics included operating system security, email security, internet security, virus and spyware scanners, browser tools, firewalls and other defensive techniques. The course included hands-on practice with security tools and techniques.
               </Typography>
            </CardContent>
          </Card>
  )
}
export function Class305() { 
  return (
          <Card  className="ClassCard" sx={{ minWidth: 250, boxShadow:3, background:'var(--card-background-color)', color:'var(--primary-text-color)',
            ':hover': {
          boxShadow: 20,}}}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="--secondary-text-color" gutterBottom>
               CSCD305
              </Typography>
              <Typography variant="h5" component="div">
              C++ Programming
              </Typography>
              <Typography sx={{ mb: 1.5 ,fontFamily:"PrimaryFont"}} color="--secondary-text-color">
                A
              </Typography>
              <Typography variant="body2">
              This course taught the C++ programming language. Topics included basic syntax, pointers, memory management, classes, inheritance and polymorphism, exception handling, standard template library usage, namespaces, memory management, and graphical user interface programming.
              </Typography>
            </CardContent>
          </Card>
  )
}

export function Class320() { 
  return (
          <Card  className="ClassCard" sx={{ minWidth: 250, boxShadow:3, background:'var(--card-background-color)', color:'var(--primary-text-color)',
            ':hover': {
          boxShadow: 20,}}}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="--secondary-text-color" gutterBottom>
               CSCD300
              </Typography>
              <Typography variant="h5" component="div">
              Algorithms
              </Typography>
              <Typography sx={{ mb: 1.5 ,fontFamily:"PrimaryFont"}} color="--secondary-text-color">
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
          <Card  className="ClassCard" sx={{ minWidth: 250, boxShadow:3, background:'var(--card-background-color)', color:'var(--primary-text-color)',
            ':hover': {
          boxShadow: 20,}}}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="--secondary-text-color" gutterBottom>
               CSCD327
              </Typography>
              <Typography variant="h5" component="div">
              Relational Database Systems
              </Typography>
              <Typography sx={{ mb: 1.5 ,fontFamily:"PrimaryFont"}} color="--secondary-text-color">
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
          <Card  className="ClassCard" sx={{ minWidth: 250, boxShadow:3, background:'var(--card-background-color)', color:'var(--primary-text-color)',
            ':hover': {
          boxShadow: 20,}}}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="--secondary-text-color" gutterBottom>
               CSCD330
              </Typography>
              <Typography variant="h5" component="div">
              Computer Networks
              </Typography>
              <Typography sx={{ mb: 1.5 ,fontFamily:"PrimaryFont"}} color="--secondary-text-color">
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
          <Card  className="ClassCard" sx={{ minWidth: 250, boxShadow:3, background:'var(--card-background-color)', color:'var(--primary-text-color)',
            ':hover': {
          boxShadow: 20,}}}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="--secondary-text-color" gutterBottom>
               CSCD340
              </Typography>
              <Typography variant="h5" component="div">
              Operating Systems
              </Typography>
              <Typography sx={{ mb: 1.5 ,fontFamily:"PrimaryFont"}} color="--secondary-text-color">
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
          <Card  className="ClassCard" sx={{ minWidth: 250, boxShadow:3, background:'var(--card-background-color)', color:'var(--primary-text-color)',
            ':hover': {
          boxShadow: 20,}}}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="--secondary-text-color" gutterBottom>
               CSCD350
              </Typography>
              <Typography variant="h5" component="div">
              Software Development Principles
              </Typography>
              <Typography sx={{ mb: 1.5 ,fontFamily:"PrimaryFont"}} color="--secondary-text-color">
                A-
              </Typography>
              <Typography variant="body2">
              This course covers formal approaches and tools for conceiving, understanding, analyzing, designing,building, testing, deploying, documenting and maintaining large software systems. Topics may include software lifecycle models; project and team management; verification and validation techniques; legal and ethical issues; practical development and application of skills in critical thinking, communication and professionalism. A major team-based software development project was required.
              </Typography>
            </CardContent>
          </Card>
  )
}
export function Class371() { 
  return (
          <Card  className="ClassCard" sx={{ minWidth: 250, boxShadow:3, background:'var(--card-background-color)', color:'var(--primary-text-color)',
            ':hover': {
          boxShadow: 20,}}}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="--secondary-text-color" gutterBottom>
               CSCD371
              </Typography>
              <Typography variant="h5" component="div">
              .NET Programming
              </Typography>
              <Typography sx={{ mb: 1.5 ,fontFamily:"PrimaryFont"}} color="--secondary-text-color">
                A
              </Typography>
              <Typography variant="body2">
              This course introduces .NET Programming and the .NET framework. Emphasis was be placed on understanding the syntactical features of the language and how to effectively use the design of the language in conjunction with the .NET Framework. Topics included .NET fundamentals, .NET assemblies, language fundamentals, object oriented design and programming, delegates and events, threading, serialization, database connectivity, windows and dialogs, and GUI components.              </Typography>
            </CardContent>
          </Card>
  )
}
export function Class429() { 
  return (
          <Card  className="ClassCard" sx={{ minWidth: 250, boxShadow:3, background:'var(--card-background-color)', color:'var(--primary-text-color)',
            ':hover': {
          boxShadow: 20,}}}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="--secondary-text-color" gutterBottom>
               CSCD429
              </Typography>
              <Typography variant="h5" component="div">
              Data Mining
              </Typography>
              <Typography sx={{ mb: 1.5 ,fontFamily:"PrimaryFont"}} color="--secondary-text-color">
                B+
              </Typography>
              <Typography variant="body2">
              This course provided an introduction to the main topics in data mining and knowledge discovery, including data preparation for knowledge discovery, frequent pattern and association mining, and classification and cluster analysis.
              </Typography>
            </CardContent>
          </Card>
  )
}
export function Class434() { 
  return (
          <Card  className="ClassCard" sx={{ minWidth: 250, boxShadow:3, background:'var(--card-background-color)', color:'var(--primary-text-color)',
            ':hover': {
          boxShadow: 20,}}}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="--secondary-text-color" gutterBottom>
               CSCD434
              </Typography>
              <Typography variant="h5" component="div">
              Network Security
              </Typography>
              <Typography sx={{ mb: 1.5 ,fontFamily:"PrimaryFont"}} color="--secondary-text-color">
                A
              </Typography>
              <Typography variant="body2">
              This course explored practical topics in network security. Topics included policy and mechanism, malicious code, intrusion detection, prevention and response, cryptographic and protocols for privacy and integrity. This course emphasized the trade-offs among risks of misuse, cost of prevention and social issues. Concepts were implemented in programming assignments and comprehensive projects.
              </Typography>
            </CardContent>
          </Card>
  )
}

export function Class437() { 
  return (
          <Card  className="ClassCard" sx={{ minWidth: 250, boxShadow:3, background:'var(--card-background-color)', color:'var(--primary-text-color)',
            ':hover': {
          boxShadow: 20,}}}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="--secondary-text-color" gutterBottom>
               CSCD437
              </Typography>
              <Typography variant="h5" component="div">
              Secure Coding
              </Typography>
              <Typography sx={{ mb: 1.5 ,fontFamily:"PrimaryFont"}} color="--secondary-text-color">
                A
              </Typography>
              <Typography variant="body2">
              This course introduced a variety of topics of concern to programmers when writing code. It examined characteristics of secure programs and the ability to implement programs that are free from vulnerabilities, including evaluating software, understanding mechanisms for testing software for vulnerabilities, and understanding specific vulnerabilities such as buffer overflow. Java, C and C++ code were written and examined.
             </Typography>
            </CardContent>
          </Card>
  )
}

export function Class467() { 
    return (
            <Card  className="ClassCard" sx={{ minWidth: 250, boxShadow:3, background:'var(--card-background-color)', color:'var(--primary-text-color)',
              ':hover': {
            boxShadow: 20,}}}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="--secondary-text-color" gutterBottom>
                 CSCD467
                </Typography>
                <Typography variant="h5" component="div">
                Cloud Computing
                </Typography>
                <Typography sx={{ mb: 1.5 ,fontFamily:"PrimaryFont"}} color="--secondary-text-color">
                  A
                </Typography>
                <Typography variant="body2">
                This course focused on the AWS Serices, including EC2, RDS Databases, API Gateway, IAM roles, VPC Connections, Data Transfering Services, AWS Lambda, and more. From this knowledge, I was able to complete and obtain the AWS Academy Graduate - AWS Academy Cloud Architecting Certification.
                </Typography>
              </CardContent>
            </Card>
    )
}
export function Class484() { 
  return (
          <Card  className="ClassCard" sx={{ minWidth: 250, boxShadow:3, background:'var(--card-background-color)', color:'var(--primary-text-color)',
            ':hover': {
          boxShadow: 20,}}}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="--secondary-text-color" gutterBottom>
               CSCD484
              </Typography>
              <Typography variant="h5" component="div">
              Machine Learning
              </Typography>
              <Typography sx={{ mb: 1.5 ,fontFamily:"PrimaryFont"}} color="--secondary-text-color">
                A
              </Typography>
              <Typography variant="body2">
              This course studied various methods for learning and recognizing patterns in data. It discussed supervised learning models that included decision trees, linear regression and its nonlinear transformation, logistic regression, neural networks, and model ensembles. Unsupervised learning topics included various clustering algorithms, and principle component analysis for dimensionality reduction. The course focused on explaining why these underhood learnings can be possible and how they are achieved.
              </Typography>
            </CardContent>
          </Card>
  )
}