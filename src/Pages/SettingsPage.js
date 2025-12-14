import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import GuideHeader from '@/components/GuideHeader';
const SettingsPage = () => {
  return <div className="min-h-screen flex flex-col bg-background">
      <GuideHeader />
      <main className="flex-1 container py-8">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10">
          <div className="flex max-w-[980px] flex-col items-start gap-2">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:text-5xl">
              הגדרות
            </h1>
            <p className="max-w-[800px] text-lg text-muted-foreground">
              התאמת המדריך לצרכים שלך
            </p>
          </div>
        </section>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>תצוגה</CardTitle>
              <CardDescription>הגדרות תצוגה והתאמה אישית</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="font-size" className="flex-1">גודל טקסט</Label>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">קטן</Button>
                  <Button variant="outline" size="sm">בינוני</Button>
                  <Button variant="outline" size="sm">גדול</Button>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="dark-mode" className="flex-1">מצב כהה</Label>
                <Switch id="dark-mode" />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="rtl" className="flex-1">תצוגה מימין לשמאל</Label>
                <Switch id="rtl" defaultChecked />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>יחידות מידה</CardTitle>
              <CardDescription>הגדרת יחידות מידה מועדפות</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="metric" className="flex-1">שיטת מידה</Label>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">מטרית</Button>
                  <Button variant="outline" size="sm">אימפריאלית</Button>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="temp-unit" className="flex-1">יחידת טמפרטורה</Label>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">צלזיוס</Button>
                  <Button variant="outline" size="sm">פרנהייט</Button>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="auto-convert" className="flex-1">המרה אוטומטית</Label>
                <Switch id="auto-convert" defaultChecked />
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <footer className="border-t py-6">
        <div className="container flex flex-col gap-2 items-center justify-between text-sm text-muted-foreground md:flex-row">
          <p>© 2025 מדריך התקנה לקבלנים. כל הזכויות שמורות.</p>
          <div className="flex gap-4">
            <Button variant="link" size="sm">אודות</Button>
            <Button variant="link" size="sm">צור קשר</Button>
            <Button variant="link" size="sm">תנאי שימוש</Button>
          </div>
        </div>
      </footer>
    </div>;
};
export default SettingsPage;