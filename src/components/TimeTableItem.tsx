import { Fragment } from "react";

interface Props {
  timeStart: string;
  timeEnd: string;
  name: string;
  imgColor?: string;
  imgURL?: string;
  likeCount: number;
}

function TimeTableItem(props: Props) {
  let imgURL;

  if (props.imgColor && props.imgColor != "") {
    imgURL =
      "https://www.bootdey.com/image/100x80/" + props.imgColor + "/000000";
  }

  if (props.imgURL && props.imgURL != "") {
    imgURL = props.imgURL;
  }

  return (
    <Fragment>
      <div className="timetable-item">
        <div className="timetable-item-img">
          <img src={imgURL} alt="Contemporary Dance" />
        </div>
        <div className="timetable-item-main">
          <div className="timetable-item-time">
            {props.timeStart} - {props.timeEnd}
          </div>
          <div className="timetable-item-name">{props.name}</div>
          <a href="#" className="btn btn-primary btn-book">
            Book
          </a>
          <div className="timetable-item-like">
            <i className="fa fa-heart-o" aria-hidden="true"></i>
            <i className="fa fa-heart" aria-hidden="true"></i>
            <div className="timetable-item-like-count">{props.likeCount}</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default TimeTableItem;
