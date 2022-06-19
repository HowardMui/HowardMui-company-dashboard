import { lazyLoad } from "../../../utils/Loadable";

export const TableDetailsPage = lazyLoad(
  () => import("./index"),
  (module) => module.TableDetailsPage
);
