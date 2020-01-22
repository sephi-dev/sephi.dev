import * as Redux from "redux";
import { Task } from "redux-saga";

declare module "redux" {
  export interface Store {
    sagaTask: Task;
  }
  export interface BaseAction {
    type: string;
    payload: any;
  }
}
