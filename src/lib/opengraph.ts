import type { CollectionEntry } from 'astro:content';

interface SocialImageProps {
  title: string;
  meta: string;
}

const cleanText = (text: string) => {
  return encodeURIComponent(text).replace(/%(23|2C|2F|3F|5C)/g, '%25$1');
};

const cloudinaryUrlBase = 'https://res.cloudinary.com';
const cloudName = 'akashrajpurohit';
const imagePublicId = 'blog-base-v3_gv4rh1';
const fontFamily = 'Karla';

export const generateSocialImage = ({ title, meta }: SocialImageProps) => {
  return [
    // ACCOUNT PREFIX
    `${cloudinaryUrlBase}/${cloudName}/image/upload`,
    // Composed Image Transformations
    'w_1200,h_630,q_100',

    // TITLE
    // Karla google font in white
    `l_text:${fontFamily}_68_bold:${cleanText(
      title,
    )},co_rgb:ffffff,c_fit,w_1000,h_280`,
    // Positioning
    'fl_layer_apply,g_south_west,x_80,y_180',

    // META
    // Karla, but smaller
    `l_text:${fontFamily}_34_italic:${cleanText(
      meta,
    )},co_rgb:fcd34d,c_fit,w_1000`,
    // Positioning
    'fl_layer_apply,g_south_west,x_80,y_110',

    // PROFILE IMAGE
    // dynamically fetched from my twitter profile
    'l_twitter_name:akashwhocodes',
    // Transformations
    'c_thumb,g_face,r_max,w_400,h_400,q_100',
    // Positioning
    'fl_layer_apply,w_100,g_north_east,x_40,y_40',

    // BG
    imagePublicId,
  ].join('/');
};

export const getSocialImageForBlog = (
  post: CollectionEntry<'blog'>['data'],
) => {
  const { title, tags, date } = post;

  const publishedAt = date.toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  const tagsListString = (tags || []).map((tag: string) => `#${tag}`).join(' ');

  const coverUrl = generateSocialImage({
    title,
    meta: ['akashrajpurohit.com', publishedAt, tagsListString].join(' · '),
  });
  return coverUrl;
};
