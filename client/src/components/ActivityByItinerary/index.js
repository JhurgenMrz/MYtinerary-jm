import React from "react";
import "./ActivityByItinerary.css";
import Comments from "../Comments";

export const ActivityByIitinerary = ({ activity }) => {
  return (
    <div className="ActivityByItinerary__item">
      <img src={activity.img_url} alt={activity.activity_name} />
      <p>{activity.activity_name}</p>
      <Comments activityId={activity._id}/>
    </div>
  );
};
