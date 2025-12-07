import oneseries from '../images/One-Series.jpg';
import epsboard from  '../images/Internal-EPS-board.jpg';
import { useTranslation } from "react-i18next";
import Breadcrumb from '../common-component/Breadcrumb';
import './one-series.css';

const OneSeries= () => {
    const { t } = useTranslation();
    return (
        <div>
            <Breadcrumb 
                header={t('one_series')}
                subHeader={t('building_homes_also_for_the_generations_to_come')}
            />
            {/* Main content section - Text on left, Image on right */}
            <section>
                <div className="container">
                    {/* Main frame - 1500px width, 561px height, 100px gap */}
                    <div className="one-series-frame">
                        {/* Text section - 889px width, 253px height, 30px gap */}
                        <div className="one-series-text-section">
                            {/* Title - One Series with gradient text */}
                            <h3 className="one-series-title">{t('one_series')}</h3>
                            {/* First paragraph - 18px, 140% line-height */}
                            <p className="one-series-first-paragraph">
                                {t('nudura_s_one_1_series_offers_the_industry_s_only_multi_link_formwork_that_gives_contractors_and_architects_exceptional_flexibility_in_designing_projects_using_icf_at_the_heart_of_this_innovative_product_line_is_dura_multilink_technology_an_innovative_network_that_allows_users_to_create_a_wide_range_of_versatile_formwork_combinations_for_a_variety_of_building_types_from_residential_to_commercial_the_one_1_series_also_offers_durmax_technology_the_industry_s_largest_standard_formwork_measuring_2_4m_long_by_457mm_high_which_lays_1_11m2_of_wall_space_in_one_operation')}
                            </p>
                        </div>
                        {/* Image container - 508px width, 424px height, gradient border */}
                        <div className="one-series-image-wrapper">
                            <div className="one-series-image-container">
                                <img alt={t('one_series')} src={oneseries} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Content paragraphs section */}
            <section className="pt-0">
                <div className="container">
                    <div className="one-series-section">
                        {/* Second paragraph - 18px, 200% line-height */}
                        <p className="one-series-content-paragraph">
                            {t('one_series_one_sided_form_the_one1_series_saves_labor_costs_by_eliminating_the_need_to_strip_foam_from_elevator_shafts_stairwells_and_other_areas_that_do_not_require_foam_the_one_series_gives_architects_more_flexibility_in_designing_educational_buildings_and_multi_story_warehouses_for_homebuilders_the_one_series_is_ideal_for_swimming_pools_and_other_applications_that_require_foam_on_only_one_side_the_transition_from_concrete_to_foam_is_seamless_and_nudura_s_unique_design_allows_the_concrete_to_meet_the_exterior_of_the_foam_board_the_dura_multilock_grid_uses_smaller_connection_points_so_that_the_grids_are_not_visible_on_the_concrete_side_of_the_wall_this_innovative_design_features_only_two_small_connection_points_per_grid_that_can_be_easily_covered_and_concealed_the_result_is_a_smoother_interior_and_exterior_surface')}
                        </p>
                        {/* Third paragraph - 18px, 200% line-height */}
                        <p className="one-series-content-paragraph">
                            {t('how_does_it_work_the_one_series_combines_traditional_formwork_methods_with_insulated_concrete_formwork_technology_nudura_provides_all_the_materials_required_to_complete_the_multilock_formwork_including_plywood_mesh_screws_and_a_special_template_for_quick_and_easy_assembly_the_plywood_pieces_come_pre_drilled_eliminating_the_need_to_drill_on_site_installers_can_simply_assemble_the_formwork_quickly_and_easily_in_the_desired_shape_combined_with_nudura_s_standard_and_innovative_icf_panels_and_custom_made_forms_transitions_from_900_to_450_are_made_easy_when_the_job_is_done_all_plywood_panels_can_be_removed_and_cleaned_for_reuse_on_the_next_job_saving_costs_and_eliminating_waste')}
                        </p>
                    </div>
                </div>
            </section>
            {/* 90° Corner Panel section - Image on left, Text on right */}
            <section className="pt-0">
                <div className="container">
                    <div className="row align-items-center g-4">
                        {/* Image section - 8 columns */}
                        <div className="col-md-8">
                            <div className="one-series-corner-image-wrapper">
                                <div className="one-series-corner-image-container">
                                    <img alt={t('90_corner_panel_options')} src={epsboard} />
                                </div>
                            </div>
                        </div>
                        {/* Text content section - 4 columns */}
                        <div className="col-md-4">
                            <div className="one-series-corner-content">
                                <h3 className="one-series-corner-title">{t('90_corner_panel_options')}</h3>
                                <p className="one-series-corner-text">{t('internal_eps_board')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default OneSeries;