import type { VideoSummary as VideoSummaryType } from '../types/youtube';

interface VideoSummaryProps {
  summary: VideoSummaryType;
}

export function VideoSummary({ summary }: VideoSummaryProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">{summary.title}</h2>
      <p className="text-gray-600 mb-4">{summary.content}</p>
    </div>
  );
}