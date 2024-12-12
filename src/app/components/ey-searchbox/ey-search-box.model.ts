export interface SearchBoxConfig {
  displaySuggestions?: boolean | string;
  displayProducts?: boolean | string;
  displayProductImages?: boolean | string;
  maxProducts?: number;
  maxSuggestions?: number;
  minCharactersBeforeRequest?: number;
  recentSearches?: boolean | string;
  maxRecentSearches?: number;
}

export interface SearchResults {
  message?: string;
  products?: any[];
  suggestions?: string[];
  recentSearches?: string[];
}
