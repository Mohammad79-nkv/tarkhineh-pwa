import { Key } from "react";

export interface IFoods {
  _id?: Key | null;
  title?: string | null;
  description?: string | null;
  discount?: number | null;
  price?: number | null;
  imgSrc?: string | null;
  vote?: {
    rate?: number | null;
    count?: number | null;
  };
  branches?: string[] | null;
}
