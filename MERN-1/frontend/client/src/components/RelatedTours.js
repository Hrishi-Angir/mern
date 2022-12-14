import React from "react";
import "../index.css";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBCardtitle,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCardGroup,
} from "mdb-react-ui-kit";

import { Link } from "react-router-dom";
import { excerpt } from "../utility";

const RelatedTours = ({ relatedTours, tourId }) => {
  return (
    <>
      {relatedTours && relatedTours.length > 0 && relatedTours.length > 1 && (
        <h4>Related tours</h4>
      )}
      <MDBRow className="row-cols-1 row-cols-md-3 g-4">
        {relatedTours
          .filter((item) => item._id !== tourId)
          .splice(0, 3)
          .map((item) => (
            <MDBCol key={item?._id}>
              <MDBCard>
                <Link to={`/tour/${item._id}`}>
                  <MDBCardImage
                    src={item.imageFile}
                    alt={item.title}
                    position="top"
                  />
                </Link>
                <span className="text-start tag-card">
                  {item.tags.map((tag) => (
                    <Link to={`/tour/tag${tag}`}>#{tag}</Link>
                  ))}
                </span>

                <MDBCardBody>
                  <MDBCardTitle className="text-start">
                    {item.title}
                  </MDBCardTitle>
                  <MDBCardText className="text-start">
                    {excerpt(item.description, 45)}
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
      </MDBRow>
    </>
  );
};

export default RelatedTours;
