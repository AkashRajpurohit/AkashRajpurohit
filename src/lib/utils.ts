export const difference = <T>(arr1: T[], arr2: T[]) => arr1.filter((x) => !arr2.includes(x));

export const intersection = <T>(arr: T[], ...args: T[][]): T[] =>
  arr.filter((item: T) => args.every((arr: T[]) => arr.includes(item)));

export const isDateBefore = (date1: Date, date2: Date) => date1.getTime() < date2.getTime();
