export type Video = {
  id: string;
  title: string;
  imgUrl: string;
};

export const getVideos = async (searchQuery: string): Promise<Video[]> => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchQuery}&type=video&key=${YOUTUBE_API_KEY}`
  );

  const data: YoutubeAPIResponse = await response.json();

  return data.items.map((item) => {
    return {
      id: item.id.videoId,
      title: item.snippet.title,
      imgUrl: item.snippet.thumbnails.high.url,
    };
  });
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
