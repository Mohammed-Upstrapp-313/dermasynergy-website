module.exports = ({ env }) => ({
  // Use Cloudinary for media in production (when CLOUDINARY_* env vars are set).
  // Locally (no env) Strapi falls back to its default local upload provider.
  ...(env('CLOUDINARY_NAME')
    ? {
        upload: {
          config: {
            provider: 'cloudinary',
            providerOptions: {
              cloud_name: env('CLOUDINARY_NAME'),
              api_key: env('CLOUDINARY_KEY'),
              api_secret: env('CLOUDINARY_SECRET'),
            },
            actionOptions: {
              upload: {},
              uploadStream: {},
              delete: {},
            },
          },
        },
      }
    : {}),
});
