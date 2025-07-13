// models.ts
export interface Podcast {
  trackId: number;
  trackName: string;
  artistName: string;
  artworkUrl100: string;
  feedUrl: string;
  trackCount: number;
}

export interface SearchResult {
  resultCount: number;
  results: Podcast[];
}

export const parseSearchResult = (json: any): SearchResult => ({
  resultCount: json.resultCount,
  results: json.results.map((item: Podcast) => ({
    trackId: item.trackId,
    trackName: item.trackName,
    artistName: item.artistName,
    artworkUrl100: item.artworkUrl100,
    feedUrl: item.feedUrl,
    trackCount: item.trackCount,
  })),
});
