const express = require('express');

const ActivitiesServices = require('../../services/activities');

function activitiesApi(app) {
  const router = express.Router();
  const activitiesServices = new ActivitiesServices();
  app.use('/api/activities/', router);

  router.get('/:itineraryId', async function(req, res) {
    const { itineraryId } = req.params;
    const activities = await activitiesServices.getActivities(itineraryId);
    //Funciona!
    res.status(200).json({
      data: activities,
      message: 'activities Listed'
    });
  });
  router.post('/:itineraryId', async function(req, res) {
    const { itineraryId } = req.params;
    const { body: activity } = req;
    const activityCreated = await activitiesServices.createActivity(
      activity,
      itineraryId
    );
    //Funciona!
    res.status(201).json({
      data: activityCreated,
      message: 'activities Created'
    });
  });
  router.put('/:itineraryId', async function(req, res) {
    const { itineraryId } = req.params;
    const { body: comment } = req;
    const activityCreated = await activitiesServices.insertComment(
      comment,
      itineraryId
    );
    //Funciona!
    res.status(201).json({
      data: activityCreated,
      message: 'activities Created'
    });
  });
  router.delete('/:itineraryId/:activityId', async function(req, res) {
    const { activityId } = req.params;
    const activityDeleted = await activitiesServices.deleteActivity(activityId);
    //Funciona!
    res.status(200).json({
      data: activityDeleted,
      message: 'activities Deleted'
    });
  });
}

module.exports = activitiesApi;
