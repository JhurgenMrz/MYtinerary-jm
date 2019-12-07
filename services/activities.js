const Itinerary = require('../models/Itinerary');
const Activity = require('../models/Activity');

class ActivitiesService {
  async getActivities(id) {
    try {
      const activities = await Activity.find({
        itinerary_id: id
      });
      return activities || [];
    } catch (err) {
      return err;
    }
  }
  async createActivity(activity, itineraryId) {
    const newActivity = {
      itinerary_id: itineraryId,
      ...activity
    };
    console.log(newActivity);
    try {
      const activityCreated = await Activity.create(newActivity);
      return activityCreated || [];
    } catch (err) {
      return err;
    }
  }
  async insertComment(activity, itineraryId) {
    const newActivity = {
      itinerary_id: itineraryId,
      ...activity
    };
    console.log(newActivity);
    try {
      const activityCreated = await Activity.create(newActivity);
      return activityCreated || [];
    } catch (err) {
      return err;
    }
  }
  async deleteActivity(activityId) {
    try {
      const activityDeleted = await Activity.findByIdAndDelete(activityId);
      return activityDeleted || [];
    } catch (err) {
      return err;
    }
  }
}

module.exports = ActivitiesService;
