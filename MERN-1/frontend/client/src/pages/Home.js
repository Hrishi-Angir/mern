import React, { useEffect } from "react";

import { MDBCol, MDBContainer, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getTours } from "../redux/features/tourSlice";
import CardTour from "../components/CardTour";
import Spinner from "../components/Spinner";
import Pagination from "../components/Pagination";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Home = () => {
  const { tours, loading, currentPage, setCurrentPage, numberOfPages } =
    useSelector((state) => ({
      ...state.tour,
    }));
  const dispatch = useDispatch();
  const query = useQuery();
  const searchQuery = query.get("searchQuery");
  const location = useLocation();
  useEffect(() => {
    dispatch(getTours(currentPage));
  }, [currentPage]);

  if (loading) {
    return <Spinner />;
  }
  return (
    <div
      style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "1000px",
        alignContent: "center",
        marginTop: "2rem",
      }}
    >
      <MDBRow className="mt-5">
        {tours.length === 0 && location.pathname === "/" && (
          <MDBTypography className="text-center mb-0" tag="h2">
            We couldnt find any matches for "{searchQuery}"
          </MDBTypography>
        )}

        {tours.length === 0 && location.pathname === "/" && (
          <MDBTypography className="text-center mb-0" tag="h2">
            No Tours Found
          </MDBTypography>
        )}

        <MDBCol>
          <MDBRow className="row-cols-1 row-cols-md-3 g-2">
            {tours &&
              tours.map((item) => <CardTour key={item._id} {...item} />)}
          </MDBRow>

          {tours.length > 0 && (
            <Pagination
              setCurrentPage={setCurrentPage}
              numberOfPages={numberOfPages}
              currentPage={currentPage}
              dispatch={dispatch}
            />
          )}
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default Home;
