import duralock from '../images/DURALOK-Technology.jpg';
import durafold from '../images/DURAFOLD-Technology.jpg';
import duramax from '../images/DURAMAX-Technology.jpg';
import wayreve from '../images/4WAY-REVERSIBLE-System.jpg';
import threshold from '../images/Threshold-Sealer.jpg';
import { useTranslation } from "react-i18next";
import Breadcrumb from '../common-component/Breadcrumb';

const NUDURASeries = () => {
    const { t } = useTranslation();
    return (
        <div>
            <Breadcrumb
                header={t('nodora_series')}
                subHeader={t('building_homes_also_for_the_generations_to_come')}
            />
            <section>
                <div className="container">
                    <div className="row align-items-center g-4">
                        <div className="col-md-12">
                            <div className="layer_content p-0">
                                <h3 className="text-primary">{t('nodora_series')}</h3>
                                <div className="text-band flex-text-band">
                                    <p className="bold-bg">{t('nudura_icf_products_enable_contractors_and_developers_to_speed_up_the_construction_process_reduce_waste_and_deliver_a_winning_architectural_product')}</p>
                                    <p className="bold-bg">{t('nudura_manufactures_a_wide_range_of_products_and_accessories_for_a_variety_of_purposes_with_the_aim_of_providing_maximum_energy_savings_exceptional_strength_a_healthier_living_or_working_environment_and_lower_maintenance_costs_throughout_the_life_of_the_building_compared_to_traditional_construction_methods')}</p>
                                    <p className="bold-bg">{t('nudura_products_are_used_throughout_the_uk_in_homes_schools_and_healthcare_facilities_nudura_offers_products_and_accessories_with_patented_technology_that_make_the_construction_process_easier_products_that_are_not_available_from_other_icf_formwork_suppliers_on_the_market')}</p>
                                    <p className="bold-bg">{t('all_nudura_forms_are_equipped_with_patented_durafold_duramax_and_duralock_technologies_as_well_as_the_4way_reversible_system_the_combination_of_these_features_produces_forms_that_are_unique_and_unrivaled_we_are_confident_in_our_products_and_are_convinced_that_you_will_be_impressed_with_them_too_you_are_welcome_to_download_the_how_we_stack_up_information_sheet_to_compare_our_product_line_to_those_of_our_competitors')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className="pt-0">
                <div className="container">
                    <div className="row align-items-center g-4">
                        <div className="col-md-4">
                            <div className="layer_image small-round-layer border border-blue h-auto">
                                <img alt="" src={duralock} />
                            </div>

                        </div>
                        <div className="col-md-8">
                            <div className="layer_content p-0" style={{ marginLeft: "20px" }}>
                                <h3 className="text-primary">{t('duralok_technology')}</h3>
                                <div className="text-band flex-text-band">
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

                        <div className="col-md-8">
                            <div className="layer_content p-0">
                                <h3 className="text-primary">{t('durafold_technology')}</h3>
                                <div className="text-band flex-text-band">
                                    <p className="bold-bg">{t('patented_hinged_web_technology_allows_the_entire_nudura_form_line_up_to_fold_and_ship_flat_allowing_for_40_more_product_on_a_truck_compared_to_other_insulated_concrete_form_products_once_on_site_simply_unfold_and_stack')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="layer_image small-round-layer border border-blue h-auto">
                                <img alt="" src={durafold} />
                            </div>

                        </div>
                    </div>

                </div>
            </section>
            <section className="pt-0">
                <div className="container">
                    <div className="row align-items-center g-4">
                        <div className="col-md-4">
                            <div className="layer_image small-round-layer border border-blue h-auto">
                                <img alt="" src={duramax} />
                            </div>

                        </div>
                        <div className="col-md-8">
                            <div className="layer_content p-0" style={{ marginLeft: "20px" }}>
                                <h3 className="text-primary">{t('duramax_technology')}</h3>
                                <div className="text-band flex-text-band">
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

                        <div className="col-md-8">
                            <div className="layer_content p-0">
                                <h3 className="text-primary">{t('4way_reversible_system')}</h3>
                                <div className="text-band flex-text-band">
                                    <p className="bold-bg">{t('patented_foam_interlock_allows_the_form_to_be_4_way_reversible_eliminating_left_and_right_corners_which_helps_speed_up_the_building_process_and_reduces_product_waste_on_site')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="layer_image small-round-layer border border-blue h-auto">
                                <img alt="" src={wayreve} />
                            </div>

                        </div>
                    </div>

                </div>
            </section>
            <section className="pt-0">
                <div className="container">
                    <div className="layer_content p-0">
                        <div className="text-band flex-text-band">
                            <h3 className="text-primary">{t('nudura_icf_products_offer')}</h3>
                            <ul className="details-list mt-2 g-2 w-fill">
                                <li>{t('patented_technology')}</li>
                                <li>{t('molds_with_different_cores_of_100_mm_150_mm_200_mm_250_mm_and_300_mm')}</li>
                                <li>{t('radius_molds_are_cut_to_order_at_the_factory')}</li>
                                <li>{t('nudura_panels_for_construction_flexibility')}</li>
                                <li>{t('a_complete_series_of_complementary_products_for_icf_from_insulation_to_scaffolding_systems')}</li>
                                <li>{t('access_to_full_and_comprehensive_support_on_the_site_through_a_system_of_authorized_distributors')}</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>
            <section className="pt-0">
                <div className="container">
                    <div className="row align-items-center g-4">
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="layer_content p-0">
                                <h3 className="text-primary">{t('gap_threshold_sealer')}</h3>
                                <div className="text-band flex-text-band">
                                    <p className="bold-bg">{t('the_nudura_window_simplifier_seal_is_an_easy_to_use_window_simplifier_for_use_in_nudura_insulated_concrete_formwork_the_insert_seals_the_space_above_and_below_the_window_to_minimize_thermal_bridging_the_insert_is_available_in_a_standard_50mm_size_and_comes_in_an_easy_to_install_1200mm_length_the_inserts_have_a_special_configuration_that_fits_tightly_together_to_create_a_perfect_seal_when_inserted_into_nudura_icf_products_the_window_simplifier_seal_is_made_of_expanded_polystyrene_it_can_be_fitted_to_any_standard_nudura_core_size_from_100mm_to_300mm')}</p>
                                    <p className="bold-bg">{t('the_window_seal_insert_combined_with_the_nudura_end_unit_and_reinforcement_strip_provides_a_simple_and_effective_way_to_seal_gaps_around_windows_in_nudura_walls')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="layer_image small-round-layer border border-blue h-auto">
                                <img alt="" src={threshold} />
                            </div>

                        </div>

                    </div>

                </div>
            </section>
        </div>
    );
}

export default NUDURASeries;