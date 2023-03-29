import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Fragment } from "react";
import ScheduleHeader from "./ScheduleHeader";
import TimeTableItem from "./TimeTableItem";
import ITimeTableItemData from "../types/ScheduleModels";
import ScheduleService from "../services/ScheduleService";

interface Props {
  userId?: string;
}

function Schedule(props: Props) {
  let { id } = useParams();
  if (!props.userId && props.userId == "") {
    id = props.userId;
  }

  const [userEvents, setUserEvents] = useState<Array<ITimeTableItemData>>([]);

  useEffect(() => {
    retrieveUserEvents();
  }, []);

  const retrieveUserEvents = () => {
    ScheduleService.getUserEvents(id)
      .then((response: any) => {
        if (response.status == 200) {
          setUserEvents(response.data["data"]);
          console.log(response.data);
        } else {
          console.log(response.data["error"]);
        }
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

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
                    {userEvents.map((item, i) => (
                      <div className="col-md-6" key={i}>
                        <TimeTableItem
                          imgColor={item.imgColor}
                          timeStart={item.timeStart}
                          timeEnd={item.timeEnd}
                          name={item.name}
                          likeCount={item.likeCount}
                        />
                      </div>
                    ))}
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
