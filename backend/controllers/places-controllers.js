const uuid = require("uuid/v4");

const HttpError = require("../models/http-error");

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

const getPlacesById = (req, res, next) => {
  const placeId = req.params.pid; //  {pid: p1}

  const place = DUMMY_PLACES.find((p) => {
    return p.id === placeId;
  });

  if (!place) {
    throw new HttpError("Could not find place for a provided id.", 404);
  }

  res.json({ place }); // {place} => {place: place}
};

const getPlaceByUserId = (req, res, next) => {
  const userId = req.params.uid;

  const place = DUMMY_PLACES.find((p) => {
    return p.creator === userId;
  });

  if (!place) {
    return next(
      new HttpError("Could not find place for a provided user id.", 404)
    );
  }

  res.json({ place });
};

const createPlace = (req, res, next) => {
  const { title, description, coordinates, address, creator } = req.body;
  const createdPlace = {
    id: uuid(),
    title,
    description,
    location: coordinates,
    address,
    creator,
  };

  DUMMY_PLACES.push(createPlace);

  res.status(201).json({ place: createPlace });
};

exports.getPlacesById = getPlacesById;
exports.getPlaceByUserId = getPlaceByUserId;
exports.createPlace = createPlace;
