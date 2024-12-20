import pg from "pg";
import {
  PG_DATABASE,
  PG_HOST,
  PG_PASSWORD,
  PG_PORT,
  PG_USER,
} from "./secrets.js";

export const pool = new pg.Pool({
  user: PG_USER,
  host: PG_HOST,
  password: PG_PASSWORD,
  database: PG_DATABASE,
  port: PG_PORT,
});
