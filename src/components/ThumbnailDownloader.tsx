import { Image } from 'lucide-react';
import { Button } from './ui/Button';
import type { ThumbnailInfo } from '../types/youtube';

interface ThumbnailDownloaderProps {
  thumbnails: ThumbnailInfo;
}

export function ThumbnailDownloader({ thumbnails }: ThumbnailDownloaderProps) {
  const downloadThumbnail = (url: string, quality: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.download = `thumbnail-${quality}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-2 mb-4">
        <Image size={24} />
        <h2 className="text-xl font-semibold">Thumbnail Downloads</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Object.entries(thumbnails).map(([quality, url]) => (
          <div key={quality} className="flex flex-col gap-2">
            <img src={url} alt={`${quality} thumbnail`} className="rounded-lg w-full" />
            <Button
              variant="secondary"
              onClick={() => downloadThumbnail(url, quality)}
              className="w-full"
            >
              Download {quality}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}