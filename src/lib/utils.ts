import type { CollectionEntry } from 'astro:content';

export const difference = <T>(arr1: T[], arr2: T[]) =>
  arr1.filter((x) => !arr2.includes(x));

export const intersection = <T>(arr: T[], ...args: T[][]): T[] =>
  arr.filter((item: T) => args.every((arr: T[]) => arr.includes(item)));

export const isDateBefore = (date1: Date, date2: Date) =>
  date1.getTime() < date2.getTime();

export const isDateAfter = (date1: Date, date2: Date) =>
  !isDateBefore(date1, date2);

export const slugifyTag = (tag: string) => tag.split(' ').join('-');

export const getPublishedAndSortedPosts = (
  allPosts: CollectionEntry<'blog'>[],
) => {
  return allPosts
    .filter((post) => !post.data.draft)
    .sort((post1, post2) => {
      if (isDateBefore(post1.data.date, post2.data.date)) {
        return 1;
      } else {
        return -1;
      }
    });
};

export const getAllTagsMap = (posts: CollectionEntry<'blog'>[]) => {
  const tagsMap: Record<string, number> = {};
  // Iterate through each post, putting all found tags into `tagsMap`
  posts.forEach((post) => {
    const postData = post.data;
    if (!postData.draft && postData.tags && postData.tags.length > 0) {
      postData.tags.forEach((tag) => {
        if (tag in tagsMap) {
          tagsMap[tag] += 1;
        } else {
          tagsMap[tag] = 1;
        }
      });
    }
  });

  return tagsMap;
};

export const getSuggestedPosts = ({
  parentPost,
  allPosts,
  limit = 3,
}: {
  parentPost: CollectionEntry<'blog'>;
  allPosts: CollectionEntry<'blog'>[];
  limit?: number;
}) => {
  let allBlogs = getPublishedAndSortedPosts(allPosts);

  // Get the number of common tags with provided post.
  const getTagScore = (post: CollectionEntry<'blog'>) => {
    let commonTags = 0;
    post.data.tags.forEach((tag) => {
      commonTags += parentPost.data.tags.indexOf(tag) !== -1 ? 1 : 0;
    });
    return commonTags;
  };

  // Get the date of the post in date object.
  const getDate = (post: CollectionEntry<'blog'>) => {
    return post.data.date;
  };

  // Filter out the post for which suggested posts are to be found
  allBlogs = allBlogs.filter(
    (post: CollectionEntry<'blog'>) => post.slug !== parentPost.slug,
  );

  return allBlogs
    .sort((postA: CollectionEntry<'blog'>, postB: CollectionEntry<'blog'>) => {
      if (getTagScore(postA) === getTagScore(postB)) {
        return getDate(postB) > getDate(postA) ? 1 : -1;
      }
      return getTagScore(postB) - getTagScore(postA);
    })
    .slice(0, limit);
};
