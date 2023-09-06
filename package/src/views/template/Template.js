// import React, {useState,useEffect} from "react";
// import { Button, Card, CardBody, Table } from "reactstrap";
// import { useNavigate } from "react-router-dom";
// import {
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   Dropdown,
//   Container,
// } from "reactstrap";
// import { FiMoreVertical } from "react-icons/fi";
// import axios from "axios";
// import BaseURL from "../../urls/BaseUrl";

// export default function Template() {
//   const navigate = useNavigate();

//   const [isOpen, setIsOpen] = React.useState(false);
//   const [dropdownOpen, setDropdownOpen] = React.useState(false);

//   const toggle = () => setDropdownOpen((prevState) => !prevState);
//   const Handletoggle = () => {
//     setIsOpen(!isOpen);
//   };

//   // const [show, setShow] = useState(false);
//   // const [editShow, setEditShow] = useState(false);
//   // const [editItems, setEditItems] = useState({ name: "", status: true });

//   // const handleClose = () => setShow(false);
//   // const handleShow = () => setShow(true);
//   // const handleEditShow = (items) => {
//   //   setEditShow(true);
//   //   setEditItems(items);
//   // };

//   // const handleEditClose = () => setEditShow(false);
//   const [datas, setDatas] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     axios.get(`${BaseURL}design/ShowDesign`)
//       .then((res) => {
//         setDatas(res.data);
//         console.log('datas', res.data.record);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//         setIsLoading(false);
//       });
//   }, []);

//   return (
//     <div className="mainContent">
//       <Card className="m-3">

//         <CardBody>
//         {isLoading ? (
//             <div className="text-center mt-3">
//               <div className="spinner-border" role="status">
//                 <span className="visually-hidden">Loading...</span>
//               </div>
//             </div>
//           ) : (
//             datas &&
//             datas.length > 0 && (
//               <div>
//           <div className="d-flex justify-content-between align-items-center mb-3">
//             {/* <h4 className="card-title">Admin List</h4> */}
//             <Button
//               color="primary"
//               onClick={() => navigate("/addtemplate")}
//               className="m-2 btn"
//             >
//               Add Template
//             </Button>
//           </div>
//           <Table className="no-wrap mt-3 align-middle" responsive borderless>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>User</th>
//                 <th>Category name</th>
//                 <th>W/H</th>
//                 <th>Poster Name</th>
//                 <th>Poster Thumb</th>
//                 <th>Size</th>
//                 <th>Views</th>
//                 <th>Is Premium</th>
//                 <th>Status</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="border-top">
//                 <td>1</td>
//                 <td>Om Kakadiya</td>
//                 <td>Om Kakadiya</td>
//                 <td>Om Kakadiya</td>
//                 <td>ACTIVE</td>
//                 <td>ACTIVE</td>
//                 <td>ACTIVE</td>
//                 <td>ACTIVE</td>
//                 <td>ACTIVE</td>
//                 <td>ACTIVE</td>
//                 <td>
//                     <Dropdown direction="right" isOpen={dropdownOpen} toggle={toggle}>
//                       <DropdownToggle color="white">
//                         <FiMoreVertical />
//                       </DropdownToggle>
//                       <DropdownMenu>
//                         <DropdownItem onClick={()=>{
//                           navigate('/updatetemplate');
//                         }}>Update</DropdownItem>
//                         <DropdownItem>Delete</DropdownItem>
//                       </DropdownMenu>
//                     </Dropdown>
//                 </td>
//               </tr>
//             </tbody>
//           </Table>
//           </div>
//             )
//            )}
//         </CardBody>
//       </Card>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import { Button, Card, CardBody, Table } from "reactstrap";
import { useNavigate } from "react-router-dom";
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
} from "reactstrap";
import { FiMoreVertical } from "react-icons/fi";
import axios from "axios";
import BaseURL from "../../urls/BaseUrl";

export default function Template() {
  const navigate = useNavigate();
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${BaseURL}design/ShowDesign`)
      .then((res) => {
        console.log("API Response:", res.data); // Log the response data
        setDatas(res.data.record);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="mainContent">
      <Card className="m-3">
        <CardBody>
          {isLoading ? (
            <div className="text-center mt-3">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            datas && datas.length > 0 ? (
              <div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <Button
                    color="primary"
                    onClick={() => navigate("/addtemplate")}
                    className="m-2 btn"
                  >
                    Add Template
                  </Button>
                </div>
                <Table className="no-wrap mt-3 align-middle" responsive borderless>
                <thead>
                    <tr>
                      <th>ID</th>
                      <th>User</th>
                      <th>Category name</th>
                      <th>W/H</th>
                      <th>Poster Name</th>
                      <th>Poster Thumb</th>
                      <th>Size</th>
                      <th>Views</th>
                      <th>Is Premium</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {datas.map((item) => (
                      <tr className="border-top" key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.user}</td>
                      <td>{item.category_name}</td>
                      <td>{item.whatever_field}</td>
                      <td>{item.poster_name}</td>
                      <td>{item.poster_thumb}</td>
                      <td>{item.size}</td>
                      <td>{item.views}</td>
                      <td>{item.is_premium ? "Yes" : "No"}</td>
                      <td>{item.status}</td>
                      <td>
                        <Dropdown direction="right">
                          <DropdownToggle color="white">
                            <FiMoreVertical />
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem onClick={() => navigate('/updatetemplate')}>
                              Update
                            </DropdownItem>
                            <DropdownItem>Delete</DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      </td>
                    </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            ) : (
              <Table className="no-wrap mt-3 align-middle" responsive borderless>
                <tbody>
                  <tr>
                    <td colSpan="11" className="text-center">No Data Available</td>
                  </tr>
                </tbody>
              </Table>
            )
          )}
        </CardBody>
      </Card>
    </div>
  );
  
}
