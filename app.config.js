// eslint-disable-next-line import/no-extraneous-dependencies, import/no-import-module-exports
import 'dotenv/config';

const { API_URL, CLOUDINARY_API, CLOUDINARY_CLOUD_NAME, CLOUDINARY_PRESET } = process.env;

module.exports = {
  name: 'cleanup',
  slug: 'Cleanup',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#A9D5FC',
  },
  extra: {
    API_URL,
    CLOUDINARY_API,
    CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_PRESET,
  },
  plugins: [
    [
      'expo-image-picker',
      {
        photosPermission: 'The app accesses your photos to let you share them with your friends.',
      },
    ],
    [
      'expo-location',
      {
        locationAlwaysAndWhenInUsePermission: 'Allow $(PRODUCT_NAME) to use your location.',
      },
    ],
  ],
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#A9D5FC',
    },
  },
  web: {
    favicon: './assets/favicon.png',
  },
};
