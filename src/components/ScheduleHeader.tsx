import { Fragment } from "react";

function ScheduleHeader() {
  return (
    <Fragment>
      <nav className="nav nav-tabs">
        <a className="nav-link active">Mon</a>
        <a className="nav-link">Tue</a>
        <a className="nav-link">Wed</a>
        <a className="nav-link">Thu</a>
        <a className="nav-link">Fri</a>
        <a className="nav-link">Sat</a>
        <a className="nav-link">Sun</a>
      </nav>
    </Fragment>
  );
}

export default ScheduleHeader;
