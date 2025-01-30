"use client"
import { useState } from 'react';
import { Slider } from '../../../components/ui/slider';
import { Button } from '../../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select';
import { Textarea } from '../../../components/ui/textarea';
import { Mic, AudioLines, Volume2, Clock, Settings2, Download } from 'lucide-react';

const VoiceprinterGeneratorPage = () => {
  const [text, setText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const Voiceprinters = [
    { id: '1', name: 'Emma (Female)' },
    { id: '2', name: 'James (Male)' },
    { id: '3', name: 'Sarah (Female)' },
    { id: '4', name: 'Michael (Male)' },
  ];

  const handleGenerate = () => {
    setIsGenerating(true);
    // Add your generation logic here
    setTimeout(() => setIsGenerating(false), 2000);
  };

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-white">AI Voiceprinter Generator</h1>
        
        {/* Text Input */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Mic className="w-5 h-5 text-blue-400" />
              Input Text
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea 
              placeholder="Enter the text you want to convert to speech..."
              className="min-h-[150px] bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-blue-500"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </CardContent>
        </Card>

        {/* Voiceprinter Settings */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Settings2 className="w-5 h-5 text-blue-400" />
              Voiceprinter Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-200">Select Voiceprinter</label>
              <Select>
                <SelectTrigger className="w-full bg-gray-800 border-gray-700 text-white">
                  <SelectValue placeholder="Choose a Voiceprinter" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700">
                  {Voiceprinters.map((Voiceprinter) => (
                    <SelectItem 
                      key={Voiceprinter.id} 
                      value={Voiceprinter.id}
                      className="text-white hover:bg-gray-700"
                    >
                      {Voiceprinter.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-200">
                <div className="flex items-center gap-2">
                  <Volume2 className="w-4 h-4 text-blue-400" />
                  Volume
                </div>
              </label>
              <Slider 
                defaultValue={[75]} 
                max={100} 
                step={1}
                className="py-4"
              />
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-200">
                <div className="flex items-center gap-2">
                  <AudioLines className="w-4 h-4 text-blue-400" />
                  Pitch
                </div>
              </label>
              <Slider 
                defaultValue={[50]} 
                max={100} 
                step={1}
                className="py-4"
              />
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-200">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  Speed
                </div>
              </label>
              <Slider 
                defaultValue={[50]} 
                max={100} 
                step={1}
                className="py-4"
              />
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-end">
          <Button 
            variant="outline" 
            size="lg"
            className="border-gray-700 text-white hover:bg-gray-800 hover:text-white"
            onClick={() => setText('')}
          >
            Clear
          </Button>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white min-w-[150px]"
            onClick={handleGenerate}
            disabled={isGenerating || !text}
          >
            {isGenerating ? (
              <>
                <div className="animate-spin mr-2">⚬</div>
                Generating...
              </>
            ) : (
              <>
                <Download className="w-5 h-5 mr-2" />
                Generate
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VoiceprinterGeneratorPage;