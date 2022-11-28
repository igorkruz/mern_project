const express = require("express");

const router = express.Router();

const DUMMY_PLACES = [
  {
    id: "p1",
    // imageUrl:
    //   "https://www.history.com/.image/t_share/MTU3ODc4NjA0ODYzOTA3NTUx/image-placeholder-title.jpg",
    title: "Empire State Building",
    description: "The most famous place in NY",
    address: "20 W 34th St., New York",
    location: {
      lat: 40.7484405,
      lng: -73.9856644,
    },
    creator: "u1",
  },
];

router.get("/:pid", (req, res, next) => {
  const placeId = req.params.pid; //  {pid: p1}

  const place = DUMMY_PLACES.find((p) => {
    return p.id === placeId;
  });

  if (!place) {
    const error = new Error("Could not find place for a provided id.");
    error.code = 404;
    throw error;
  }

  res.json({ place }); // {place} => {place: place}
});

router.get("/user/:uid", (req, res, next) => {
  const userId = req.params.uid;

  const place = DUMMY_PLACES.find((p) => {
    return p.creator === userId;
  });

  if (!place) {
    const error = new Error("Could not find place for a provided user id.");
    error.code = 404;
    return next(error);
  }

  res.json({ place });
});

module.exports = router;
