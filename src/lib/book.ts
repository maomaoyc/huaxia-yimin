import type { CollectionEntry } from 'astro:content';

const volumeOrder: Record<string, number> = {
  preface: 0,
  'volume-1': 1,
  'volume-2': 2,
  'volume-3': 3
};

export function getBookVolumeSlug(entry: CollectionEntry<'book'>) {
  return entry.data.volumeSlug ?? entry.slug.split('/')[0] ?? 'preface';
}

export function getBookOrder(entry: CollectionEntry<'book'>) {
  if (typeof entry.data.order === 'number') {
    return entry.data.order;
  }

  const volumeSlug = getBookVolumeSlug(entry);
  const volumeIndex = volumeOrder[volumeSlug] ?? 99;

  return volumeIndex * 100 + entry.data.chapterNumber;
}

export function sortBookEntries(entries: CollectionEntry<'book'>[]) {
  return [...entries].sort((a, b) => getBookOrder(a) - getBookOrder(b));
}
