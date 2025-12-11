import React from 'react';
import image1 from '../images/Nudura-Plus-Series.jpg';
import image2 from '../images/Nudura-XR35.jpg';
import image3 from '../images/plus-series-banner-img.jpg';
import image4 from '../images/plus-series-banner-img-01.jpg';
import image5 from '../images/plus-series-banner-img-02.jpg';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import Breadcrumb from '../common-component/Breadcrumb';
import './plus-series.css';
import './proper-spacing.css';


const PlusSeriesSection = () => {
    const { t } = useTranslation();
    return (
        <div className="plus-series-page">
            {/* Breadcrumb Component - Reusable header banner */}
            <Breadcrumb
                header={t('plus_series')}
                subHeader={t('building_homes_also_for_the_generations_to_come')}
            />
            <section>
                <div className="container">
                    {/* Product cards row with Figma design specifications - Flexbox row layout */}
                    <div className="plus-series-cards-row">
                        {/* Nudura Plus Series Card */}
                        <div className="plus-series-card-wrapper">
                            <div className="plus-series-card">
                                {/* Image section - 488px width, 300px height, 16px border-radius */}
                                <div className="logo-img-band">
                                    <img alt={t('nudura_plus_series')} src={image1} />
                                </div>
                                {/* Content section - 488px width, 158px height, gap 20px */}
                                <div className="text-band">
                                    <h5>{t('nudura_plus_series')}</h5>
                                    <p>{t('the_nudura_plus_forms_are_available_in_four_sizes_1_25mm_2_50mm_4_100mm_and_6_150mm_and_now_offer_r_values_as_high_as_r_48')}</p>
                                </div>
                                {/* Button section - 290px width, 54px height, gradient border */}
                                <div className="action-band">
                                    <span className="btn-gradient-wrapper">
                                        <Link
                                            to="/plus-series-product"
                                            className="btn-primary icon-btn"
                                        >
                                            {t('watching_the_series')}
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* Nudura XR35 Card */}
                        <div className="plus-series-card-wrapper">
                            <div className="plus-series-card">
                                {/* Image section - 488px width, 300px height, 16px border-radius */}
                                <div className="logo-img-band">
                                    <img alt={t('nudura_xr35')} src={image2} />
                                </div>
                                {/* Content section - 488px width, 158px height, gap 20px */}
                                <div className="text-band">
                                    <h5>{t('nudura_xr35')}</h5>
                                    <p>{t('nudura_xr35_the_xr35_has_been_created_with_a_higher_r_value_due_to_its_4_102mm_eps_panels_it_is_available_with_a_6_150mm_and_8_203mm_core_as_a_standard_form_and_a_90_corner_form')}</p>
                                </div>
                                {/* Button section - 290px width, 54px height, gradient border */}
                                <div className="action-band">
                                    <span className="btn-gradient-wrapper">
                                        <Link
                                            to="/nodoraxr35"
                                            className="btn-primary icon-btn"
                                        >
                                            {t('watching_the_series')}
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-0">
                <div className="container">
                    <div className="row align-items-center g-4">
                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
                            <div className="layer_image small-round-layer border border-blue h-auto">
                                <img alt="" src={image3} />
                            </div>

                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-8 col-xl-8 ">
                            <div className="layer_content p-0 " style={{ marginLeft: '20px' }}>
                                {/* <!-- <h3 className="text-primary">90° corner panel options</h3> --> */}
                                <div className="text-band flex-text-band proper-spacing">
                                    <p className="bold-bg">{t('nudura_is_a_pioneer_in_product_innovation_and_leads_the_industry_with_its_innovative_line_of_insulated_concrete_forms_the_plus_series_of_forms_and_inserts_offers_alternatives_for_designers_and_contractors_looking_to_add_more_insulation_to_the_standard_nudura_insulated_concrete_form_series')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className="pt-0">
                <div className="container">
                    <div className="row align-items-center g-4">
                        <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="layer_content p-0">
                                        <div className="text-band flex-text-band proper-spacing">
                                            <p className="bold-bg">{t('nudura_plus_forms_come_in_four_other_foam_thickness_options_25mm_50mm_100mm_and_150mm_they_also_produce_u_values_as_low_as_0_11_plus_forms_are_coated_with_the_desired_amount_of_insulation_using_an_adhesive_approved_for_use_with_eps_ensuring_the_insulation_is_locked_in_place_for_any_application_during_the_construction_process_if_the_desired_insulation_thickness_is_greater_than_150mm_nudura_can_supply_the_required_amount_of_insulation_on_a_time_sensitive_basis')}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex justify-content-end align-items-center">
                                    <div className="layer_content p-0">
                                        <h6 className="mb-0 mt-3 mb-3 font-bg-700">{t('u_values_for_plus_templates')}</h6>
                                        <ul className="details-list mt-2 g-2 align-items-end">
                                            <li>{t('25_mm_0_21')}</li>
                                            <li>{t('50_mm_0_18')}</li>
                                            <li>{t('100_mm_0_14')}</li>
                                            <li>{t('150_mm_0_11')}</li>

                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                            <div className="layer_image small-round-layer border border-blue h-auto">
                                <img alt="" src={image4} />
                            </div>

                        </div>

                    </div>

                </div>
            </section>
            <section className="pt-0">
                <div className="container">
                    <div className="row align-items-center g-4">
                        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                            <div className="layer_image small-round-layer border border-blue h-auto">
                                <img alt="" src={image5} />
                            </div>

                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 ps-lg-5">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="layer_content p-0">
                                        <div className="text-band flex-text-band proper-spacing">
                                            <p className="bold-bg">{t('the_u_value_plus_insert_is_specifically_designed_to_fit_into_any_nudura_formwork_to_reduce_u_values_without_compromising_the_unique_technological_features_of_the_formwork_the_inserts_are_available_in_three_standard_sizes_50mm_100mm_and_150mm_all_813mm_high_once_the_desired_size_is_selected_the_insert_is_simply_threaded_into_the_formwork_thanks_to_the_special_configuration_of_the_insert_it_fits_tightly_into_the_formwork')}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex justify-content-end align-items-center">
                                    <div className="layer_content p-0">
                                        <h6 className="mb-0 mt-3 mb-3 font-bg-700">{t('u_values_of_the_u_value_plus_supplement')}</h6>
                                        <ul className="details-list mt-2 g-2 align-items-end">
                                            <li>{t('50_mm_0_18')}</li>
                                            <li>{t('100_mm_0_14')}</li>
                                            <li>{t('150_mm_0_11')}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>

                </div>
            </section>
            <section className="pt-4">
                <div className="container">
                    <div className="row align-items-center g-4">
                        <div className="col-md-12">
                            <div className="layer_content p-0">
                                <h3 className="text-primary">{t('unique_innovation_for_the_nudura_plus_series')}</h3>
                                <div className="text-band flex-text-band proper-spacing">
                                    <p className="bold-bg">{t('the_plus_series_features_nudura_s_unique_technological_innovation_enabling_contractors_architects_and_engineers_to_design_and_construct_residential_and_commercial_buildings_more_efficiently_the_durafold_duramax_and_duralok_systems_as_well_as_the_4_way_reversible_system_which_are_available_in_a_variety_of_shapes_and_sizes_are_patented_technologies_available_only_from_nudura')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default PlusSeriesSection;
