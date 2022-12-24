import contentful, { Asset } from 'contentful';
import type { Document } from '@contentful/rich-text-types';

export interface Service {
  name: string;
  price: number;
  description: Document;
}

export interface Creation {
  name: string;
  description: Document;
  images: Asset[];
  slug: string;
  date: string;
}

export interface Article {
  title: string;
  content: Document;
  date: string;
  slug: string;
}

export interface Service {
  name: string;
  price: number;
  description: Document;
}

export interface FAQ {
  question: string;
  answer: Document;
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? 'preview.contentful.com' : 'cdn.contentful.com',
});
