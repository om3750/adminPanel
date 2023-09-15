import React, { useState, useEffect } from "react";
import BaseURL from "../../urls/BaseUrl";
import { Button, Card, CardBody, Table } from "reactstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../assets/scss/app.css"; // Import the external CSS file

// ... other imports
import { Form, Modal } from "react-bootstrap";
const ITEMS_PER_PAGE = 10; // Number of items to show per pagex`

export default function Category() {
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const navigate = useNavigate();

  const [datas, setDatas] = useState([]); // Provide an empty array as the initial value

  useEffect(() => {
    axios.get(`${BaseURL}TransactionLog/showTransactionLog`).then((res) => {
      console.log("API Response:", res.data); // Log the response data
      setDatas(res.data.record);
      setIsLoading(false);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    });
}, []);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(datas.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = datas.slice(indexOfFirstItem, indexOfLastItem);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
                 ) : datas && datas.length > 0 ? (

              <div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="card-title">Transaction Logs</h4>
                </div>
                <Table
                  className="no-wrap align-middle"
                  responsive
                  borderless
                >
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>User Id</th>
                      <th>User Name</th>
                      <th>Transaction Id</th>
                      <th>Platform</th>
                      <th>Amount</th>
                      <th>Paid</th>
                      <th>Payment Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentItems.map((items, index) => {
                      return (
                        <tr className="border-top" key={items._id}>
                          {/* Add a unique key for each row */}
                          <td>{items.sql_id}</td>
                          <td>{items.user_id}</td>
                          <td>{items.plan_id}</td>
                          <td>{items.transaction_id}</td>
                          <td>{items.from_where}</td>
                          <td>Rs {items.price_amount}</td>
                          <td>Rs {items.paid_amount}</td>
                          <td>{items.created_at}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
                <div className="pagination-container">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </div>{" "}
              </div>
            ) : (
              <Table className="no-wrap mt-3 align-middle" responsive borderless>
                <tbody>
                  <tr>
                    <td colSpan="11" className="text-center">
                      No Data Available
                    </td>
                  </tr>
                </tbody>
              </Table>
            )}
        </CardBody>
      </Card>
    </div>
  );
}
function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <ul className="pagination">
      {pageNumbers.map((number) => (
        <li
          key={number}
          className={`pagination-item ${
            number === currentPage ? "active" : ""
          }`}
          onClick={() => onPageChange(number)}
        >
          {number}
        </li>
      ))}
    </ul>
  );
}
