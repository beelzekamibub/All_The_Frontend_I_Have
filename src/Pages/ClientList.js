import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { Sidenav } from '../Components/sidenav';
import { useEffect,useState } from 'react';
import "../styles/clientlist.css";
import { MDBIcon } from 'mdb-react-ui-kit';
import { Navbar2 } from '../Components/navbar2';

export const ClientList = ({clientlist }) => {
  const [clientsList, setClientsList] = useState([]);
  var ntokenn = "";
  useEffect(() => {

    // let token = localStorage.getItem("JWT-Token");
    // let ntoken = "Bearer " + token.replaceAll('"', '');
    // ntokenn = ntoken;

    // try {
    //   console.log("made a get call");
    //   fetch("https://localhost:7061/api/User/Get-All-Clients-for-an-advisor", {
    //     method: "GET",
    //     headers: {
    //       'Content-type': 'application/json',
    //       "Access-Control-Allow-Origin": "*",
    //       "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
    //       "Authorization": ntoken,
    //       "Access-Control-Max-Age": 86400
    //     }
    //   })
    //     .then(res => res.json())
    //     .then((data) => {
    //       setClientsList(data);

    //     })
    // } catch (error) {
    //   console.log("Error-> ", error);
    // }
  },[])

  const cli = clientsList.map((e,ind) =>{
    return (
      <tr>
        <td>{e.clientID}</td>
        <td>{e.firstName}</td>
        <td>{e.lastName}</td>
        <td>{e.email}</td>
      </tr>
    )
  })



  return (
    <>
    <Navbar2/>
    {/* <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
       <Sidenav />
      <div style={{ flex: 1, padding: '20px', overflowY: 'scroll'}}> */}

      {/* <div style={{display:"flex",justifyContent:"flex-end",marginTop:"2px",marginBottom:"6px",cursor:"pointer"}}>
      <span class="signout" style={{marginRight:"2%",fontWeight:"700",backgroundColor:"#212529",color:"white",padding:"1%",borderRadius:"14px"}}>
      <center>
      <span  style={{marginRight:"10%"}}>Sign Out</span>
      <MDBIcon style={{marginLeft:"1%"}}icon="power-off" size="1.5x"/>
      </center>
    
      </span>
        
      </div> */}
 


      <div className='container'  style={{marginTop:"7%"}} >
      <div className='card' style={{border:"3px solid black",width:"fit-content",padding:"2%",borderRadius:"20px"}}>
      <h3>Welcome </h3>
      <p style={{color:"#f58142"}}>It's good to see you again</p>
      </div>
      <center>
      <h3 style={{fontWeight:"700",marginBottom:"3%"}}>Client Details</h3>
      </center>
        

      <Table className="rounded-table" responsive hover id="table" >
        <thead>
          <tr>
            <th>Client ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>E-mail</th>
            <th>Phone No.</th>
            <th>Total Investment</th>
            
          </tr>
        </thead>
        <tbody>
          {clientlist}
          
        </tbody>
      </Table>
        <Button href='/addclient' className="addnewclient" style={{fontFamily:"Arial",borderRadius:"14px",backgroundColor:"#333333"}}>Add New Client</Button>
      {/* </div>
    </div> */}
    </div>
    </>
  );
};
