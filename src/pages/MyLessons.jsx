import React from "react";
import { Outlet } from "react-router";

function MyLessons() {
  return (
    <div>
      MyLessons
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}

export default MyLessons;
