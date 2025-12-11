import img from '../images/gallery/gallery-img-all-01.jpg';
import img1 from '../images/gallery/gallery-img-all-02.jpg';
import img2 from '../images/gallery/gallery-img-all-03.jpg';
import img3 from '../images/gallery/gallery-img-all-04.jpg';
import img4 from '../images/gallery/gallery-img-all-05.jpg';
import img5 from '../images/gallery/gallery-img-all-06.jpg';
import img6 from '../images/gallery/gallery-img-all-07.jpg';
import img7 from '../images/gallery/gallery-img-all-08.jpg';
import { useTranslation } from "react-i18next";
import Breadcrumb from '../common-component/Breadcrumb';
import './proper-spacing.css';


const SustanableConstruction = () => {
    const { t } = useTranslation();
    return (
        <div>
            <Breadcrumb
                header={t('sustainable_construction')}
                subHeader={t('building_homes_also_for_the_generations_to_come')}
            />
            <section>
                <div className="container">
                    <div className="card gredient-card bg-primary-gradient">
                        <div className="text-band text-left">
                            <h5>{t('nudura_promoting_green_and_environmentally_friendly_construction')}</h5>
                            <h6 className="text-white">{t('increasing_energy_demands_and_rising_fuel_prices_require_us_to_make_the_most_of_green_building_technologies_to_heat_and_cool_buildings_building_green_buildings_requires_a_holistic_approach_to_design_but_it_doesn_t_have_to_be_complicated_nudura_precast_concrete_forms_are_energy_efficient_building_materials_that_provide_maximum_comfort_and_energy_solutions_for_environmentally_friendly_homes_nudura_materials_save_over_70_in_building_energy_consumption_compared_to_traditional_construction_methods')}</h6>

                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-0">
                <div className="container">
                    <div className="row g-4 align-items-center justify-content-center">
                        <div className="col-sm-12 col-md-6 col-lg-5 col-xl-4">
                            <div className="single-text-content-card xy-radius h-100 d-flex align-items-center justify-content-center">
                                <div className="text-band text-center" style={{ margin: 0 }}>
                                    <h4 className="mb-0">{t('training')}</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-5 col-xl-4">
                            <div className="single-text-content-card xy-radius h-100 d-flex align-items-center justify-content-center">
                                <div className="text-band text-center" style={{ margin: 0 }}>
                                    <h4 className="mb-0">{t('nudura_walls_bullet_resistance')}</h4>
                                </div>
                            </div>
                        </div>
                    </div>

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
                        <h3 className="text-primary mb-4">{t('nudura_insulation_system_key_points')}</h3>
                        <ul className="details-list mt-4 g-3 w-fill">
                            <li>{t('recycled_materials_nodora_molds_are_made_from_eps_the_unique_folding_mesh_design_is_made_from_100_recycled_polypropylene_and_steel')}</li>
                            <li>{t('building_durability_nudura_forms_offer_a_structure_built_from_concrete_one_of_the_most_durable_building_materials_so_buildings_built_with_nudura_can_stand_the_test_of_time_ecological_construction_with_nudura_ensures_maximum_safety_in_areas_with_strong_winds_thanks_to_the_buildings_high_resistance_to_wind_and_water_damage')}</li>
                            <li>{t('waste_reduction_insulated_concrete_formwork_technology_creates_less_waste_during_green_construction_and_therefore_less_waste_to_be_sent_to_landfills_all_waste_is_100_recyclable')}</li>
                            <li>{t('mold_resistance_the_molds_have_undergone_laboratory_testing_to_ensure_they_will_not_support_mold_growth')}</li>
                            <li>{t('energy_performance_the_forms_combined_with_other_cost_effective_construction_methods_significantly_reduce_the_carbon_footprint_of_the_building_thanks_to_the_high_levels_of_energy_savings_this_reduces_the_amount_of_fossil_fuels_required_for_heating_and_cooling_therefore_also_reducing_the_carbon_footprint_of_the_building')}</li>
                            <li>{t('improved_indoor_air_quality_nudura_concrete_forms_are_completely_air_tight_reducing_mold_and_air_pockets_the_end_result_is_an_airtight_structure_that_allows_its_mechanical_systems_to_cool_heat_and_ventilate_more_efficiently_creating_a_healthier_living_or_working_environment_for_building_occupants')}</li>
                        </ul>
                        <div className="text-band flex-text-band proper-spacing">
                            <p>{t('when_using_a_150mm_insulation_insert_in_combination_with_a_305mm_wide_nudura_core_formwork_u_values_as_low_as_0_11_can_be_achieved_for_the_entire_wall_assembly_based_on_studies_of_energy_consumption_in_residential_homes_built_using_the_nudura_method_compared_to_energy_consumption_values_listed_in_the_official_publication_ecg019_energy_consumption_guide_19_the_energy_consumption_guide_by_action_energy')}</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-0">
                <div className="container">

                    <div className="layer_content p-0">
                        <h3 className="text-primary">{t('sustainable_design')}</h3>
                        <h6 className="mb-0 mt-3 mb-4">{t('sustainability_is_the_fruit_of_innovation')}</h6>
                        <div className="text-band flex-text-band proper-spacing">
                            <p className="bold-bg">{t('today_s_buildings_require_reliable_insulation_with_building_envelopes_that_provide_a_high_level_of_thermal_performance_reduce_heat_loss_and_prevent_thermal_conductivity_nudura_insulation_offers_all_of_these_the_above_criteria_are_key_factors_in_reducing_energy_operating_costs_and_maximizing_the_value_of_the_property_for_its_owner')}</p>
                            <p className="bold-bg">{t('therefore_it_is_essential_to_determine_the_right_insulation_system_and_materials_at_the_design_stage_to_ensure_thermal_performance_is_maintained_throughout_the_life_of_the_green_building_high_performance_building_envelopes_can_also_reduce_operating_costs_by_up_to_70_when_combined_with_nudura_s_superior_insulation_products_from_the_integrated_series_as_well_as_other_nudura_products_throughout_the_building_program')}</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-0">
                <div className="container">

                    <div className="layer_content p-0">
                        <h3 className="text-primary">{t('support_and_distribution_system')}</h3>
                        <div className="text-band flex-text-band proper-spacing">
                            <p className="bold-bg">{t('service_and_technical_support_for_our_icf_wall_system_is_the_key_to_building_greener_and_better_nudura_offers_available_and_reliable_support_through_our_network_of_authorized_distributors_our_goal_is_to_enable_contractors_and_end_users_to_transition_from_traditional_less_efficient_materials_to_innovative_nudura_solutions_the_latest_in_green_building_technology')}</p>
                            <p className="bold-bg">{t('nudura_s_strategy_is_to_expand_the_geographic_reach_of_natural_and_green_building_solutions_and_take_a_leading_position_in_the_industry_where_energy_efficiency_and_environmentally_friendly_construction_are_important_goals_to_do_this_nudura_invests_significant_resources_in_continuous_product_development_and_new_solutions_nudura_wall_systems_are_manufactured_using_the_most_advanced_methods_authorized_nudura_distributors_are_committed_to_maintaining_a_leading_position_in_the_icf_wall_market_while_cultivating_a_reputation_for_outstanding_technical_expertise_authorized_distributors_will_provide_extensive_support_from_the_design_and_planning_stage_to_the_installation_of_the_icf_wall_system')}</p>
                        </div>
                        <h6 className="mb-0 mt-4 mb-4">{t('they_will_be_happy_to_provide_advice_and_service_including_on_the_following_topics')}</h6>
                        <ul className="details-list mt-4 g-3 w-fill">
                            <li>{t('recommendations_for_proven_installation_methods_to_maximize_efficiency_and_savings_during_icf_wall_installation')}</li>
                            <li>{t('compliance_with_local_regional_and_national_building_codes')}</li>
                            <li>{t('every_authorized_nudura_distributor_has_access_to_our_technical_support_team_who_can_provide_additional_information_and_guidance_on_special_installations_and_building_code_issues_for_the_nudura_wall_system')}</li>
                        </ul>
                        <h6 className="mt-4"><a className="priamry-link">{t('contact_an_authorized_distributor')}</a></h6>
                    </div>
                </div>
            </section>
            <section className="pt-0">
                <div className="container">

                    <div className="layer_content p-0">
                        <h3 className="text-primary">{t('wall_finishes')}</h3>
                        <div className="text-band flex-text-band proper-spacing">
                            <p className="bold-bg">{t('lorem_ipsum_dolor_sit_emmet_consectetur_adipiscing_elit_promi_bluff_kintz_tithih_larah_let_tsashhami_tsash_blia_mansuto_tsamlah_laviko_nenbi_tsamuko_balukria')}</p>

                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-0">
                <div className="container">

                    <div className="layer_content p-0">
                        <h3 className="text-primary">{t('exterior_finishes')}</h3>
                        <div className="text-band flex-text-band proper-spacing">
                            <p className="bold-bg">{t('when_building_with_nudura_insulated_concrete_forms_many_questions_arise_about_the_type_of_building_designs_that_can_be_implemented_as_well_as_the_variety_of_finishes_that_can_be_applied_to_nudura_concrete_slabs_compared_to_traditional_construction_methods')}</p>
                            <p className="bold-bg text-black">{t('the_exterior_finishing_options_with_nudura_are_virtually_limitless_a_variety_of_wall_finishes_can_be_added_to_the_molds_to_match_the_desired_look_and_style')}</p>
                        </div>
                        <h6 className="mb-0 mt-4 mb-4">{t('here_are_a_few_examples')}</h6>
                        <ul className="details-list mt-4 g-3 w-fill">
                            <li>{t('whites')}</li>
                            <li>{t('gluing_boards')}</li>
                            <li>{t('concrete_coating')}</li>
                            <li>{t('stone')}</li>
                            <li>{t('tree')}</li>
                            <li>{t('combined_finishes')}</li>

                        </ul>
                    </div>
                </div>
            </section>
            <section className="pt-0">
                <div className="container">

                    <div className="layer_content p-0">
                        <h3 className="text-primary">{t('interior_finishes')}</h3>
                        <div className="text-band flex-text-band proper-spacing">
                            <p className="bold-bg">{t('when_deciding_on_an_interior_finish_comfort_and_style_are_top_priorities_the_way_nudura_interior_finishes_are_done_is_no_different_than_traditional_methods_interior_finishes_can_be_applied_or_glued_directly_to_nudura_using_special_anchor_points_located_every_200mm')}</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-0">
                <div className="container">

                    <div className="layer_content p-0">
                        <h3 className="text-primary">{t('building_design')}</h3>
                        <div className="text-band flex-text-band proper-spacing">
                            <p className="bold-bg">{t('nudura_offers_virtually_unlimited_variety_in_designing_your_next_home_or_building_innovative_architectural_forms_can_be_achieved_with_a_wide_selection_of_shapes_to_suit_all_building_requirements_and_plans_are_available_from_nudura_custom_factory_cut_radius_shapes_as_well_as_450_and_900_angle_shapes_allow_you_to_build_the_structure_according_to_your_vision')}</p>

                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-0">
                <div className="container">

                    <div className="layer_content p-0">
                        <h3 className="text-primary">{t('window_and_door_openings')}</h3>
                        <div className="text-band flex-text-band proper-spacing">
                            <p className="bold-bg">{t('any_design_can_be_incorporated_into_a_nodora_structure_whether_it_is_arches_bay_windows_or_doors_in_special_styles_when_building_with_this_method_there_is_no_need_for_special_products_so_the_architect_does_not_have_to_specify_these_products_in_the_specification_the_same_windows_and_doors_can_be_designed_and_used_as_in_traditional_construction_to_ensure_cost_control_during_green_construction')}</p>

                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-0">
                <div className="container">

                    <div className="layer_content p-0">
                        <h3 className="text-primary">{t('concrete_specifications')}</h3>
                        <div className="text-band flex-text-band proper-spacing">
                            <p className="bold-bg">{t('check_with_your_local_concrete_supplier_for_this_specification_most_concrete_companies_today_offer_medium_level_water_reducing_admixtures_specifically_designed_for_use_with_insulated_concrete_forms_these_admixtures_improve_the_flow_properties_of_the_concrete_by_reducing_the_water_content_improving_the_adhesion_of_the_concrete_and_preventing_segregation_of_the_aggregate_components_during_placement')}</p>
                        </div>
                        <h6 className="mb-0 mt-4 mb-4">{t('nudura_forms_are_made_from_eps_expanded_polystyrene_and_increase_the_hardening_of_concrete_in_the_following_ways')}</h6>
                        <ul className="details-list mt-4 g-3 w-fill">
                            <li>{t('maintaining_a_permanent_curing_environment_for_the_concrete')}</li>
                            <li>{t('excellent_thermal_protection_both_in_cold_weather_and_high_heat_conditions')}</li>
                            <li>{t('reducing_the_reduction_in_wall_surface_area_that_causes_cracks_in_concrete_walls')}</li>
                            <li>{t('preventing_moisture_loss_within_the_concrete_during_hardening_which_causes_cracks')}</li>
                            <li>{t('preventing_moisture_loss_due_to_exposure_to_air_and_wind')}</li>
                        </ul>
                        <h6 className="mb-0 mt-4 mb-4">{t('nudura_forms_are_made_from_eps_expanded_polystyrene_and_increase_the_hardening_of_concrete_in_the_following_ways')}</h6>
                        <ul className="details-list mt-4 g-3 count-list w-fill">
                            <li>{t('after_three_days_the_concrete_reaches_40_of_its_strength')}</li>
                            <li>{t('after_three_days_the_concrete_reaches_40_of_its_strength')}</li>
                            <li>{t('after_28_days_the_concrete_reaches_its_full_strength')}</li>
                        </ul>
                        <div className="text-band flex-text-band proper-spacing">
                            <p className="bold-bg">{t('different_casting_methods_can_be_used_depending_on_site_accessibility_and_project_characteristics_other_variables_may_influence_the_contractor_when_deciding_on_the_casting_method_including_the_dimensions_of_the_heat_the_concrete_mix_and_the_wall_reinforcement_pattern')}</p>
                        </div>

                        <h6 className="mb-0 mt-4 mb-4">{t('the_concrete_can_be_poured_using_the_following_methods')}</h6>
                        <ul className="details-list mt-4 g-3 count-list w-fill">
                            <li>{t('concrete_pump_on_a_crane')}</li>
                            <li>{t('concrete_pump')}</li>
                            <li>{t('crane_with_clamshell_bucket')}</li>
                            <li>{t('moving_film_on_or_off_the_truck')}</li>
                            <li>{t('directly_from_the_truck_via_a_trough')}</li>
                        </ul>
                        <div className="text-band flex-text-band proper-spacing">
                            <p className="bold-bg">{t('for_full_details_on_pouring_concrete_see_chapter_6_of_the_installation_guide_in_our_resource_center')}</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-0">
                <div className="container">

                    <div className="layer_content p-0">
                        <h3 className="text-primary">{t('green_building_design_tools')}</h3>
                        <div className="text-band flex-text-band proper-spacing">
                            <p className="bold-bg">{t('the_design_process_with_nudura_is_easy_and_efficient_the_bim_library_and_design_specifications_offer_architects_engineers_and_planners_a_solid_foundation_when_it_comes_to_designing_and_building_green_building_specifications_with_nudura_these_libraries_are_now_fully_online_and_accessible_so_you_have_all_the_information_you_need_at_your_fingertips')}</p>

                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-0">
                <div className="container">

                    <div className="layer_content p-0">
                        <h3 className="text-primary mb-4">{t('the_nudura_bim_revit_library_allows')}</h3>

                        <ul className="details-list mt-4 g-3 w-fill">
                            <li>{t('building_3d_models_of_buildings_and_their_components_to_enable_visual_description_and_adaptation_of_the_desired_final_product_to_the_nudura_system')}</li>
                            <li>{t('wall_type_definition_each_of_the_five_nudura_icf_forms_based_on_concrete_core_thickness_is_categorized_as_either_unfinished_or_pre_attached_finished_walls')}</li>
                            <li>{t('complete_parameters_for_the_various_nudura_wall_types_with_specific_information_about_each_type_including_web_links_to_all_nudura_brochures_certificates_test_reports_and_more')}</li>
                            <li>{t('duplication_of_nodora_modules_web_based_web_for_creating_building_plans_from_a_variety_of_5_different_thicknesses_of_the_casting_molds')}</li>
                            <li>{t('full_bim_object_models_for_each_icf_template_for_visual_spatial_review_allows_real_time_calculation_of_template_size_and_wall_area')}</li>
                            <li>{t('option_to_set_metric_or_imperial_inches_measurement_units_for_importing_projects_or_creating_new_projects_from_a_template')}</li>

                        </ul>
                    </div>
                </div>
            </section>
            <section className="pt-0">
                <div className="container">

                    <div className="layer_content p-0">
                        <h3 className="text-primary mb-4">{t('nudura_online_design_guide')}</h3>

                        <ul className="details-list mt-4 g-3 w-fill">
                            <li>{t('allows_you_to_quickly_and_optimally_adapt_your_building_plan_to_the_icf_system_the_guide_also_describes_how_working_with_nodora_contributes_to_the_leed_rating_green_building_rating_system')}</li>
                            <li>{t('offers_details_for_over_400_systems')}</li>
                            <li>{t('provides_access_to_industry_leading_technical_support_from_nudura_and_its_authorized_distributors')}</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="pt-0">
                <div className="container">

                    <div className="layer_content p-0">
                        <h3 className="text-primary">{t('flood_resistance')}</h3>
                        <div className="text-band flex-text-band proper-spacing">
                            <p className="bold-bg">{t('nudura_buildings_have_many_advantages_over_those_built_with_traditional_building_materials_these_buildings_are_impervious_to_water_ingress_because_the_insulated_concrete_forms_are_made_of_expanded_polystyrene_eps_which_does_not_absorb_water_combined_with_the_eps_the_solid_monolithic_concrete_core_provides_the_highest_level_of_safety_and_stability')}</p>
                            <p className="bold-bg text-black">{t('nudura_icf_systems_are_highly_impact_resistant_and_can_withstand_winds_of_250_mph_ensuring_the_safety_of_homeowners_in_almost_any_situation_the_strength_of_a_concrete_wall_comes_from_the_steel_reinforced_concrete_core_nudura_offers_insulated_concrete_forms_in_sizes_ranging_from_4_inches_to_12_inches_of_concrete_thickness_and_beyond_nudura_walls_provide_safety_and_strength_that_far_surpass_those_offered_by_block_or_wood_walls')}</p>
                            <p className="bold-bg text-black">{t('insulated_concrete_wall_systems_like_nudura_are_now_used_in_buildings_in_areas_of_the_us_and_england_that_experience_high_winds_and_have_already_saved_many_building_owners_from_having_to_rebuild_their_homes_or_businesses')}</p>
                        </div>

                    </div>
                </div>
            </section>
            <section className="pt-0">
                <div className="container">
                    <div className="title">
                        <h3 className="text-primary text-center mb-5">{t('ecobuild_s_green_construction_projects')}</h3>
                    </div>
                    <div className="row g-4">
                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                            <div className="gallery-img-card">
                                <img alt="" src={img} />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                            <div className="gallery-img-card">
                                <img alt="" src={img1} />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                            <div className="gallery-img-card">
                                <img alt="" src={img2} />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                            <div className="gallery-img-card">
                                <img alt="" src={img3} />
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                            <div className="gallery-img-card">
                                <img alt="" src={img4} />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                            <div className="gallery-img-card">
                                <img alt="" src={img5} />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                            <div className="gallery-img-card">
                                <img alt="" src={img6} />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                            <div className="gallery-img-card">
                                <img alt="" src={img7} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SustanableConstruction;