const cloudinary = require("cloudinary").v2;

const { CLOUD_NAME, CLOUD_API_KEY, CLOUD_API_SECREET } = process.env;

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: CLOUD_API_KEY,
  api_secret: CLOUD_API_SECREET,
});

const uploadPhotoOnCloud = async (photo: string) => {
  await cloudinary.uploader
    .upload(photo, {
      public_id: "olympic_flag",
    })
    .then((data: any) => {})
    .catch((err: any) => {
      console.log(err);
    });

  const url = cloudinary.url("olympic_flag", {
    width: 200,
    height: 250,
    Crop: "fill",
  });

  return url;
};

export { uploadPhotoOnCloud };