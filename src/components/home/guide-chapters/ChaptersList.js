import React from 'react';
import { Link } from 'react-router-dom';
import { chaptersData } from '@/data/chaptersData';
const ChaptersList = () => {
  return <ul className="space-y-2">
      {chaptersData.map(chapter => <li key={chapter.id}>
          <Link to={`/chapter/${chapter.id}`} className="text-guide-primary hover:underline">
            פרק {chapter.id} - {chapter.title}
          </Link>
        </li>)}
    </ul>;
};
export default ChaptersList;