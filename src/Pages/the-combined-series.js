// Main Images
import hydroScaled from "../images/hydro-scaled.jpg";
import homega from "../images/homega.jpg";
import ceilingTechnology from "../images/ceiling-technology.jpg";
import thermofoam from "../images/thermofoam.jpg";
import flooringTechnology from "../images/flooring-technology.jpg";

// Gallery Images
import gallery1 from "../images/gallery/hydrofoam-gallery-1.jpg";
import gallery2 from "../images/gallery/hydrofoam-gallery-2.jpg";
import gallery3 from "../images/gallery/hydrofoam-gallery-3.jpg";
import gallery4 from "../images/gallery/hydrofoam-gallery-4.jpg";
import gallery5 from "../images/gallery/hydrofoam-gallery-5.jpg";
import gallery6 from "../images/gallery/hydrofoam-gallery-6.jpg";
import gallery7 from "../images/gallery/hydrofoam-gallery-7.jpg";
import gallery8 from "../images/gallery/hydrofoam-gallery-8.jpg";

// Icons
import pdfFile from "../images/Icons/pdf-fille.svg";
import downloadIcon from "../images/Icons/Download.svg";
import insulationUnder from "../images/Icons/Insulation-under.svg";
import quickInstallation from "../images/Icons/quick-installation.svg";
import insulationPanels from "../images/Icons/insulation-panels.svg";
import multiDirectional from "../images/Icons/multi-directional.svg";
import interlockOverlaps from "../images/Icons/interlock-overlaps.svg";
import excellentPerformance from "../images/Icons/excellent-performance.svg";
import mmBoard from "../images/Icons/mm-board.svg";
import lightweightWork1 from "../images/Icons/lightweight-for-efficient-work-1.svg";
import lightweightWork2 from "../images/Icons/lightweight-for-efficient-work-2.svg";
import recyclable from "../images/Icons/recyclable.svg";
import waterResistant from "../images/Icons/water-and-moisture-resistant.svg";
import { useTranslation } from "react-i18next";
import Breadcrumb from '../common-component/Breadcrumb';
import './the-combined-series.css';



