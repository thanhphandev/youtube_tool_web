import axios from 'axios';
import { useState } from 'react';
import { VideoSummary as VideoSummaryType } from '../types/youtube';
import { VideoStats as VideoStatsType } from '../types/youtube';
import { ThumbnailInfo } from '../types/youtube';

const ROOT_DOMAIN = 'http://localhost:8000';

export const useVideoAnalysis = () => {
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState<VideoSummaryType>({ title: '', content: '' });
  const [stats, setStats] = useState<VideoStatsType>({ views: 0, likes: 0, comments: 0, uploadDate: '', qualityScore: 0 });
  const [thumbnails, setThumbnails] = useState<ThumbnailInfo>({ default: '', medium: '', high: '', maxres: '' });

  const analyzeVideo = async (url: string) => {
    setLoading(true);
    console.log('url', ROOT_DOMAIN);
    try {
      const [summarizeRes, statsRes, thumbsRes] = await Promise.all([
        axios.post(`${ROOT_DOMAIN}/api/v1/summarize-video`, { video_url: url }),
        axios.post(`${ROOT_DOMAIN}/api/v1/get-video-stats`, { video_url: url }),
        axios.post(`${ROOT_DOMAIN}/api/v1/get-thumbnail`, { video_url: url })
      ]);

      setSummary({
        title: summarizeRes.data.title,
        content: summarizeRes.data.content
      });

      setStats({
        views: statsRes.data.stats.views,
        likes: statsRes.data.stats.likes,
        comments: statsRes.data.stats.comments,
        uploadDate: statsRes.data.stats.upload_date,
        qualityScore: statsRes.data.stats.score
      });

      setThumbnails({
        default: thumbsRes.data.thumbnails.default,
        medium: thumbsRes.data.thumbnails.medium,
        high: thumbsRes.data.thumbnails.high,
        maxres: thumbsRes.data.thumbnails.maxres
      });

      return { success: true };
    } catch (error) {
      console.error(error);
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  };

  return { loading, summary, stats, thumbnails, analyzeVideo };
};
