import { Youtube } from 'lucide-react';
import { VideoInput } from './components/VideoInput';
import { VideoSummary } from './components/VideoSummary';
import { VideoStats } from './components/VideoStats';
import { ThumbnailDownloader } from './components/ThumbnailDownloader';
import { Toaster, toast } from 'react-hot-toast';
import { useVideoAnalysis } from './hooks/useVideoAnalysis';
import Loading from './components/ui/Loading';

function App() {
  const { loading, summary, stats, thumbnails, analyzeVideo } = useVideoAnalysis();

  const handleAnalyze = async (url: string) => {
    const result = await analyzeVideo(url);
    if (result.success) {
      toast.success('Video analyzed successfully!');
    } else {
      toast.error('Failed to analyze video. Please try again.');
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Youtube size={32} className="text-red-600" />
          <h1 className="text-3xl font-bold">YouTube Tools</h1>
        </div>

        <div className="flex justify-center mb-8">
          <VideoInput onSubmit={handleAnalyze} isLoading={loading} />
        </div>

        {loading ? <Loading /> 
        : (
          <div className="space-y-6">
            <VideoSummary summary={summary} />
            <VideoStats stats={stats} />
            {thumbnails && <ThumbnailDownloader thumbnails={thumbnails} />}
          </div>
        )}

        <Toaster position="top-right" />
      </div>
    </div>
  );
}

export default App;
