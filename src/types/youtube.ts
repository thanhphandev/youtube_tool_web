export interface SummarizeVideoRequest {
  video_url: string;
}
export interface VideoStats {
  views: number;
  likes: number;
  comments: number;
  uploadDate: string;
  qualityScore: number;
}

export interface VideoSummary {
  title: string;
  content: string;
}

export interface ThumbnailInfo {
  default: string | null;
  medium: string | null;
  high: string | null;
  maxres?: string | null;
}