import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { BottomNav } from "../components/bottom-nav";
import { ArrowLeft, HelpCircle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";

export function RoomScannerPage() {
  const [points, setPoints] = useState<Array<{ x: number; y: number }>>([]);
  const [measurements, setMeasurements] = useState<Array<{ distance: number; label: string }>>([]);
  const [isSaved, setIsSaved] = useState(false);
  const navigate = useNavigate();

  const handleCanvasClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (points.length < 2) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const newPoints = [...points, { x, y }];
      setPoints(newPoints);

      // Calculate distance when second point is added
      if (newPoints.length === 2) {
        const dx = newPoints[1].x - newPoints[0].x;
        const dy = newPoints[1].y - newPoints[0].y;
        const pixelDistance = Math.sqrt(dx * dx + dy * dy);
        // Simulate real-world measurement (rough approximation)
        const meters = (pixelDistance / 100).toFixed(2);
        setMeasurements([{ distance: parseFloat(meters), label: 'Room Width' }]);
      }
    }
  };

  const handleReset = () => {
    setPoints([]);
    setMeasurements([]);
    setIsSaved(false);
  };

  const handleAddMeasurement = () => {
    if (measurements.length > 0) {
      setPoints([]);
      const newMeasurement = {
        distance: (Math.random() * 2 + 2).toFixed(2),
        label: 'Room Length'
      };
      setMeasurements([...measurements, { distance: parseFloat(newMeasurement.distance), label: newMeasurement.label }]);
    }
  };

  const handleSave = () => {
    setIsSaved(true);
  };

  const handleUseInAR = () => {
    navigate('/ar-viewer/1');
  };

  return (
    <div 
      className="fixed inset-0 z-40"
      style={{ 
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        background: 'linear-gradient(to bottom, #1a1a1a, #2d2d2d)'
      }}
    >
      {/* Camera feed simulation */}
      <div className="absolute inset-0">
        {/* Dark background to simulate camera */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900" />

        {/* Interactive area */}
        <div 
          className="absolute inset-0 cursor-crosshair"
          onClick={handleCanvasClick}
        >
          {/* Pulsing tap indicator when no points */}
          {points.length === 0 && !isSaved && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-16 h-16">
                <div 
                  className="absolute inset-0 rounded-full animate-ping"
                  style={{ backgroundColor: 'var(--primary)', opacity: 0.4 }}
                />
                <div 
                  className="absolute inset-0 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'var(--primary)' }}
                >
                  <span className="text-white text-xs font-medium">TAP</span>
                </div>
              </div>
            </div>
          )}

          {/* Point markers */}
          {points.map((point, idx) => (
            <div
              key={idx}
              className="absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2"
              style={{ 
                left: point.x,
                top: point.y,
              }}
            >
              <div 
                className="w-full h-full rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'var(--primary)', color: 'white' }}
              >
                {idx + 1}
              </div>
              <div 
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 rounded text-xs whitespace-nowrap"
                style={{ 
                  backgroundColor: 'var(--primary)', 
                  color: 'white',
                  fontFamily: "'DM Mono', monospace"
                }}
              >
                Point {idx + 1}
              </div>
            </div>
          ))}

          {/* Measurement line */}
          {points.length === 2 && (
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <line
                x1={points[0].x}
                y1={points[0].y}
                x2={points[1].x}
                y2={points[1].y}
                stroke="var(--primary)"
                strokeWidth="3"
                strokeDasharray="8 4"
              />
              {/* Distance badge */}
              <foreignObject
                x={(points[0].x + points[1].x) / 2 - 40}
                y={(points[0].y + points[1].y) / 2 - 20}
                width="80"
                height="40"
              >
                <div 
                  className="px-3 py-2 rounded-lg text-center"
                  style={{ 
                    backgroundColor: 'var(--success)', 
                    color: 'white',
                    fontFamily: "'DM Mono', monospace",
                    fontSize: '16px',
                    fontWeight: 'bold'
                  }}
                >
                  {measurements[0]?.distance} m
                </div>
              </foreignObject>
            </svg>
          )}
        </div>
      </div>

      {/* Top Bar */}
      <div 
        className="absolute top-0 left-0 right-0 z-10 p-4 flex items-center justify-between"
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), transparent)' }}
      >
        <Link to="/catalog">
          <Button 
            variant="ghost" 
            size="icon"
            className="rounded-full"
            style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <span className="text-white font-medium">Room Scanner</span>
        <Dialog>
          <DialogTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon"
              className="rounded-full"
              style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }}
            >
              <HelpCircle className="h-5 w-5" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>How to Use Room Scanner</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="flex gap-3">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'var(--primary)', color: 'white' }}
                >
                  1
                </div>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Tap the first point on your floor to mark the starting position
                </p>
              </div>
              <div className="flex gap-3">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'var(--primary)', color: 'white' }}
                >
                  2
                </div>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Tap the second point to complete the measurement
                </p>
              </div>
              <div className="flex gap-3">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'var(--primary)', color: 'white' }}
                >
                  3
                </div>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Add additional measurements for length and width
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Instruction Card */}
      {!isSaved && (
        <div className="absolute top-20 left-1/2 -translate-x-1/2 z-10 max-w-sm">
          <div 
            className="px-6 py-3 rounded-full text-center backdrop-blur-md"
            style={{ backgroundColor: 'rgba(255,255,255,0.95)' }}
          >
            <p className="text-sm font-medium">
              {points.length === 0 && "Tap two points on your floor to measure distance"}
              {points.length === 1 && "Tap second point to complete measurement"}
              {points.length === 2 && "Measurement complete!"}
            </p>
          </div>
        </div>
      )}

      {/* Step Indicator */}
      {!isSaved && (
        <div className="absolute bottom-32 left-4 z-10">
          <div 
            className="px-3 py-2 rounded-lg backdrop-blur-md"
            style={{ backgroundColor: 'rgba(255,255,255,0.9)' }}
          >
            <p className="text-sm">Step {Math.min(points.length + 1, 2)} of 2</p>
          </div>
        </div>
      )}

      {/* Bottom Panel */}
      <div 
        className="absolute bottom-0 left-0 right-0 z-10 p-4 pb-20 lg:pb-4"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}
      >
        <div 
          className="max-w-2xl mx-auto rounded-2xl p-5 space-y-4 backdrop-blur-xl"
          style={{ backgroundColor: 'rgba(255,255,255,0.95)' }}
        >
          {/* Current Measurements */}
          {measurements.length > 0 && (
            <div className="space-y-2">
              <h3 className="font-medium">Measurements</h3>
              {measurements.map((m, idx) => (
                <div 
                  key={idx}
                  className="flex justify-between items-center p-3 rounded-lg"
                  style={{ backgroundColor: 'var(--bg)' }}
                >
                  <span>{m.label}</span>
                  <span 
                    className="font-bold"
                    style={{ fontFamily: "'DM Mono', monospace", color: 'var(--primary)' }}
                  >
                    {m.distance} m
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          {!isSaved ? (
            <div className="grid grid-cols-3 gap-2">
              <Button
                variant="outline"
                onClick={handleReset}
                className="rounded-[10px]"
                disabled={points.length === 0 && measurements.length === 0}
              >
                Reset Points
              </Button>
              <Button
                variant="outline"
                onClick={handleAddMeasurement}
                className="rounded-[10px]"
                disabled={measurements.length === 0}
              >
                Add Another
              </Button>
              <Button
                onClick={handleSave}
                className="rounded-[10px]"
                style={{ backgroundColor: 'var(--primary)', color: 'white' }}
                disabled={measurements.length === 0}
              >
                Save
              </Button>
            </div>
          ) : (
            <div className="space-y-3">
              {/* Summary */}
              <div 
                className="p-4 rounded-lg"
                style={{ backgroundColor: 'var(--primary-light)' }}
              >
                <h3 className="font-medium mb-2">Room Dimensions Summary</h3>
                <div 
                  className="grid grid-cols-2 gap-3 text-center"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  <div>
                    <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Width</div>
                    <div className="text-xl font-bold" style={{ color: 'var(--primary)' }}>
                      {measurements[0]?.distance || '0.00'} m
                    </div>
                  </div>
                  <div>
                    <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Length</div>
                    <div className="text-xl font-bold" style={{ color: 'var(--primary)' }}>
                      {measurements[1]?.distance || '0.00'} m
                    </div>
                  </div>
                </div>
              </div>

              {/* Use in AR Button */}
              <Button
                onClick={handleUseInAR}
                className="w-full rounded-[10px] h-12"
                style={{ backgroundColor: 'var(--primary)', color: 'white' }}
              >
                Use These Dimensions in AR
              </Button>
            </div>
          )}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
