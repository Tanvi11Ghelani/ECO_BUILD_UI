import pdf from '../images/Icons/pdf-gray.svg';
import download from '../images/Icons/Download.svg';
import { useTranslation } from "react-i18next";
import Breadcrumb from '../common-component/Breadcrumb';

// Import more PDFs as needed

const ProjectDescription = () => {
    const { t } = useTranslation();

    // Array of file data with PDF paths
    const files = [
        {
            id: 1,
            name: t('Janacek_Residence_Project_Profile'),
            type: t('pdf'),
            size: "4.93 MB",
            date: "17 Feb, 2017",
            icon: pdf,
            pdfPath: "/EcoBuildPdf/Information Center/Project Description/Janacek Residence Project Profile.pdf",
            downloadName: "Janacek Residence Project Profile.pdf"
        },
        {
            id: 2,
            name: t('farmhouse_basement_project_profile'),
            type: t('pdf'),
            size: "3.38 MB",
            date: "27 Jan, 2016",
            icon: pdf,
            pdfPath: "/EcoBuildPdf/Information Center/Project Description/Farmhouse Basement Project Profile v2.pdf",
            downloadName: "farmhouse-basement-project-profile.pdf"
        },
        {
            id: 3,
            name: t('St_Peter_Anglican_Church_Tallahassee_Project_Profile'),
            type: t('pdf'),
            size: "4.53 MB",
            date: "27 Jan, 2016",
            icon: pdf,
            pdfPath: "/EcoBuildPdf/Information Center/Project Description/St Peter Anglican Church Tallahassee Project Profile.pdf",
            downloadName: "St Peter Anglican Church Tallahassee Project Profile.pdf"
        },
        {
            id: 4,
            name: t('Richardsville_Elementary_Project_Profile_Template'),
            type: t('pdf'),
            size: "3.69 MB",
            date: "20 Jan, 2016",
            icon: pdf,
            pdfPath: "/EcoBuildPdf/Information Center/Project Description/Richardsville Elementary Project Profile Template.pdf",
            downloadName: "Richardsville Elementary Project Profile Template.pdf"
        },
        {
            id: 5,
            name: t('ireland_house_profile_template'),
            type: t('pdf'),
            size: "2.89 MB",
            date: "20 Jan, 2016",
            icon: pdf,
            pdfPath: "/EcoBuildPdf/Information Center/Project Description/Ireland House Profile Template.pdf",
            downloadName: "ireland-house-profile-template.pdf"
        },
        {
            id: 6,
            name: t('curly_house_project_profile'),
            type: t('pdf'),
            size: "4.01 MB",
            date: "16 Nov, 2015",
            icon: pdf,
            pdfPath: "/EcoBuildPdf/Information Center/Project Description/Curly House Project Profile.pdf",
            downloadName: "curly-house-project-profile.pdf"
        },


        {
            id: 5,
            name: t('Woodside_High_School_Project_Profile'),
            type: t('pdf'),
            size: "3.22 MB",
            date: "16 Nov, 2015",
            icon: pdf,
            pdfPath: "/EcoBuildPdf/Information Center/Project Description/Woodside High School Project Profile.pdf",
            downloadName: "Woodside High School Project Profile.pdf"
        }

    ];


    // Table headers array
    const headers = [
        t('file_name'),
        t('type'),
        t('size'),
        t('uploaded_on'),
        t('files')
    ];

    // Handle download function
    const handleDownload = (pdfPath, fileName) => {
        if (!pdfPath) return;

        // Create a temporary link element
        const link = document.createElement('a');
        link.href = pdfPath;
        link.download = fileName || 'document.pdf';

        // Append to body, click, and remove
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div>
            <Breadcrumb
                header={t('project_description')}
                subHeader={t('building_homes_also_for_the_generations_to_come')}
            />
            <section>
                <div className="container">
                    <div className="title">
                        <h3 className="text-primary text-center">{t('project_description')}</h3>
                    </div>
                    <table className="dltrc" style={{ background: "none" }}>
                        <thead>
                            <tr className="dlheader">
                                {headers.map((header, index) => (
                                    <th key={index} className="dlheader">
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {files.map((file, index) => (
                                <tr key={file.id || index} className="dlinfo">
                                    <td className="dlinfo hover01">{file.name}</td>
                                    <td className="dlinfo hover01">{file.type}</td>
                                    <td className="dlinfo hover01">{file.size}</td>
                                    <td className="dlinfo hover01">{file.date}</td>
                                    <td className="dlinfo hover01">
                                        <ul className="file-list-inner-td justify-content-center">
                                            <li>
                                                <a
                                                    href={file.pdfPath}
                                                    className="red-link border-none"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        handleDownload(file.pdfPath, file.downloadName);
                                                    }}
                                                    download={file.downloadName}
                                                >
                                                    <div className="icon-band">
                                                        <img alt="PDF icon" src={file.icon} />
                                                    </div>
                                                    {file.type}
                                                    <img src={download} className="download-icon" alt="Download" />
                                                </a>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default ProjectDescription;