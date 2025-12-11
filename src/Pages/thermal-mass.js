import img from '../images/Nudura-ICF-graph.png';
import img1 from '../images/Icons/pdf-fille.svg';
import img2 from '../images/Icons/Download.svg';
import { useTranslation } from "react-i18next";
import Breadcrumb from '../common-component/Breadcrumb';

const ThermalMass = () => {
    const { t } = useTranslation();
    return (
        <div>
            <Breadcrumb 
                header={t('thermal_mass')}
                subHeader={t('building_homes_also_for_the_generations_to_come')}
            />
            <section>
                <div className="container">
                    <div className="card gredient-card bg-primary-gradient">
                        <div className="text-band text-left">
                            <h5>{t('what_is_thermal_mass_how_does_an_icf_wall_make_a_difference')}</h5>
                            <h6 className="text-white">{t('nudura_solid_wall_mass_has_several_unique_features_the_concrete_block_is_cast_between_two_layers_of_67_mm_thick_continuous_polystyrene_foam_which_insulates_the_concrete_and_significantly_reduces_heat_transfer_through_the_wall')}</h6>
                            <h6 className="text-white">{t('nudura_walls_have_a_high_heat_storage_capacity_with_low_thermal_conductivity_which_creates_a_highly_useful_level_of_thermal_mass_this_helps_to_stabilize_the_internal_temperature_in_light_of_temperature_changes_between_day_and_night_thereby_creating_a_self_regulating_environment_the_result_is_reduced_energy_consumption_less_need_for_mechanical_heating_and_cooling_and_cost_savings_throughout_the_year')}</h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-0">
                <div className="container">
                    <div className="card gredient-card bg-primary-gradient">
                        <div className="text-band text-left">
                            <h5>{t('advantages_of_nudura_concrete_walls')}</h5>
                            <ul className="details-list border-none">
                                <li>
                                    <h6 className="text-white">{t('less_heating_and_cooling_buildings_with_exterior_walls_made_of_nudura_concrete_formwork_use_less_energy_to_heat_and_cool_than_similarly_insulated_buildings_with_walls_made_of_brick_wood_or_steel')}</h6>
                                </li>
                                <li>
                                    <h6 className="text-white">{t('nudura_icf_concrete_walls_have_high_thermal_storage_capacity_with_low_thermal_conductivity_they_provide_the_most_useful_level_of_thermal_mass_this_helps_stabilize_interior_temperatures_from_day_to_night_fluctuations')}</h6>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-0">
                <div className="container">
                    <div className="row align-items-center g-4">
                        <div className="col-md-12">
                            <div className="layer_content p-0">
                                <h3 className="text-primary">{t('what_is_thermal_mass_how_does_the_icf_wall_make_a_difference')}</h3>
                                <div className="text-band flex-text-band">
                                    <p className="bold-bg">{t('the_solid_mass_of_the_nudura_wall_has_some_very_unique_qualities_the_monolithic_concrete_is_layered_between_two_continuous_panels_of_2_5_8_67_mm_eps_foam_which_isolates_the_concrete_and_significantly_reduces_the_flow_of_heat_through_the_wall')}</p>
                                    <p className="bold-bg">{t('since_nudura_walls_have_a_high_storage_capacity_with_low_thermal_conductivity_it_provides_the_most_useful_level_of_thermal_mass_this_helps_to_stabilize_the_internal_temperature_from_day_to_night_temperature_fluctuations_and_provides_a_largely_self_regulating_environment_reducing_the_amount_of_mechanical_equipment_needed_for_heating_and_cooling_means_less_energy_consumption_resulting_in_greater_cost_savings_throughout_the_year')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className="pt-0">
                <div className="container">
                    <div className="row align-items-center g-4">
                        <div className="col-md-12">
                            <div className="layer_content p-0">
                                <h3 className="text-primary">{t('advantages_of_nudura_icf_concrete_walls')}</h3>
                                <div className="text-band flex-text-band">
                                    <p className="bold-bg">{t('less_to_cool_and_heat_buildings_with_exterior_nudura_icf_concrete_walls_also_utilize_less_energy_to_heat_and_cool_than_similarly_insulated_buildings_with_wood_or_steel_frame_walls')}</p>
                                    <p className="bold-bg">{t('nudura_icf_concrete_walls_have_a_high_storage_capacity_with_low_thermal_conductivity_it_provides_the_most_useful_level_of_thermal_mass_this_helps_to_stabilize_the_internal_temperature_from_day_to_night_temperature_fluctuations')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-7">
                            <div className="layer_image small-round-layer border border-blue h-auto priamry-bg p-3 mt-5">
                                <img alt=""src={img} />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className="pt-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <div className="layer_content p-0">
                                <h3 className="text-primary mb-5">{t('r_value_calculations_of_nudura')}</h3>
                                <div className="text-band flex-text-band">
                                    <p className="bold-bg">{t('nudura_insulated_concrete_forms_have_a_tested_r_value_of_23_59')}</p>
                                    <p className="bold-bg">{t('for_more_information_on_thermal_resistance_calculations')}</p>
                                </div>
                            </div>
                            <h6 className="mb-3 mt-5 ">{t('file_attachments')}</h6>
                            <div className="file-list">
                                <div className="file-card">
                                    <a href="EcoBuildPdf/Product/ICF/Thermal Mass/R-VALUE CALCULATIONS OF Nudura/nudura_whole_wall_thermal_resistance.pdf"
                                        target="_blank" download>
                                        <div className="file-icon-band">
                                            <img alt=""src={img1} />
                                        </div>
                                        <div className="file-name-band">
                                            <p>{t('nudura_10_06_m0083_b_report_pdf')}</p>
                                            <span className="small-icon"><img alt=""src={img2} /></span>
                                        </div>
                                    </a>
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
                                <h3 className="text-primary mb-5">{t('technical_information_on_r_value_thermal_mass')}</h3>
                                <h6 className="mb-0 mt-3 mb-3 font-bg-700">{t('high_thermal_mass_concrete_core')}</h6>
                                <div className="text-band flex-text-band">
                                    <p className="bold-bg">{t('thermal_mass_is_the_ability_of_a_material_to_absorb_and_store_heat_energy_a_lot_of_heat_energy_is_required_to_change_the_temperature_of_high_density_materials_like_concrete_concrete_is_said_to_have_a_high_thermal_mass_lightweight_materials_such_as_timber_materials_have_low_thermal_mass_therefore_they_do_not_absorb_and_store_heat_energy_effectively')}</p>
                                    <p className="bold-bg">{t('when_outside_temperatures_fluctuate_a_building_with_a_large_thermal_mass_within_the_insulated_portion_can_serve_to_flatten_out_or_delay_the_temperature_fluctuations_nudura_icf_s_work_in_this_manner_the_concrete_core_sandwiched_between_2_panels_of_eps_insulation_effectively_improves_the_building_comfort_in_areas_of_temperature_fluctuation')}</p>
                                </div>
                                <h6 className="mb-0 mt-3 mb-3 font-bg-700">{t('continuous_insulation_layers_inside_and_out')}</h6>
                                <div className="text-band flex-text-band">
                                    <p className="bold-bg">{t('nudura_provides_a_complete_layer_of_eps_insulation_on_the_exterior_and_interior_of_your_building_with_nudura_you_will_not_experience_thermal_bridging_as_would_be_found_in_a_stick_frame_house_wood_components_have_much_higher_thermal_conductivity_than_eps_insulation_everywhere_there_is_a_wood_stud_corner_post_framed_floor_or_wooden_lintel_is_a_location_where_it_is_lessened_or_no_batt_insulation_these_areas_create_drafts_and_cold_spots_on_the_wall_an_icf_home_will_not_have_any_cold_areas_as_the_insulation_is_continuous_around_the_entire_building')}</p>

                                </div>
                                <h6 className="mb-0 mt-3 mb-3 font-bg-700">{t('superior_air_tightness')}</h6>
                                <div className="text-band flex-text-band">
                                    <p className="bold-bg">{t('nudura_creates_a_much_more_airtight_building_than_any_other_construction_method_our_eps_insulation_acts_as_an_air_barrier_as_proven_by_accredited_astm_testing_the_design_of_our_interlocks_and_patented_duralock_technology_ensure_our_blocks_are_mechanically_linked_together_thus_preventing_gaps_that_could_allow_air_to_flow_through_the_assembly_other_icf_companies_rely_on_additional_tying_of_the_forms_to_create_this_seal_which_increases_the_labor_time_and_money_spent')}</p>
                                    <p className="bold-bg">{t('a_second_feature_is_the_solid_concrete_core_which_also_acts_as_an_air_barrier_the_result_is_an_extremely_airtight_home_a_wood_frame_house_relies_solely_on_an_extremely_thin_sheet_of_plastic_as_an_air_barrier_this_barrier_is_very_easily_punctured_it_has_to_be_joined_with_a_tape_product_at_9_increments_and_it_does_not_self_seal_around_fastener_penetrations_the_quality_of_these_wood_frame_air_barriers_greatly_depends_on_the_method_of_installation_and_the_time_taken_by_the_installer_it_is_a_much_more_tedious_and_time_consuming_process_than_nudura_icf_with_less_performance')}</p>
                                    <p className="bold-bg  mt-3">{t('a_second_feature_is_the_solid_concrete_core_which_also_acts_as_an_air_barrier_the_result_is_an_extremely_airtight_home_a_wood_frame_house_relies_solely_on_an_extremely_thin_sheet_of_plastic_as_an_air_barrier_this_barrier_is_very_easily_punctured_it_has_to_be_joined_with_a_tape_product_at_9_increments_and_it_does_not_self_seal_around_fastener_penetrations_the_quality_of_these_wood_frame_air_barriers_greatly_depends_on_the_method_of_installation_and_the_time_taken_by_the_installer_it_is_a_much_more_tedious_and_time_consuming_process_than_nudura_icf_with_less_performance')}</p>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ThermalMass;