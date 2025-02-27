// lib/sanity.js
import { createClient } from '@sanity/client';
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: '0utej3nm', 
  dataset: 'production', 
  useCdn: true, 
  apiVersion: '2023-01-01',
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);