import { Cloudinary } from "@cloudinary/url-gen";
import { CLOUDINARY_CLOUD_NAME } from "../utils/variables";

export const cloudinary = new Cloudinary({
  cloud: {
    cloudName: CLOUDINARY_CLOUD_NAME
  }
}); 

export const addBasePath = (name: string) => "portfolio/" + name;