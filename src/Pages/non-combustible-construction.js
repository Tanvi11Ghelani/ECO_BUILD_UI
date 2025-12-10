import React, { useState, useMemo } from "react";
import image1 from "../images/Icons/below-the-construction-slope.svg";
import image2 from "../images/Icons/flammable-construction.svg";
import image3 from "../images/Icons/Non-combustible-construction.svg";
import image4 from "../images/Icons/firewall.svg";
import Breadcrumb from "../common-component/Breadcrumb";
import Tab from "../common-component/Tab";
import image5 from "../images/Icons/form-unit-profiles.svg";
import image6 from "../images/Icons/BIM-library.svg";
import image7 from "../images/Icons/early-design-criteria.svg";
import image9 from "../images/Icons/pdf-gray.svg";
import image10 from "../images/Icons/Download.svg";
import image11 from "../images/Icons/dwg.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./below-the-construction-slope.css";

const NonCombustibleConstruction = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("slab-on-grade");
  const [searchFilters, setSearchFilters] = useState({
    fileName: "",
    thickness: "",
    description: "",
  });

  // Sample data structure - you can expand this with your actual data
  const tableData = {
    "slab-on-grade": [
      {
        description: t("insulated_brick_6_152mm"),
        coreThickness: t("6"),
        claddingType: t("with_bricks"),
        insulation: t("isolated"),
        fileName: t("b6c10"),
        isIsolated: true,
      },
      {
        description: t("insulated_brick_6_152mm"),
        coreThickness: t("6"),
        claddingType: t("with_bricks"),
        insulation: t("isolated"),
        fileName: t("b6c10"),
        isIsolated: true,
      },
      {
        description: t("insulated_brick_6_152mm"),
        coreThickness: t("6"),
        claddingType: t("with_bricks"),
        insulation: t("isolated"),
        fileName: t("b6c10"),
        isIsolated: true,
      },
      {
        description: t("insulated_brick_6_152mm"),
        coreThickness: t("6"),
        claddingType: t("with_bricks"),
        insulation: t("isolated"),
        fileName: t("b6c10"),
        isIsolated: true,
      },
      {
        description: t("insulated_brick_6_152mm"),
        coreThickness: t("6"),
        claddingType: t("with_bricks"),
        insulation: t("not_isolated"),
        fileName: t("b6c10"),
        isIsolated: false,
      },
      {
        description: t("insulated_brick_6_152mm"),
        coreThickness: t("6"),
        claddingType: t("with_bricks"),
        insulation: t("not_isolated"),
        fileName: t("b6c10"),
        isIsolated: false,
      },
      {
        description: t("insulated_brick_6_152mm"),
        coreThickness: t("6"),
        claddingType: t("with_bricks"),
        insulation: t("not_isolated"),
        fileName: t("b6c10"),
        isIsolated: false,
      },
      {
        description: t("insulated_brick_6_152mm"),
        coreThickness: t("6"),
        claddingType: t("with_bricks"),
        insulation: t("not_isolated"),
        fileName: t("b6c10"),
        isIsolated: false,
      },
    ],
    "grade-at-floor": [
      {
        description: t("insulated_brick_6_152mm"),
        coreThickness: t("6"),
        claddingType: t("with_bricks"),
        insulation: t("isolated"),
        fileName: t("b6c10"),
        isIsolated: true,
      },
      {
        description: t("insulated_brick_6_152mm"),
        coreThickness: t("6"),
        claddingType: t("with_bricks"),
        insulation: t("isolated"),
        fileName: t("b6c10"),
        isIsolated: true,
      },
      {
        description: t("insulated_brick_6_152mm"),
        coreThickness: t("6"),
        claddingType: t("with_bricks"),
        insulation: t("isolated"),
        fileName: t("b6c10"),
        isIsolated: true,
      },
      {
        description: t("insulated_brick_6_152mm"),
        coreThickness: t("6"),
        claddingType: t("with_bricks"),
        insulation: t("isolated"),
        fileName: t("b6c10"),
        isIsolated: true,
      },
      {
        description: t("insulated_brick_6_152mm"),
        coreThickness: t("6"),
        claddingType: t("with_bricks"),
        insulation: t("not_isolated"),
        fileName: t("b6c10"),
        isIsolated: false,
      },
      {
        description: t("insulated_brick_6_152mm"),
        coreThickness: t("6"),
        claddingType: t("with_bricks"),
        insulation: t("not_isolated"),
        fileName: t("b6c10"),
        isIsolated: false,
      },
      {
        description: t("insulated_brick_6_152mm"),
        coreThickness: t("6"),
        claddingType: t("with_bricks"),
        insulation: t("not_isolated"),
        fileName: t("b6c10"),
        isIsolated: false,
      },
      {
        description: t("insulated_brick_6_152mm"),
        coreThickness: t("6"),
        claddingType: t("with_bricks"),
        insulation: t("not_isolated"),
        fileName: t("b6c10"),
        isIsolated: false,
      },
    ],
    "intermediate-floor": [
      {
        description: t("insulated_brick_6_152mm"),
        coreThickness: t("6"),
        claddingType: t("with_bricks"),
        insulation: t("isolated"),
        fileName: t("b6c10"),
        isIsolated: true,
      },
      // Add more data for this tab
    ],
    "roof-connections": [
      {
        description: t("insulated_brick_6_152mm"),
        coreThickness: t("6"),
        claddingType: t("with_bricks"),
        insulation: t("isolated"),
        fileName: t("b6c10"),
        isIsolated: true,
      },
      {
        description: t("insulated_brick_6_152mm"),
        coreThickness: t("6"),
        claddingType: t("with_bricks"),
        insulation: t("isolated"),
        fileName: t("b6c10"),
        isIsolated: true,
      },
      {
        description: t("insulated_brick_6_152mm"),
        coreThickness: t("6"),
        claddingType: t("with_bricks"),
        insulation: t("isolated"),
        fileName: t("b6c10"),
        isIsolated: true,
      },
      {
        description: t("insulated_brick_6_152mm"),
        coreThickness: t("6"),
        claddingType: t("with_bricks"),
        insulation: t("isolated"),
        fileName: t("b6c10"),
        isIsolated: true,
      },
      {
        description: t("insulated_brick_6_152mm"),
        coreThickness: t("6"),
        claddingType: t("with_bricks"),
        insulation: t("not_isolated"),
        fileName: t("b6c10"),
        isIsolated: false,
      },
      {
        description: t("insulated_brick_6_152mm"),
        coreThickness: t("6"),
        claddingType: t("with_bricks"),
        insulation: t("not_isolated"),
        fileName: t("b6c10"),
        isIsolated: false,
      },
      {
        description: t("insulated_brick_6_152mm"),
        coreThickness: t("6"),
        claddingType: t("with_bricks"),
        insulation: t("not_isolated"),
        fileName: t("b6c10"),
        isIsolated: false,
      },
      {
        description: t("insulated_brick_6_152mm"),
        coreThickness: t("6"),
        claddingType: t("with_bricks"),
        insulation: t("not_isolated"),
        fileName: t("b6c10"),
        isIsolated: false,
      },
    ],
    doors: [
      {
        description: t("insulated_brick_6_152mm"),
        coreThickness: t("6"),
        claddingType: t("with_bricks"),
        insulation: t("isolated"),
        fileName: t("b6c10"),
        isIsolated: true,
      },
      {
        description: t("insulated_brick_6_152mm"),
        coreThickness: t("6"),
        claddingType: t("with_bricks"),
        insulation: t("isolated"),
        fileName: t("b6c10"),
        isIsolated: true,
      },
      {
        description: t("insulated_brick_6_152mm"),
        coreThickness: t("6"),
        claddingType: t("with_bricks"),
        insulation: t("isolated"),
        fileName: t("b6c10"),
        isIsolated: true,
      },
      {
        description: t("insulated_brick_6_152mm"),
        coreThickness: t("6"),
        claddingType: t("with_bricks"),
        insulation: t("isolated"),
        fileName: t("b6c10"),
        isIsolated: true,
      },
      {
        description: t("insulated_brick_6_152mm"),
        coreThickness: t("6"),
        claddingType: t("with_bricks"),
        insulation: t("not_isolated"),
        fileName: t("b6c10"),
        isIsolated: false,
      },
      {
        description: t("insulated_brick_6_152mm"),
        coreThickness: t("6"),
        claddingType: t("with_bricks"),
        insulation: t("not_isolated"),
        fileName: t("b6c10"),
        isIsolated: false,
      },
      {
        description: t("insulated_brick_6_152mm"),
        coreThickness: t("6"),
        claddingType: t("with_bricks"),
        insulation: t("not_isolated"),
        fileName: t("b6c10"),
        isIsolated: false,
      },
      {
        description: t("insulated_brick_6_152mm"),
        coreThickness: t("6"),
        claddingType: t("with_bricks"),
        insulation: t("not_isolated"),
        fileName: t("b6c10"),
        isIsolated: false,
      },
    ],
    "demising-wall": [
      {
        description: t("insulated_brick_6_152mm"),
        coreThickness: t("6"),
        claddingType: t("with_bricks"),
        insulation: t("isolated"),
        fileName: t("b6c10"),
        isIsolated: true,
      },
      {
        description: t("insulated_brick_6_152mm"),
        coreThickness: t("6"),
        claddingType: t("with_bricks"),
        insulation: t("isolated"),
        fileName: t("b6c10"),
        isIsolated: true,
      },
      {
        description: t("insulated_brick_6_152mm"),
        coreThickness: t("6"),
        claddingType: t("with_bricks"),
        insulation: t("isolated"),
        fileName: t("b6c10"),
        isIsolated: true,
      },
      {
        description: t("insulated_brick_6_152mm"),
        coreThickness: t("6"),
        claddingType: t("with_bricks"),
        insulation: t("isolated"),
        fileName: t("b6c10"),
        isIsolated: true,
      },
      {
        description: t("insulated_brick_6_152mm"),
        coreThickness: t("6"),
        claddingType: t("with_bricks"),
        insulation: t("not_isolated"),
        fileName: t("b6c10"),
        isIsolated: false,
      },
      {
        description: t("insulated_brick_6_152mm"),
        coreThickness: t("6"),
        claddingType: t("with_bricks"),
        insulation: t("not_isolated"),
        fileName: t("b6c10"),
        isIsolated: false,
      },
      {
        description: t("insulated_brick_6_152mm"),
        coreThickness: t("6"),
        claddingType: t("with_bricks"),
        insulation: t("not_isolated"),
        fileName: t("b6c10"),
        isIsolated: false,
      },
      {
        description: t("insulated_brick_6_152mm"),
        coreThickness: t("6"),
        claddingType: t("with_bricks"),
        insulation: t("not_isolated"),
        fileName: t("b6c10"),
        isIsolated: false,
      },
    ],
    windows: [
      {
        description: t("insulated_brick_6_152mm"),
        coreThickness: t("6"),
        claddingType: t("with_bricks"),
        insulation: t("isolated"),
        fileName: t("b6c10"),
        isIsolated: true,
      },
      {
        description: t("insulated_brick_6_152mm"),
        coreThickness: t("6"),
        claddingType: t("with_bricks"),
        insulation: t("isolated"),
        fileName: t("b6c10"),
        isIsolated: true,
      },
      {
        description: t("insulated_brick_6_152mm"),
        coreThickness: t("6"),
        claddingType: t("with_bricks"),
        insulation: t("isolated"),
        fileName: t("b6c10"),
        isIsolated: true,
      },
      {
        description: t("insulated_brick_6_152mm"),
        coreThickness: t("6"),
        claddingType: t("with_bricks"),
        insulation: t("isolated"),
        fileName: t("b6c10"),
        isIsolated: true,
      },
      {
        description: t("insulated_brick_6_152mm"),
        coreThickness: t("6"),
        claddingType: t("with_bricks"),
        insulation: t("not_isolated"),
        fileName: t("b6c10"),
        isIsolated: false,
      },
      {
        description: t("insulated_brick_6_152mm"),
        coreThickness: t("6"),
        claddingType: t("with_bricks"),
        insulation: t("not_isolated"),
        fileName: t("b6c10"),
        isIsolated: false,
      },
      {
        description: t("insulated_brick_6_152mm"),
        coreThickness: t("6"),
        claddingType: t("with_bricks"),
        insulation: t("not_isolated"),
        fileName: t("b6c10"),
        isIsolated: false,
      },
      {
        description: t("insulated_brick_6_152mm"),
        coreThickness: t("6"),
        claddingType: t("with_bricks"),
        insulation: t("not_isolated"),
        fileName: t("b6c10"),
        isIsolated: false,
      },
    ],
  };

  const tabs = [
    { id: "slab-on-grade", label: t("slab_on_grade") },
    { id: "grade-at-floor", label: t("grade_at_floor") },
    { id: "intermediate-floor", label: t("intermediate_floor") },
    { id: "roof-connections", label: t("roof_connections") },
    { id: "doors", label: t("doors") },
    {
      id: "demising-wall",
      label: t("demising_wall_intermediate_floor_connections"),
    },
    { id: "windows", label: t("windows") },
  ];

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setSearchFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    // Search is automatically applied through filteredData
    console.log("Search triggered with filters:", searchFilters);
  };

  const handleClearSearch = () => {
    setSearchFilters({
      fileName: "",
      thickness: "",
      description: "",
    });
  };

  // Filter data based on search criteria
  const filteredData = useMemo(() => {
    const currentData = tableData[activeTab] || [];

    return currentData.filter((item) => {
      const matchesFileName =
        !searchFilters.fileName ||
        item.fileName
          .toLowerCase()
          .includes(searchFilters.fileName.toLowerCase());

      const matchesThickness =
        !searchFilters.thickness ||
        item.coreThickness
          .toLowerCase()
          .includes(searchFilters.thickness.toLowerCase());

      const matchesDescription =
        !searchFilters.description ||
        item.description
          .toLowerCase()
          .includes(searchFilters.description.toLowerCase());

      return matchesFileName && matchesThickness && matchesDescription;
    });
  }, [activeTab, searchFilters, tableData]);

  const renderTableRow = (item, index) => (
    <tr key={index} className="dlinfo">
      <td className="dlinfo hover01">{item.description}</td>
      <td className="dlinfo hover01">{item.coreThickness}</td>
      <td className="dlinfo hover01">
        <span className="status with-bricks">{item.claddingType}</span>
      </td>
      <td className="dlinfo hover01">
        <span className={`status ${!item.isIsolated ? "not-isolated" : ""}`}>
          {item.insulation}
        </span>
      </td>
      <td className="dlinfo hover01">{item.fileName}</td>
      <td className="dlinfo hover01">
        <a className="explanation-link">{t("explanation_page")}</a>
      </td>
      <td className="dlinfo hover01">
        <ul className="file-list-inner-td">
          <li>
            <a className="red-link">
              <div className="icon-band">
                <img src={image9} alt="PDF" />
              </div>
              {t("pdf")}
              <img src={image10} className="download-icon" alt="Download" />
            </a>
          </li>
          <li>
            <a className="blue-link">
              <div className="icon-band">
                <img src={image11} alt="DWG" />
              </div>
              {t("dwg")}
              <img src={image10} className="download-icon" alt="Download" />
            </a>
          </li>
        </ul>
      </td>
    </tr>
  );

  return (
    <div>
      <Breadcrumb
        header={t("non_combustible_construction")}
        subHeader={t("building_homes_also_for_the_generations_to_come")}
      />

      <section>
        <div className="container">
          <div className="row g-4">
            <div className="col-md-3">
              <div className="card icon-top-primary-card h-245">
                <Link
                  to="/belowtheconstructionslope"
                  className="icon-card top-icon-band blue cus-p-16"
                >
                  <div className="icon-band">
                    <img src={image1} alt={t("below_the_construction_slope")} />
                  </div>
                </Link>
                <div className="text-band">
                  <h4>{t("below_the_construction_slope")}</h4>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card icon-top-primary-card h-245">
                <Link
                  to="/flamableconstruction"
                  className="icon-card top-icon-band yellow cus-p-16"
                >
                  <div className="icon-band">
                    <img src={image2} alt={t("flammable_construction")} />
                  </div>
                </Link>
                <div className="text-band">
                  <h4>{t("flammable_construction")}</h4>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card icon-top-primary-card h-245">
                <Link
                  to="/noncombstibleconstruction"
                  className="icon-card top-icon-band gray cus-p-16"
                >
                  <div className="icon-band">
                    <img src={image3} alt={t("non_combustible_construction")} />
                  </div>
                </Link>
                <div className="text-band">
                  <h4>{t("non_combustible_construction")}</h4>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card icon-top-primary-card h-245">
                <Link
                  to="/firewall"
                  className="icon-card top-icon-band red cus-p-16"
                >
                  <div className="icon-band">
                    <img src={image4} alt={t("firewall")} />
                  </div>
                </Link>
                <div className="text-band">
                  <h4>{t("firewall")}</h4>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card icon-top-primary-card h-245">
                <Link
                  to="/formunitprofile"
                  className="icon-card top-icon-band green cus-p-16"
                >
                  <div className="icon-band">
                    <img src={image5} alt={t("form_unit_profiles")} />
                  </div>
                </Link>
                <div className="text-band">
                  <h4>{t("form_unit_profiles")}</h4>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card icon-top-primary-card h-245">
                <Link
                  to="/bimlibrary"
                  className="icon-card top-icon-band orange cus-p-16"
                >
                  <div className="icon-band">
                    <img src={image6} alt={t("bim_library")} />
                  </div>
                </Link>
                <div className="text-band">
                  <h4>{t("bim_library")}</h4>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card icon-top-primary-card h-245">
                <Link
                  to="/earlydesigncriteria"
                  className="icon-card top-icon-band purple cus-p-16"
                >
                  <div className="icon-band">
                    <img src={image7} alt={t("early_design_criteria")} />
                  </div>
                </Link>
                <div className="text-band">
                  <h4>{t("early_design_criteria")}</h4>
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
                <h3 className="text-primary mb-3">
                  {t("non_combustible_construction")}
                </h3>
                <p className="dark-font-600 mt-2 mb-2">
                  {t(
                    "use_this_section_to_learn_more_and_see_examples_of_how_to_use_nudura_icfs_for_non_combustible_building_applications_a_key_advantage_of_using_icfs_is_faster_installation_times_which_you_can_achieve_when_the_floor_to_ceiling_height_stays_the_same_on_each_in_a_multi_storey_building"
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-0">
        <div className="container">
          <div className="belowTheConstructionSlope-container">
            <div className="search-penal bg-penal">
              <div className="left-penal">
                <div className="form-group w-30">
                  <label htmlFor="fileName" className="form-label">
                    {t("file_name")}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fileName"
                    name="fileName"
                    value={searchFilters.fileName}
                    onChange={handleSearchChange}
                    placeholder={t("search_here")}
                  />
                </div>
                <div className="form-group w-40">
                  <label htmlFor="thickness" className="form-label">
                    {t("thickness")}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="thickness"
                    name="thickness"
                    value={searchFilters.thickness}
                    onChange={handleSearchChange}
                    placeholder={t("search_here")}
                  />
                </div>
                <div className="form-group w-30 border-none">
                  <label htmlFor="description" className="form-label">
                    {t("description")}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    name="description"
                    value={searchFilters.description}
                    onChange={handleSearchChange}
                    placeholder={t("search_here")}
                  />
                </div>
              </div>
              <div className="right-penal">
                <a onClick={handleSearch} className="btn-primary">
                  {t("search")}
                  <i className="fa-solid fa-magnifying-glass"></i>
                </a>
                <a
                  onClick={handleClearSearch}
                  className="btn-primary white-border-btn"
                >
                  {t("clear")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-0">
        <div className="container">
          <Tab
            tabs={tabs}
            defaultActiveTab="slab-on-grade"
            onTabChange={handleTabChange}
          />
        </div>
        <div className="container">
          <section className="white-bg pt-0">
            {activeTab === "slab-on-grade" && (
              <div className="titile-band">
                <h3 className="text-primary text-center">
                  {t("slab_on_grade")}
                </h3>
              </div>
            )}

            <table className="dltrc" style={{ background: "none" }}>
              <tbody>
                <tr className="dlheader">
                  <td className="dlheader">{t("description")}</td>
                  <td className="dlheader">{t("core_thickness")}</td>
                  <td className="dlheader">{t("cladding_type")}</td>
                  <td className="dlheader">{t("insulation")}</td>
                  <td className="dlheader">{t("file_name")}</td>
                  <td className="dlheader">{t("explanation_page")}</td>
                  <td className="dlheader">{t("files")}</td>
                </tr>
                {filteredData.length > 0 ? (
                  filteredData.map((item, index) => renderTableRow(item, index))
                ) : (
                  <tr>
                    <td
                      colSpan="7"
                      style={{ textAlign: "center", padding: "20px" }}
                    >
                      {t("no_results_found") || "No results found"}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </section>
        </div>
      </section>
    </div>
  );
};

export default NonCombustibleConstruction;
