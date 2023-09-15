// import { Col, Row } from "reactstrap";
// import SalesChart from "../components/dashboard/SalesChart";
// import Feeds from "../components/dashboard/Feeds";
// import ProjectTables from "../components/dashboard/ProjectTable";
// import TopCards from "../components/dashboard/TopCards";
// import Blog from "../components/dashboard/Blog";
// import bg1 from "../assets/images/bg/bg1.jpg";
// import bg2 from "../assets/images/bg/bg2.jpg";
// import bg3 from "../assets/images/bg/bg3.jpg";
// import bg4 from "../assets/images/bg/bg4.jpg";

// const BlogData = [
//   {
//     image: bg1,
//     title: "This is simple blog",
//     subtitle: "2 comments, 1 Like",
//     description:
//       "This is a wider card with supporting text below as a natural lead-in to additional content.",
//     btnbg: "primary",
//   },
//   {
//     image: bg2,
//     title: "Lets be simple blog",
//     subtitle: "2 comments, 1 Like",
//     description:
//       "This is a wider card with supporting text below as a natural lead-in to additional content.",
//     btnbg: "primary",
//   },
//   {
//     image: bg3,
//     title: "Don't Lamp blog",
//     subtitle: "2 comments, 1 Like",
//     description:
//       "This is a wider card with supporting text below as a natural lead-in to additional content.",
//     btnbg: "primary",
//   },
//   {
//     image: bg4,
//     title: "Simple is beautiful",
//     subtitle: "2 comments, 1 Like",
//     description:
//       "This is a wider card with supporting text below as a natural lead-in to additional content.",
//     btnbg: "primary",
//   },
// ];

// const Starter = () => {
//   return (
//     <div>
//       {/***Top Cards***/}
//       <Row>
//         <Col sm="6" lg="3">
//           <TopCards
//             bg="bg-light-success text-success"
//             title="Profit"
//             subtitle="Yearly Earning"
//             earning="$21k"
//             icon="bi bi-wallet"
//           />
//         </Col>
//         <Col sm="6" lg="3">
//           <TopCards
//             bg="bg-light-danger text-danger"
//             title="Refunds"
//             subtitle="Refund given"
//             earning="$1k"
//             icon="bi bi-coin"
//           />
//         </Col>
//         <Col sm="6" lg="3">
//           <TopCards
//             bg="bg-light-warning text-warning"
//             title="New Project"
//             subtitle="Yearly Project"
//             earning="456"
//             icon="bi bi-basket3"
//           />
//         </Col>
//         <Col sm="6" lg="3">
//           <TopCards
//             bg="bg-light-info text-into"
//             title="Sales"
//             subtitle="Weekly Sales"
//             earning="210"
//             icon="bi bi-bag"
//           />
//         </Col>
//       </Row>
//       {/***Sales & Feed***/}
//       {/* <Row>
//         <Col sm="6" lg="6" xl="7" xxl="8">
//           <SalesChart />
//         </Col>
//         <Col sm="6" lg="6" xl="5" xxl="4">
//           <Feeds />
//         </Col>
//       </Row> */}
//       {/***Table ***/}
//       {/* <Row>
//         <Col lg="12">
//           <ProjectTables />
//         </Col>
//       </Row> */}
//       {/***Blog Cards***/}
//       {/* <Row>
//         {BlogData.map((blg, index) => (
//           <Col sm="6" lg="6" xl="3" key={index}>
//             <Blog
//               image={blg.image}
//               title={blg.title}
//               subtitle={blg.subtitle}
//               text={blg.description}
//               color={blg.btnbg}
//             />
//           </Col>
//         ))}
//       </Row> */}
//     </div>
//   );
// };

// export default Starter;
import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardBody, CardText, CardTitle,Table, Col, Row } from "reactstrap";
import axios from "axios";
import BaseURL from "../urls/BaseUrl";

const StyledCard = ({ title, path, total, live, unlive }) => {



 

  const navigate = useNavigate();
  return (
    <Card onClick={() => navigate(`/${path}`)} className="clickable-card">
      <CardBody>
        <CardTitle tag="h6" className="font-weight-bold">
          {title}
        </CardTitle>
        {total === null ? (
          <div className="text-center mt-3">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="ms-3">
            <CardText className="mb-0">
              <strong>Total:</strong> {total}
            </CardText>
            <CardText className="mb-0">
              <strong>Live:</strong> {live}
            </CardText>
            <CardText className="mb-0">
              <strong>Unlive:</strong> {unlive}
            </CardText>
          </div>
        )}
      </CardBody>
    </Card>
  );
};

