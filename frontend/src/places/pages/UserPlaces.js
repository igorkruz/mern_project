import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    imageUrl:
      "https://www.history.com/.image/t_share/MTU3ODc4NjA0ODYzOTA3NTUx/image-placeholder-title.jpg",
    title: "Empire State Building",
    description: "The most famous place in NY",
    address: "20 W 34th St., New York",
    location: {
      lat: "40.7484405",
      lng: "-73.9856644",
    },
    creator: "u1",
  },
  {
    id: "p2",
    imageUrl:
      "https://www.history.com/.image/t_share/MTU3ODc4NjA0ODYzOTA3NTUx/image-placeholder-title.jpg",
    title: "Empire State Building",
    description: "The most famous place in NY",
    address: "20 W 34th St., New York",
    location: {
      lat: "40.7484405",
      lng: "-73.9856644",
    },
    creator: "u2",
  },
  {
    id: "p3",
    imageUrl:
      "https://www.history.com/.image/t_share/MTU3ODc4NjA0ODYzOTA3NTUx/image-placeholder-title.jpg",
    title: "Empire State Building",
    description: "The most famous place in NY",
    address: "20 W 34th St., New York",
    location: {
      lat: "40.7484405",
      lng: "-73.9856644",
    },
    creator: "u3",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
