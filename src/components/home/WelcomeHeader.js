import React from 'react';
const WelcomeHeader = () => {
  return <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-16">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:text-5xl">
          מדריך התקנה לקבלנים
        </h1>
        <p className="max-w-[800px] text-lg text-muted-foreground">
          חוברת הדרכה מקיפה עם תרגום והמרה של מונחים ומידות אמריקאיות לעברית ולסטנדרטים ישראליים.
        </p>
      </div>
    </section>;
};
export default WelcomeHeader;