const Starter = () => {
  const [datas, setDatas] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${BaseURL}dashboard/showData`)
      .then((res) => {
        setDatas(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <Row>
        <Col sm="4" lg="3">
          <StyledCard
            title="Fonts"
            path="fonts"
            total={isLoading ? null : datas?.fontCount?.total}
            live={isLoading ? null : datas?.fontCount?.Live}
            unlive={isLoading ? null : datas?.fontCount?.NotLive}
          />
        </Col>
        <Col sm="4" lg="3">
          <StyledCard
            title="Font Families"
            path="fontFamilies"
            total={isLoading ? null : datas?.fontFamilieCount?.total}
            live={isLoading ? null : datas?.fontFamilieCount?.Live}
            unlive={isLoading ? null : datas?.fontFamilieCount?.NotLive}
          />
        </Col>
        <Col sm="4" lg="3">
          <StyledCard
            title="Font List"
            path="fontList"
            total={isLoading ? null : datas?.fontListCount?.total}
            live={isLoading ? null : datas?.fontListCount?.Live}
            unlive={isLoading ? null : datas?.fontListCount?.NotLive}
          />
        </Col>
        <Col sm="4" lg="3">
          <StyledCard
            title="Categories"
            path="category"
            total={isLoading ? null : datas?.categorieCount?.total}
            live={isLoading ? null : datas?.categorieCount?.Live}
            unlive={isLoading ? null : datas?.categorieCount?.NotLive}
          />
        </Col>
        <Col sm="4" lg="3">
          <StyledCard
            title="Subcategories"
            path="subcategory"
            total={isLoading ? null : datas?.subCategorieCount?.total}
            live={isLoading ? null : datas?.subCategorieCount?.Live}
            unlive={isLoading ? null : datas?.subCategorieCount?.NotLive}
          />
        </Col>
        <Col sm="4" lg="3">
          <StyledCard
            title="Style"
            path="style"
            total={isLoading ? null : datas?.styleCount?.total}
            live={isLoading ? null : datas?.styleCount?.Live}
            unlive={isLoading ? null : datas?.styleCount?.NotLive}
          />
        </Col>
        <Col sm="4" lg="3">
          <StyledCard
            title="Theme"
            path="theme"
            total={isLoading ? null : datas?.themeCount?.total}
            live={isLoading ? null : datas?.themeCount?.Live}
            unlive={isLoading ? null : datas?.themeCount?.NotLive}
          />
        </Col>
        <Col sm="4" lg="3">
          <StyledCard
            title="Keywords"
            path="keyword"
            total={isLoading ? null : datas?.fontCount?.total}
            live='*'
            unlive='*'
          />
        </Col>
        <Col sm="4" lg="3">
          <StyledCard
            title="Search Tags"
            path="tags"
            total={isLoading ? null : datas?.fontCount?.total}
            live={isLoading ? null : datas?.fontCount?.Live}
            unlive={isLoading ? null : datas?.fontCount?.NotLive}
          />
        </Col>
        <Col sm="4" lg="3">
          <StyledCard
            title="Interest"
            path="interest"
            total={isLoading ? null : datas?.fontCount?.total}
            live={isLoading ? null : datas?.fontCount?.Live}
            unlive={isLoading ? null : datas?.fontCount?.NotLive}
          />
        </Col>
        <Col sm="4" lg="3">
          <StyledCard
            title="Editable Title"
            path="editabletitle"
            total={isLoading ? null : datas?.fontCount?.total}
            live={isLoading ? null : datas?.fontCount?.Live}
            unlive={isLoading ? null : datas?.fontCount?.NotLive}
          />
        </Col>
        <Col sm="4" lg="3">
          <StyledCard
            title="Templates"
            path="template"
            total={isLoading ? null : datas?.fontCount?.total}
            live={isLoading ? null : datas?.fontCount?.Live}
            unlive={isLoading ? null : datas?.fontCount?.NotLive}
          />
        </Col>
        <Col sm="4" lg="3">
          <StyledCard
            title="Sticker Categories"
            path="stickerCategory"
            total={isLoading ? null : datas?.fontCount?.total}
            live={isLoading ? null : datas?.fontCount?.Live}
            unlive={isLoading ? null : datas?.fontCount?.NotLive}
          />
        </Col>
        <Col sm="4" lg="3">
          <StyledCard
            title="Sticker Items"
            path="stickerItem"
            total={isLoading ? null : datas?.fontCount?.total}
            live={isLoading ? null : datas?.fontCount?.Live}
            unlive={isLoading ? null : datas?.fontCount?.NotLive}
          />
        </Col>
        <Col sm="4" lg="3">
          <StyledCard
            title="Background Categories"
            path="backgroundCategory"
            total={isLoading ? null : datas?.fontCount?.total}
            live={isLoading ? null : datas?.fontCount?.Live}
            unlive={isLoading ? null : datas?.fontCount?.NotLive}
          />
        </Col>
        <Col sm="4" lg="3">
          <StyledCard
            title="Background Items"
            path="backgroundItem"
            total={isLoading ? null : datas?.fontCount?.total}
            live={isLoading ? null : datas?.fontCount?.Live}
            unlive={isLoading ? null : datas?.fontCount?.NotLive}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Starter;
