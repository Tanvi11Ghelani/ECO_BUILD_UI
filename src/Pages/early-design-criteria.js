import React from 'react';
import image1 from '../images/Icons/below-the-construction-slope.svg';
import image2 from '../images/Icons/flammable-construction.svg';
import image3 from '../images/Icons/Non-combustible-construction.svg';
import image4 from '../images/Icons/firewall.svg';
import Breadcrumb from '../common-component/Breadcrumb';
import image5 from '../images/Icons/form-unit-profiles.svg';
import image6 from '../images/Icons/BIM-library.svg';
import image7 from '../images/Icons/early-design-criteria.svg';
import image8 from '../images/Icons/early-design-criteria-1.svg';
import image9 from '../images/Icons/pdf-gray.svg';
import image10 from '../images/Icons/Download.svg';
import image11 from '../images/Icons/dwg.svg';
import image12 from '../images/Icons/rfa-file.svg';
import image13 from '../images/Icons/rvt-file.svg';
import image14 from '../images/Icons/pdf-fille.svg';
import image15 from '../images/Icons/xls-file.svg';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";


const fourData = [
    {
        title: 'Vertical Reinforcing A6B01',
        pdf: 'EcoBuildPdf/EarlyDesignCriteria/Engineering Parameters/102mm 4 Concrete Core Forms/Vertical Reinforcing A4B01.pdf',
        dwg: 'EcoBuildPdf/EarlyDesignCriteria/Engineering Parameters/102mm 4 Concrete Core Forms/a4b01.dwg',
    },
    {
        title: 'Brick Ledge Reinforcement A8B02',
        pdf: 'EcoBuildPdf/EarlyDesignCriteria/Engineering Parameters/102mm 4 Concrete Core Forms/45 Degree Corner A4B03.pdf',
        dwg: 'EcoBuildPdf/EarlyDesignCriteria/Engineering Parameters/102mm 4 Concrete Core Forms/a4b02.dwg',
    },
    {
        title: '90 Degree Corner A8B03',
        pdf: 'EcoBuildPdf/EarlyDesignCriteria/Engineering Parameters/102mm 4 Concrete Core Forms/90 Degree Corner A4B02.pdf',
        dwg: 'EcoBuildPdf/EarlyDesignCriteria/Engineering Parameters/102mm 4 Concrete Core Forms/a4b03.dwg',
    },
    {
        title: 'T Form A8B06',
        pdf: 'EcoBuildPdf/EarlyDesignCriteria/Engineering Parameters/102mm 4 Concrete Core Forms/T Form A4B04.pdf',
        dwg: 'EcoBuildPdf/EarlyDesignCriteria/Engineering Parameters/102mm 4 Concrete Core Forms/a4b04.dwg',
    },
]
const sixData = [
    {
        title: "Vertical Reinforcing A6B01",
        pdf: "EcoBuildPdf/EarlyDesignCriteria/Engineering Parameters/152mm 6 Concrete Core Forms/Vertical Reinforcing A6B01.pdf",
        dwg: "EcoBuildPdf/EarlyDesignCriteria/Engineering Parameters/152mm 6 Concrete Core Forms/a6b01.dwg",
    },
    {
        title: "Brick Ledge Reinforcement A6B02",
        pdf: "EcoBuildPdf/EarlyDesignCriteria/Engineering Parameters/152mm 6 Concrete Core Forms/Brick Ledge Reinforcement A6B02.pdf",
        dwg: "EcoBuildPdf/EarlyDesignCriteria/Engineering Parameters/152mm 6 Concrete Core Forms/a6b02.dwg",
    },
    {
        title: "Steel Angle Brick Support A6B03",
        pdf: "EcoBuildPdf/EarlyDesignCriteria/Engineering Parameters/152mm 6 Concrete Core Forms/Steel Angle Brick Support A6B03.pdf",
        dwg: "EcoBuildPdf/EarlyDesignCriteria/Engineering Parameters/152mm 6 Concrete Core Forms/a6b03.dwg",
    },
    {
        title: "Lintel Diagram Elevation A6B04",
        pdf: "EcoBuildPdf/EarlyDesignCriteria/Engineering Parameters/152mm 6 Concrete Core Forms/Lintel Diagram Elevation A6B04.pdf",
        dwg: "EcoBuildPdf/EarlyDesignCriteria/Engineering Parameters/152mm 6 Concrete Core Forms/a6b04.dwg",
    },
    {
        title: "Lintel at OWSJ Floor Connection A6B05",
        pdf: "EcoBuildPdf/EarlyDesignCriteria/Engineering Parameters/152mm 6 Concrete Core Forms/Lintel at OWSJ Floor Connection A6B05.pdf",
        dwg: "EcoBuildPdf/EarlyDesignCriteria/Engineering Parameters/152mm 6 Concrete Core Forms/a6b05.dwg",
    },
    {
        title: "Lintel at Hollow Core Floor Connection A6B06",
        pdf: "EcoBuildPdf/EarlyDesignCriteria/Engineering Parameters/152mm 6 Concrete Core Forms/Lintel at Hollow Core Floor Connection A6B06.pdf",
        dwg: "EcoBuildPdf/EarlyDesignCriteria/Engineering Parameters/152mm 6 Concrete Core Forms/a6b06.dwg",
    },
    {
        title: "90 Degree Corner A6B08",
        pdf: "EcoBuildPdf/EarlyDesignCriteria/Engineering Parameters/152mm 6 Concrete Core Forms/90 Degree Corner A6B08.pdf",
        dwg: "EcoBuildPdf/EarlyDesignCriteria/Engineering Parameters/152mm 6 Concrete Core Forms/a6b08.dwg",
    },
    {
        title: "45 Degree Corner A6B09",
        pdf: "EcoBuildPdf/EarlyDesignCriteria/Engineering Parameters/152mm 6 Concrete Core Forms/45 Degree Corner A6B09.pdf",
        dwg: "EcoBuildPdf/EarlyDesignCriteria/Engineering Parameters/152mm 6 Concrete Core Forms/a6b09.dwg",
    },
]
const eightData = [
    {
        title: "Vertical Reinforcing A6B01",
        pdf: "EcoBuildPdf/EarlyDesignCriteria/Engineering Parameters/203mm 8 Concrete Core Forms/Vertical Reinforcing A8B01.pdf",
        dwg: "EcoBuildPdf/EarlyDesignCriteria/Engineering Parameters/203mm 8 Concrete Core Forms/a4b01.dwg",
    },
    {
        title: "Brick Ledge Reinforcement A8B02",
        pdf: "EcoBuildPdf/EarlyDesignCriteria/Engineering Parameters/203mm 8 Concrete Core Forms/Brick Ledge Reinforcement A8B02.pdf",
        dwg: "EcoBuildPdf/EarlyDesignCriteria/Engineering Parameters/203mm 8 Concrete Core Forms/a8b02.dwg",
    },
    {
        title: "90 Degree Corner A8B03",
        pdf: "EcoBuildPdf/EarlyDesignCriteria/Engineering Parameters/203mm 8 Concrete Core Forms/90 Degree Corner A8B03.pdf",
        dwg: "EcoBuildPdf/EarlyDesignCriteria/Engineering Parameters/203mm 8 Concrete Core Forms/a8b03.dwg",
    },
    {
        title: "T Form A8B06",
        pdf: "EcoBuildPdf/EarlyDesignCriteria/Engineering Parameters/203mm 8 Concrete Core Forms/T Form A8B06.pdf",
        dwg: "EcoBuildPdf/EarlyDesignCriteria/Engineering Parameters/203mm 8 Concrete Core Forms/a8b06.dwg",
    },
    {
        title: "45 Degree Corner A8B07",
        pdf: "EcoBuildPdf/EarlyDesignCriteria/Engineering Parameters/203mm 8 Concrete Core Forms/45 Degree Corner A8B07.pdf",
        dwg: "EcoBuildPdf/EarlyDesignCriteria/Engineering Parameters/203mm 8 Concrete Core Forms/a8b07.dwg",
    },
]
const tenData = [
    {
        title: "Vertical Reinforcing A10B01",
        pdf: "EcoBuildPdf/EarlyDesignCriteria/Engineering Parameters/254mm 10 Concrete Core Forms/Vertical Reinforcing A10B01.pdf",
        dwg: "EcoBuildPdf/EarlyDesignCriteria/Engineering Parameters/254mm 10 Concrete Core Forms/A10B01.dwg",
    },
    {
        title: "Brick Ledge Reinforcement A10B02",
        pdf: "EcoBuildPdf/EarlyDesignCriteria/Engineering Parameters/254mm 10 Concrete Core Forms/Brick Ledge Reinforcement A10B02.pdf",
        dwg: "EcoBuildPdf/EarlyDesignCriteria/Engineering Parameters/254mm 10 Concrete Core Forms/A10B02.dwg",
    },
    {
        title: "90 Degree Corner A10B03",
        pdf: "EcoBuildPdf/EarlyDesignCriteria/Engineering Parameters/254mm 10 Concrete Core Forms/90 Degree Corner A10B03.pdf",
        dwg: "EcoBuildPdf/EarlyDesignCriteria/Engineering Parameters/254mm 10 Concrete Core Forms/A10B03.dwg",
    },
    {
        title: "T Form A10B05",
        pdf: "EcoBuildPdf/EarlyDesignCriteria/Engineering Parameters/254mm 10 Concrete Core Forms/T Form A10B05.pdf",
        dwg: "EcoBuildPdf/EarlyDesignCriteria/Engineering Parameters/254mm 10 Concrete Core Forms/A10B05.dwg",
    },
    {
        title: "45 Degree Corner A10B06",
        pdf: "EcoBuildPdf/EarlyDesignCriteria/Engineering Parameters/254mm 10 Concrete Core Forms/45 Degree Corner A10B06.pdf",
        dwg: "EcoBuildPdf/EarlyDesignCriteria/Engineering Parameters/254mm 10 Concrete Core Forms/A10B06.dwg",
    },
]
const twelveData = [
    {
        title: "Vertical Reinforcing A12B01",
        pdf: "EcoBuildPdf/EarlyDesignCriteria/Engineering Parameters/305mm 12 Concrete Core Forms/Vertical Reinforcing A12B01.pdf",
        dwg: "EcoBuildPdf/EarlyDesignCriteria/Engineering Parameters/305mm 12 Concrete Core Forms/A12B01.dwg",
    },
    {
        title: "90 Degree Corner A12B02",
        pdf: "EcoBuildPdf/EarlyDesignCriteria/Engineering Parameters/305mm 12 Concrete Core Forms/90 Degree Corner A12B02.pdf",
        dwg: "EcoBuildPdf/EarlyDesignCriteria/Engineering Parameters/305mm 12 Concrete Core Forms/A12B02.dwg",
    },
    {
        title: "T Form A12B03",
        pdf: "EcoBuildPdf/EarlyDesignCriteria/Engineering Parameters/305mm 12 Concrete Core Forms/T Form A12B03.pdf",
        dwg: "EcoBuildPdf/EarlyDesignCriteria/Engineering Parameters/305mm 12 Concrete Core Forms/A12B03.dwg",
    },
    {
        title: "45 Degree Corner A12B04",
        pdf: "EcoBuildPdf/EarlyDesignCriteria/Engineering Parameters/305mm 12 Concrete Core Forms/45 Degree Corner A12B04.pdf",
        dwg: "EcoBuildPdf/EarlyDesignCriteria/Engineering Parameters/305mm 12 Concrete Core Forms/A12B04.dwg",
    }
]

