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

  // Complete data structure with nested sections
  const tableData = {
    "slab-on-grade": {
      sections: [
        {
          title: "brick_insulated",
          items: [
            {
              description: "6_head_and_sill_brick",
              coreThickness: "6",
              claddingType: "with_bricks",
              insulation: "isolated",
              fileName: "B6C10",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/SlabonGrade/Insulated Brick/6_ Head and Sill Brick(152mm) B6C10.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/SlabonGrade/Insulated Brick/b6c10.dwg",
            },
            {
              description: "8_concrete_core_brick",
              coreThickness: "8",
              claddingType: "with_bricks",
              insulation: "isolated",
              fileName: "B8C11",
              
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/SlabonGrade/Insulated Brick/8_ (203mm) Concrete core B8C11.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/SlabonGrade/Insulated Brick/b8c11.dwg",
            },
            {
              description: "10_concrete_core",
              coreThickness: "10",
              claddingType: "with_bricks",
              insulation: "isolated",
              fileName: "B10C09",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/SlabonGrade/Insulated Brick/8_ (254mm) Concrete core B10C07.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/SlabonGrade/Insulated Brick/b10c07.dwg",
            },
            {
              description: "12_concrete_core",
              coreThickness: "12",
              claddingType: "with_bricks",
              insulation: "isolated",
              fileName: "B12C06",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/SlabonGrade/Insulated Brick/12_ (305mm) Concrete core B12C061.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/SlabonGrade/Insulated Brick/b12c06.dwg",
            },
          ],
        },
        {
          title: "brick_non_insulated",
          items: [
            {
              description: "6_concrete_core_brick",
              coreThickness: "6",
              claddingType: "with_bricks",
              insulation: "not_isolated",
              fileName: "B6C11",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/SlabonGrade/Non- Brick Insulated/6_ (152mm) Concrete core B6C07.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/SlabonGrade/Non- Brick Insulated/B6C11.dwg",
            },
            {
              description: "8_concrete_core_brick",
              coreThickness: "8",
              claddingType: "with_bricks",
              insulation: "not_isolated",
              fileName: "B8C12",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/SlabonGrade/Non- Brick Insulated/B8C12.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/SlabonGrade/Non- Brick Insulated/B8C12.dwg",
            },
            {
              description: "10_concrete_core_brick",
              coreThickness: "10",
              claddingType: "with_bricks",
              insulation: "not_isolated",
              fileName: "B10C06",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/SlabonGrade/Non- Brick Insulated/B10C06.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/SlabonGrade/Non- Brick Insulated/B10C06.dwg",
            },
            {
              description: "12_concrete_core_brick",
              coreThickness: "12",
              claddingType: "with_bricks",
              insulation: "not_isolated",
              fileName: "B12C01",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/SlabonGrade/Non- Brick Insulated/B12C01.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/SlabonGrade/Non- Brick Insulated/B12C01.dwg",
            },
          ],
        },
        {
          title: "non_brick_insulated",
          items: [
            {
              description: "6_concrete_core",
              coreThickness: "6",
              claddingType: "without_bricks",
              insulation: "isolated",
              fileName: "B6C01",
              pdfUrl: "/files/slab-on-grade/non-brick-insulated/B6C01.pdf",
              dwgUrl: "/files/slab-on-grade/non-brick-insulated/B6C01.dwg",
            },
            {
              description: "8_concrete_core",
              coreThickness: "8",
              claddingType: "without_bricks",
              insulation: "isolated",
              fileName: "B8C08",
              pdfUrl: "/files/slab-on-grade/non-brick-insulated/B8C08.pdf",
              dwgUrl: "/files/slab-on-grade/non-brick-insulated/B8C08.dwg",
            },
            {
              description: "10_concrete_core",
              coreThickness: "10",
              claddingType: "without_bricks",
              insulation: "isolated",
              fileName: "B10C04",
              pdfUrl: "/files/slab-on-grade/non-brick-insulated/B10C04.pdf",
              dwgUrl: "/files/slab-on-grade/non-brick-insulated/B10C04.dwg",
            },
            {
              description: "12_concrete_core",
              coreThickness: "12",
              claddingType: "without_bricks",
              insulation: "isolated",
              fileName: "B12C03",
              pdfUrl: "/files/slab-on-grade/non-brick-insulated/B12C03.pdf",
              dwgUrl: "/files/slab-on-grade/non-brick-insulated/B12C03.dwg",
            },
          ],
        },
        {
          title: "non_brick_non_insulated",
          items: [
            {
              description: "6_concrete_core",
              coreThickness: "6",
              claddingType: "without_bricks",
              insulation: "not_isolated",
              fileName: "B6C01",
              pdfUrl: "/files/slab-on-grade/non-brick-non-insulated/B6C01.pdf",
              dwgUrl: "/files/slab-on-grade/non-brick-non-insulated/B6C01.dwg",
            },
            {
              description: "8_concrete_core",
              coreThickness: "8",
              claddingType: "without_bricks",
              insulation: "not_isolated",
              fileName: "B8C06",
              pdfUrl: "/files/slab-on-grade/non-brick-non-insulated/B8C06.pdf",
              dwgUrl: "/files/slab-on-grade/non-brick-non-insulated/B8C06.dwg",
            },
            {
              description: "10_concrete_core",
              coreThickness: "10",
              claddingType: "without_bricks",
              insulation: "not_isolated",
              fileName: "B10C05",
              pdfUrl: "/files/slab-on-grade/non-brick-non-insulated/B10C05.pdf",
              dwgUrl: "/files/slab-on-grade/non-brick-non-insulated/B10C05.dwg",
            },
            {
              description: "12_concrete_core",
              coreThickness: "12",
              claddingType: "without_bricks",
              insulation: "not_isolated",
              fileName: "B12C01",
              pdfUrl: "/files/slab-on-grade/non-brick-non-insulated/B12C01.pdf",
              dwgUrl: "/files/slab-on-grade/non-brick-non-insulated/B12C01.dwg",
            },
          ],
        },
      ],
    },
    "grade-at-floor": {
      sections: [
        {
          title: "brick_insulated",
          items: [
            {
              description: "6_head_and_sill_brick",
              coreThickness: "6",
              claddingType: "with_bricks",
              insulation: "isolated",
              fileName: "GF-B6C10",
              pdfUrl: "/files/grade-at-floor/brick-insulated/GF-B6C10.pdf",
              dwgUrl: "/files/grade-at-floor/brick-insulated/GF-B6C10.dwg",
            },
            {
              description: "8_concrete_core_brick",
              coreThickness: "8",
              claddingType: "with_bricks",
              insulation: "isolated",
              fileName: "GF-B8C11",
              pdfUrl: "/files/grade-at-floor/brick-insulated/GF-B8C11.pdf",
              dwgUrl: "/files/grade-at-floor/brick-insulated/GF-B8C11.dwg",
            },
          ],
        },
        {
          title: "brick_non_insulated",
          items: [
            {
              description: "6_concrete_core_brick",
              coreThickness: "6",
              claddingType: "with_bricks",
              insulation: "not_isolated",
              fileName: "GF-B6C11",
              pdfUrl: "/files/grade-at-floor/brick-non-insulated/GF-B6C11.pdf",
              dwgUrl: "/files/grade-at-floor/brick-non-insulated/GF-B6C11.dwg",
            },
          ],
        },
      ],
    },
    "intermediate-floor": {
      sections: [
        {
          title: "brick_insulated",
          items: [
            {
              description: "6_head_and_sill_brick",
              coreThickness: "6",
              claddingType: "with_bricks",
              insulation: "isolated",
              fileName: "IF-B6C10",
              pdfUrl: "/files/intermediate-floor/brick-insulated/IF-B6C10.pdf",
              dwgUrl: "/files/intermediate-floor/brick-insulated/IF-B6C10.dwg",
            },
          ],
        },
      ],
    },
    "roof-connections": {
      sections: [
        {
          title: "brick_insulated",
          items: [
            {
              description: "6_head_and_sill_brick",
              coreThickness: "6",
              claddingType: "with_bricks",
              insulation: "isolated",
              fileName: "RC-B6C10",
              pdfUrl: "/files/roof-connections/brick-insulated/RC-B6C10.pdf",
              dwgUrl: "/files/roof-connections/brick-insulated/RC-B6C10.dwg",
            },
          ],
        },
      ],
    },
    doors: {
      sections: [
        {
          title: "brick_insulated",
          items: [
            {
              description: "6_head_and_sill_brick",
              coreThickness: "6",
              claddingType: "with_bricks",
              insulation: "isolated",
              fileName: "D-B6C10",
              pdfUrl: "/files/doors/brick-insulated/D-B6C10.pdf",
              dwgUrl: "/files/doors/brick-insulated/D-B6C10.dwg",
            },
          ],
        },
      ],
    },
    "demising-wall": {
      sections: [
        {
          title: "brick_insulated",
          items: [
            {
              description: "6_head_and_sill_brick",
              coreThickness: "6",
              claddingType: "with_bricks",
              insulation: "isolated",
              fileName: "DW-B6C10",
              pdfUrl: "/files/demising-wall/brick-insulated/DW-B6C10.pdf",
              dwgUrl: "/files/demising-wall/brick-insulated/DW-B6C10.dwg",
            },
          ],
        },
      ],
    },
    windows: {
      sections: [
        {
          title: "brick_insulated",
          items: [
            {
              description: "6_head_and_sill_brick",
              coreThickness: "6",
              claddingType: "with_bricks",
              insulation: "isolated",
              fileName: "W-B6C10",
              pdfUrl: "/files/windows/brick-insulated/W-B6C10.pdf",
              dwgUrl: "/files/windows/brick-insulated/W-B6C10.dwg",
            },
          ],
        },
      ],
    },
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
    console.log("Search triggered with filters:", searchFilters);
  };

  const handleClearSearch = () => {
    setSearchFilters({
      fileName: "",
      thickness: "",
      description: "",
    });
  };

  const handleDownload = (url, fileName) => {
    // Create a temporary link element
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filter data based on search criteria
  const filteredSections = useMemo(() => {
    const currentTabData = tableData[activeTab];
    if (!currentTabData || !currentTabData.sections) return [];

    return currentTabData.sections
      .map((section) => ({
        ...section,
        items: section.items.filter((item) => {
          const matchesFileName =
            !searchFilters.fileName ||
            item.fileName
              .toLowerCase()
              .includes(searchFilters.fileName.toLowerCase());

          const matchesThickness =
            !searchFilters.thickness ||
            t(item.coreThickness)
              .toLowerCase()
              .includes(searchFilters.thickness.toLowerCase());

          const matchesDescription =
            !searchFilters.description ||
            t(item.description)
              .toLowerCase()
              .includes(searchFilters.description.toLowerCase());

          return matchesFileName && matchesThickness && matchesDescription;
        }),
      }))
      .filter((section) => section.items.length > 0);
  }, [activeTab, searchFilters, t]);

  const renderTableRow = (item, index) => {
    const isIsolated = item.insulation === "isolated";

    return (
      <tr key={index} className="dlinfo">
        <td className="dlinfo hover01">{t(item.description)}</td>
        <td className="dlinfo hover01">{t(item.coreThickness)}</td>
        <td className="dlinfo hover01">
          <span className="status with-bricks">{t(item.claddingType)}</span>
        </td>
        <td className="dlinfo hover01">
          <span className={`status ${!isIsolated ? "not-isolated" : ""}`}>
            {t(item.insulation)}
          </span>
        </td>
        <td className="dlinfo hover01">{item.fileName}</td>
        <td className="dlinfo hover01">
          <a href="#" className="explanation-link">
            {t("explanation_page")}
          </a>
        </td>
        <td className="dlinfo hover01">
          <ul className="file-list-inner-td">
            <li>
              <a
                className="red-link"
                onClick={() =>
                  handleDownload(item.pdfUrl, `${item.fileName}.pdf`)
                }
                style={{ cursor: "pointer" }}
              >
                <div className="icon-band">
                  <img src={image9} alt="PDF" />
                </div>
                {t("pdf")}
                <img src={image10} className="download-icon" alt="Download" />
              </a>
            </li>
            <li>
              <a
                className="blue-link"
                onClick={() =>
                  handleDownload(item.dwgUrl, `${item.fileName}.dwg`)
                }
                style={{ cursor: "pointer" }}
              >
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
  };

  const renderSection = (section, sectionIndex) => (
    <div key={sectionIndex} className="section-container mb-4">
      <div className="section-header">
        <h4 className="text-primary">{t(section.title)}</h4>
      </div>
      <table
        className="dltrc"
        style={{ background: "none", marginBottom: "30px" }}
      >
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
          {section.items.map((item, index) => renderTableRow(item, index))}
        </tbody>
      </table>
    </div>
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
            <div className="titile-band">
              <h3 className="text-primary text-center">
                {tabs.find((tab) => tab.id === activeTab)?.label}
              </h3>
            </div>

            {filteredSections.length > 0 ? (
              filteredSections.map((section, index) =>
                renderSection(section, index)
              )
            ) : (
              <div style={{ textAlign: "center", padding: "40px" }}>
                <p>{t("no_results_found")}</p>
              </div>
            )}
          </section>
        </div>
      </section>
    </div>
  );
};

export default NonCombustibleConstruction;
