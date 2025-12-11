import img1 from '../images/DURALOK-Technology.jpg';
import img2 from '../images/DURAFOLD-Technology.jpg';
import img3 from '../images/DURAMAX-Technology.jpg';
import img4 from '../images/4WAY-REVERSIBLE-System.jpg';
import { useTranslation } from "react-i18next";
import Breadcrumb from '../common-component/Breadcrumb';
import './proper-spacing.css';


const Innovation = () => {
    const { t } = useTranslation();
    return (
        <div>
            <Breadcrumb
                header={t('innovation')}
                subHeader={t('building_homes_also_for_the_generations_to_come')}
            />
            <section>
                <div className="container">
                    <div className="row align-items-center g-4">
                        <div className="col-md-12">
                            <div className="layer_content p-0">
                                <h3 className="text-primary text-center">{t('innovation')}</h3>

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
                        </div>
                    </div>

                </div>
            </section>
            <section className="pt-0">
                <div className="container">
                    <div className="row align-items-center g-4">
                        <div className="col-sm-12 col-md-12 col-lg-5 col-xl-4">
                            <div className="layer_image small-round-layer border border-blue h-auto">
                                <img alt="" src={img1} />
                            </div>

                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-7 col-xl-8">
                            <div className="layer_content p-0">
                                <h3 className="text-primary">{t('duralok_technology')}</h3>
                                <div className="text-band flex-text-band proper-spacing">
                                    <p className="bold-bg">{t('securely_locks_forms_into_place_with_a_triple_tooth_interlock_eliminating_the_need_to_wire_or_glue_forms_resulting_in_reduced_labor_costs_during_installation_once_the_forms_are_stacked_together_a_continuous_full_height_fastening_strip_ensures_wall_heights_are_always_accurate_compared_to_other_forms_without_full_height_fastening_which_can_cause_wall_height_shrinkage_once_concrete_is_placed_duralok_technology_makes_nudura_the_strongest_in_the_industry')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className="pt-0">
                <div className="container">
                    <div className="row align-items-center g-4">

                        <div className="col-sm-12 col-md-12 col-lg-7 col-xl-8">
                            <div className="layer_content p-0">
                                <h3 className="text-primary">{t('durafold_technology')}</h3>
                                <div className="text-band flex-text-band proper-spacing">
                                    <p className="bold-bg">{t('patented_hinged_web_technology_allows_the_entire_nudura_form_line_up_to_fold_and_ship_flat_allowing_for_40_more_product_on_a_truck_compared_to_other_insulated_concrete_form_products_once_on_site_simply_unfold_and_stack')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-5 col-xl-4">
                            <div className="layer_image small-round-layer border border-blue h-auto">
                                <img alt="" src={img2} />
                            </div>

                        </div>
                    </div>

                </div>
            </section>
            <section className="pt-0">
                <div className="container">
                    <div className="row align-items-center g-4">
                        <div className="col-sm-12 col-md-12 col-lg-5 col-xl-4">
                            <div className="layer_image small-round-layer border border-blue h-auto">
                                <img alt="" src={img3} />
                            </div>

                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-7 col-xl-8">
                            <div className="layer_content p-0">
                                <h3 className="text-primary">{t('duramax_technology')}</h3>
                                <div className="text-band flex-text-band proper-spacing">
                                    <p className="bold-bg">{t('largest_standard_form_on_the_market_measuring_96_x_18_2438mm_x_457mm_our_96_2438mm_form_creates_60_fewer_joints_in_the_wall_compared_to_other_wall_systems_and_allows_installers_the_ability_to_place_12_sq_ft_1_11m2_of_wall_area_with_one_block')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className="pt-0">
                <div className="container">
                    <div className="row align-items-center g-4">

                        <div className="col-sm-12 col-md-12 col-lg-7 col-xl-8">
                            <div className="layer_content p-0">
                                <h3 className="text-primary">{t('4way_reversible_system')}</h3>
                                <div className="text-band flex-text-band proper-spacing">
                                    <p className="bold-bg">{t('patented_foam_interlock_allows_the_form_to_be_4_way_reversible_eliminating_left_and_right_corners_which_helps_speed_up_the_building_process_and_reduces_product_waste_on_site')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-5 col-xl-4">
                            <div className="layer_image small-round-layer border border-blue h-auto">
                                <img alt="" src={img4} />
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}

export default Innovation;