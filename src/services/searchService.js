// מבנה נתונים לתוצאות חיפוש

// מידע על פרקים לחיפוש
const chaptersData = [{
  id: 1,
  title: "פרק 1 - הקדמה ומונחים",
  content: "הקדמה למדריך התקנה. מבוא כללי לתחום הבנייה והתקנות. היכרות עם מונחי יסוד ועקרונות בסיסיים בהתקנה ובנייה."
}, {
  id: 2,
  title: "פרק 2 - תקנים וחומרים",
  content: "תקנים מקובלים בתעשייה. סוגי חומרים נפוצים כמו עץ, מתכת, בטון. מפרטים טכניים לחומרי בנייה שונים. הנחיות לבחירת חומרים מתאימים."
}, {
  id: 3,
  title: "פרק 3 - שיטות התקנה",
  content: "שיטות התקנה מומלצות. טכניקות חיבור וקיבוע. הכנות לפני יציקה. שלבי התקנה והוראות ביצוע מפורטות. התמודדות עם אתגרים נפוצים בהתקנה."
}];

// מילון מונחים לחיפוש
export const glossaryData = [{
  englishTerm: "Lumber",
  hebrewTerm: "עץ מנוסר",
  definition: "חומר בנייה עשוי מגזעי עצים שנוסרו למידות סטנדרטיות. בארה\"ב נמדד בדרך כלל במידות נומינליות שאינן המידות האמיתיות.",
  category: "חומרי בנייה"
}, {
  englishTerm: "Drywall",
  hebrewTerm: "לוח גבס",
  definition: "לוח עשוי מגבס המשמש לציפוי קירות ותקרות פנימיות. מכונה גם Gypsum board או Sheetrock (שם מסחרי).",
  category: "חומרי בנייה"
}, {
  englishTerm: "Stud",
  hebrewTerm: "אזיקון",
  definition: "לוח או עמוד אנכי המהווה חלק ממסגרת קיר. בארה\"ב, אזיקונים סטנדרטיים הם בעובי 2 אינץ' ורוחב 4 אינץ' (מידות נומינליות).",
  category: "שלד בניין"
}, {
  englishTerm: "Joist",
  hebrewTerm: "קורה",
  definition: "קורת תמיכה אופקית המשמשת בבניית רצפות ותקרות, לרוב עשויה מעץ או מתכת.",
  category: "שלד בניין"
}, {
  englishTerm: "Beam",
  hebrewTerm: "קורת רוחב",
  definition: "אלמנט מבני אופקי הנושא עומסים ומעביר אותם לעמודים או לקירות תומכים.",
  category: "שלד בניין"
}, {
  englishTerm: "Rebar",
  hebrewTerm: "ברזל זיון",
  definition: "מוט פלדה מחורץ המשמש לחיזוק בטון. קיים במגוון קטרים ואורכים.",
  category: "חומרי בנייה"
}, {
  englishTerm: "Footing",
  hebrewTerm: "רגל יסוד",
  definition: "חלק מורחב של היסוד המפזר את העומס על שטח גדול יותר של קרקע.",
  category: "יסודות"
}, {
  englishTerm: "Fascia",
  hebrewTerm: "לוח רכס",
  definition: "לוח אנכי המותקן בקצה הגג, לעתים קרובות משמש כבסיס למרזב.",
  category: "גגות"
}, {
  englishTerm: "Soffit",
  hebrewTerm: "תקרת סיכוך",
  definition: "החלק התחתון של גג בולט או מרפסת, המכסה את החלק התחתון של הגג הבולט מהקיר.",
  category: "גגות"
}, {
  englishTerm: "Flashing",
  hebrewTerm: "איטום פח",
  definition: "חומר דק, לרוב מתכתי, המותקן למניעת חדירת מים בחיבורים בגג או בקירות.",
  category: "איטום"
}, {
  englishTerm: "Miter Joint",
  hebrewTerm: "חיבור אלכסוני",
  definition: "חיבור שבו שני חלקים נחתכים בזווית (בד\"כ 45 מעלות) ומחוברים יחד ליצירת פינה.",
  category: "נגרות"
}, {
  englishTerm: "Plumb",
  hebrewTerm: "אנכי",
  definition: "ישר במאונך, במקביל לכוח המשיכה. נמדד באמצעות פלס או אנך.",
  category: "מדידות"
}, {
  englishTerm: "Jamb",
  hebrewTerm: "משקוף",
  definition: "המסגרת האנכית של דלת או חלון.",
  category: "פתחים"
}, {
  englishTerm: "Header",
  hebrewTerm: "קורת פתח",
  definition: "קורה מעל פתח כמו דלת או חלון התומכת במבנה שמעליה.",
  category: "פתחים"
}, {
  englishTerm: "Sill",
  hebrewTerm: "סף",
  definition: "המרכיב האופקי התחתון של מסגרת חלון או דלת.",
  category: "פתחים"
}, {
  englishTerm: "Subfloor",
  hebrewTerm: "רצפת תשתית",
  definition: "שכבת רצפה בסיסית המותקנת ישירות על קורות הרצפה, לפני התקנת חיפוי הרצפה הסופי.",
  category: "רצפות"
}, {
  englishTerm: "Baseboard",
  hebrewTerm: "פנל רצפה",
  definition: "פס גימור המותקן לאורך החיבור בין הקיר לרצפה.",
  category: "גימור"
}, {
  englishTerm: "Crown Molding",
  hebrewTerm: "עיטור תקרה",
  definition: "פס גימור דקורטיבי המותקן בחיבור בין הקיר לתקרה.",
  category: "גימור"
}, {
  englishTerm: "Grout",
  hebrewTerm: "רובה",
  definition: "חומר מילוי המשמש למילוי החריצים בין אריחי קרמיקה או אבן.",
  category: "חומרי בנייה"
}, {
  englishTerm: "Trowel",
  hebrewTerm: "מלדג'",
  definition: "כלי יד עם להב שטוח המשמש ליישום ופיזור של חומרים כמו טיח, בטון או דבק.",
  category: "כלי עבודה"
}, {
  englishTerm: "Caulk",
  hebrewTerm: "חומר איטום",
  definition: "חומר איטום גמיש המשמש לאיטום חריצים וסדקים.",
  category: "איטום"
}];

