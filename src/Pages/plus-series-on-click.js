import React from 'react';
import image1 from '../images/Nudura-Plus-Series.jpg';
import pdfIcon from '../images/Icons/pdf-fille.svg';
import { useTranslation } from "react-i18next";
import Breadcrumb from '../common-component/Breadcrumb';
import './plus-series.css';

const PlusSeriesOnClickSection = () => {
    const { t } = useTranslation();
    return (
        <div>
            {/* Breadcrumb Component */}
            <Breadcrumb
                header={t('plus_series')}
                subHeader={t('building_homes_also_for_the_generations_to_come')}
            />

            <section>
                <div className="container">
                    {/* Header Title */}
                    <div className="row mb-4">
                        <div className="col-12">
                            <h3 className="text-primary">{t('nudura_plus_series')}</h3>
                        </div>
                    </div>

                    {/* Main Image */}
                    <div className="row justify-content-center mb-5">
                        <div className="col-md-8 text-center">
                            <div className="layer_image border border-blue p-3" style={{ borderRadius: '20px' }}>
                                <img alt={t('nudura_plus_series')} src={image1} className="img-fluid" />
                            </div>
                        </div>
                    </div>

                    {/* File Attachments Section */}
                    <div className="row mb-5">
                        <div className="col-12">
                            <h6 className="mb-3 font-bg-700">{t('file_attachments')}</h6>
                            <div className="file-list">
                                <div className="file-card" style={{ maxWidth: '300px' }}>
                                    <a href="/EcoBuildPdf/Product/ICF/Nudura Plus Series/Nudura_Plus_Series.pdf" target="_blank" rel="noopener noreferrer">
                                        <div className="file-icon-band">
                                            <img alt="PDF" src={pdfIcon} />
                                        </div>
                                        <div className="file-name-band">
                                            <p className="mb-0">{t('click_here_for_full_details')}</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Nudura Plus Series Content */}
                    <div className="row mb-5">
                        <div className="col-12">
                            <h5 className="text-primary mb-3">{t('nudura_plus_series')}</h5>
                            <div className="text-band">
                                <p>{t('nudura_plus_series_intro')}</p>
                                <p>{t('nudura_plus_series_desc_1')}</p>
                                <p>{t('nudura_plus_series_desc_2')}</p>
                                <p>{t('nudura_plus_series_tech')}</p>
                            </div>
                        </div>
                    </div>

                    {/* Nudura PLUS Forms Content */}
                    <div className="row">
                        <div className="col-12">
                            <h5 className="text-primary mb-3">{t('nudura_plus_forms_title')}</h5>
                            <div className="text-band">
                                <p>{t('nudura_plus_forms_desc')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PlusSeriesOnClickSection;
