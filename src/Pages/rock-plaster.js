import pdf from "../images/Icons/pdf-gray.svg";
import download from "../images/Icons/Download.svg";
import rockplaster from "../images/Rock-plaster.jpg";
import productbook from "../images/Product-features-book.jpg";
import plaster1 from "../images/Plaster-finish01.jpg";
import plaster from "../images/Plaster-finish.jpg";
import { useTranslation } from "react-i18next";
import Breadcrumb from "../common-component/Breadcrumb";


const RockPlaster = () => {
  const { t } = useTranslation();

  // Array of PDF files data
  const pdfFiles = [
    {
      id: 1,
      name: t("data_sheet"),
      fileKey: t("pdf"),
      pdfPath: '/EcoBuildPdf/Information Center/Rock plaster/Data-Sheet.pdf',
      downloadName: "pdf-file-for-download.pdf",
      icon: pdf,
    },
    {
      id: 2,
      name: t("derivit_laboratory_esr_1232"),
      fileKey: t("pdf"),
      pdfPath: '/EcoBuildPdf/Information Center/Rock plaster/Derivit Laboratory.pdf',
      downloadName: "derivit-laboratory-esr-1232.pdf",
      icon: pdf,
    },
    {
      id: 3,
      name: t("laboratory_certification_standardicc_esr_2092_nudura_icfs"),
      fileKey: t("pdf"),
      pdfPath: '/EcoBuildPdf/Information Center/Rock plaster/Laboratory Certification Standardicc-esr-2092-nudura-icfs.pdf',
      downloadName:
        "laboratory-certification-standardicc-esr-2092-nudura-icfs.pdf",
      icon: pdf,
    },
    {
      id: 4,
      name: t("pdf_file_for_download"),
      fileKey: t("pdf"),
      pdfPath: '/EcoBuildPdf/Information Center/Rock plaster/PDF File for download.pdf',
      downloadName: "data-sheet.pdf",
      icon: pdf,
    },
  ];

  // Handle download function
  const handleDownload = (pdfPath, fileName) => {
    if (!pdfPath) return;

    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = fileName || "document.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <Breadcrumb
        header={t("rock_plaster")}
        subHeader={t("building_homes_also_for_the_generations_to_come")}
      />
      <section>
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-sm-12 col-md-12 col-lg-7 col-xl-8">
              <div className="layer_content p-0">
                <h3 className="text-primary">{t("rock_plaster")}</h3>
                <h6 className="mb-0 mt-3 mb-3 font-bg-700">
                  {t("8_first_base_plaster_layer_derivit_plaster")}
                </h6>
                <div className="text-band flex-text-band">
                  <p className="bold-bg">
                    {t(
                      "as_with_all_nudura_products_and_accessories_the_underlayment_material_is_another_important_element_in_nudura_s_unique_construction_process_the_underlayment_in_this_case_is_the_thin_polymer_or_cementitious_coating_that_is_applied_to_the_concrete_to_smooth_and_refine_its_shape"
                    )}
                  </p>
                  <p className="bold-bg">
                    {t(
                      "as_is_customary_in_traditional_construction_methods_the_function_of_the_base_coat_is_to_provide_a_smooth_finish_to_the_strip_of_wall_base_that_is_usually_exposed_between_the_final_ground_surface_of_the_building_and_the_final_finishing_material_above_ground_this_is_especially_true_in_northern_climates_where_due_to_snow_accumulation_and_frost_penetration_into_the_ground_building_standards_require_a_clear_separation_between_the_ground_and_the_finishing_material_applied_above_the_surface_usually_at_least_15_cm"
                    )}
                  </p>
                  <p className="bold-bg">
                    {t(
                      "when_applying_the_base_coat_to_nudura_expanded_polystyrene_the_base_coat_will_cover_the_top_of_the_waterproofing_membrane_which_is_installed_to_a_depth_of_approximately_15_cm_below_the_planned_final_ground_level_the_layer_then_covers_the_wall_on_which_the_brick_or_stone_finish_will_be_installed_or_covers_25_mm_below_the_non_brick_wall_finish_applied_to_the_wall_above_ground_level"
                    )}
                  </p>
                  <p className="bold-bg">
                    {t(
                      "as_briefly_mentioned_in_this_section_the_base_plaster_layer_is_usually_applied_in_two_layers_each_8_16_mm_thick_with_an_interglass_mesh_embedded_in_the_first_layer"
                    )}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-5 col-xl-4">
              <div className="layer_image small-round-layer border border-blue">
                <img alt="" src={rockplaster} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-0">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <table
                className="dltrc table-left-align"
                style={{ background: "none" }}
              >
                <thead>
                  <tr className="dlheader">
                    <td className="dlheader">{t("file_name")}</td>
                    <td className="dlheader">{t("file")}</td>
                  </tr>
                </thead>
                <tbody>
                  {pdfFiles.map((file) => (
                    <tr key={file.id} className="dlinfo">
                      <td className="dlinfo hover01">{file.name}</td>
                      <td className="dlinfo hover01">
                        <ul className="file-list-inner-td justify-content-start">
                          <li>
                            <a
                              href={file.pdfPath}
                              className="red-link border-none"
                              onClick={(e) => {
                                e.preventDefault();
                                handleDownload(file.pdfPath, file.downloadName);
                              }}
                              download={file.downloadName}
                            >
                              <div className="icon-band">
                                <img alt="PDF icon" src={file.icon} />
                              </div>
                              {file.fileKey}
                              <img
                                src={download}
                                className="download-icon"
                                alt="Download"
                              />
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div className="layer_content p-0">
                <h3 className="text-primary">{t("product_description")}</h3>
                <div className="text-band flex-text-band">
                  <p className="bold-bg">
                    {t(
                      "the_material_used_for_this_purpose_is_b2000_precoat_or_rock_plaster_which_is_a_dry_acrylic_cementitious_base_coat_specifically_designed_for_use_on_insulated_concrete_forms_icf_made_of_high_density_expanded_polystyrene_eps_b2000_creates_a_strong_yet_flexible_base_coat_eliminating_the_complications_associated_with_mixing_base_coat_on_site_such_as_adding_cement_a_7_22_kg_bag_covers_approximately_5_7_m2_of_wall_area_at_a_2_mm_thick_layer"
                    )}
                  </p>
                  <p className="bold-bg">
                    {t(
                      "in_addition_to_b2000_precoat_or_rock_plaster_interglass_mesh_is_also_required_when_applying_the_base_coat_the_mesh_is_supplied_in_rolls_each_of_which_can_cover_an_area_of_44_m2_of_wall_the_function_of_the_mesh_is_to_help_reinforce_the_base_coat_and_ensure_that_there_is_no_cracking_due_to_shrinkage_after_the_b2000_base_coat_or_rock_plaster_has_cured"
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-0">
        <div className="container">
          <div className="row align-items-start g-4">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-6">
                  <div className="layer_content p-0">
                    <h6 className="mb-0 mt-3 mb-3 font-bg-700">
                      {t("product_features")}
                    </h6>
                    <ul className="details-list mt-2 g-2">
                      <li>{t("high_bending_and_bonding_strength")}</li>
                      <li>{t("waterproof_against_falling_water")}</li>
                      <li>{t("excellent_stability_in_freeze_thaw_cycles")}</li>
                      <li>{t("low_water_absorption")}</li>
                      <li>{t("high_workability")}</li>
                      <li>{t("low_shrinkage_rate")}</li>
                      <li>{t("fire_standard_for_half_an_hour")}</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="layer_content p-0">
                    <h6 className="mb-0 mt-3 mb-3 font-bg-700">
                      {t("technical_data")}
                    </h6>
                    <ul className="details-list mt-2 g-2">
                      <li>{t("mpa_15_8_after_3_days")}</li>
                      <li>{t("mpa_22_6_after_7_days")}</li>
                      <li>{t("mpa_25_5_after_14_days")}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="layer_image small-round-layer border border-blue h-auto">
                <img alt="" src={productbook} />
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
                <h6 className="mb-0 mt-3 mb-3 font-bg-700">
                  {t("precaution")}
                </h6>
                <div className="text-band flex-text-band">
                  <p className="bold-bg">
                    {t(
                      "store_b2000_precoat_above_ground_in_a_dry_place_away_from_direct_sunlight_ensure_that_the_surface_of_the_expanded_polystyrene_eps_is_free_from_dirt_or_dust_frost_moisture_loose_particles_paint_or_any_other_foreign_matter_ensure_that_the_surface_and_ambient_temperature_is_above_5_c_when_applying_the_coat_and_remains_so_for_at_least_24_hours_allow_the_coat_to_dry_for_at_least_24_hours_before_applying_another_coat_protect_the_applied_material_from_winds_exceeding_24_km_h_rain_hail_snow_and_any_other_damage_until_it_has_fully_set_and_dried_or_until_all_finishing_and_crack_filling_work_has_been_completed"
                    )}
                  </p>
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
                <h3 className="text-primary">{t("8_1_mixing_instructions")}</h3>
                <div className="text-band flex-text-band">
                  <p className="bold-bg">
                    {t(
                      "gradually_add_one_bag_of_b2000_to_5_4_liters_of_clean_drinking_water_while_stirring_until_a_material_with_the_appropriate_viscosity_is_obtained_for_the_job"
                    )}
                  </p>
                </div>
                <ul className="details-list pt-3 count-list">
                  <li>
                    {t(
                      "let_the_wet_mixture_rest_for_five_minutes_mix_again_and_apply_the_pot_life_of_the_wet_mixture_is_one_hour"
                    )}
                  </li>
                  <li>
                    {t(
                      "you_can_add_up_to_225_cc_of_water_to_improve_workability_if_the_mixture_begins_to_harden_before_the_end_of_the_hour"
                    )}
                  </li>
                  <li>
                    {t(
                      "you_can_stir_the_mixture_only_once_more_after_that_discard_any_material_that_has_begun_to_harden"
                    )}
                  </li>
                </ul>
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
                <h3 className="text-primary">
                  {t("8_2_implementation_instructions")}
                </h3>
                <div className="text-band flex-text-band">
                  <p className="bold-bg">
                    {t(
                      "four_steps_will_ensure_that_the_base_plaster_layer_is_properly_applied_to_the_eps_wall_and_ensure_good_performance_and_these_are"
                    )}
                  </p>
                </div>
                <ul className="details-list pt-3 count-list">
                  <li>
                    {t(
                      "rough_the_polystyrene_foam_surface_to_improve_adhesion_remove_any_bumps_waves_and_yellowing_caused_by_sun_exposure_the_use_of_a_roughening_tool_designed_for_mineral_or_colored_sanding_on_icf_surfaces_is_best_for_this_task_consult_your_building_materials_supplier_for_suitable_tools"
                    )}
                  </li>
                  <li>
                    {t(
                      "the_contractor_installer_shall_mix_the_b2000_mixture_and_apply_it_to_the_wall_as_stated_above_the_base_coat_shall_extend_from_5_2_cm_above_the_intended_lower_line_of_the_exterior_finish_to_a_depth_of_15_cm_below_the_planned_ground_level_above_the_installed_waterproofing_sheet_to_create_a_continuous_drainage_path_that_will_transfer_any_moisture_into_the_ground_the_15_cm_will_allow_the_base_coat_to_overlap_the_bottom_of_the_sheet_by_5_2_cm_b2000_may_be_applied_with_a_stainless_steel_trowel_or_by_spraying_with_a_6_mm_spray_head_at_20_psi_pressure_when_applying_the_b2000_base_coat_the_layer_thickness_shall_not_exceed_3_mm"
                    )}
                  </li>
                  <li>
                    {t(
                      "immediately_after_applying_the_layer_embed_interglass_reinforcement_mesh_over_the_first_layer_nudura_recommends_embedding_a_double_layer_of_mesh_in_corners_outside_corners_and_corners_of_openings_these_areas_are_more_susceptible_to_damage_from_daily_use_overlap_one_mesh_section_with_another_by_5_cm_apply_additional_layers_of_b2000_or_rock_plaster_until_no_trace_of_the_mesh_is_visible"
                    )}
                  </li>
                  <li>
                    {t(
                      "apply_the_final_layer_of_rock_plaster_24_hours_after_applying_the_first_layer_the_architectural_design_brick_or_stone_can_then_be_applied_to_the_finishing_layer_to_meet_the_requirements_of_the_structure"
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-0">
        <div className="container">
          <div className="row align-items-start g-4">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div className="layer_content p-0">
                <h3 className="text-primary">{t("8_3_plaster_finish")}</h3>
                <div className="text-band flex-text-band">
                  <p className="bold-bg">
                    {t(
                      "if_the_exterior_finish_is_a_mineral_or_colored_putty_the_b2000_base_coat_should_still_be_applied_to_the_section_of_the_wall_that_will_come_into_contact_with_the_ground_most_products_from_mineral_or_colored_putty_manufacturers_are_not_designed_to_withstand_the_basic_conditions_of_the_ground_and_may_disintegrate_over_time_ask_the_technical_department_of_the_putty_manufacturer_what_recommendations_they_have_for_the_proper_interface_of_their_materials_with_b2000_on_the_ground_surface_if_the_recommendation_is_to_use_b2000_the_same_application_steps_should_be_followed"
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
              <div className="layer_image small-round-layer border border-blue h-auto">
                <img alt="" src={plaster1} />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
              <div className="layer_image small-round-layer border border-blue h-auto">
                <img alt="" src={plaster} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RockPlaster;
