'use client';

import { MicroExpander } from '@/components/ui/micro-expander';
import { Heart, MessageCircle, Repeat2, Share2 } from 'lucide-react';

export default function MicroExpanderToolbar() {
return (
  <div className="w-full min-h-[200px] flex items-center justify-center p-4 bg-muted/30 rounded-lg">
    <div className="flex flex-wrap items-center justify-center gap-3 p-3 bg-background border rounded-full shadow-sm">
      <MicroExpander 
        text="Like" 
        variant="ghost" 
        icon={<Heart className="w-5 h-5" />} 
        className="hover:text-red-500 hover:bg-red-50"
      />
      <MicroExpander 
        text="Reply" 
        variant="ghost" 
        icon={<MessageCircle className="w-5 h-5" />} 
        className="hover:text-blue-500 hover:bg-blue-50"
      />
      <MicroExpander 
        text="Repost" 
        variant="ghost" 
        icon={<Repeat2 className="w-5 h-5" />} 
        className="hover:text-green-500 hover:bg-green-50"
      />
      <MicroExpander 
        text="Share" 
        variant="ghost" 
        icon={<Share2 className="w-5 h-5" />} 
      />
    </div>
  </div>
);
}