import {JSX} from "react";

export type RouteMap = {
  path: string;
  name: string;
  component: JSX.Element;
  subpages?: RouteMap[];
}