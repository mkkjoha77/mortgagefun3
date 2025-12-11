import { X, Calendar, Clock } from 'lucide-react';
import { useState } from 'react';

interface MeetingSchedulerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MeetingScheduler({ isOpen, onClose }: MeetingSchedulerProps) {
  const [selectedDuration, setSelectedDuration] = useState<'15min' | '30min' | null>(null);

  if (!isOpen) return null;

  const handleDurationSelect = (duration: '15min' | '30min') => {
    setSelectedDuration(duration);
  };

  const handleBack = () => {
    setSelectedDuration(null);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <Calendar className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedDuration ? 'Schedule Your Meeting' : 'Choose Meeting Duration'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-auto">
          {!selectedDuration ? (
            <div className="p-8">
              <p className="text-gray-600 text-center mb-8">
                Select the meeting duration that works best for you
              </p>
              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <button
                  onClick={() => handleDurationSelect('15min')}
                  className="bg-white border-2 border-gray-200 p-8 rounded-lg hover:border-blue-600 hover:shadow-xl transition-all group"
                >
                  <Clock className="w-16 h-16 text-blue-600 mb-4 mx-auto group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">15 Minutes</h3>
                  <p className="text-gray-600">
                    Quick consultation to discuss your basic mortgage needs and answer initial questions
                  </p>
                </button>

                <button
                  onClick={() => handleDurationSelect('30min')}
                  className="bg-white border-2 border-gray-200 p-8 rounded-lg hover:border-blue-600 hover:shadow-xl transition-all group"
                >
                  <Clock className="w-16 h-16 text-blue-600 mb-4 mx-auto group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">30 Minutes</h3>
                  <p className="text-gray-600">
                    In-depth discussion about your mortgage options, pre-approval process, and detailed questions
                  </p>
                </button>
              </div>
            </div>
          ) : (
            <div className="h-full">
              <div className="p-4 bg-gray-50 border-b border-gray-200">
                <button
                  onClick={handleBack}
                  className="text-blue-600 hover:text-blue-700 font-semibold flex items-center space-x-2"
                >
                  <span>← Back to Duration Selection</span>
                </button>
              </div>
              <iframe
                src={`https://cal.com/mortgagefun/${selectedDuration}`}
                className="w-full h-[600px] border-0"
                title="Schedule Meeting"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
