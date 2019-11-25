import axios from "axios";
import * as utils from "../utils";

const request = data => axios.post(utils.url(), data);
export default request;
