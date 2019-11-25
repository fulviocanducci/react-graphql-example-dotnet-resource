import { queriesCars } from "../../queries";
import request from "../../request";

const getCarsAsync = async () => {
  return request(queriesCars.queryListCars());
};

const getCarsFindAsync = async id => {
  return request(queriesCars.queryFindCar(id));
};

export { getCarsAsync, getCarsFindAsync };
