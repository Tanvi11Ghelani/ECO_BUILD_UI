import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useIsMobile } from '@/hooks/use-mobile';
const ChapterContent = ({
  content
}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const isMobile = useIsMobile();
  const handleImageClick = event => {
    const target = event.target;
    if (target.tagName === 'IMG') {
      setSelectedImage(target.src);
    }
  };
  return <>
      <div className={`prose ${isMobile ? 'prose-sm max-w-full px-1' : 'prose-lg max-w-none'} rtl prose-img:mx-auto prose-img:rounded-lg prose-img:shadow-md prose-img:max-w-full prose-img:object-cover prose-img:cursor-pointer hover:prose-img:opacity-90`} dangerouslySetInnerHTML={{
      __html: content
    }} onClick={handleImageClick} />

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0" aria-describedby="image-modal-description">
          <DialogTitle className="sr-only">תמונה מוגדלת</DialogTitle>
          <div id="image-modal-description" className="sr-only">הגדלת תמונה מהמדריך</div>
          {selectedImage && <img src={selectedImage} alt="תמונה מוגדלת" className="w-full h-full object-contain" />}
        </DialogContent>
      </Dialog>
    </>;
};
export default ChapterContent;