import React from 'react';
import GuideHeader from '@/components/GuideHeader';
import ConversionTool from '@/components/ConversionTool';
const ConversionPage = () => {
  return <div className="min-h-screen flex flex-col bg-background">
      <GuideHeader />
      <main className="flex-1 container py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">ממיר מידות</h1>
          <p className="text-muted-foreground mb-8">המרה מדויקת בין יחידות מידה אמריקאיות וישראליות</p>
          
          <ConversionTool />
          
          <div className="mt-12 space-y-4">
            <h2 className="text-2xl font-semibold">טיפים להמרת מידות</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-card p-4 rounded-lg border">
                <h3 className="font-medium mb-2">המרה מדויקת</h3>
                <p className="text-sm">לא תמיד עגלו את המספרים. בעבודות מדויקות, שמרו על לפחות 2 ספרות אחרי הנקודה לדיוק מיטבי.</p>
              </div>
              <div className="bg-card p-4 rounded-lg border">
                <h3 className="font-medium mb-2">מידות נפוצות</h3>
                <p className="text-sm">לכו על המידות הסטנדרטיות בישראל. למשל, אם המידה האמריקאית היא 0.75 אינץ׳, בישראל עגלו ל-20 מ"מ במקום 19.05 מ"מ.</p>
              </div>
              <div className="bg-card p-4 rounded-lg border">
                <h3 className="font-medium mb-2">מידות נוחות לעבודה</h3>
                <p className="text-sm">לפעמים עדיף להשתמש במידה "נוחה" כמו 30 ס"מ במקום 30.48 ס"מ (רגל), כל עוד הסטייה אינה קריטית למבנה.</p>
              </div>
              <div className="bg-card p-4 rounded-lg border">
                <h3 className="font-medium mb-2">זכרו את התקנים</h3>
                <p className="text-sm">המרת מידות היא רק חלק מהסיפור. ודאו גם שאתם עומדים בתקנים הישראליים המקומיים.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>;
};
export default ConversionPage;