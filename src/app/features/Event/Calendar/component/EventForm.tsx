"use client";

import React from "react";

import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PlaceIcon from "@mui/icons-material/Place";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";

import Input from "@/components/elements/input/Input";

const EventForm = () => {
  return (
    <form>
      <div>
        <AutoStoriesIcon />
        <Input type="text" name="book" placeholder="書籍名" />
      </div>
      <div>
        <QueryBuilderIcon />
        <Input type="text" name="time" placeholder="日付" />
      </div>
      <div>
        <PeopleAltIcon />
        <Input type="text" name="member" placeholder="メンバーを追加" />
      </div>
      <div>
        <PlaceIcon />
        <Input type="text" name="place" placeholder="場所を追加" />
      </div>
    </form>
  );
};

export default EventForm;
