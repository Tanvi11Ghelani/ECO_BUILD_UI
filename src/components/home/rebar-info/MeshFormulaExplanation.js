import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
const MeshFormulaExplanation = () => {
  const isMobile = useIsMobile();
  return <div className={`${isMobile ? 'mt-4' : 'mt-8'} text-right space-y-2`}>
      <h4 className="font-semibold text-right">נוסחת חישוב משקל רשת:</h4>
      <ol className={`list-decimal list-inside mr-4 space-y-1 text-right ${isMobile ? 'text-sm' : ''}`} style={{
      listStylePosition: 'inside',
      direction: 'rtl'
    }}>
        <li>מתוך הקוטר הנבחר (עובי) מוצאים את המשקל למטר אורך</li>
        <li>מחשבים את מספר המוטות למטר: {' '}
          <span className="font-medium">100 ÷ המרווח בס"מ</span>
        </li>
        <li>מחשבים את המשקל למ"ר בכיוון אחד: {' '}
          <span className="font-medium">משקל למטר × מספר המוטות למטר</span>
        </li>
        <li>לרשת שתי-וערב: {' '}
          <span className="font-medium">מכפילים את המשקל למ"ר פי 2</span>
        </li>
        <li>אם נבחרה תוספת סיבולת: {' '}
          <span className="font-medium">מכפילים את המשקל הסופי ב-1.06 (תוספת של 6%)</span>
        </li>
      </ol>
    </div>;
};
export default MeshFormulaExplanation;