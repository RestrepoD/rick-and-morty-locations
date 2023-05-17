import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getCharacter } from "../../services/getCharacter";
import "./ResidentCard.css";

const ResidentCard = ({ url }) => {
  const [resident, setResident] = useState(null);
  useEffect(() => {
    async function loadResident() {
      const residentData = await getCharacter(url);
      setResident(residentData);
    }
    loadResident();
  }, [url]);
  return (
    <>
      {!resident ? (
        <p>Loading characters...</p>
      ) : (
        <div className="res_card">
          <div>
            <img src={resident.image} alt={resident.name} />
          </div>
          <h3>{resident.name}</h3>
          <hr />
          <ul className="res_info">
            <li>
              <b>Species:</b> {resident.species}
            </li>
            <li>
              <b>origin:</b> {resident.origin.name}
            </li>
            <li>
              <b>Status:</b> {resident.status}
            </li>
            <li>
              <b>Appearances:</b> {resident.episode.length}
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
ResidentCard.propTypes = {
  url: PropTypes.string.isRequired,
};
export default ResidentCard;
