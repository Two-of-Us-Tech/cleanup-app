import Constants from 'expo-constants';

const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_PRESET, CLOUDINARY_API } = Constants.expoConfig.extra;

export default async (photo) => {
  const body = new FormData();
  body.append('file', photo);
  body.append('upload_preset', CLOUDINARY_PRESET);
  body.append('cloud_name', CLOUDINARY_CLOUD_NAME);
  try {
    const response = await fetch(CLOUDINARY_API, {
      method: 'post',
      body,
    });
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error trying to upload image', error);
    return null;
  }
};
