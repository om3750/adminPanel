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
import React from "react";
import { Card, CardBody, CardText, CardTitle, Col, Row } from "reactstrap";

const StyledCard = ({ title, total, live, unlive }) => {
  return (
    <Card className="clickable-card">
      <CardBody>
        <CardTitle tag="h6" className="font-weight-bold">
          {title}
        </CardTitle>
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
      </CardBody>
    </Card>
  );
};

const Starter = () => {
  return (
    <div>
     <Row>
     <Col sm="6"  lg="3">
          <a href="#" className="text-decoration-none">
            <StyledCard
              title="Fonts"
              total="1138"
              live="1138"
              unlive="1138"
            />
          </a>
        </Col>      
     <Col sm="6"  lg="3">
          <a href="#" className="text-decoration-none">
            <StyledCard
              title="Categories"
              total="1138"
              live="1138"
              unlive="1138"
            />
          </a>
        </Col>      
     <Col sm="6"  lg="3">
          <a href="#" className="text-decoration-none">
            <StyledCard
              title="Templates"
              total="1138"
              live="1138"
              unlive="1138"
            />
          </a>
        </Col>      
     <Col sm="6"  lg="3">
          <a href="#" className="text-decoration-none">
            <StyledCard
              title="Sticker Categories"
              total="1138"
              live="1138"
              unlive="1138"
            />
          </a>
        </Col>      
     <Col sm="6"  lg="3">
          <a href="#" className="text-decoration-none">
            <StyledCard
              title="Sticker Items"
              total="1138"
              live="1138"
              unlive="1138"
            />
          </a>
        </Col>      
     <Col sm="6"  lg="3">
          <a href="#" className="text-decoration-none">
            <StyledCard
              title="Background Categories"
              total="1138"
              live="1138"
              unlive="1138"
            />
          </a>
        </Col>      
     <Col sm="6"  lg="3">
          <a href="#" className="text-decoration-none">
            <StyledCard
              title="Background Items"
              total="1138"
              live="1138"
              unlive="1138"
            />
          </a>
        </Col>      
    </Row>   
    </div>
  );
};

export default Starter;
