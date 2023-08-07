import React,{useState,useEffect} from "react";
import BaseURL from "../../urls/BaseUrl";
import { Button, Card, CardBody, Table } from "reactstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { FiMoreVertical } from "react-icons/fi";

export default function Category() {
  const navigate = useNavigate();
  const [datas, setDatas] = useState([]); // Provide an empty array as the initial value

  useEffect(() => {
    axios.get(`${BaseURL}category/showCategory`).then((res) => {
      setDatas(res.data.record);
      console.log("res", res.data.record);
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
              onClick={() => navigate("/addcategory")}
              className="m-2 btn"
            >
              Add Category
            </Button>
          </div>
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Catrgory ID</th>
                <th>App Name</th>
                <th>Category Name</th>
                <th>ID Name</th>
                <th>Category Thumb</th>
                <th>Sequence name</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {datas.map((items) => {
                return (
                  <tr className="border-top" key={items.no}>
                    {" "}
                    {/* Add a unique key for each row */}
                    <td>{items._id}</td>
                    <td>CraftyArt</td>
                    <td>{items.category_name}</td>                    
                    <td>{items.id_name}</td>
                    <td><img
                        style={{ height: "100%", width: "100px" }}
                        src={`http://192.168.29.222:8080/${items.category_thumb}`}
                        alt="Logo"
                      /></td>
                    <td>{items.sequence_number}</td>
                    <td>{items.status ? "ACTIVATE" : "DESABLE"}</td>
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
