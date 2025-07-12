// models.ts
export interface Podcast {
  trackId: number;
  trackName: string;
  artistName: string;
  artworkUrl100: string;
}

export interface SearchResult {
  resultCount: number;
  results: Podcast[];
}

export const parseSearchResult = (json: any): SearchResult => ({
  resultCount: json.resultCount,
  results: json.results.map((item: any) => ({
    trackId: item.trackId,
    trackName: item.trackName,
    artistName: item.artistName,
    artworkUrl100: item.artworkUrl100
  })),
});