// פונקציה לחיפוש בכל תוכן האתר
export const searchSiteContent = query => {
  if (!query.trim()) {
    return [];
  }
  const normalizedQuery = query.toLowerCase();
  const results = [];

  // חיפוש בפרקים
  chaptersData.forEach(chapter => {
    if (chapter.title.includes(query) || chapter.content.toLowerCase().includes(normalizedQuery)) {
      results.push({
        title: chapter.title,
        description: chapter.content.substring(0, 100) + "...",
        type: 'chapter',
        url: `/chapter/${chapter.id}`
      });
    }
  });

  // חיפוש במילון מונחים
  glossaryData.forEach(item => {
    if (item.englishTerm.toLowerCase().includes(normalizedQuery) || item.hebrewTerm.includes(query) || item.definition.includes(query)) {
      results.push({
        title: `${item.hebrewTerm} (${item.englishTerm})`,
        description: item.definition.substring(0, 100) + "...",
        type: 'glossary',
        url: `/glossary?q=${encodeURIComponent(item.hebrewTerm)}`
      });
    }
  });

  // הוספת חיפוש בממיר המידות (רק כקישור כללי)
  if ("המרה".includes(query) || "מידות".includes(query) || "המרת".includes(query) || "conversion".toLowerCase().includes(normalizedQuery)) {
    results.push({
      title: "ממיר מידות",
      description: "כלי להמרת מידות בין השיטה המטרית לשיטה האימפריאלית",
      type: 'conversion',
      url: "/conversion"
    });
  }
  return results;
};