const TheCombinedSeries = () => {
    const { t } = useTranslation();
    return (
        <div className="the-combined-series">
            <Breadcrumb
                header={t('the_combined_series')}
                subHeader={t('building_homes_also_for_the_generations_to_come')}
            />
            <section>
                <div className="container">
                    <ul className="nav nav-pills tabs-action-band" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                                aria-selected="true">{t('the_combined_series')}</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                                aria-selected="false">{t('heated_floor_technology')}</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                                aria-selected="false">{t('ceiling_technology')}</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link border-none" id="pills-disabled-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled"
                                aria-selected="false">{t('flooring_technology')}</button>
                        </li>
                    </ul>
                </div>
                <div className="tab-content" id="pills-tabContent">

                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
                        tabindex="0">

                        <section className="white-bg">
                            <div className="container">
                                <div className="card gredient-card bg-primary-gradient">
                                    <div className="text-band text-left">
                                        <h5>{t('the_combined_series')}</h5>
                                        <h6 className="text-white">{t('the_nudura_integrated_series_combines_building_envelope_products_that_together_with_our_line_of_insulated_concrete_formwork_products_allow_you_to_achieve_maximum_energy_efficiency_the_integrated_series_also_includes_retrofit_products_for_easy_installation_that_add_insulation_to_older_buildings_in_one_go_the_integrated_series_is_designed_with_the_same_innovation_as_the_nudura_icf_series_it_is_easy_to_install_and_delivers_energy_saving_benefits_to_the_end_user')}</h6>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"
                        tabindex="0">

                        <section className="white-bg">
                            <div className="container">
                                <div className="card gredient-card bg-primary-gradient">
                                    <div className="text-band text-left">
                                        <div className="img-head">
                                            <img alt="" src={hydroScaled} />
                                        </div>
                                        <h6 className="text-white">{t('hydrofoam_offers_installers_a_highly_dense_yet_lightweight_expanded_polystyrene_eps_product_used_as_insulation_for_underfloor_heating_hydrofoam_is_easy_to_cut_to_any_desired_angle_or_radius_increasing_installation_speed')}</h6>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="pt-0">
                            <div className="container">
                                <div className="ab-info-band">
                                    <h3 className="text-primary">{t('heated_floor_technology')}</h3>
                                    <div className="text-band">

                                        <p className="bold-bg">{t('nudura_provides_maximum_insulation_for_underfloor_heating_in_both_residential_and_commercial_projects_nudura_technology_ensures_even_heat_distribution_across_the_entire_floor_area_creating_a_more_comfortable_living_and_working_environment')}</p>
                                        <p className="bold-bg">{t('nudura_continues_the_innovation_momentum_that_began_with_its_insulated_concrete_formwork_product_line_and_now_introduces_another_groundbreaking_product_hydrofoam')}</p>

                                        <p className="bold-bg">{t('installation_is_simple_and_quick_compared_to_traditional_underfloor_heating_insulation_methods_which_require_several_steps_to_lay_the_heating_pipes_hydrofoam_boards_measuring_1_2m_x_1_2m_are_available_in_two_thicknesses_64mm_and_102mm_they_can_be_easily_installed_using_an_interlocking_system_that_overlaps_on_all_four_sides_ensuring_the_boards_remain_locked_in_place_while_you_work_hydrofoam_uses_a_multi_directional_friction_based_3600_anchoring_kit_that_eliminates_the_need_for_wire_mesh_it_is_very_easy_to_install_the_underfloor_heating_pipes_in_place_in_any_desired_direction')}</p>
                                        <p className="bold-bg">{t('hydrofoam_offers_installers_a_highly_dense_yet_lightweight_expanded_polystyrene_eps_product_used_as_insulation_for_underfloor_heating_that_increases_installation_speed_is_easy_to_cut_to_any_desired_angle_or_radius_and_provides_an_insulation_value_of_u_0_56_or_u_0_35')}</p>

                                    </div>
                                </div>
                                <div className="file-attachments-band">
                                    <h6 className="mb-3">{t('file_attachments')}</h6>
                                    <div className="file-list">
                                        <div className="file-card">
                                            <a href="EcoBuildPdf/Product/Combined Series/Heated floor technology (hydrofoam)/hydrofoam_520_compressed.pdf"
                                                target="_blank" download>
                                                <div className="file-icon-band">
                                                    <img alt="" src={pdfFile} />
                                                </div>
                                                <div className="file-name-band">
                                                    <p>{t('hydrofoam_520_compressed_pdf')}</p>
                                                    <span className="small-icon"><img alt="" src={downloadIcon} /></span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>


                        <section className="pt-0">
                            <div className="container">
                                <div className="full-video-card">
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
                                <div className="titile-band">
                                    <h3 className="text-primary text-left">{t('important_points')}</h3>
                                </div>
                                <div className="row g-4">
                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                        <div className="card icon-top-primary-card">
                                            <div className="icon-card top-icon-band">
                                                <div className="icon-band">
                                                    <img alt="" src={insulationUnder} />
                                                </div>
                                            </div>
                                            <div className="text-band">
                                                <h4>{t('insulation_under_the_concrete_slab')}</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                        <div className="card icon-top-primary-card">
                                            <div className="icon-card top-icon-band">
                                                <div className="icon-band">
                                                    <img alt="" src={quickInstallation} />
                                                </div>
                                            </div>
                                            <div className="text-band">
                                                <h4>{t('quick_installation')}</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                        <div className="card icon-top-primary-card">
                                            <div className="icon-card top-icon-band">
                                                <div className="icon-band">
                                                    <img alt="" src={insulationPanels} />
                                                </div>
                                            </div>
                                            <div className="text-band">
                                                <h4>{t('insulation_panels_cast_in_a_mold_measuring_1_2_x_1_2_m')}</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                        <div className="card icon-top-primary-card">
                                            <div className="icon-card top-icon-band">
                                                <div className="icon-band">
                                                    <img alt="" src={multiDirectional} />
                                                </div>
                                            </div>
                                            <div className="text-band">
                                                <h4>{t('multi_directional_anchoring_for_13_mm_pipes')}</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                        <div className="card icon-top-primary-card">
                                            <div className="icon-card top-icon-band">
                                                <div className="icon-band">
                                                    <img alt="" src={interlockOverlaps} />
                                                </div>
                                            </div>
                                            <div className="text-band">
                                                <h4>{t('interlock_overlaps_on_all_4_sides_of_the_board')}</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                        <div className="card icon-top-primary-card">
                                            <div className="icon-card top-icon-band">
                                                <div className="icon-band">
                                                    <img alt="" src={excellentPerformance} />
                                                </div>
                                            </div>
                                            <div className="text-band">
                                                <h4>{t('excellent_performance_up_to_u_0_56_in_a_64_mm_panel')}</h4>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                        <div className="card icon-top-primary-card">
                                            <div className="icon-card top-icon-band">
                                                <div className="icon-band">
                                                    <img alt="" src={mmBoard} />
                                                </div>
                                            </div>
                                            <div className="text-band">
                                                <h4>{t('100_mm_board_with_u_value_0_35_is_available_by_special_order_only')}</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                        <div className="card icon-top-primary-card">
                                            <div className="icon-card top-icon-band">
                                                <div className="icon-band">
                                                    <img alt="" src={lightweightWork1} />
                                                </div>
                                            </div>
                                            <div className="text-band">
                                                <h4>{t('lightweight_for_efficient_work')}</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                        <div className="card icon-top-primary-card">
                                            <div className="icon-card top-icon-band">
                                                <div className="icon-band">
                                                    <img alt="" src={lightweightWork2} />
                                                </div>
                                            </div>
                                            <div className="text-band">
                                                <h4>{t('lightweight_for_efficient_work')}</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                        <div className="card icon-top-primary-card">
                                            <div className="icon-card top-icon-band">
                                                <div className="icon-band">
                                                    <img alt="" src={recyclable} />
                                                </div>
                                            </div>
                                            <div className="text-band">
                                                <h4>{t('100_recyclable')}</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                        <div className="card icon-top-primary-card">
                                            <div className="icon-card top-icon-band">
                                                <div className="icon-band">
                                                    <img alt="" src={waterResistant} />
                                                </div>
                                            </div>
                                            <div className="text-band">
                                                <h4>{t('water_and_moisture_resistant')}</h4>
                                            </div>
                                        </div>
                                    </div>




                                </div>

                            </div>
                        </section>


                        <section className="pt-0">
                            <div className="container">
                                <div className="row g-4">
                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                        <div className="gallery-img-card">
                                            <img alt="" src={gallery1} />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                        <div className="gallery-img-card">
                                            <img alt="" src={gallery2} />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                        <div className="gallery-img-card">
                                            <img alt="" src={gallery3} />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                        <div className="gallery-img-card">
                                            <img alt="" src={gallery4} />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                        <div className="gallery-img-card">
                                            <img alt="" src={gallery5} />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                        <div className="gallery-img-card">
                                            <img alt="" src={gallery6} />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                        <div className="gallery-img-card">
                                            <img alt="" src={gallery7} />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                        <div className="gallery-img-card">
                                            <img alt="" src={gallery8} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>

                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"
                        tabindex="0">

                        <section className="white-bg">
                            <div className="container">
                                <div className="card gredient-card bg-primary-gradient">
                                    <div className="text-band text-left">
                                        <div className="img-head">
                                            <img alt="" src={homega} />
                                        </div>
                                        <h6 className="text-white">{t('nudura_retrofit_technology_is_an_easy_to_use_solution_for_interior_or_exterior_insulation_for_solid_or_cavity_walls')}</h6>
                                    </div>
                                </div>
                            </div>
                        </section>


                        <section className="pt-0">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-md-8">
                                        <div className="layer_content p-0">
                                            <h3 className="text-primary">{t('ceiling_technology')}</h3>
                                            <h6 className="mb-0 mt-3 mb-4">{t('nudura_ceiling_technology')}</h6>
                                            <ul className="details-list">
                                                <li>{t('nudura_ceiling_technology_is_a_fast_economical_and_high_performance_solution_for_installing_ceilings_in_homes')}</li>
                                                <li>{t('the_building_envelope_is_completed_with_two_layers_of_foam_reinforced_with_wood_embedded_connection_points_for_exceptional_insulation')}</li>
                                                <li>{t('reduces_air_infiltration_so_effectively_that_an_additional_vapor_barrier_layer_is_not_required')}</li>
                                                <li>{t('a_double_layer_further_reduces_thermal_conductivity')}<br />{t('the_foam_does_not_contain_cfcs_or_hcfcs_that_are_harmful_to_the_environment')}</li>
                                                <li>{t('100_recyclable')}</li>
                                                <li>{t('in_the_last_two_years_changes_in_building_codes_around_the_world_have_required_increased_insulation_values_in')}</li>
                                                <li>{t('building_envelopes_along_with_overall_structural_tightness_with_nudura_you_can_meet_these_requirements')}</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="layer_image small-round-layer border border-blue">
                                            <img alt="" src={ceilingTechnology} />
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </section>


                        <section className="pt-0">
                            <div className="container">
                                <div className="file-attachments-band">
                                    <h6 className="mb-3">{t('file_attachments')}</h6>
                                    <div className="file-list">
                                        <div className="file-card">
                                            <a href="EcoBuildPdf/Product/Combined Series/Ceiling technology(Homega)/hydrofoam_520_compressed.pdf"
                                                target="_blank" download>
                                                <div className="file-icon-band">
                                                    <img alt="" src={pdfFile} />
                                                </div>
                                                <div className="file-name-band">
                                                    <p>{t('01_homega_520_pdf')}</p>
                                                    <span className="small-icon"><img alt="" src={downloadIcon} /></span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>


                        <section className="pt-0">
                            <div className="container">
                                <div className="full-video-card mb-5">
                                    <div className="video-band">
                                        <iframe width="560" height="315"
                                            src="https://www.youtube.com/embed/iS0Dl92_on4?si=07u7F_BiLBsCYJbQ"
                                            title={t('youtube_video_player')} frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                    </div>
                                </div>

                                <div className="ab-info-band">

                                    <div className="text-band">

                                        <p className="bold-bg">{t('nudura_retrofit_insulation_technology_is_an_easy_and_simple_installation_method_compared_to_traditional_multi_step_finishing_methods')}</p>
                                        <p className="bold-bg">{t('simply_attach_the_standard_1_2_x_2_4m_nudura_panels_to_the_wall_using_the_embedded_connection_strip_and_suitable_fasteners_nudura_retrofit_insulation_panels_interlock_perfectly_it_is_easy_to_complete_electrical_wiring_and_attach_plasterboard_or_gypsum_board_using_the_64mm_wide_connection_strip_at_400mm_intervals_to_install_ready_to_finish_wall_insulation')}</p>

                                        <p className="bold-bg">{t('simply_attach_the_standard_1_2_x_2_4m_nudura_panels_to_the_wall_using_the_embedded_connection_strip_and_suitable_fasteners_nudura_retrofit_insulation_panels_interlock_perfectly_it_is_easy_to_complete_electrical_wiring_and_attach_plasterboard_or_gypsum_board_using_the_64mm_wide_connection_strip_at_400mm_intervals_to_install_ready_to_finish_wall_insulation')}</p>
                                        <p className="bold-bg">{t('as_energy_demands_and_fuel_prices_increase_there_is_a_need_to_make_the_most_of_wall_insulation_technologies_in_homes_and_commercial_buildings_nudura_s_retrofit_wall_insulation_technology_is_an_ideal_solution_that_reduces_energy_consumption_increases_savings_and_adds_presence_all_in_one_process')}</p>

                                    </div>
                                </div>


                            </div>
                        </section>
                    </div>

                    <div className="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab"
                        tabindex="0">

                        <section className="white-bg">
                            <div className="container">
                                <div className="card gredient-card bg-primary-gradient">
                                    <div className="text-band text-left">
                                        <div className="img-head">
                                            <img alt="" src={thermofoam} />
                                        </div>
                                        <h6 className="text-white">{t('nudura_ceiling_and_floor_technology_complements_the_building_envelope_and_maximizes_the_energy_efficiency_of_the_home_a_fast_economical_high_performance_insulation_solution_for_upgrading_uninsulated_floors_and_ceilings_in_homes_garages_and_cottages')}</h6>
                                    </div>
                                </div>
                            </div>
                        </section>


                        <section className="pt-0">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-md-8">
                                        <div className="layer_content p-0">
                                            <h3 className="text-primary">{t('flooring_technology')}</h3>
                                            <h6 className="mb-0 mt-3 mb-4" style={{ fontSize: "22px" }}>{t('nudura_floor_technology')}</h6>
                                            <p className="pb-3">{t('the_floor_is_often_the_most_neglected_area_of_the_home_in_terms_of_insulation_a_floor_insulated_with_nudura_floor_technology_complements_the_building_envelope_and_increases_the_comfort_and_energy_efficiency_of_the_home_nudura_floor_technology_offers')}</p>
                                            <ul className="details-list">
                                                <li>{t('an_economical_layer_of_protection_against_cold_transmission_from_the_ground')}</li>
                                                <li>{t('an_effective_base_for_underfloor_heating')}</li>
                                                <li>{t('overlapping_tongue_and_groove_interlock_that_prevents_gaps_easy_and_quick_to_install')}</li>
                                                <li>{t('durable_cast_panels_are_resistant_to_cracking_and_crumbling_that_characterize_cut_products')}</li>
                                                <li>{t('does_not_contain_cfc_or_hcfc_which_are_harmful_to_the_environment')}</li>
                                                <li>{t('safe_to_use')}</li>
                                                <li>{t('100_recyclable')}</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="layer_image small-round-layer border border-blue">
                                            <img alt="" src={flooringTechnology} />
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </section>


                        <section className="pt-0">
                            <div className="container">
                                <div className="file-attachments-band p-0">
                                    <h6 className="mb-3">{t('file_attachments')}</h6>
                                    <div className="file-list">
                                        <div className="file-card">
                                            <a href="EcoBuildPdf/Product/Combined Series/Flooring technology(thermofoam)/thermofoam_520_compressed.pdf"
                                                target="_blank" download>
                                                <div className="file-icon-band">
                                                    <img alt="" src={pdfFile} />
                                                </div>
                                                <div className="file-name-band">
                                                    <p>{t('thermofoam_520_compressed_pdf')}</p>
                                                    <span className="small-icon"><img alt="" src={downloadIcon} /></span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>


                        <section className="pt-0">
                            <div className="container">
                                <div className="ab-info-band">
                                    <div className="text-band">
                                        <p className="bold-bg">{t('at_nudura_we_understand_the_importance_of_an_integrated_building_envelope_nudura_offers_energy_efficient_materials_that_work_with_our_insulated_concrete_formwork_walls_to_create_the_most_comfortable_and_energy_efficient_home_possible_to_ensure_maximum_energy_savings_incorporating_energy_efficient_materials_is_a_key_aspect_of_any_good_building_plan_nudura_ceiling_and_floor_technology_complements_the_building_envelope_maximizing_the_energy_efficiency_of_your_home_using_these_energy_efficient_materials_results_in_monthly_savings_on_your_energy_bill_but_using_these_materials_gives_you_more_than_just_savings_nudura_ceiling_and_floor_technology_creates_a_home_that_is_more_comfortable_to_live_in')}</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>


            </section>
        </div>
    );
}

export default TheCombinedSeries;