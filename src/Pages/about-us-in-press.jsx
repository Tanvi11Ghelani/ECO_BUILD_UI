import React from "react";
import { useTranslation } from "react-i18next";
import "../css/aboutinpress.css";
import FileToDownload from "../images/filedownload.png";
const WriteAboutUsInPress = () => {
  const { t } = useTranslation();

  const pressArticles = [
    {
      id: 1,
      title: t("press.article1.title"),
      date: t("press.article1.date"),
      description: t("press.article1.description"),
      link: "https://www.globes.co.il/news/article.aspx?did=1001483246",
    },
    {
      id: 2,
      title: t("press.article2.title"),
      date: t("press.article2.date"),
      description: t("press.article2.description"),
      link: "https://www.inn.co.il/news/625875",
    },
    {
      id: 3,
      title: t("press.article3.title"),
      date: t("press.article3.date"),
      description: t("press.article3.description"),
      link: "https://m.news1.co.il/Loading.aspx?RedirUrl=https%3A%2F%2Fm.news1.co.il%2FArchive%2F0026-d-163762-00.html",
    },
    {
      id: 4,
      title: t("press.article4.title"),
      date: t("press.article4.date"),
      description: t("press.article4.description"),
      link: "https://www.ynet.co.il/architecture/article/rjkqvktut",
    },
    {
      id: 5,
      title: t("press.article5.title"),
      date: t("press.article5.date"),
      description: t("press.article5.description"),
      link: "https://jerusalemtimes.co.il/%D7%90%D7%95%D7%9B%D7%9C-%D7%94%D7%A9%D7%98%D7%99%D7%99%D7%94/%D7%A6%D7%A2%D7%93-%D7%94%D7%95%D7%A9%D7%98%D7%99%D7%94/%D7%A6%D7%A2%D7%93-%D7%94%D7%95%D7%91%D7%95%D7%A8-%D7%91%D7%93%D7%A8%D7%9A-%D7%9C%D7%9B%D7%9C%D7%95%D7%9E%D7%9F-%D7%9C%D7%9E%D7%A6%D7%A2%D7%A7%D7%AA-%D7%95%D7%A2%D7%95%D7%91/",
    },
    {
      id: 6,
      title: t("press.article6.title"),
      date: t("press.article6.date"),
      description: t("press.article6.description"),
      link: "https://dosiz.co.il/34863/%D7%A9%D7%99%D7%AA%D7%99%D7%AA-%D7%91%D7%A0%D7%99%D7%99%D7%94-%D7%97%D7%93%D7%A9%D7%A0%D7%99%D7%AA-%D7%A7%D7%95%D7%A8%D7%A1-%D7%A8%D7%99%D7%A9%D7%95%D7%9F-%D7%91%D7%9E%D7%99%D7%9E%D7%95%D7%9F-%D7%9E%D7%A9/",
    },
    {
      id: 7,
      title: t("press.article7.title"),
      date: t("press.article7.date"),
      description: t("press.article7.description"),
      link: "https://actualic.co.il/%D7%A9%D7%99%D7%99%D7%AA%D7%AA-%D7%94%D7%91%D7%99%D7%A0%D7%99%D7%94-%D7%94%D7%A7%D7%90%D7%A0%D7%99%D7%AA-%D7%9E%D7%92%D7%99%D7%A2%D7%94-%D7%9C%D7%90%D7%A9%D7%A8%D7%90%D7%9C-%D7%9C%D7%9E%D7%94-%D7%93%D7%95/",
    },
    {
      id: 8,
      title: t("press.article8.title"),
      date: t("press.article8.date"),
      description: t("press.article8.description"),
      link: "https://www.news08.net/solution-to-the-human-force-problem-in-the-construction-industry-course-h/",
    },
    {
      id: 9,
      title: t("press.article9.title"),
      date: t("press.article9.date"),
      description: t("press.article9.description"),
      link: "https://www.ice.co.il/realestate/news/article/991813",
    },
    {
      id: 10,
      title: t("press.article10.title"),
      date: t("press.article10.date"),
      description: t("press.article10.description"),
      link: "https://digitaler.cld.bz/nadlan-media9/15/",
    },
    {
      id: 11,
      title: t("press.article11.title"),
      date: t("press.article11.date"),
      description: t("press.article11.description"),
      link: "https://nadlan.walla.co.il/item/3617249",
    },
    {
      id: 12,
      title: t("press.article12.title"),
      date: t("press.article12.date"),
      description: t("press.article12.description"),
      link: "https://nadlan.walla.co.il/item/3617249",
    },
    {
      id: 13,
      title: t("press.article13.title"),
      date: t("press.article13.date"),
      description: t("press.article13.description"),
      link: "https://www.theblock.co.il/",
    },
    {
      id: 14,
      title: t("press.article14.title"),
      date: t("press.article14.date"),
      description: t("press.article14.description"),
      link: "https://www.ashqelon.net/",
    },
     {
      id: 15,
      title: t("press.article15.title"),
      date: t("press.article15.date"),
      description: t("press.article16.description"),
      link: "https://www.theblock.co.il/",
    },
     {
      id: 16,
      title: t("press.article16.title"),
      date: t("press.article16.date"),
      description: t("press.article16.description"),
      link: "https://beersheva.mynet.co.il/real_estate/article/BkBQBXOyP",
    },
    {
  id: 17,
  title:  t("press.article17.title"),
  date: "",
  description: t("press.article17.description"),
},
{
  id: 18,
  title:  t("press.article18.title"),
  date: "",
  description: t("press.article18.description"),
  attachments: [
    { name: "1026740.pdf", url: "#" },
    { name: "8654088.pdf", url: "#" },
    { name: "3138982.pdf", url: "#" },
    { name: "439686.pdf", url: "#" }
  ]
}

  ];
  const article18 = pressArticles.find(a => a.id === 18);


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="container">
        <div className="breadcrumb-band">
          <div className="text-band">
            <span>{t("press.mainTitle")}</span>
            <h2>{t("aboutUs.breadcrumbSubtitle")}</h2>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Press Articles */}
                                <h3 className="text-primary">{t("press.mainTitle")}</h3>

        <div className="space-y-8">
          {pressArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-cyan-500"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
             <h4 className="text-xl font-bold text-[#345766] mb-[35px] md:mb-0 flex-1">
  {article.title} {article.date}
</h4>

              </div>

             <p className="article-description">
  {article.description}
</p>


{article.link && (
  <a href={article.link} className="read-more-link text-primary">
    {t("press.readMore")}
  </a>
)}

{article.id === 17 && (
    <div className="attachments-section">
      <h3>File Attachments</h3>

      <div className="attachments-grid">
        <div className="attachment-card">
<img src={FileToDownload} className="pdf-icon" alt="PDF" />
          <p>380_Part_14_15.pdf</p>
          <a href="#" className="download-icon">⬇</a>
        </div>
      </div>
    </div>
  )}
            </div>
          ))}
          {/* Attachments for section 18 */}
{article18 && (
  <div className="attachments-row">
    {article18.attachments.map((file, index) => (
      <div key={index} className="file-block">
        <h4 className="file-title">File Attachments</h4>

        <div className="file-card">
<img src={FileToDownload} className="pdf-icon" alt="PDF" />
          <p className="file-name">{file.name}</p>
          <a href={file.url} className="download-icon">⬇</a>
        </div>
      </div>
    ))}
  </div>
)}


        </div>
      </div>

      
    </div>
  );
};

export default WriteAboutUsInPress;
