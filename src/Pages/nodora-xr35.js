import { useTranslation } from "react-i18next";
import Breadcrumb from '../common-component/Breadcrumb';

const NodoraXR35 = () => {
    const { t } = useTranslation();
    return (
        <div>
            <Breadcrumb 
                header={t('nudura_xr35')}
                subHeader={t('building_homes_also_for_the_generations_to_come')}
            />
            <section>
                <div className="container">
                    <div className="title">
                        <h3 className="text-primary mb-5">{t('nudura_xr35')}</h3>
                    </div>
                    <div className="row align-items-center justify-content-center g-4">
                        <div className="col-sm-12 col-md-8">
                            <div className="layer_image small-round-layer border border-blue h-auto">
                                <img alt=""src="Images/Nudura-XR35-big-banner.jpg" />
                            </div>

                        </div>
                    </div>

                </div>
            </section>
            <section className="pt-0">
                <div className="container">
                    <div className="file-card">
                        <h6 className="mb-3 ">{t('file_attachments')}</h6>
                        <a href="EcoBuildPdf/Product/Plus Series/Nudura xr35-product-information.pdf"
                            target="_blank" download>
                            <div className="file-icon-band">
                                <img alt=""src="Images/Icons/pdf-fille.svg" />
                            </div>
                            <div className="file-name-band">
                                <h5 className="text-primary mb-0">{t('click_here_for_full_details')}</h5>
                            </div>
                        </a>
                    </div>

                </div>
            </section>
            <section className="pt-0">
                <div className="container">
                    
                    <div className="full-video-card mt-5">
                        <div className="video-band">
                            <iframe width="560" height="315"
                                src="https://www.youtube.com/embed/iS0Dl92_on4?si=07u7F_BiLBsCYJbQ"
                                title={t('youtube_video_player')} frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>

                </div>
            </section>
            <section className="pt-0">
                <div className="container">
                    <div className="layer_content p-0">
                        <div className="text-band flex-text-band">
                            <h6 className="mb-0 mt-0 mb-3 font-bg-700">{t('nudura_xr35')}</h6>
                            <p className="bold-bg">{t('nudura_has_revolutionized_the_icf_industry_since_its_inception_creating_quality_products_that_incorporate_innovation_to_make_construction_easier_for_our_customers_we_believe_in_continuous_r_d_that_allows_us_to_provide_the_most_innovative_line_of_insulated_concrete_forms_on_the_market')}</p>
                            <p className="bold-bg">{t('innovation_continues_in_the_form_of_our_new_xr35_plus_series')}</p>
                            <p className="bold-bg">{t('the_xr35_is_created_with_a_higher_r_value_due_to_its_4_102mm_eps_panels_it_is_available_with_a_6_150mm_and_20_203mm_core_as_a_standard_shape_and_a_90_degree_corner_shape')}</p>
                            <p className="bold-bg">{t('the_fastening_strips_remain_16_mm_16_5_below_the_surface_of_the_eps_and_are_centrally_located_203_mm_the_fastening_strip_is_marked_with_a_diamond_pattern_making_fastening_the_interior_or_exterior_finishes_quick_and_easy_in_place')}</p>
                        </div>
                    </div>


                </div>
            </section>
            <section className="pt-0">
                <div className="container">
                    <div className="layer_content p-0">
                        <div className="text-band flex-text-band">
                            <h6 className="mb-0 mt-0 mb-3 font-bg-700">{t('product_highlights')}</h6>
                            <ul className="details-list mt-2 g-2 w-fill">
                                <li>{t('4_102_mm_eps_panels')}</li>
                                <li>{t('newly_designed_tightening_strip')}</li>
                                <li>{t('up_to_r_35_insulation_value')}</li>
                                <li>{t('patented_technology')}</li>
                                <li>{t('full_line_of_icf_product_accessories_from_waterproof_material_to_plate')}</li>
                                <li>{t('access_to_full_on_site_technical_support_through_a_dedicated_distributor_network')}</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}

export default NodoraXR35;