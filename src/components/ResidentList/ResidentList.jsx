import PropTypes from "prop-types";
import ResidentCard from "../ResidentCard/ResidentCard";
// import { useState } from "react";
import "./ResidentList.css";

const ResidentList = ({ residents = [] }) => {
  // const [paginationQuantity, setPaginationQuantity] = useState(6);
  // const [pageNumber, setPageNumber] = useState(1);

  // const lowerLimit = paginationQuantity * (pageNumber - 1);
  // const upperLimit = paginationQuantity * pageNumber - 1;
  // const totalPages = Math.ceil(residents.length / paginationQuantity);

  // const residentSlice = residents.slice(lowerLimit, upperLimit + 1);

  // function switchPage(page) {
  //   if (page > totalPages) setPageNumber(totalPages);
  //   else if (page < 1) setPageNumber(1);
  //   else setPageNumber(page);
  // }

  return (
    <div>
      {/* <div>
        <button onClick={() => switchPage(pageNumber - 1)}>Previous</button>
        <button onClick={() => switchPage(pageNumber + 1)}>Next</button>
      </div> */}

      {!residents.length && <p>There are no residents in this location</p>}
      {Boolean(residents.length) && (
        <ul className="res_card_list">
          {residents.map((residentUrl) => (
            <li className="list_element" key={residentUrl}>
              <ResidentCard url={residentUrl} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
ResidentList.propTypes = {
  residents: PropTypes.array.isRequired,
};
export default ResidentList;
