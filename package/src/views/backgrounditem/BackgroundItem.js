import React,{useState,useEffect} from "react";
import { Button, Card, CardBody, Table } from "reactstrap";
import { useNavigate } from "react-router-dom";
// import { FiMoreVertical } from "react-icons/fi";
import BaseURL from '../../urls/BaseUrl'

import axios from "axios";

export default function BackgroundItem() {
  const navigate = useNavigate();  

  const [datas, setDatas] = useState([]); // Provide an empty array as the initial value

  useEffect(() => {
    axios.get(`${BaseURL}background/bg_item`)
      .then((res) => {
        setDatas(res.data.record);
        console.log('res', res.data.record);
      });
  }, []);

  return (
    <div className="mainContent">
      <Card className="m-3">
        <CardBody>
          <div className="d-flex justify-content-between align-items-center mb-3">
            {/* <h4 className="card-title">Admin List</h4> */}
            <Button
              color="primary"
              onClick={() => navigate("/addBackgroundItem")}
              className="m-2 btn"
            >
              Add New Background
            </Button>
          </div>
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Background Id</th>
                <th>Category Name</th>
                <th>Sricker Name</th>
                <th>Sricker Image</th>
                <th>Is Premium</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {datas.map((items) => {
                    return (
                      <tr className="border-top" key={items.no}> {/* Add a unique key for each row */}
                        <td>{items._id}</td>
                        <td>{items.application}</td>
                        <td>{items.bg_name}</td>
                        <td><img style={{height:'100%',width:'100px'}} src={`http://192.168.29.222:8000/${items.bg_image}`} alt="Logo" /></td>
                        <td>{items.is_premium ? 'Yes':'No'}</td>
                        <td>{items.status ? 'ACTIVATE':'DESABLE'}</td>
                        <td>{items.seq}</td>
                      </tr>
                    );
                  })}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
}
