import React from 'react';
import ReactMapboxGl, { Popup } from "react-mapbox-gl";


const BathroomPopup = ({
  coordinate,
  submitHandler,
  bathroomLocation,
  bathroomPic,
  handleChange,
  review,
}) => (
  <div>
    <Popup
      className="popup"
      coordinates={coordinate}
      anchor="bottom"
      offset={{
        'bottom-left': [0, 0],  'bottom': [0, 0], 'bottom-right': [0, 0],
      }}
    >
      <h1>Add Bathroom</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Bathroom Location"
          value={bathroomLocation}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="Bathroom URL Pic"
          value={bathroomPic}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="Poop Review"
          value={review}
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          value="Submit"
        />
      </form>
    </Popup>
  </div>
);

export default BathroomPopup;
