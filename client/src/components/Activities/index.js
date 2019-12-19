import React, { useEffect, useState } from "react";
import { getAllActivities } from "../../actions/activitiesAction";
import { connect } from "react-redux";
import { ActivityByIitinerary } from "../ActivityByItinerary";
import Axios from "axios";
import "./Activities.css";

const Activities = props => {
//   console.log(props);

  const [activities, setActivities] = useState([]);

  async function getActivities() {
    const { data } = await Axios.get(
      `/api/activities/${props.ItineraryId}`
    );
    setActivities(data.data);
  }

  useEffect(() => {
    getActivities();
  }, [props.itineraries]);

  return (
    <>
      <div className="Itinerary__activities__slider">
        {activities.map(el => (
            <ActivityByIitinerary key={el._id} activity={el} />
        ))}
      </div>
    </>
  );
};

const mapStateToProps = ({ itineraries }) => {
  return itineraries;
};

export default connect(mapStateToProps, { getAllActivities })(Activities);
