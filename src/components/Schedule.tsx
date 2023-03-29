import { Fragment } from "react";
import ScheduleHeader from "./ScheduleHeader";
import TimeTableItem from "./TimeTableItem";

function Schedule() {
  return (
    <Fragment>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <div className="idance">
        <div className="schedule content-block">
          <div className="container">
            <h2 data-aos="zoom-in-up" className="aos-init aos-animate">
              Schedule
            </h2>
            <div className="timetable">
              <ScheduleHeader />
              <div className="tab-content">
                <div className="tab-pane show active">
                  <div className="row">
                    <div className="col-md-6">
                      <TimeTableItem
                        imgColor="FFB6C1"
                        timeStart="4:00pm"
                        timeEnd="5:00pm"
                        name="Contemporary Dance"
                        likeCount={11}
                      />
                    </div>

                    <div className="col-md-6">
                      <TimeTableItem
                        imgColor="00FFFF"
                        timeStart="5:00pm"
                        timeEnd="6:00pm"
                        name="Break Dance"
                        likeCount={28}
                      />
                    </div>

                    <div className="col-md-6">
                      <TimeTableItem
                        imgColor="8A2BE2"
                        timeStart="5:00pm"
                        timeEnd="6:00pm"
                        name="Street Dance"
                        likeCount={28}
                      />
                    </div>

                    <div className="col-md-6">
                      <TimeTableItem
                        imgColor="6495ED"
                        timeStart="7:00pm"
                        timeEnd="8:00pm"
                        name="Yoga"
                        likeCount={23}
                      />
                    </div>

                    <div className="col-md-6">
                      <TimeTableItem
                        imgColor="00FFFF"
                        timeStart="6:00pm"
                        timeEnd="7:00pm"
                        name="Stretching"
                        likeCount={14}
                      />
                    </div>

                    <div className="col-md-6">
                      <TimeTableItem
                        imgColor="008B8B"
                        timeStart="8:00pm"
                        timeEnd="9:00pm"
                        name="Street Dance"
                        likeCount={9}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.bundle.min.js"></script>
      <script type="text/javascript"></script>
    </Fragment>
  );
}

export default Schedule;
