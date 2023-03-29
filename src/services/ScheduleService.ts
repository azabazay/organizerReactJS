import http from "../http-common";
import ITimeTableItemData from "../types/ScheduleModels";

const getUserEvents = (id: any) => {
  return http.get<Array<ITimeTableItemData>>(`/get_user_events/${id}`);
};

const ScheduleService = {
    getUserEvents,
  };
  
  export default ScheduleService;