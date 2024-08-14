import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: '1s9yly1w',
  dataset: 'development',
  apiVersion: '2024-03-11',
  // Set to `true` for production environments
  useCdn: false,
});
