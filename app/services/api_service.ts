// api.ts
export const fetchFromApi = async <T>(
  url: string,
  parser: (json: any) => T
): Promise<T> => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return parser(json);
  } catch (error) {
    console.error('API error:', error);
    throw error;
  }
};
