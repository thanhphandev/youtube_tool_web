import React from 'react';
import { ThumbsUp, Eye, MessageCircle, Calendar, Star } from 'lucide-react';
import type { VideoStats as VideoStatsType } from '../types/youtube';

interface VideoStatsProps {
  stats: VideoStatsType;
}

export function VideoStats({ stats }: VideoStatsProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Video Statistics</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <StatItem icon={<Eye />} label="Views" value={stats.views.toLocaleString()} />
        <StatItem icon={<ThumbsUp />} label="Likes" value={stats.likes.toLocaleString()} />
        <StatItem icon={<MessageCircle />} label="Comments" value={stats.comments.toLocaleString()} />
        <StatItem icon={<Calendar />} label="Upload Date" value={stats.uploadDate} />
        <StatItem 
          icon={<Star className="text-yellow-500" />} 
          label="Quality Score" 
          value={`${stats.qualityScore}/100`}
        />
      </div>
    </div>
  );
}

function StatItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
      {icon}
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="font-semibold">{value}</p>
      </div>
    </div>
  );
}