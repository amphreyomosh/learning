// lib/sanity.js
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: '0utej3nm', 
  dataset: 'production', 
  useCdn: true, 
  apiVersion: '2023-01-01',
});
