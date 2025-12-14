import React from 'react';
import GuideHeader from '@/components/GuideHeader';
import Footer from '@/components/home/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
const ContactPage = () => {
  return <div className="min-h-screen flex flex-col bg-background">
      <GuideHeader />
      <main className="flex-1 container py-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">צור קשר</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-right">
              נשמח לעמוד לרשותכם בכל שאלה או בקשה. צוות המומחים שלנו זמין לסייע בנושאים טכניים
              ומקצועיים הקשורים למדריך.
            </p>
            <div className="flex justify-center">
              <Button className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>צור קשר באימייל</span>
              </Button>
            </div>
            <div className="bg-muted p-4 rounded-md text-right">
              <h3 className="font-semibold mb-2">שעות פעילות:</h3>
              <p>ימים א'-ה': 09:00-17:00</p>
              <p>יום ו': 09:00-13:00</p>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>;
};
export default ContactPage;