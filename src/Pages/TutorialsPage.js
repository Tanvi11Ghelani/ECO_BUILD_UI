import React from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import GuideHeader from '@/components/GuideHeader';
import { Video } from 'lucide-react';
const TutorialsPage = () => {
  const videos = [{
    id: '1OUXTlIK6mg',
    title: 'הצהרת הסתייגות והכרת נודורה',
    description: 'סרטון ראשון בסדרת ההדרכה - הצהרת הסתייגות וכרת נודורה',
    playlist: 'PLbj7S1hwjaEtqERQlHkozbc1UmYjo-Ct0'
  }, {
    id: 'X3mPMhXSg_M',
    title: 'כלי עבודה ממולצים',
    description: 'סרטון שני בסדרת ההדרכה - כלים מומלצים לעבודה',
    playlist: 'PLbj7S1hwjaEtqERQlHkozbc1UmYjo-Ct0'
  }, {
    id: 'cCxd_s23WsE',
    title: 'הכנת האתר ויסודות',
    description: 'סרטון שלישי בסדרת ההדרכה - הכנת האתר ויסודות',
    playlist: 'PLbj7S1hwjaEtqERQlHkozbc1UmYjo-Ct0'
  }, {
    id: 'O3geOZJV15Y',
    title: 'צעדים ראשונים – הנחת השורה הראשונה',
    description: 'סרטון רביעי בסדרת ההדרכה - צעדים ראשונים להנחת השורה הראשונה',
    playlist: 'PLbj7S1hwjaEtqERQlHkozbc1UmYjo-Ct0'
  }, {
    id: 'gq-beceBA0A',
    title: 'צעדים ראשונים – הנחת מוטות חיזוק',
    description: 'סרטון חמישי בסדרת ההדרכה - צעדים ראשונים להנחת מוטות חיזוק',
    playlist: 'PLbj7S1hwjaEtqERQlHkozbc1UmYjo-Ct0'
  }, {
    id: 'xJINm5BcHqE',
    title: 'הנחת שכבה שניה',
    description: 'סרטון שישי בסדרת ההדרכה - הנחת שכבה שניה',
    playlist: 'PLbj7S1hwjaEtqERQlHkozbc1UmYjo-Ct0'
  }, {
    id: 'zrJvTKp3X6U',
    title: 'התקנת מערכת הפיגום תמיכה ויישור',
    description: 'סרטון שביעי בסדרת ההדרכה - התקנת מערכת הפיגום תמיכה ויישור',
    playlist: 'PLbj7S1hwjaEtqERQlHkozbc1UmYjo-Ct0'
  }, {
    id: 'drOf0vAAd1o',
    title: 'פתחים, חלונות ודלתות',
    description: 'סרטון שמיני בסדרת ההדרכה - פתחים, חלונות ודלתות',
    playlist: 'PLbj7S1hwjaEtqERQlHkozbc1UmYjo-Ct0'
  }, {
    id: 'uxcnrlTo-08',
    title: 'פתחי שירות',
    description: 'סרטון תשיעי בסדרת ההדרכה - פתחי שירות',
    playlist: 'PLbj7S1hwjaEtqERQlHkozbc1UmYjo-Ct0'
  }, {
    id: 'E3-klPoFDUc',
    title: 'משקופים',
    description: 'סרטון עשירי בסדרת ההדרכה - משקופים',
    playlist: 'PLbj7S1hwjaEtqERQlHkozbc1UmYjo-Ct0'
  }, {
    id: 'toasqOHJIDo',
    title: 'יישומים מיוחדים',
    description: 'סרטון אחד עשר בסדרת ההדרכה - יישומים מיוחדים',
    playlist: 'PLbj7S1hwjaEtqERQlHkozbc1UmYjo-Ct0'
  }, {
    id: 'Yi13S3PcgRA',
    title: 'יציקת הבטון דחוס',
    description: 'סרטון שנים עשר בסדרת ההדרכה - יציקת הבטון דחוס',
    playlist: 'PLbj7S1hwjaEtqERQlHkozbc1UmYjo-Ct0'
  }, {
    id: 'nyGSgpN1pyI',
    title: 'בידוד מרטיבות ולחות',
    description: 'סרטון שלושה עשר בסדרת ההדרכה - בידוד מרטיבות ולחות',
    playlist: 'PLbj7S1hwjaEtqERQlHkozbc1UmYjo-Ct0'
  }, {
    id: 'Bjf0HLdI0t4',
    title: 'שכבת הדבק - טיח',
    description: 'סרטון ארבעה עשר בסדרת ההדרכה - שכבת הדבק וטיח',
    playlist: 'PLbj7S1hwjaEtqERQlHkozbc1UmYjo-Ct0'
  }, {
    id: '3DSjwZBqi08',
    title: 'חשמל אינסטלציה וכד\'',
    description: 'סרטון חמישה עשר בסדרת ההדרכה - חשמל אינסטלציה וכד\'',
    playlist: 'PLbj7S1hwjaEtqERQlHkozbc1UmYjo-Ct0'
  }, {
    id: '2XdOkt0oo4s',
    title: 'עבודות גמר פנימיות',
    description: 'סרטון שישה עשר בסדרת ההדרכה - עבודות גמר פנימיות',
    playlist: 'PLbj7S1hwjaEtqERQlHkozbc1UmYjo-Ct0'
  }, {
    id: '29GIBdkTb1c',
    title: 'עבודה עם סידרה 1',
    description: 'סרטון שבעה עשר בסדרת ההדרכה - עבודה עם סידרה 1',
    playlist: 'PLbj7S1hwjaEtqERQlHkozbc1UmYjo-Ct0'
  }, {
    id: 'LVkhKyJHeQ0',
    title: 'התקנת מחזקי T',
    description: 'סרטון שמונה עשר בסדרת ההדרכה - התקנת מחזקי T',
    playlist: 'PLbj7S1hwjaEtqERQlHkozbc1UmYjo-Ct0'
  }];
  return <div className="min-h-screen flex flex-col bg-background">
      <GuideHeader />
      <main className="flex-1 container py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">סרטוני הדרכה</h1>
          <p className="text-muted-foreground mb-8">צפו בסרטוני ההדרכה שלנו להבנה מעמיקה של תהליכי ההתקנה</p>
          
          <div className="grid gap-6 md:grid-cols-2">
            {videos.map(video => <Card key={video.id} className="overflow-hidden">
                <div className="relative pb-[56.25%] bg-muted">
                  <iframe src={`https://www.youtube.com/embed/${video.id}?list=${video.playlist}`} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute top-0 left-0 w-full h-full" />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Video className="h-5 w-5" />
                    {video.title}
                  </CardTitle>
                  <CardDescription>{video.description}</CardDescription>
                </CardHeader>
              </Card>)}
          </div>
        </div>
      </main>
    </div>;
};
export default TutorialsPage;