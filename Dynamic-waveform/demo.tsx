import ShaderCanvas from "@/components/ui/dynamic-waveform";
import React, { useState, useCallback } from 'react';
// --- Constants ---
const DEFAULT_PROPS = {
  color1: "#fb7185", // Rose
  color2: "#67e8f9", // Cyan
  speed: 0.5,
  complexity: 4.0,
  amplitude: 1.0,
  frequency: 20.0,
  mouseDistortion: 0.5,
};

const PRESETS = [
    { name: "Signal Scan", settings: { color1: "#4ade80", color2: "#ffffff", speed: 0.3, complexity: 2.0, amplitude: 0.5, frequency: 30.0, mouseDistortion: 0.2 } },
    { name: "Deep Sea", settings: { color1: "#0369a1", color2: "#a5f3fc", speed: 0.2, complexity: 6.0, amplitude: 1.2, frequency: 10.0, mouseDistortion: 0.8 } },
    { name: "Vaporwave", settings: { color1: "#f472b6", color2: "#38bdf8", speed: 0.6, complexity: 3.0, amplitude: 0.8, frequency: 15.0, mouseDistortion: 0.4 } },
];

export default function DemoOne() {
  const [props, setProps] = useState(DEFAULT_PROPS);

  const applyPreset = useCallback((preset) => setProps(preset.settings), []);
  const handleValueChange = useCallback((propName, value) => {
    setProps(prev => ({ ...prev, [propName]: value }));
  }, []);

  return (
    <div className="relative w-screen h-screen bg-gray-900 font-sans overflow-hidden">
      <ShaderCanvas {...props} />

      <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-xl p-6 rounded-2xl text-white shadow-2xl w-96 border border-white/10">
        <h1 className="text-2xl font-bold mb-2 tracking-wide text-white/90">Dynamic Waveform Controls</h1>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
            <div><label className="block mb-2 text-sm text-white/70">Color A</label><input type="color" value={props.color1} onChange={(e) => handleValueChange('color1', e.target.value)} className="w-full h-10 p-1 bg-gray-800 border-white/20 rounded-md"/></div>
            <div><label className="block mb-2 text-sm text-white/70">Color B</label><input type="color" value={props.color2} onChange={(e) => handleValueChange('color2', e.target.value)} className="w-full h-10 p-1 bg-gray-800 border-white/20 rounded-md"/></div>
        </div>

        <div className="space-y-4">
          <div><label className="text-sm">Speed: {props.speed.toFixed(2)}</label><input type="range" min="0.0" max="2.0" step="0.01" value={props.speed} onChange={(e) => handleValueChange('speed', parseFloat(e.target.value))} className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-rose-500"/></div>
          <div><label className="text-sm">Wave Complexity: {props.complexity.toFixed(1)}</label><input type="range" min="1.0" max="8.0" step="0.1" value={props.complexity} onChange={(e) => handleValueChange('complexity', parseFloat(e.target.value))} className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-rose-500"/></div>
          <div><label className="text-sm">Amplitude: {props.amplitude.toFixed(2)}</label><input type="range" min="0.0" max="2.0" step="0.01" value={props.amplitude} onChange={(e) => handleValueChange('amplitude', parseFloat(e.target.value))} className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-rose-500"/></div>
          <div><label className="text-sm">Frequency: {props.frequency.toFixed(1)}</label><input type="range" min="5.0" max="50.0" step="0.1" value={props.frequency} onChange={(e) => handleValueChange('frequency', parseFloat(e.target.value))} className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-rose-500"/></div>
          <div><label className="text-sm">Mouse Distortion: {props.mouseDistortion.toFixed(2)}</label><input type="range" min="0.0" max="2.0" step="0.01" value={props.mouseDistortion} onChange={(e) => handleValueChange('mouseDistortion', parseFloat(e.target.value))} className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-rose-500"/></div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-white/10">
            <div className="grid grid-cols-3 gap-2">
                {PRESETS.map(p => <button key={p.name} onClick={() => applyPreset(p)} className="px-3 py-2 text-xs bg-white/10 rounded-md hover:bg-white/20 transition-colors">{p.name}</button>)}
            </div>
        </div>
      </div>
    </div>
  );
}
