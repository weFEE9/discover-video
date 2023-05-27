export type Video = {
  id: string;
  title: string;
  imgUrl: string;
};

type searchType = 'common' | 'popular';

export const getYoutubeVideos = async (
  searchType: searchType,
  searchQuery?: string
): Promise<Video[]> => {
  const url = getYoutubeVideosSearchUrl(searchType, searchQuery);

  return searchYoutubeVideos(url);
};

const getYoutubeAPIKey = (): string => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

  if (!YOUTUBE_API_KEY) {
    throw new Error('YOUTUBE_API_KEY environment variable is not set');
  }

  return YOUTUBE_API_KEY;
};

const getYoutubeVideosSearchUrl = (
  searchType: searchType,
  searchQuery?: string
): string => {
  const YOUTUBE_API_KEY = getYoutubeAPIKey();
  const YOUTUBE_API_BASE_URL = 'youtube.googleapis.com/youtube/v3';
  const YOUTUBE_API_SEARCH_URL = getSearchUrlByType(searchType, searchQuery);

  return `https://${YOUTUBE_API_BASE_URL}/${YOUTUBE_API_SEARCH_URL}&key=${YOUTUBE_API_KEY}`;
};

const getSearchUrlByType = (
  searchType: searchType,
  searchQuery?: string
): string => {
  if (searchType === 'common') {
    if (!searchQuery) {
      throw new Error(`search query not provided`);
    }

    return `search?part=snippet&maxResults=25&q=${searchQuery}&type=video`;
  }

  if (searchType === 'popular') {
    return `videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US`;
  }

  throw new Error(`Invalid search type: ${searchType}`);
};

const searchYoutubeVideos = async (url: string): Promise<Video[]> => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch videos from YouTube API: ${errorText}`);
    }

    const data: YoutubeAPIResponse = await response.json();

    return data.items.map((item) => {
      return {
        id: item.id.videoId,
        title: item.snippet.title,
        imgUrl: item.snippet.thumbnails.high.url,
      };
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getVideos = async (searchQuery: string): Promise<Video[]> => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

  // https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=[YOUR_API_KEY]
  try {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&type=video&key=${YOUTUBE_API_KEY}`
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch videos from YouTube API: ${errorText}`);
    }

    const data: YoutubeAPIResponse = await response.json();

    return data.items.map((item) => {
      return {
        id: item.id.videoId,
        title: item.snippet.title,
        imgUrl: item.snippet.thumbnails.high.url,
      };
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

type YoutubeAPIResponse = {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: PageInfo;
  items: Item[];
};

type Item = {
  kind: ItemKind;
  etag: string;
  id: ID;
  snippet: Snippet;
};

type ID = {
  kind: IDKind;
  videoId: string;
};

enum IDKind {
  YoutubeVideo = 'youtube#video',
}

enum ItemKind {
  YoutubeSearchResult = 'youtube#searchResult',
}

type Snippet = {
  publishedAt: Date;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  liveBroadcastContent: LiveBroadcastContent;
  publishTime: Date;
};

enum LiveBroadcastContent {
  None = 'none',
}

type Thumbnails = {
  default: Default;
  medium: Default;
  high: Default;
};

type Default = {
  url: string;
  width: number;
  height: number;
};

type PageInfo = {
  totalResults: number;
  resultsPerPage: number;
};
