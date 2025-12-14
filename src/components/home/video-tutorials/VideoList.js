import React from 'react';
import { Video } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
const videoTitles = ["הצהרת הסתייגות והכרת נודורה", "כלי עבודה ממולצים", "הכנת האתר ויסודות", "צעדים ראשונים – הנחת השורה הראשונה", "צעדים ראשונים – הנחת מוטות חיזוק", "עבודה עם סידרה 1", "התקנת מחזקי T"];
const VideoList = () => {
  return <ScrollArea className="h-[160px] rounded-md">
      <ul className="space-y-2">
        {videoTitles.map((title, index) => <li key={index} className="flex items-center gap-2 flex-row-reverse justify-end">
            <span className="text-muted-foreground text-right w-full">{title}</span>
            <Video className="h-4 w-4 text-guide-primary flex-shrink-0" />
          </li>)}
      </ul>
    </ScrollArea>;
};
export default VideoList;