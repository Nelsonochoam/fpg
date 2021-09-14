import { TickRepo } from "./tickRepo";
import models from "../../../infra/sequelize/models";

const tickRepo = new TickRepo(models);

export default {
  tickRepo
}