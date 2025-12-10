import { useTranslation } from "react-i18next";

const ConstructionMethods = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="container">
        <div className="breadcrumb-band">
          <div className="text-band">
            <span>{t("construction_methods")}</span>
            <h2>{t("building_homes_also_for_the_generations_to_come")}</h2>
          </div>
        </div>
      </div>
      <section>
        <div className="container">
          <div className="card gredient-card bg-primary-gradient">
            <div className="text-band text-left">
              <h5>{t("construction_methods")}</h5>
              <h6 className="text-white">
                {t(
                  "through_the_introduction_of_innovative_construction_technologies_such_as_nodora_ecobuild_s_advanced_construction_methods_give_expression_to_various_breakthroughs_in_the_world_of_construction_especially_for_architects_developers_municipalities_contractors_and_homeowners_this_is_also_a_breakthrough_in_these_areas_speed_of_execution_technical_options_construction_quality_strength_of_structures_savings_in_maintenance_savings_in_electricity_consumption_and_safety_levels"
                )}
              </h6>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-0">
        <div className="container">
          <div className="titile-band">
            <h3>{t("table_of_contents")}</h3>
          </div>
          <div className="row g-4">
            <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
              <div className="single-text-content-card xy-radius h-100 d-flex align-items-center justify-content-center">
                <div className="text-band text-center" style={{ margin: 0 }}>
                  <h4 className="mb-0">{t("military_construction")}</h4>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
              <div className="single-text-content-card xy-radius h-100 d-flex align-items-center justify-content-center">
                <div className="text-band text-center" style={{ margin: 0 }}>
                  <h4 className="mb-0">{t("green_building")}</h4>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
              <div className="single-text-content-card xy-radius h-100 d-flex align-items-center justify-content-center">
                <div className="text-band text-center" style={{ margin: 0 }}>
                  <h4 className="mb-0">{t("institutional_construction")}</h4>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
              <div className="single-text-content-card xy-radius h-100 d-flex align-items-center justify-content-center">
                <div className="text-band text-center" style={{ margin: 0 }}>
                  <h4 className="mb-0">{t("protected_construction")}</h4>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
              <div className="single-text-content-card xy-radius h-100 d-flex align-items-center justify-content-center">
                <div className="text-band text-center" style={{ margin: 0 }}>
                  <h4 className="mb-0">{t("modular_construction")}</h4>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
              <div className="single-text-content-card xy-radius h-100 d-flex align-items-center justify-content-center">
                <div className="text-band text-center" style={{ margin: 0 }}>
                  <h4 className="mb-0">{t("insulated_construction")}</h4>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
              <div className="single-text-content-card xy-radius h-100 d-flex align-items-center justify-content-center">
                <div className="text-band text-center" style={{ margin: 0 }}>
                  <h4 className="mb-0">{t("industrialized_construction")}</h4>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
              <div className="single-text-content-card xy-radius h-100 d-flex align-items-center justify-content-center">
                <div className="text-band text-center" style={{ margin: 0 }}>
                  <h4 className="mb-0">{t("saturated_construction")}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-0">
        <div className="container">
          <div className="layer_content p-0">
            <h3 className="text-primary">{t("green_building")}</h3>
            <div className="text-band flex-text-band">
              <p className="bold-bg lh-sm mb-2 lh-sm mb-2">
                <a
                  href="https://www.ecobuild.co.il"
                  className="primary-link"
                  style={{ marginLeft: "4px", color: "#00A3E0" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("in_green_construction_in_israel")}
                </a>
                {t(
                  "the_degree_of_heat_cold_transfer_is_of_great_importance_due_to_the_materials_used_in_the_construction_of_the_buildings_nudura_building_forms_come_standard_with_a_u_value_of_0_24_such_forms_are_also_available_in_models_with_higher_insulation_if_necessary_with_an_additional_u_value_of_0_11_these_forms_may_provide_significant_savings_in_electricity_consumption_reaching_up_to_72_energy_savings_compared_to_traditional_conventional_construction_the_forms_are_made_of_polystyrene_boards_that_are_connected_using_a_special_mesh_made_only_from_recycled_materials_and_are_also_resistant_to_mold_moisture_penetration_and_or_rot"
                )}
              </p>
              <p className="bold-bg lh-sm mb-2">
                {t(
                  "the_molds_also_create_walls_that_are_completely_sealed_against_air_passage_or_radon_gas_penetration_these_features_improve_the_level_of_insulation_and_energy_efficiency_and_also_prevent_any_type_of_mold"
                )}
              </p>
              <p className="bold-bg lh-sm mb-2">
                {t(
                  "like_the_forms_the_ceiling_technology_also_provides_high_level_insulation_both_the_forms_and_the_ceiling_or_floor_technology_are_based_on_recycled_and_recyclable_materials_in_addition_these_forms_do_not_include_any_material_that_can_harm_the_environment_such_as_cfc_or_hcfc_the_construction_process_in_these_forms_reduces_to_relatively_small_amounts_of_waste_scrap_even_this_waste_is_fully_recyclable"
                )}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-0">
        <div className="container">
          <div className="layer_content p-0">
            <h3 className="text-primary">{t("protected_construction")}</h3>
            <div className="text-band flex-text-band">
              <p className="bold-bg lh-sm mb-2">
                {t(
                  "buildings_in_israel_are_required_to_withstand_quite_a_few_hardships_or_withstand_a_speed_of_about_105_km_h_nudura_molds_after_casting_withstand_about_410_km_h_the_strength_of_the_buildings_using_this_method_is_of_great_importance_in_cases_of_earthquakes_storms_or_impact_such_as_impact_damage_from_falling_missiles_is_it_possible_to_build_ordinary_buildings_using_cost_effective_means_that_will_provide_a_solution_to_all_of_this_the_answer_is_yes_and_in_fact_the_solution_we_will_present_to_you_exceeds_the_standard_set_by_local_standards_for_these_issues_and_is_even_stronger_than_a_reinforced_concrete_structure"
                )}
              </p>
              <p className="bold-bg lh-sm mb-2">
                {t(
                  "to_illustrate_it_is_resistant_to_the_effects_of_nearby_explosions_and_winds_at_speeds_of_up_to_410_km_h_these_are_products_of_the_prominent_canadian_company_nudura_represented_by_ecobuild_system_specifically_this_is_achieved_using_icf_insulated_concrete_form_this_is_a_special_nudura_construction_method_which_has_a_long_list_of_advantages_even_beyond_strength_extremely_high_work_speed_energy_efficiency_and_environmental_friendliness_long_term_durability_and_more"
                )}
              </p>
              <p className="bold-bg lh-sm mb-2">
                {t(
                  "these_are_insulated_forms_that_can_be_quickly_connected_in_a_modular_manner_for_pouring_concrete_walls_the_forms_themselves_are_made_of_expanded_polystyrene_used_for_building_walls_they_are_reinforced_with_steel_and_concrete_is_poured_into_the_interior_this_results_in_an_extremely_strong_product_we_emphasize_that_this_is_not_light_construction_but_a_method_designed_for_building_ordinary_houses_and_buildings_for_more_information_on_protected_construction"
                )}  <a
                  href="https://ecobuild.co.il/%d7%91%d7%a0%d7%99%d7%99%d7%94-%d7%97%d7%96%d7%a7%d7%94/"
                  style={{ marginLeft: "4px", color: "#00A3E0" }}
                  className="primary-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("For_more_info")}
                </a>
              </p>{" "}
            </div>
          </div>
        </div>
      </section>
      <section className="pt-0">
        <div className="container">
          <div className="layer_content p-0">
            <h3 className="text-primary">{t("insulated_construction")}</h3>
            <div className="text-band flex-text-band">
              <p className="bold-bg lh-sm mb-2">
                {t(
                  "the_nudura_icf_system_is_based_on_basic_components_which_are_pairs_of_expanded_polystyrene_eps_panels_with_a_thickness_of_67_mm_concrete_cores_are_poured_into_the_interior_the_thickness_of_which_may_vary_as_needed_100_mm_150_mm_200_mm_250_mm_or_300_mm"
                )}
              </p>
              <p className="bold-bg lh-sm mb-2">
                {t(
                  "ceiling_insulation_can_also_be_added_to_an_existing_structure_quickly_and_easily_using_nudura_retrofit_insulation_technology_this_method_adds_a_layer_of_specialized_moldings_which_significantly_improves_the_existing_acoustic_and_thermal_insulation_the_product_is_based_on_2_44_meter_x_1_22_meter_panels"
                )}
              </p>
              <p className="bold-bg lh-sm mb-2">
                {t(
                  "these_high_quality_insulation_measures_are_an_excellent_long_term_investment_they_will_result_in_a_reduced_need_to_heat_or_cool_the_building_and_increased_efficiency_of_heating_and_cooling_measures_when_they_are_used_changes_in_temperature_outside_the_building_will_affect_the_temperature_inside_less_and_more_slowly"
                )}
              </p>
              <p className="bold-bg lh-sm mb-2">
                {t(
                  "the_acoustic_insulation_obtained_with_these_products_is_also_of_an_exceptionally_high_level_with_an_sri_value_of_at_least_51_decibels_nudura_icf_based_walls_provide_better_than_usual_resistance_to_flooding_since_they_do_not_absorb_water_the_excellent_insulation_is_also_reflected_in_fire_protection_for_up_to_4_hours_for_more_information_on_insulated_construction"
                )}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-0">
        <div className="container">
          <div className="layer_content p-0">
            <h3 className="text-primary">{t("saturated_constructionn")}</h3>
            <div className="text-band flex-text-band">
              <p className="bold-bg lh-sm mb-2">
                {t("saturated_construction_is")}
                <a
                  href="https://ecobuild.co.il/%d7%91%d7%a0%d7%99%d7%94-%d7%a8%d7%95%d7%95%d7%99%d7%94/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                  style={{ marginLeft: "4px", color: "#00A3E0" }}
                >
                  {t("saturated_construction_is_link")}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-0">
        <div className="container">
          <div className="layer_content p-0">
            <h3 className="text-primary">{t("military_construction")}</h3>
            <div className="text-band flex-text-band">
              <p className="bold-bg lh-sm mb-2">
                {t("icf_base")}
                <a
                  href="https://ecobuild.co.il/%d7%91%d7%a0%d7%99%d7%94-%d7%a8%d7%95%d7%95%d7%99%d7%94/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginLeft: "4px", color: "#00A3E0" }}
                >
                  {t("icf_base_link")}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-0">
        <div className="container">
          <div className="layer_content p-0">
            <h3 className="text-primary">{t("institutional_construction")}</h3>
            <div className="text-band flex-text-band">
              <p className="bold-bg lh-sm mb-2">
                {t("institutional_construction_whether_it_is_kindergartens")}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-0">
        <div className="container">
          <div className="layer_content p-0">
            <h3 className="text-primary">{t("modular_construction")}</h3>
            <div className="text-band flex-text-band">
              <p className="bold-bg lh-sm mb-2">
                {t("if_you_look_at_photos_and_videos_about")}
                <a
                  href="https://ecobuild.co.il/%d7%91%d7%a0%d7%99%d7%94-%d7%a8%d7%95%d7%95%d7%99%d7%94/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginLeft: "4px", color: "#00A3E0" }}
                >
                  {t("if_you_look_at_photos_and_videos_about_link")}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-0">
        <div className="container">
          <div className="layer_content p-0">
            <h3 className="text-primary">{t("industrialized_construction")}</h3>
            <div className="text-band flex-text-band">
              <p className="bold-bg lh-sm mb-2">
                {t("building_construction_is_like")}  <a
                  href="https://ecobuild.co.il/%d7%91%d7%a0%d7%99%d7%94-%d7%a8%d7%95%d7%95%d7%99%d7%94/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginLeft: "4px", color: "#00A3E0" }}
                >
                  {t("building_construction_is_like_link")}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-0">
        <div className="container">
          <div className="card gredient-card bg-primary-gradient">
            <div className="text-band text-left">
              <h6 className="text-white">
                <a
                  style={{ marginLeft: "4px", color: "#00A3E0" }}
                  className="text-dark"
                >
                  {t("ecobuild_is_an_advanced_construction_company")}
                </a>
                {t("that_also_offers_a_floor_insulation")}
              </h6>
              <h6 className="text-white">
                {t("on_our_website_you_will_find_additional")}
              </h6>

              <h6 className="text-white">
                {t("contractors_can_register_on_the_site")}
              </h6>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConstructionMethods;