const EarlyDesignCriteria = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div className="container">
                <div className="breadcrumb-band">
                    <div className="text-band">
                        <span>{t('early_design_criteria')}</span>
                        <h2>{t('building_homes_also_for_the_generations_to_come')}</h2>
                    </div>
                </div>
            </div>
            <section>
                <div className="container">
                    <div className="row g-4">

                        <div className="col-md-3">
                            <div className="card icon-top-primary-card h-245">
                                <Link to="/belowtheconstructionslope" className="icon-card top-icon-band blue cus-p-16">
                                    <div className="icon-band">
                                        <img src={image1} alt={t('below_the_construction_slope')} />
                                    </div>
                                </Link>
                                <div className="text-band">
                                    <h4>{t('below_the_construction_slope')}</h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card icon-top-primary-card h-245">
                                <Link to="/flamableconstruction" className="icon-card top-icon-band yellow cus-p-16">
                                    <div className="icon-band">
                                        <img src={image2} alt={t('flammable_construction')} />
                                    </div>
                                </Link>
                                <div className="text-band">
                                    <h4>{t('flammable_construction')}</h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card icon-top-primary-card h-245">
                                <Link to="/noncombstibleconstruction" className="icon-card top-icon-band gray cus-p-16">
                                    <div className="icon-band">
                                        <img src={image3} alt={t('non_combustible_construction')} />
                                    </div>
                                </Link>
                                <div className="text-band">
                                    <h4>{t('non_combustible_construction')}</h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card icon-top-primary-card h-245">
                                <Link to="/firewall" className="icon-card top-icon-band red cus-p-16">
                                    <div className="icon-band">
                                        <img src={image4} alt={t('firewall')} />
                                    </div>
                                </Link>
                                <div className="text-band">
                                    <h4>{t('firewall')}</h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card icon-top-primary-card h-245">
                                <Link to="/formunitprofile" className="icon-card top-icon-band green cus-p-16">
                                    <div className="icon-band">
                                        <img src={image5} alt={t('form_unit_profiles')} />
                                    </div>
                                </Link>
                                <div className="text-band">
                                    <h4>{t('form_unit_profiles')}</h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card icon-top-primary-card h-245">
                                <Link to="/bimlibrary" className="icon-card top-icon-band orange cus-p-16">
                                    <div className="icon-band">
                                        <img src={image6} alt={t('bim_library')} />
                                    </div>
                                </Link>
                                <div className="text-band">
                                    <h4>{t('bim_library')}</h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card icon-top-primary-card h-245">
                                <Link to="/earlydesigncriteria" className="icon-card top-icon-band purple cus-p-16">
                                    <div className="icon-band">
                                        <img src={image7} alt={t('early_design_criteria')} />
                                    </div>
                                </Link>
                                <div className="text-band">
                                    <h4>{t('early_design_criteria')}</h4>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="pt-0">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <div className="layer_content p-0">
                                <h3 className="text-primary mb-4">{t('early_design_criteria')}</h3>
                                <p className="dark-font-600 mt-3 mb-2">{t('these_guidelines_walk_you_through_key_considerations_you_need_to_think_about_before_you_begin_building_with_nudura_use_these_recommendations_to_achieve_optimal_wall_performance_for_most_environments_in_north_america_read_on_below_to_see_important_criteria_to_consider_when_it_comes_to_wall_thickness_general_layout_wall_function_and_engineering_parameters_as_well_as_some_ideas_for_how_best_to_deal_with_local_contributing_factors')}</p>
                                <h6 className="mb-0 mt-5 mb-4">{t('wall_thickness_chart')}</h6>
                                <p className="dark-font-600 mt-3 mb-2">{t('this_simple_reference_matrix_is_produced_to_assist_engineers_designers_and_contractors_in_selecting_an_appropriate_core_thickness_of_nudura_forms_for_optimum_wall_performance_i_e_to_yield_the_most_efficient_combination_of_concrete_and_steel_for_necessary_condition')}</p>
                                <p className="dark-font-600 mt-3 mb-2"><b>{t('important_note')}</b>{t('the_recommendations_contained_in_this_document_are_intended_as_a_general_guideline_only_and_should_not_be_construed_as_a_substitute_for_proper_engineered_design_to_aci_318_usa_or_can_csa_a23_3_can_standards')}</p>
                                <p className="dark-font-600 mt-3 mb-2">{t('instead_this_document_is_intended_as_a_guideline_to_aid_in_the_selection_of_an_appropriate_form_thickness_for_a_suggested_wall_height_or_building_type_for_budget_quotation_or_preliminary_design_consideration_purposes_only_note_that_special_local_contributing_factors_such_as_high_clay_content_in_soils_high_seismic_velocities_or_wind_pressures_in_excess_of_21_psf_20_mph_to_40_mph_or_1_0_kpa_may_dictate_the_selection_of_a_thicker_core_form_if_the_design_condition_is_close_to_the_maximum_heights_suggested_in_this_document_in_most_cases_for_north_america_the_proposed_recommendations_herein_will_result_in_optimum_reinforcing_patterns_capable_of_resisting_the_required_loadings_for_each_scenario')}</p>
                            </div>
                            <div className="file-attachments-band mb-0 pb-0">
                                <h6 className="mb-3">{t('file_attachments')}</h6>
                                <div className="file-list">
                                    <div className="file-card">
                                        <a href="EcoBuildPdf/EarlyDesignCriteria/Wall Thickness Chart/Form Thickness Selection Chart/form-thickness-selection-chart.pdf"
                                            target="_blank" download>
                                            <div className="file-icon-band">
                                                <img src="Images/Icons/pdf-fille.svg" />
                                            </div>
                                            <div className="file-name-band">
                                                <p>{t('form_thickness_selection_chart_pdf')}</p>
                                                <span className="small-icon"><img src="Images/Icons/Download.svg" /></span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className="pt-0">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <div className="layer_content p-0">
                                <h3 className="text-primary mb-4">{t('general_layout_guide')}</h3>

                                <p className="dark-font-600 mt-3 mb-2">{t('in_the_move_from_traditional_wall_systems_to_the_use_of_nudura_icfs_in_construction_there_are_essential_elements_for_the_designer_to_consider_especially_for_planning_layouts_the_most_crucial_element_for_the_designer_to_remember_is_the_2_5_8_inch_67_mm_thick_eps_insulation_panel_on_each_side_of_the_concrete_core_wall')}</p>
                                <p className="dark-font-600 mt-3 mb-2">{t('the_overall_building_length_and_width_as_well_as_the_total_thickness_of_the_concrete_wall_must_reflect_the_thickness_of_both_eps_insulation_panels_when_using_nudura_s_wall_technology_for_interior_demising_walls_the_2_5_8_inch_67_mm_thick_eps_insulation_on_each_face_of_the_concrete_wall_will_affect_the_overall_square_footage_of_floor_space_this_will_not_be_a_problem_so_long_as_the_plan_appropriately_allows_for_the_extra_wall_thickness_radius_walls_can_be_created_by_using_the_8_foot_2_44_m_straight_panels_and_insert_webs')}</p>
                                <p className="dark-font-600 mt-3 mb-2">{t('nudura_offers_factory_custom_cut_radius_walls_for_projects_to_suit_the_designer_s_needs_for_a_building_these_radius_walls_can_also_be_field_cut_to_meet_the_designer_s_drawings_and_can_be_placed_anywhere_within_a_wall_length_when_incorporating_these_wall_types_into_a_drawing_the_designer_needs_to_keep_in_mind_that_for_estimating_and_cutting_purposes_dimensioning_should_include_the_radius_dimension_and_the_number_of_degrees_the_radius_will_turn_based_upon_a_cycle_360')}</p>
                            </div>
                            <div className="file-attachments-band mb-0 pb-0">
                                <h6 className="mb-3">{t('file_attachments')}</h6>
                                <div className="file-list">
                                    <div className="file-card">
                                        <a href="https://ecobuild.co.il/wp-content/uploads/2021/01/hydrofoam_520_compressed.pdf"
                                            target="_blank">
                                            <div className="file-icon-band">
                                                <img src="Images/Icons/xls-file.svg" />
                                            </div>
                                            <div className="file-name-band">
                                                <p>{t('radius_wall_cut_dimensions_xls')}</p>
                                                <span className="small-icon"><img src="Images/Icons/Download.svg" /></span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className="pt-0">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <div className="layer_content p-0">
                                <h3 className="text-primary mb-4">{t('wall_height_cart')}</h3>

                                <p className="dark-font-600 mt-3 mb-2">{t('for_elevation_planning_purposes_the_nudura_form_unit_is_based_on_an_18_inch_457_mm_height_which_was_selected_for_enabling_optimum_efficiency_in_horizontal_reinforcement_spacing_in_a_commercially_constructed_6_inch_152_mm_core_concrete_wall_3x_its_thickness')}</p>
                                <ul className="details-list">
                                    <li>{t('footing_elevations_relative_to_grade')}</li>
                                    <li>{t('brick_finishes_relative_to_grade_levels')}</li>
                                    <li>{t('floor_bearing_heights_relative_to_finished_grade')}</li>
                                    <li>{t('floor_bearing_height_relative_to_each_other')}</li>
                                </ul>
                                <p className="dark-font-600 mt-3 mb-2">{t('commercial_contractors_regularly_working_with_nudura_wall_systems_will_plan_their_stack_heights_to_suit_the_elevation_layout_requirements_of_the_building_as_assigned_by_the_architect_however_if_the_designer_desires_optimum_conditions_for_ease_of_construction_of_nudura_on_site_here_is_a_list_of_tips_to_remember_for_achieving_optimum_design_for_installation_of_nudura_forms')}</p>
                                <p className="dark-font-600 mt-3 mb-2">{t('if_a_half_form_achieves_optimum_stack_height_within_the_projected_wall_assembly_from_the_top_of_the_footing_to_a_parapet_plan_to_show_the_half_height_form_at_either_the_footing_or_the_top_of_the_parapet_avoid_half_height_forms_at_the_center_of_stack_height')}</p>
                                <p className="dark-font-600 mt-3 mb-2">{t('for_brick_ledges_always_plan_footing_heights_so_that_they_position_the_majority_of_brick_ledge_around_the_building_at_an_optimal_height_relative_to_the_finished_grade_level_for_most_regions_this_will_usually_be_6_inches_152_mm_above_grade_this_will_enable_the_use_of_the_brick_ledge_form_without_having_to_resort_to_using_the_less_efficient_application_of_brick_ledge_extensions_at_a_custom_height_level')}</p>
                                <ul className="details-list">
                                    <li>{t('remember_that_the_nudura_wall_system_offers_installers_the_flexibility_of_both_fully_assembled_forms_and_individual_site_assembled_panels_all_wall_floor_slab_intersections_can_be_accommodated_easily_on_multi_storey_nudura_installations_by_the_contractor_installing_a_full_panel_on_the_exterior_and_cutting_interior_panels_to_suit_the_height_both_below_and_above_the_slab_these_panels_are_then_tied_to_the_exterior_using_either_cut_insert_webs_or_height_adjuster_ties')}</li>
                                    <li>{t('if_an_intermediate_floor_height_to_a_finished_bearing_condition_will_require_a_partial_form_panel_at_the_top_of_the_wall_stack_it_is_more_efficient_if_the_panel_is_to_be_cut_at_9_inches_229_mm_in_height_or_less_the_remaining_section_of_the_panel_can_be_cut_and_used_to_construct_the_same_portion_of_the_wall_elsewhere_in_the_building_resulting_in_little_or_no_waste')}</li>
                                    <li>{t('avoid_detailing_brick_ledges_as_floor_supports_in_a_commercial_application_brick_ledges_have_limited_bearing_capacities_and_therefore_should_not_be_relied_on_for_carrying_commercial_floor_loads')}</li>

                                </ul>
                                <p className="dark-font-600 mt-3 mb-2">{t('below_are_optimal_stack_height_charts_for_planning_wall_stack_heights_up_to_36_1_2_feet_11_125_meters_in_height_higher_wall_heights_are_possible_by_adding_multiples_of_the_form_unit_height_18_inches_457_mm_to_the_36_1_2_foot_11_125_meters_wall_height_shown')}</p>
                            </div>
                            <div className="file-attachments-band mb-0 pb-0">
                                <h6 className="mb-3">{t('file_attachments')}</h6>
                                <div className="file-list file-flex-wrap">
                                    <div className="file-card">
                                        <a href="EcoBuildPdf/EarlyDesignCriteria/Wall Height Cart/Nudura Wall Height Charts/nudura-wall-height-chart-2006-imperial.pdf"
                                            target="_blank" download>
                                            <div className="file-icon-band">
                                                <img src="Images/Icons/pdf-fille.svg" />
                                            </div>
                                            <div className="file-name-band">
                                                <p>{t('nudura_wall_height_chart_2006_imperial_pdf')}</p>
                                                <span className="small-icon"><img src="Images/Icons/Download.svg" /></span>
                                            </div>
                                        </a>

                                    </div>
                                    <div className="file-card">
                                        <a href="EcoBuildPdf/EarlyDesignCriteria/Wall Height Cart/Nudura Wall Height Charts/nudura-wall-height-chart-2006-metric.pdf"
                                            target="_blank" download>
                                            <div className="file-icon-band">
                                                <img src="Images/Icons/pdf-fille.svg" />
                                            </div>
                                            <div className="file-name-band">
                                                <p>{t('nudura_wall_height_chart_2006_metric_pdf')}</p>
                                                <span className="small-icon"><img src="Images/Icons/Download.svg" /></span>
                                            </div>
                                        </a>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className="pt-0">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <div className="layer_content p-0">
                                <h3 className="text-primary mb-4">{t('engineering_parameters')}</h3>
                                <p className="dark-font-600 mt-3 mb-2">{t('nudura_integrated_building_technology_is_a_stay_in_place_concrete_form_system_that_enables_design_professionals_the_opportunity_to_design_structures_that_meet_the_requirements_of_the_occupants_under_most_building_code_bodies_nudura_is_classified_as_a_flat_wall_icf_system_meaning_that_it_enables_the_creation_of_flat_monolithic_structural_reinforced_concrete_walls')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="white-bg pt-4">


                <div className="container">

                    <div className="row">
                        <div className="col-md-6">
                            <div className="col-md-12">
                                <div className="title">
                                    <h3 className="text-primary text-center mb-5">{t('102mm_4_concrete_core_forms')}</h3>
                                </div>
                                <table className="dltrc tabel-content-center mb-5" style={{ background: "none" }}>
                                    <tbody>
                                        <tr className="dlheader">
                                            <td className="dlheader ">{t('description')}</td>

                                            <td className="dlheader">{t('files')}</td>
                                        </tr>
                                        {fourData.map((item, index) => (
                                            <tr className="dlinfo" key={index}>
                                                <td className="dlinfo hover01">{item.title}</td>
                                                <td className="dlinfo hover01">
                                                    <ul className="file-list-inner-td">
                                                        {item.pdf && (
                                                            <li>
                                                                <a href={item.pdf} className="red-link" target="_blank" rel="noopener noreferrer" download>
                                                                    <div className="icon-band">
                                                                        <img src="Images/Icons/pdf-gray.svg" alt={t('pdf')} />
                                                                    </div>{t('pdf')}<img
                                                                        src="Images/Icons/Download.svg"
                                                                        className="download-icon"
                                                                        alt={t('download')}
                                                                    />
                                                                </a>
                                                            </li>
                                                        )}
                                                        {item.dwg && (
                                                            <li>
                                                                <a href={item.dwg} className="blue-link" target="_blank" rel="noopener noreferrer" download>
                                                                    <div className="icon-band">
                                                                        <img src="Images/Icons/dwg.svg" alt={t('dwg')} />
                                                                    </div>{t('dwg')}<img
                                                                        src="Images/Icons/Download.svg"
                                                                        className="download-icon"
                                                                        alt={t('download')}
                                                                    />
                                                                </a>
                                                            </li>
                                                        )}
                                                    </ul>
                                                </td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>

                            <div className="col-md-12">
                                <div className="title">
                                    <h3 className="text-primary text-center mb-5">{t('203mm_8_concrete_core_forms')}</h3>
                                </div>
                                <table className="dltrc tabel-content-center mb-5" style={{ background: "none" }}>
                                    <tbody>
                                        <tr className="dlheader">
                                            <td className="dlheader ">{t('description')}</td>

                                            <td className="dlheader">{t('files')}</td>
                                        </tr>
                                        {eightData.map((item, index) => (
                                            <tr className="dlinfo" key={index}>
                                                <td className="dlinfo hover01">{item.title}</td>
                                                <td className="dlinfo hover01">
                                                    <ul className="file-list-inner-td">
                                                        {item.pdf && (
                                                            <li>
                                                                <a href={item.pdf} className="red-link" target="_blank" rel="noopener noreferrer" download>
                                                                    <div className="icon-band">
                                                                        <img src="Images/Icons/pdf-gray.svg" alt={t('pdf')} />
                                                                    </div>{t('pdf')}<img src="Images/Icons/Download.svg" className="download-icon" alt={t('download')} />
                                                                </a>
                                                            </li>
                                                        )}
                                                        {item.dwg && (
                                                            <li>
                                                                <a href={item.dwg} className="blue-link" target="_blank" rel="noopener noreferrer">
                                                                    <div className="icon-band">
                                                                        <img src="Images/Icons/dwg.svg" alt={t('dwg')} />
                                                                    </div>{t('dwg')}<img src="Images/Icons/Download.svg" className="download-icon" alt={t('download')} />
                                                                </a>
                                                            </li>
                                                        )}
                                                    </ul>
                                                </td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>
                            <div className="col-md-12">
                                <div className="title">
                                    <h3 className="text-primary text-center mb-5">{t('305mm_12_concrete_core_forms')}</h3>
                                </div>
                                <table className="dltrc tabel-content-center mb-5" style={{ background: "none" }}>
                                    <tbody>
                                        <tr className="dlheader">
                                            <td className="dlheader ">{t('description')}</td>

                                            <td className="dlheader">{t('files')}</td>
                                        </tr>
                                        {twelveData.map((item, index) => (
                                            <tr className="dlinfo" key={index}>
                                                <td className="dlinfo hover01">{item.title}</td>
                                                <td className="dlinfo hover01">
                                                    <ul className="file-list-inner-td">
                                                        {item.pdf && (
                                                            <li>
                                                                <a href={item.pdf} className="red-link" target="_blank" rel="noopener noreferrer" download>
                                                                    <div className="icon-band">
                                                                        <img src="Images/Icons/pdf-gray.svg" alt={t('pdf')} />
                                                                    </div>{t('pdf')}<img
                                                                        src="Images/Icons/Download.svg"
                                                                        className="download-icon"
                                                                        alt={t('download')}
                                                                    />
                                                                </a>
                                                            </li>
                                                        )}
                                                        {item.dwg && (
                                                            <li>
                                                                <a href={item.dwg} className="blue-link" target="_blank" rel="noopener noreferrer">
                                                                    <div className="icon-band">
                                                                        <img src="Images/Icons/dwg.svg" alt={t('dwg')} />
                                                                    </div>{t('dwg')}<img
                                                                        src="Images/Icons/Download.svg"
                                                                        className="download-icon"
                                                                        alt={t('download')}
                                                                    />
                                                                </a>
                                                            </li>
                                                        )}
                                                    </ul>
                                                </td>
                                            </tr>
                                        ))}


                                    </tbody>
                                </table>
                            </div>


                        </div>
                        <div className="col-md-6">
                            <div className="col-md-12">
                                <div className="title">
                                    <h3 className="text-primary text-center mb-5">{t('152mm_6_concrete_core_forms')}</h3>
                                </div>
                                <table className="dltrc tabel-content-center mb-5" style={{ background: "none" }}>
                                    <tbody>
                                        <tr className="dlheader">
                                            <td className="dlheader ">{t('description')}</td>

                                            <td className="dlheader">{t('files')}</td>
                                        </tr>

                                        {sixData.map((item, index) => (
                                            <tr className="dlinfo" key={index}>
                                                <td className="dlinfo hover01">{item.title}</td>
                                                <td className="dlinfo hover01">
                                                    <ul className="file-list-inner-td">
                                                        {item.pdf && (
                                                            <li>
                                                                <a href={item.pdf} className="red-link" target="_blank" rel="noopener noreferrer" download>
                                                                    <div className="icon-band">
                                                                        <img src="Images/Icons/pdf-gray.svg" alt={t('pdf')} />
                                                                    </div>{t('pdf')}<img
                                                                        src="Images/Icons/Download.svg"
                                                                        className="download-icon"
                                                                        alt={t('download')}
                                                                    />
                                                                </a>
                                                            </li>
                                                        )}
                                                        {item.dwg && (
                                                            <li>
                                                                <a href={item.dwg} className="blue-link" target="_blank" rel="noopener noreferrer">
                                                                    <div className="icon-band">
                                                                        <img src="Images/Icons/dwg.svg" alt={t('dwg')} />
                                                                    </div>{t('dwg')}<img
                                                                        src="Images/Icons/Download.svg"
                                                                        className="download-icon"
                                                                        alt={t('download')}
                                                                    />
                                                                </a>
                                                            </li>
                                                        )}
                                                    </ul>
                                                </td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>


                            <div className="col-md-12">
                                <div className="title">
                                    <h3 className="text-primary text-center mb-5">{t('254mm_10_concrete_core_forms')}</h3>
                                </div>
                                <table className="dltrc tabel-content-center mb-5" style={{ background: "none" }}>
                                    <tbody>
                                        <tr className="dlheader">
                                            <td className="dlheader ">{t('description')}</td>

                                            <td className="dlheader">{t('files')}</td>
                                        </tr>
                                        {tenData.map((item, index) => (
                                            <tr className="dlinfo" key={index}>
                                                <td className="dlinfo hover01">{item.title}</td>
                                                <td className="dlinfo hover01">
                                                    <ul className="file-list-inner-td">
                                                        {item.pdf && (
                                                            <li>
                                                                <a href={item.pdf} className="red-link" target="_blank" rel="noopener noreferrer" download>
                                                                    <div className="icon-band">
                                                                        <img src="Images/Icons/pdf-gray.svg" alt={t('pdf')} />
                                                                    </div>{t('pdf')}<img
                                                                        src="Images/Icons/Download.svg"
                                                                        className="download-icon"
                                                                        alt={t('download')}
                                                                    />
                                                                </a>
                                                            </li>
                                                        )}
                                                        {item.dwg && (
                                                            <li>
                                                                <a href={item.dwg} className="blue-link" target="_blank" rel="noopener noreferrer">
                                                                    <div className="icon-band">
                                                                        <img src="Images/Icons/dwg.svg" alt={t('dwg')} />
                                                                    </div>{t('dwg')}<img
                                                                        src="Images/Icons/Download.svg"
                                                                        className="download-icon"
                                                                        alt={t('download')}
                                                                    />
                                                                </a>
                                                            </li>
                                                        )}
                                                    </ul>
                                                </td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
            <section className="pt-0">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <div className="layer_content p-0">
                                <h3 className="text-primary mb-4">{t('wall_function')}</h3>

                                <p className="dark-font-600 mt-3 mb-2">{t('this_section_presents_data_pertinent_to_the_building_performance_aspects_of_the_nudura_wall_system_it_includes_links_to_details_testing_or_certifications_that_verify_code_compliance_in_the_following_area_of_required_wall_performance')}</p>
                                <ul className="details-list">
                                    <li>{t('fire_resistant_construction')}</li>
                                    <li>{t('walls_requiring_stc_performance')}</li>
                                    <li>{t('vapor_barrier_retarder_performance')}</li>
                                    <li>{t('air_tightness_air_barrier_performance')}</li>
                                    <li>{t('compliances_for_use_on_exterior_walls_of_type_i_iv_construction_usa_and_non_combustible_construction_over_three_stories_in_height_can')}</li>
                                    <li>{t('fire_wall_construction_in_both_combustible_and_non_combustible_construction')}</li>
                                </ul>

                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className="pt-0">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <div className="layer_content p-0">
                                <h3 className="text-primary mb-4">{t('stc_ratings_using_nudura_icf_walls')}</h3>

                                <p className="dark-font-600 mt-3 mb-2">{t('stc_ratings_of_walls_will_vary_exponentially_in_proportion_to_a_wall_s_thickness_codes_in_both_the_usa_and_canada_are_very_specific_about_required_ratings_of_performance_for_sound_attenuation_between_suites_and_along_corridors_in_multi_tenant_residential_and_hotel_or_office_suite_applications_the_accepted_minimum_standard_requirement_is_stc_50_for_between_suites_and_along_corridors_and_stc_55_for_separations_around_garbage_chutes_and_elevator_shafts_of_these_kinds_of_buildings')}</p>
                                <p className="dark-font-600 mt-3 mb-2">{t('when_considering_the_selection_of_forms_for_demising_or_tenant_separation_walls_between_suites_and_along_corridors_the_minimum_concrete_core_thickness_wall_needs_to_be_6_inches_152_mm_take_into_consideration_the_effects_that_less_than_perfect_consolidation_may_contribute_to_the_degradation_of_wall_acoustic_performance_even_cutouts_for_electrical_and_plumbing_may_adversely_affect_this_performance')}</p>
                                <p className="dark-font-600 mt-3 mb-2">{t('according_to_the_portland_cement_association_s_book_entitled_insulating_concrete_forms_for_residential_design_and_construction_typical_icf_walls_with_an_stc_classification_ranging_between_44_to_58_allow_less_than_1_3_of_the_amount_of_sound_through_that_a_typical_frame_constructed_wall_assembly_with_an_stc_rating_of_36_would')}</p>
                                <p className="dark-font-600 mt-3 mb-2">{t('on_this_basis_the_average_individual_might_be_tempted_to_conclude_that_if_an_icf_wall_reduces_sound_to_1_3_the_level_of_that_of_a_frame_wall_up_to_3_times_more_sound_dampening_capability_the_resulting_stc_rating_of_the_icf_should_be_3_times_the_numeric_value_of_the_frame_wall_stc_36_x_3_108')}</p>
                                <p className="dark-font-600 mt-3 mb-2">{t('the_numeric_classification_of_stc_is_based_on_a_logarithmic_scale_which_means_that_sound_dampening_capability_exponentially_increases_as_wall_thickness_and_or_density_increases_this_explains_why_incremental_adjustments_in_mass_and_thickness_to_a_wall_profile_through_the_addition_of_finish_or_mass_in_concrete_can_have_dramatic_effects_on_overall_sound_dampening_capability')}</p>
                                <p className="dark-font-600 mt-3 mb-2">{t('based_on_nudura_stc_testing_the_following_rules_should_be_considered_when_constructing_stc_rated_walls')}</p>
                                <ul className="details-list">
                                    <li>{t('for_walls_requiring_stc_50_classifications_use_minimum_6_inch_152_mm_nudura_forms_filled_with_min_type_s_siliceous_concrete_clad_with_1_2_inch_13_mm_minimum_regular_gypsum_board_applied_both_sides')}</li>
                                    <li>{t('for_walls_requiring_stc_55_classifications_use_minimum_6_inch_152_mm_nudura_forms_filled_with_min_type_s_siliceous_concrete_clad_with_a_minimum_5_8_inch_16_mm_type_x_gypsum_board_applied_both_sides_the_use_of_a_resilient_channel_mounted_at_24_inches_600_mm_o_c_before_mounting_the_gypsum_board_in_these_applications_would_provide_further_assurance_of_exceeding_the_stc_55_rating_requirement')}</li>
                                </ul>
                                <p className="dark-font-600 mt-3 mb-2">{t('for_a_copy_of_nudura_s_stc_documentation_click_on_the_link_below')}</p>

                            </div>
                        </div>
                    </div>
                    <div className="file-attachments-band mb-0 pb-0">
                        <h6 className="mb-3">{t('file_attachments')}</h6>
                        <div className="file-list">
                            <div className="file-card">
                                <a href="EcoBuildPdf/EarlyDesignCriteria/Wall Function/STC Ratings Using Nudura ICF Walls/6-Inch (152 mm) STC 50 Letter.pdf"
                                    target="_blank" download>
                                    <div className="file-icon-band">
                                        <img src="Images/Icons/xls-file.svg" />
                                    </div>
                                    <div className="file-name-band">
                                        <p>{t('6_inch_152_mm_stc_50_letter')}</p>
                                        <span className="small-icon"><img src="Images/Icons/Download.svg" /></span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-0">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <div className="layer_content p-0">
                                <h3 className="text-primary mb-4">{t('fire_resistance_rating_of_nudura_walls')}</h3>

                                <p className="dark-font-600 mt-3 mb-2">{t('wall_function')}</p>

                                <p className="dark-font-600 mt-3 mb-2">{t('the_nudura_icf_wall_system_when_installed_as_per_ul_ulc_listings_has_an_established_fire_resistance_rating_listing_in_canada_and_classification_in_the_usa')}</p>
                                <p className="dark-font-600 mt-3 mb-2">{t('when_specifying_nudura_forms_for_the_construction_of_either_load_bearing_exterior_structural_walls_or_load_bearing_or_non_load_bearing_fire_separation_walls_between_suites_or_along_corridors_the_following_detail_specifications_are_applicable_note_all_walls_must_comply_with_both_concrete_and_steel_specifications_as_outlined_in_each_of_the_ulc_ul_listings_classifications')}</p>
                                <ul className="details-list">
                                    <li>{t('4_inch_102_mm_nudura_form_clad_with_2_hour_rating_min')}</li>
                                    <li>{t('1_2_inch_13_mm_regular_gypsum_board_both_sides_4_hour_rating')}</li>
                                    <li>{t('min_6_inch_152_mm_nudura_form_clad_with')}</li>
                                    <li>{t('1_2_inch_13_mm_regular_gypsum_board_both_sides')}</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                    <div className="file-attachments-band mb-0 pb-0">
                        <h6 className="mb-3">{t('file_attachments')}</h6>
                        <div className="file-list file-flex-wrap">
                            <div className="file-card">
                                <a href="EcoBuildPdf/EarlyDesignCriteria/Wall Function/Fire Resistance Rating of Nudura Walls/CAN Listing WO12.pdf"
                                    target="_blank" download>
                                    <div className="file-icon-band">
                                        <img src="Images/Icons/pdf-fille.svg" />
                                    </div>
                                    <div className="file-name-band">
                                        <p>{t('can_listing_wo12_pdf')}</p>
                                        <span className="small-icon"><img src="Images/Icons/Download.svg" /></span>
                                    </div>
                                </a>

                            </div>
                            <div className="file-card">
                                <a href="EcoBuildPdf/EarlyDesignCriteria/Wall Function/Fire Resistance Rating of Nudura Walls/USA Classification U-930.pdf"
                                    target="_blank" download>
                                    <div className="file-icon-band">
                                        <img src="Images/Icons/pdf-fille.svg" />
                                    </div>
                                    <div className="file-name-band">
                                        <p>{t('usa_classification_u_930_pdf')}</p>
                                        <span className="small-icon"><img src="Images/Icons/Download.svg" /></span>
                                    </div>
                                </a>

                            </div>

                        </div>
                    </div>
                    <p className="dark-font-600 mt-3 mb-2">{t('note_the_gypsum_wallboard_on_the_exterior_face_of_the_exterior_wall_may_be_omitted_provided_the_eps_insulation_is_protected_in_accordance_with_building_code_requirements')}</p>
                    <p className="dark-font-600 mt-3 mb-2">{t('though_not_a_requirement_for_exterior_walls_in_canada_the_architect_or_engineer_should_note_that_if_buildings_are_more_than_18_meters_59_feet_in_height_and_not_sprinklered_per_section_3_1_5_12_4_of_the_code_any_interior_only_walls_in_buildings_as_described_above_containing_foam_plastic_insulation_must_be_protected_with_type_x_gypsum_board_not_less_than_15_9_mm_in_thickness_in_lieu_of_the_1_2_regular_gypsum_board_that_is_prescribed_in_the_above_noted_tests_this_is_a_requirement_for_additional_thermal_barrier_protection_only_not_a_requirement_for_fire_resistance_rating')}</p>
                    <p className="dark-font-600 mt-3 mb-2">{t('additional_questions_with_respect_to_nudura_fire_resistance_testing_can_be_directed_to_nudura_through_the_nudura_distributor_representative_for_your_region')}</p>

                </div>
            </section>
            <section className="pt-0">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <div className="layer_content p-0">
                                <h3 className="text-primary mb-4">{t('vapor_barrier_performance_of_nudura_icf_wall_assemblies')}</h3>

                                <p className="dark-font-600 mt-3 mb-2">{t('a_common_question_asked_by_design_professionals_with_respect_to_icf_construction_is_whether_or_not_an_additional_vapor_barrier_or_vapor_retarder_is_required_to_be_applied_over_the_interior_surface_of_the_nudura_insulated_concrete_form_system')}</p>
                                <p className="dark-font-600 mt-3 mb-2">{t('the_clauses_of_most_american_building_codes_including_the_international_code_family_are_structured_in_such_a_way_that_they_provide_for_the_fact_that_plain_and_reinforced_concrete_or_masonry_walls_constructed_in_accordance_with_the_code_or_constructed_of_materials_that_are_not_susceptible_to_damage_from_moisture_are_not_required_to_have_additional_vapor_retarder_materials_applied_to_them_as_specified_under_sections_1405_3_and_irc_section_601_3_class_i_ii_or_iii_vapor_retarders_are_required_on_the_interior_side_of_frame_walls_only_for_reference_under_these_codes_although_not_required_for_concrete_walls_nudura_eps_foam_qualifies_as_a_class_ii_vapor_retarder_see_additional_information_below_according_to_international_code_definitions_under_both_codes_a_class_ii_vapor_retarder_is_any_material_providing_vapor_permeance_falling_between_0_1_perm_and_1_0_perm')}</p>
                                <p className="dark-font-600 mt-3 mb-2">{t('in_canada_vapor_barrier_requirements_are_specified_under_section_9_25_4_of_the_national_building_code_nbc_and_all_applicable_provincial_building_codes_as_the_risk_of_damage_to_building_structural_elements_resulting_from_condensation_is_much_greater_than_in_the_usa_this_section_requires_that_a_vapor_barrier_be_provided_to_the_interior_surface_of_all_insulated_walls_ceilings_or_floors_regardless_of_whole_wall_material_composition_the_requirements_under_the_2010_national_building_code_have_been_expanded_to_provide_that_the_vapor_barrier_element_can_be_provided_by_a_variety_of_building_material_types_thus_not_restricted_to_simply_film_materials_under_section_9_25_4_a_vapor_barrier_must_limit_vapor_permeance_to_a_maximum_of_60_ng_pa_s_m2_nanograms_per_pascal_second_meter_squared_or_0_780_perm_this_is_consistent_with_the_middle_range_of_performance_of_a_class_ii_vapor_retarder_under_the_american_international_codes')}</p>
                                <p className="dark-font-600 mt-3 mb-2">{t('the_ias_and_scc_accredited_testing_agency_intertek_etl_semko_has_confirmed_that_the_calculated_vapor_permeance_of_2_5_8_inch_67_mm_thickness_of_nudura_foam_on_the_interior_panel_of_the_concrete_wall_assembly_achieves_a_maximum_vapor_permeance_of_36_ng_pa_s_m2_or_0_624_perm_and_therefore_falls_under_the_maximum_allowable_vapor_permeance_set_forth_by_the_canadian_codes_and_even_though_not_necessary_over_concrete_walls_qualifies_the_eps_foam_as_a_class_ii_vapor_retarder_under_american_codes_as_well_remember_that_this_rate_has_been_determined_independently_of_any_resistance_to_vapor_permeance_than_the_monolithic_concrete_wall_itself_provides_within_the_wall_assembly_if_required_more_detailed_information_on_these_compliances_can_be_obtained_at_the_following_links')}</p>

                            </div>
                        </div>
                    </div>
                    <div className="file-attachments-band mb-0 pb-0">
                        <h6 className="mb-3">{t('file_attachments')}</h6>
                        <div className="file-list file-flex-wrap">
                            <div className="file-card">
                                <a href="EcoBuildPdf/EarlyDesignCriteria/Wall Function/Vapor Barrier Performance of Nudura ICF Wall Assemblies/American Vapor Retarders.pdf"
                                    target="_blank" download>
                                    <div className="file-icon-band">
                                        <img src="Images/Icons/pdf-fille.svg" />
                                    </div>
                                    <div className="file-name-band">
                                        <p>{t('american_vapor_retaders_pdf')}</p>
                                        <span className="small-icon"><img src="Images/Icons/Download.svg" /></span>
                                    </div>
                                </a>

                            </div>
                            <div className="file-card">
                                <a href="EcoBuildPdf/EarlyDesignCriteria/Wall Function/Vapor Barrier Performance of Nudura ICF Wall Assemblies/Canadian Vapour Barrier.pdf"
                                    target="_blank" download>
                                    <div className="file-icon-band">
                                        <img src="Images/Icons/pdf-fille.svg" />
                                    </div>
                                    <div className="file-name-band">
                                        <p>{t('canadian_vapour_barrier_pdf')}</p>
                                        <span className="small-icon"><img src="Images/Icons/Download.svg" /></span>
                                    </div>
                                </a>

                            </div>

                        </div>
                    </div>

                </div>
            </section>
            <section className="pt-0">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <div className="layer_content p-0">
                                <h3 className="text-primary mb-4">{t('air_barrier_performance_of_nudura_wall_assemblies')}</h3>

                                <p className="dark-font-600 mt-3 mb-2">{t('within_astm_e1677_95_the_standard_states_that_an_air_retarder_or_barrier_is_a_material_or_system_in_building_construction_that_is_designed_and_installed_to_reduce_air_leakage_either_into_or_through_the_opaque_wall_the_test_standard_goes_on_to_say_that_air_barrier_materials_must_have_air_permeability_not_greater_than_0_06_cfm_ft2_0_3046_liters_second_m2_under_a_pressure_differential_of_0_3_in_7_62_mm_water_air_barrier_products_such_as_wraps_or_self_adhering_membranes_will_generally_have_air_leakage_permeability_ranging_from_0_0022_0_71_cfm_ft2_0_0112_3_607_liters_second_m2_under_the_pressure_differential_of_0_3_in_7_62_mm_monolithic_concrete_has_no_measurable_air_permeability_or_leakage')}</p>
                                <p className="dark-font-600 mt-3 mb-2">{t('since_nudura_integrated_building_technology_is_comprised_of_two_2_5_8_inches_67_mm_thick_67_mm_panels_with_a_minimum_of_4_102_mm_of_monolithic_concrete_in_the_center_the_complete_wall_assembly_acts_as_an_air_barrier_with_low_air_permeability_and_leakage_it_falls_below_the_standard_requirements_as_outlined_in_the_astm_test_standards_this_does_not_differ_due_to_climatic_zones_throughout_the_various_regions_nudura_integrated_building_technology_is_used')}</p>
                                <p className="dark-font-600 mt-3 mb-2">{t('nudura_has_been_qualified_as_an_air_barrier_through_construction_technology_laboratories_ctl_engineering_in_skokie_illinois_copy_of_this_documentation_can_be_download_below')}</p>

                            </div>
                        </div>
                    </div>
                    <div className="file-attachments-band mb-0 pb-0">
                        <h6 className="mb-3">{t('file_attachments')}</h6>
                        <div className="file-list">
                            <div className="file-card">
                                <a href="EcoBuildPdf/EarlyDesignCriteria/Wall Function/Air Barrier Performance of Nudura Wall Assemblies/Nudura Air Barrier Documentation.pdf"
                                    target="_blank" download>
                                    <div className="file-icon-band">
                                        <img src="Images/Icons/xls-file.svg" />
                                    </div>
                                    <div className="file-name-band">
                                        <p>{t('nudura_air_barrier_documentation_pdf')}</p>
                                        <span className="small-icon"><img src="Images/Icons/Download.svg" /></span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className="pt-0">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <div className="layer_content p-0">
                                <h3 className="text-primary mb-4">{t('exterior_finish_used_in_non_combustible_construction')}</h3>

                                <p className="dark-font-600 mt-3 mb-2">{t('the_use_of_insulated_concrete_form_systems_in_buildings_of_non_combustible_construction_impose_specific_code_compliance_requirements_for_the_protection_of_foam_plastic_when_installing_on_the_exterior_of_the_building')}</p>
                                <p className="dark-font-600 mt-3 mb-2">{t('in_the_usa_the_icc_lists_the_approved_materials_in_nudura_s_evaluation_report_esr_2092_and_confirms_that_the_following_exterior_finishes_are_approved_for_application_to_nudura_integrated_building_technology_in_non_combustible_construction')}</p>
                                <ul className="details-list">
                                    <li>{t('brick_veneer')}</li>
                                    <li>{t('7_8_inch_22_mm_hard_coat_stucco')}</li>
                                    <li>{t('cement_board_siding')}</li>
                                    <li>{t('dryvit_systems_inc_dryvit_outsulation_exterior_insulation_and_finish_system_as_described_in_esr_1232')}</li>
                                    <li>{t('finestone_finestone_pebbletex_pebbletex_d_quik_clad_d_and_impact_r_wall_systems_as_described_in_er_4455')}</li>
                                    <li>{t('omega_products_international_inc_omega_diamond_wall_and_diamond_wall_pm_insulating_exterior_stucco_systems_as_described_in_esr_1194')}</li>
                                    <li>{t('senergy_llc_senerflex_and_senerthik_exterior_insulation_and_finish_systems_eifs_as_described_in_er_3850')}</li>
                                    <li>{t('sonowall_stucco_systems_sonowall_exterior_insulation_and_finish_systems_as_described_in_er_5678')}</li>
                                    <li>{t('sto_corporation_sto_classic_exterior_insulation_and_finish_system_eifs_and_sto_classic_eifs_with_gold_guard_as_described_in_er_3906')}</li>
                                    <li>{t('sto_corporation_sto_essence_exterior_insulation_and_finish_systems_eifs_as_described_in_9642b')}</li>
                                    <li>{t('sto_corporation_sto_essence_exterior_insulation_and_finish_system_eifs_and_sto_eifs_with_gold_guard_as_described_in_er_3617')}</li>

                                </ul>

                                <p className="dark-font-600 mt-3 mb-2">{t('in_addition_to_the_above_noted_options_for_finishing_exterior_surfaces_of_buildings_designated_for_non_combustible_construction_there_are_limited_single_story_occupancies_of_types_i_through_iv_construction_within_the_usa_where_a_design_professional_is_asked_to_consider_use_of_nudura_and_the_client_may_not_wish_to_employ_brick_hard_coat_stucco_or_non_combustible_eifs_as_the_designated_finish_even_though_the_occupancy_type_and_building_size_does_not_require_the_provision_of_an_automatic_sprinkler_system_nudura_s_evaluation_report_no_esr_2092_makes_specific_provisions_for_the_enabling_of_use_of_either_aluminum_or_steel_siding_finish_without_the_need_of_an_engineer_designed_cladding_system_or_additional_requirement_of_automatic_sprinklers_so_long_as_it_is_installed_as_per_the_limitations_stated_within_the_report')}</p>
                                <p className="dark-font-600 mt-3 mb-2">{t('in_canada_for_non_combustible_construction_with_exterior_finishes_materials_must_conform_to_can_ulc_s_101_fire_endurance_tests_of_building_construction_and_materials_and_can4_s114_m_test_for_determination_of_non_combustibility_in_building_materials')}</p>
                                <p className="dark-font-600 mt-3 mb-2">{t('the_list_below_shows_exterior_finishes_that_either_comply_or_have_been_tested_to_the_standard_above')}</p>
                                <ul className="details-list">
                                    <li>{t('brick_veneer')}</li>
                                    <li>{t('7_8_inch_22_mm_hard_coat_stucco')}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="file-attachments-band mb-0 pb-0">
                        <h6 className="mb-3">{t('file_attachments')}</h6>
                        <div className="file-list file-flex-wrap">
                            <div className="file-card">
                                <a href="EcoBuildPdf/EarlyDesignCriteria/Wall Function/Exterior Finish Used in Non-Combustible Construction/STO Corporation.pdf"
                                    target="_blank" download>
                                    <div className="file-icon-band">
                                        <img src="Images/Icons/pdf-fille.svg" />
                                    </div>
                                    <div className="file-name-band">
                                        <p>{t('sto_corporation_pdf')}</p>
                                        <span className="small-icon"><img src="Images/Icons/Download.svg" /></span>
                                    </div>
                                </a>

                            </div>
                            <div className="file-card">
                                <a href="EcoBuildPdf/EarlyDesignCriteria/Wall Function/Exterior Finish Used in Non-Combustible Construction/Dryvit Systems Ltd.pdf"
                                    target="_blank" download>
                                    <div className="file-icon-band">
                                        <img src="Images/Icons/pdf-fille.svg" />
                                    </div>
                                    <div className="file-name-band">
                                        <p>{t('dryvit_systems_ltd_pdf')}</p>
                                        <span className="small-icon"><img src="Images/Icons/Download.svg" /></span>
                                    </div>
                                </a>

                            </div>
                            <div className="file-card">
                                <a href="EcoBuildPdf/EarlyDesignCriteria/Wall Function/Exterior Finish Used in Non-Combustible Construction/Durabond Products Ltd..pdf"
                                    target="_blank" download>
                                    <div className="file-icon-band">
                                        <img src="Images/Icons/pdf-fille.svg" />
                                    </div>
                                    <div className="file-name-band">
                                        <p>{t('durabond_products_ltd_pdf')}</p>
                                        <span className="small-icon"><img src="Images/Icons/Download.svg" /></span>
                                    </div>
                                </a>

                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className="pt-0">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <div className="layer_content p-0">
                                <h3 className="text-primary mb-4">{t('constructing_fire_walls_using_nudura_forms')}</h3>

                                <p className="dark-font-600 mt-3 mb-2">{t('this_section_has_been_designed_to_provide_the_required_data_to_enable_design_professionals_to_detail_firewall_connections_with_nudura_forms_that_are_fully_compliant_with_north_american_codes_as_outlined_below')}</p>
                                <p className="dark-font-600 mt-3 mb-2">{t('fire_walls_are_detailed_under_the_following_sections_of_existing_north_american_codes_usa_international_building_code_2009_section_706_can_national_building_code_of_canada_2005_section_3_1_10')}<p className="dark-font-600 mt-3 mb-2"></p>{t('the_performance_requirements_for_firewalls_can_be_summarized_under_the_following_main_criteria_regardless_of_the_following_summary_the_design_professional_must_always_refer_to_the_above_sections_for_exact_compliance_to_the_code_requirements_for_his_her_region')}<ul className="details-list">
                                        <li>{t('fire_walls_must_be_constructed_to_ensure_that_the_structure_is_split_into_separate_compartments')}</li>
                                        <li>{t('fire_walls_must_be_structurally_stable_sufficient_to_the_point_that_they_will_enable_collapse_of_structure_on_one_side_of_the_firewall_under_full_fire_attack_without_causing_the_collapse_of_the_wall_itself_and_maintaining_the_required_fire_resistance_rating_for_the_wall_for_the_full_duration_of_rating_that_it_is_required_to_maintain')}</li>
                                        <li>{t('for_the_most_part_subject_to_specific_exceptions_firewalls_must_extend')}</li>
                                        <li>{t('through_the_building_vertically_from_the_footing_and_extend_through_to_and_project_upward_through_the_roofline_as_a_parapet_wall_height_projection_will_vary_depending_on_country_and_fire_resistance_rating_required')}</li>
                                        <li>{t('extend_horizontally_through_the_complete_depth_dimension_of_the_building_from_exterior_wall_to_exterior_wall')}</li>
                                        <li>{t('extend_horizontally_beyond_the_exterior_walls_by_a_specified_minimum_distance')}</li>
                                        <li>{t('extend_to_the_outer_edge_of_any_projecting_elements_such_as_balconies_or_overhangs')}</li>
                                        <li>{t('fire_walls_must_be_constructed_so_as_not_to_cause_any_breach_of_any_fire_separation_at_floors_or_interconnecting_walls_that_provide_fire_separation_between_suites_or_corridors_the_details_of_construction_must_ensure_that_whatever_fire_resistance_rating_is_assigned_to_the_floor_or_interfacing_wall_separation_the_rating_is_maintained_across_this_intersection_of_elements_that_occur_at_the_firewall')}</li>
                                        <li>{t('in_canada_the_firewall_must_be_capable_of_sustaining_a_lateral_load_of_10_44_psf_0_5_kpa_being_exerted_against_it_from_either_direction_for_the_duration_of_time_that_the_wall_is_rated_for_in_the_event_that_structure_is_under_fire_attack_on_either_side_of_the_wall')}</li>
                                    </ul>
                                    <p className="dark-font-600 mt-3 mb-2"></p>{t('the_details_located_in_the_above_grade_combustible_construction_section_are_designed_to_achieve_the_above_noted_objectives_this_specific_detailing_ensures_that_the_eps_foam_does_not_breach_the_continuity_of_the_fire_separations_the_interconnecting_floor_and_roof_structures_are_also_designed_to_collapse_safely_away_from_the_firewall_such_that_they_will_not_contribute_to_the_wall_s_collapse')}<p className="dark-font-600 mt-3 mb-2"></p>{t('for_additional_documentation_or_information_with_respect_to_the_application_of_nudura_for_firewall_applications_please_contact_nudura_corporation_through_your_distributor_representative')}</p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default EarlyDesignCriteria;