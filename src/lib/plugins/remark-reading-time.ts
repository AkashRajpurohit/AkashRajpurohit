import getReadingTime from 'reading-time';
import mdast from 'mdast-util-to-string';

export function remarkReadingTime() {
  // @ts-ignore
  return function (tree, { data }) {
    const textOnPage = mdast.toString(tree);
    const readingTime = getReadingTime(textOnPage);
    // readingTime.text will give us minutes read as a friendly string,
    // i.e. "3 min read"
    data.astro.frontmatter.minutesRead = readingTime.text;
  };
}
