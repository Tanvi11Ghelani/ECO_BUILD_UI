import React, { useState } from "react";
import image1 from "../images/Icons/below-the-construction-slope.svg";
import image2 from "../images/Icons/flammable-construction.svg";
import image3 from "../images/Icons/Non-combustible-construction.svg";
import image4 from "../images/Icons/firewall.svg";
import Breadcrumb from "../common-component/Breadcrumb";
import Tab from "../common-component/Tab";
import image5 from "../images/Icons/form-unit-profiles.svg";
import image6 from "../images/Icons/BIM-library.svg";
import image7 from "../images/Icons/early-design-criteria.svg";
import image8 from "../images/Icons/early-design-criteria-1.svg";
import image9 from "../images/Icons/pdf-gray.svg";
import image10 from "../images/Icons/Download.svg";
import image11 from "../images/Icons/dwg.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./below-the-construction-slope.css";

const BelowTheConstructionSlope = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("below-grade-slab");

  const [searchInputs, setSearchInputs] = useState({
    fileName: "",
    thickness: "",
    description: "",
  });

  // Move all data arrays inside the component so they can use t()
  const BelowGrade = [
    {
      title: t("belowConstructionSlope.insulatedConcrete6"),
      size: t("belowConstructionSlope.size6"),
      status: t("belowConstructionSlope.isolated"),
      code: "B6A02",
      pdf: "EcoBuildPdf/BelowtheConstSlop/BelowGradeSlab/FloorbelowGL-insulated/DWGB6A02.pdf",
      dwg: "EcoBuildPdf/BelowtheConstSlop/BelowGradeSlab/FloorbelowGL-insulated/B6A02.dwg",
    },
    {
      title: t("belowConstructionSlope.insulatedConcrete8"),
      size: t("belowConstructionSlope.size8"),
      status: t("belowConstructionSlope.isolated"),
      code: "B8A04",
      pdf: "EcoBuildPdf/BelowtheConstSlop/BelowGradeSlab/FloorbelowGL-insulated/DWGB8A04.pdf",
      dwg: "EcoBuildPdf/BelowtheConstSlop/BelowGradeSlab/FloorbelowGL-insulated/B8A04.dwg",
    },
    {
      title: t("belowConstructionSlope.insulatedConcrete10"),
      size: t("belowConstructionSlope.size10"),
      status: t("belowConstructionSlope.isolated"),
      code: "B10A03",
      pdf: "EcoBuildPdf/BelowtheConstSlop/BelowGradeSlab/FloorbelowGL-insulated/DWGB10A03.pdf",
      dwg: "EcoBuildPdf/BelowtheConstSlop/BelowGradeSlab/FloorbelowGL-insulated/B10A03.dwg",
    },
    {
      title: t("belowConstructionSlope.insulatedConcrete12"),
      size: t("belowConstructionSlope.size12"),
      status: t("belowConstructionSlope.isolated"),
      code: "B12A02",
      pdf: "EcoBuildPdf/BelowtheConstSlop/BelowGradeSlab/FloorbelowGL-insulated/DWGB12A02.pdf",
      dwg: "EcoBuildPdf/BelowtheConstSlop/BelowGradeSlab/FloorbelowGL-insulated/B12A02.dwg",
    },
    {
      title: t("belowConstructionSlope.uninsulatedConcrete6"),
      size: t("belowConstructionSlope.size6"),
      status: t("belowConstructionSlope.notIsolated"),
      code: "B6A01",
      pdf: "EcoBuildPdf/BelowtheConstSlop/BelowGradeSlab/FloorBelowGL-Notinsulated/DWGB6A01.pdf",
      dwg: "EcoBuildPdf/BelowtheConstSlop/BelowGradeSlab/FloorBelowGL-Notinsulated/B6A01.dwg",
    },
    {
      title: t("belowConstructionSlope.uninsulatedConcrete8"),
      size: t("belowConstructionSlope.size8"),
      status: t("belowConstructionSlope.notIsolated"),
      code: "B8A01",
      pdf: "EcoBuildPdf/BelowtheConstSlop/BelowGradeSlab/FloorBelowGL-Notinsulated/DWGB8A01.pdf",
      dwg: "EcoBuildPdf/BelowtheConstSlop/BelowGradeSlab/FloorBelowGL-Notinsulated/B8A01.dwg",
    },
    {
      title: t("belowConstructionSlope.uninsulatedConcrete10"),
      size: t("belowConstructionSlope.size10"),
      status: t("belowConstructionSlope.notIsolated"),
      code: "B10A01",
      pdf: "EcoBuildPdf/BelowtheConstSlop/BelowGradeSlab/FloorBelowGL-Notinsulated/DWGB10A01.pdf",
      dwg: "EcoBuildPdf/BelowtheConstSlop/BelowGradeSlab/FloorBelowGL-Notinsulated/B10A01.dwg",
    },
    {
      title: t("belowConstructionSlope.uninsulatedConcrete12"),
      size: t("belowConstructionSlope.size12"),
      status: t("belowConstructionSlope.notIsolated"),
      code: "B12A01",
      pdf: "EcoBuildPdf/BelowtheConstSlop/BelowGradeSlab/FloorBelowGL-Notinsulated/DWGB12A01.pdf",
      dwg: "EcoBuildPdf/BelowtheConstSlop/BelowGradeSlab/FloorBelowGL-Notinsulated/B12A01.dwg",
    },
  ];

  const stemWall1Data = [
    {
      fileName: "B6A05",
      description: t("belowConstructionSlope.concrete6"),
      coreThickness: t("belowConstructionSlope.size6"),
      pdf: "/EcoBuildPdf/BelowtheConstSlop/StemWall/DWGB6A05.pdf",
      dwg: "/EcoBuildPdf/BelowtheConstSlop/StemWall/B6A05.dwg",
    },
    {
      fileName: "B8A06",
      description: t("belowConstructionSlope.concrete8"),
      coreThickness: t("belowConstructionSlope.size8"),
      pdf: "/EcoBuildPdf/BelowtheConstSlop/StemWall/DWGB8A06.pdf",
      dwg: "/EcoBuildPdf/BelowtheConstSlop/StemWall/B8A06.dwg",
    },
    {
      fileName: "B10A05",
      description: t("belowConstructionSlope.concrete10"),
      coreThickness: t("belowConstructionSlope.size10"),
      pdf: "/EcoBuildPdf/BelowtheConstSlop/StemWall/DWGB10A05.pdf",
      dwg: "/EcoBuildPdf/BelowtheConstSlop/StemWall/B10A05.dwg",
    },
    {
      fileName: "B12A04",
      description: t("belowConstructionSlope.concrete12"),
      coreThickness: t("belowConstructionSlope.size12"),
      pdf: "/EcoBuildPdf/BelowtheConstSlop/StemWall/DWGB12A04.pdf",
      dwg: "/EcoBuildPdf/BelowtheConstSlop/StemWall/B12A04.dwg",
    },
  ];

  const stemWall2Data = [
    {
      fileName: "B6C06",
      description: t("belowConstructionSlope.concrete6"),
      coreThickness: t("belowConstructionSlope.size6"),
      pdf: "/EcoBuildPdf/BelowtheConstSlop/StemWall4/DWGB6C06.pdf",
      dwg: "/EcoBuildPdf/BelowtheConstSlop/StemWall4/B6C06.dwg",
    },
    {
      fileName: "B8C07",
      description: t("belowConstructionSlope.concrete8"),
      coreThickness: t("belowConstructionSlope.size8"),
      pdf: "/EcoBuildPdf/BelowtheConstSlop/StemWall4/DWGB8C07.pdf",
      dwg: "/EcoBuildPdf/BelowtheConstSlop/StemWall4/B8C07.dwg",
    },
    {
      fileName: "B10C03",
      description: t("belowConstructionSlope.concrete10"),
      coreThickness: t("belowConstructionSlope.size10"),
      pdf: "/EcoBuildPdf/BelowtheConstSlop/StemWall4/DWGB10C03.pdf",
      dwg: "/EcoBuildPdf/BelowtheConstSlop/StemWall4/B10C03.dwg",
    },
    {
      fileName: "B12C04",
      description: t("belowConstructionSlope.concrete12"),
      coreThickness: t("belowConstructionSlope.size12"),
      pdf: "/EcoBuildPdf/BelowtheConstSlop/StemWall4/DWGB12C02.pdf",
      dwg: "/EcoBuildPdf/BelowtheConstSlop/StemWall4/B12C02.dwg",
    },
  ];

  const GreadBeams = [
    {
      description: t("belowConstructionSlope.concrete6"),
      coreThickness: t("belowConstructionSlope.size6"),
      insulation: t("belowConstructionSlope.isolated"),
      fileName: "B6C09",
      pdf: "/EcoBuildPdf/BelowtheConstSlop/GradeBeams/BelowGradeSlabInsulated/DWGB6C09.pdf",
      dwg: "/EcoBuildPdf/BelowtheConstSlop/GradeBeams/BelowGradeSlabInsulated/B6C09.dwg",
    },
    {
      description: t("belowConstructionSlope.concrete8"),
      coreThickness: t("belowConstructionSlope.size8"),
      insulation: t("belowConstructionSlope.isolated"),
      fileName: "B8C10",
      pdf: "/EcoBuildPdf/BelowtheConstSlop/GradeBeams/BelowGradeSlabInsulated/DWGB8C10.pdf",
      dwg: "/EcoBuildPdf/BelowtheConstSlop/GradeBeams/BelowGradeSlabInsulated/B8C10.dwg",
    },
    {
      description: t("belowConstructionSlope.concrete10"),
      coreThickness: t("belowConstructionSlope.size10"),
      insulation: t("belowConstructionSlope.isolated"),
      fileName: "B10C06",
      pdf: "/EcoBuildPdf/BelowtheConstSlop/GradeBeams/BelowGradeSlabInsulated/DWGB10C06.pdf",
      dwg: "/EcoBuildPdf/BelowtheConstSlop/GradeBeams/BelowGradeSlabInsulated/B10C06.dwg",
    },
    {
      description: t("belowConstructionSlope.concrete12"),
      coreThickness: t("belowConstructionSlope.size12"),
      insulation: t("belowConstructionSlope.isolated"),
      fileName: "B12C05",
      pdf: "/EcoBuildPdf/BelowtheConstSlop/GradeBeams/BelowGradeSlabInsulated/DWGB12C05.pdf",
      dwg: "/EcoBuildPdf/BelowtheConstSlop/GradeBeams/BelowGradeSlabInsulated/B12C05.dwg",
    },
    {
      description: t("belowConstructionSlope.uninsulatedConcrete6"),
      coreThickness: t("belowConstructionSlope.size6"),
      insulation: t("belowConstructionSlope.notIsolated"),
      fileName: "B6C08",
      pdf: "/EcoBuildPdf/BelowtheConstSlop/GradeBeams/BelowGradeNon-InsulatedSlab/DWGB6C08.pdf",
      dwg: "/EcoBuildPdf/BelowtheConstSlop/GradeBeams/BelowGradeNon-InsulatedSlab/B6C08.dwg",
    },
    {
      description: t("belowConstructionSlope.uninsulatedConcrete8"),
      coreThickness: t("belowConstructionSlope.size8"),
      insulation: t("belowConstructionSlope.notIsolated"),
      fileName: "B8C09",
      pdf: "/EcoBuildPdf/BelowtheConstSlop/GradeBeams/BelowGradeNon-InsulatedSlab/DWGB8C09.pdf",
      dwg: "/EcoBuildPdf/BelowtheConstSlop/GradeBeams/BelowGradeNon-InsulatedSlab/B8C09.dwg",
    },
    {
      description: t("belowConstructionSlope.uninsulatedConcrete10"),
      coreThickness: t("belowConstructionSlope.size10"),
      insulation: t("belowConstructionSlope.notIsolated"),
      fileName: "B10C05",
      pdf: "/EcoBuildPdf/BelowtheConstSlop/GradeBeams/BelowGradeNon-InsulatedSlab/DWGB6C10.pdf",
      dwg: "/EcoBuildPdf/BelowtheConstSlop/GradeBeams/BelowGradeNon-InsulatedSlab/B10C05.dwg",
    },
    {
      description: t("belowConstructionSlope.uninsulatedConcrete12"),
      coreThickness: t("belowConstructionSlope.size12"),
      insulation: t("belowConstructionSlope.notIsolated"),
      fileName: "B12C04",
      pdf: "/EcoBuildPdf/BelowtheConstSlop/GradeBeams/BelowGradeNon-InsulatedSlab/DWGB12C04.pdf",
      dwg: "/EcoBuildPdf/BelowtheConstSlop/GradeBeams/BelowGradeNon-InsulatedSlab/B12C04.dwg",
    },
  ];

  const SlabOnGrade = [
    {
      description: t("belowConstructionSlope.brickInsulated6"),
      coreThickness: t("belowConstructionSlope.size6"),
      claddingType: t("belowConstructionSlope.withBricks"),
      insulation: t("belowConstructionSlope.isolated"),
      fileName: "B6D03",
      pdf: "/EcoBuildPdf/BelowtheConstSlop/HaunchedSlabonGrade/InsulatedBrick/DWGB6D03.pdf",
      dwg: "/EcoBuildPdf/BelowtheConstSlop/HaunchedSlabonGrade/InsulatedBrick/B6D03.dwg",
    },
    {
      description: t("belowConstructionSlope.brickInsulated8"),
      coreThickness: t("belowConstructionSlope.size8"),
      claddingType: t("belowConstructionSlope.withBricks"),
      insulation: t("belowConstructionSlope.isolated"),
      fileName: "B8D03",
      pdf: "/EcoBuildPdf/BelowtheConstSlop/HaunchedSlabonGrade/InsulatedBrick/DWGB8D03.pdf",
      dwg: "/EcoBuildPdf/BelowtheConstSlop/HaunchedSlabonGrade/InsulatedBrick/B8D03.dwg",
    },
    {
      description: t("belowConstructionSlope.brickUninsulated6"),
      coreThickness: t("belowConstructionSlope.size6"),
      claddingType: t("belowConstructionSlope.withBricks"),
      insulation: t("belowConstructionSlope.notIsolated"),
      fileName: "B6D04",
      pdf: "/EcoBuildPdf/BelowtheConstSlop/HaunchedSlabonGrade/Non-InsulatedBrick/DWGB6D04.pdf",
      dwg: "/EcoBuildPdf/BelowtheConstSlop/HaunchedSlabonGrade/Non-InsulatedBrick/B6D04.dwg",
    },
    {
      description: t("belowConstructionSlope.brickUninsulated8"),
      coreThickness: t("belowConstructionSlope.size8"),
      claddingType: t("belowConstructionSlope.withBricks"),
      insulation: t("belowConstructionSlope.notIsolated"),
      fileName: "B8D04",
      pdf: "/EcoBuildPdf/BelowtheConstSlop/HaunchedSlabonGrade/Non-InsulatedBrick/DWGB8D04.pdf",
      dwg: "/EcoBuildPdf/BelowtheConstSlop/HaunchedSlabonGrade/Non-InsulatedBrick/B8D04.dwg",
    },
    {
      description: t("belowConstructionSlope.noBrickInsulated6"),
      coreThickness: t("belowConstructionSlope.size6"),
      claddingType: t("belowConstructionSlope.withoutBricks"),
      insulation: t("belowConstructionSlope.isolated"),
      fileName: "B6D01",
      pdf: "/EcoBuildPdf/BelowtheConstSlop/HaunchedSlabonGrade/Non-BrickInsulated/DWGB6D01.pdf",
      dwg: "/EcoBuildPdf/BelowtheConstSlop/HaunchedSlabonGrade/Non-BrickInsulated/B6D01.dwg",
    },
    {
      description: t("belowConstructionSlope.noBrickInsulated8"),
      coreThickness: t("belowConstructionSlope.size8"),
      claddingType: t("belowConstructionSlope.withoutBricks"),
      insulation: t("belowConstructionSlope.isolated"),
      fileName: "B8D01",
      pdf: "/EcoBuildPdf/BelowtheConstSlop/HaunchedSlabonGrade/Non-BrickInsulated/DWGB8D01.pdf",
      dwg: "/EcoBuildPdf/BelowtheConstSlop/HaunchedSlabonGrade/Non-BrickInsulated/B8D01.dwg",
    },
    {
      description: t("belowConstructionSlope.noBrickUninsulated6"),
      coreThickness: t("belowConstructionSlope.size6"),
      claddingType: t("belowConstructionSlope.withoutBricks"),
      insulation: t("belowConstructionSlope.notIsolated"),
      fileName: "B6D02",
      pdf: "/EcoBuildPdf/BelowtheConstSlop/HaunchedSlabonGrade/Non-BrickNon-InsulatedBrick/DWGB6D02.pdf",
      dwg: "/EcoBuildPdf/BelowtheConstSlop/HaunchedSlabonGrade/Non-BrickNon-InsulatedBrick/B6D02.dwg",
    },
    {
      description: t("belowConstructionSlope.noBrickUninsulated8"),
      coreThickness: t("belowConstructionSlope.size8"),
      claddingType: t("belowConstructionSlope.withoutBricks"),
      insulation: t("belowConstructionSlope.notIsolated"),
      fileName: "B8D02",
      pdf: "/EcoBuildPdf/BelowtheConstSlop/HaunchedSlabonGrade/Non-BrickNon-InsulatedBrick/DWGB8D02.pdf",
      dwg: "/EcoBuildPdf/BelowtheConstSlop/HaunchedSlabonGrade/Non-BrickNon-InsulatedBrick/B8D02.dwg",
    },
  ];

  const tabs = [
    {
      id: "below-grade-slab",
      label: t("belowConstructionSlope.tabBelowGradeSlab"),
    },
    { id: "stem-wall", label: t("belowConstructionSlope.tabStemWall") },
    { id: "grade-beams", label: t("belowConstructionSlope.tabGradeBeams") },
    { id: "haunched-slab", label: t("belowConstructionSlope.tabHaunchedSlab") },
  ];

  const handleSearchInputChange = (field, value) => {
    setSearchInputs((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Generic filter function for any data array
  const filterData = (data) => {
    return data.filter((item) => {
      const fileNameMatch = searchInputs.fileName
        ? (item.code || item.fileName || "")
            .toLowerCase()
            .includes(searchInputs.fileName.toLowerCase())
        : true;

      const thicknessMatch = searchInputs.thickness
        ? (item.size || item.coreThickness || "")
            .toLowerCase()
            .includes(searchInputs.thickness.toLowerCase())
        : true;

      const descriptionMatch = searchInputs.description
        ? (item.title || item.description || "")
            .toLowerCase()
            .includes(searchInputs.description.toLowerCase())
        : true;

      return fileNameMatch && thicknessMatch && descriptionMatch;
    });
  };

  // Filter data based on active tab
  const getFilteredData = () => {
    switch (activeTab) {
      case "below-grade-slab":
        return filterData(BelowGrade);
      case "stem-wall":
        return [...filterData(stemWall1Data), ...filterData(stemWall2Data)];
      case "grade-beams":
        return filterData(GreadBeams);
      case "haunched-slab":
        return filterData(SlabOnGrade);
      default:
        return [];
    }
  };

  const filteredData = getFilteredData();

  // Handle search button click
  const handleSearch = (e) => {
    e.preventDefault();
    // Filtering happens automatically through state updates
    console.log("Searching with:", searchInputs);
  };

  // Handle advanced search - clear all filters
  const handleAdvancedSearch = (e) => {
    e.preventDefault();
    setSearchInputs({
      fileName: "",
      thickness: "",
      description: "",
    });
  };
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="belowTheConstructionSlope-container">
      <Breadcrumb
        header={t("belowConstructionSlope.breadcrumbTitle")}
        subHeader={t("belowConstructionSlope.breadcrumbSubtitle")}
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
                    <img
                      src={image1}
                      alt={t("belowConstructionSlope.card1Alt")}
                    />
                  </div>
                </Link>
                <div className="text-band">
                  <h4>{t("belowConstructionSlope.card1Title")}</h4>
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
                    <img
                      src={image2}
                      alt={t("belowConstructionSlope.card2Alt")}
                    />
                  </div>
                </Link>
                <div className="text-band">
                  <h4>{t("belowConstructionSlope.card2Title")}</h4>
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
                    <img
                      src={image3}
                      alt={t("belowConstructionSlope.card3Alt")}
                    />
                  </div>
                </Link>
                <div className="text-band">
                  <h4>{t("belowConstructionSlope.card3Title")}</h4>
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
                    <img
                      src={image4}
                      alt={t("belowConstructionSlope.card4Alt")}
                    />
                  </div>
                </Link>
                <div className="text-band">
                  <h4>{t("belowConstructionSlope.card4Title")}</h4>
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
                    <img
                      src={image5}
                      alt={t("belowConstructionSlope.card5Alt")}
                    />
                  </div>
                </Link>
                <div className="text-band">
                  <h4>{t("belowConstructionSlope.card5Title")}</h4>
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
                    <img
                      src={image6}
                      alt={t("belowConstructionSlope.card6Alt")}
                    />
                  </div>
                </Link>
                <div className="text-band">
                  <h4>{t("belowConstructionSlope.card6Title")}</h4>
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
                    <img
                      src={image7}
                      alt={t("belowConstructionSlope.card7Alt")}
                    />
                  </div>
                </Link>
                <div className="text-band">
                  <h4>{t("belowConstructionSlope.card7Title")}</h4>
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
                <h3 className="text-primary">
                  {t("belowConstructionSlope.sectionTitle")}
                </h3>
                <p className="dark-font-600 mb-2">
                  {t("belowConstructionSlope.sectionDescription")}
                </p>
                <ul className="details-list">
                  <li>{t("belowConstructionSlope.point1")}</li>
                  <li>{t("belowConstructionSlope.point2")}</li>
                  <li>{t("belowConstructionSlope.point3")}</li>
                </ul>
                <h6 className="mb-0 mt-3 mb-4">
                  {t("belowConstructionSlope.detailingCovers")}
                </h6>
                <ul className="details-list">
                  <li>{t("belowConstructionSlope.detailPoint1")}</li>
                  <li>{t("belowConstructionSlope.detailPoint2")}</li>
                  <li>{t("belowConstructionSlope.detailPoint3")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-0">
        <div className="container">
          <div className="search-penal bg-penal">
            <div className="left-penal">
              <div className="form-group w-30">
                <label className="form-label">
                  {t("belowConstructionSlope.fileName")}
                </label>
                <input
                  className="form-control"
                  placeholder={t("belowConstructionSlope.searchHere")}
                  value={searchInputs.fileName}
                  onChange={(e) =>
                    handleSearchInputChange("fileName", e.target.value)
                  }
                />
              </div>
              <div className="form-group w-40">
                <label className="form-label">
                  {t("belowConstructionSlope.thickness")}
                </label>
                <input
                  className="form-control"
                  placeholder={t("belowConstructionSlope.searchHere")}
                  value={searchInputs.thickness}
                  onChange={(e) =>
                    handleSearchInputChange("thickness", e.target.value)
                  }
                />
              </div>
              <div className="form-group w-30 border-none">
                <label className="form-label">
                  {t("belowConstructionSlope.description")}
                </label>
                <input
                  className="form-control"
                  placeholder={t("belowConstructionSlope.searchHere")}
                  value={searchInputs.description}
                  onChange={(e) =>
                    handleSearchInputChange("description", e.target.value)
                  }
                />
              </div>
            </div>
            <div className="right-penal">
              <a className="btn-primary">
                {t("belowConstructionSlope.search")}
                <i className="fa-solid fa-magnifying-glass"></i>
              </a>
              <a className="btn-primary white-border-btn">
                {t("belowConstructionSlope.searchAdvanced")}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-0">
        <div className="container">
          <Tab
            tabs={tabs}
            defaultActiveTab="below-grade-slab"
            onTabChange={handleTabChange}
          />
        </div>

        <div className="container">
          {activeTab === "below-grade-slab" && (
            <section className="white-bg pt-0">
              {filteredData.length > 0 ? (
                <table className="dltrc" style={{ background: "none" }}>
                  <tbody>
                    <tr className="dlheader">
                      <td className="dlheader">
                        {t("belowConstructionSlope.colDescription")}
                      </td>
                      <td className="dlheader">
                        {t("belowConstructionSlope.colCoreThickness")}
                      </td>
                      <td className="dlheader">
                        {t("belowConstructionSlope.colInsulation")}
                      </td>
                      <td className="dlheader">
                        {t("belowConstructionSlope.colFileName")}
                      </td>
                      <td className="dlheader">
                        {t("belowConstructionSlope.colExplanation")}
                      </td>
                      <td className="dlheader">
                        {t("belowConstructionSlope.colFiles")}
                      </td>
                    </tr>
                    {filteredData.map((item, index) => (
                      <tr className="dlinfo" key={index}>
                        <td className="dlinfo hover01">{item.title}</td>
                        <td className="dlinfo hover01">{item.size}</td>
                        <td className="dlinfo hover01">
                          <span className="status">{item.status}</span>
                        </td>
                        <td className="dlinfo hover01">{item.code}</td>
                        <td className="dlinfo hover01">
                          <a
                            href={item.pdf}
                            className="explanation-link"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {t("belowConstructionSlope.explanationPage")}
                          </a>
                        </td>
                        <td className="dlinfo hover01">
                          <ul className="file-list-inner-td">
                            <li>
                              <a
                                href={item.pdf}
                                download={`${item.code}.pdf`}
                                className="red-link"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <div className="icon-band">
                                  <img src={image9} alt={t("pdf_icon")} />
                                </div>
                                {t("pdf")}
                                <img
                                  src={image10}
                                  className="download-icon"
                                  alt={t("download")}
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href={item.dwg}
                                download={`${item.code}.dwg`}
                                className="blue-link"
                              >
                                <div className="icon-band">
                                  <img src={image11} alt={t("dwg_icon")} />
                                </div>
                                {t("dwg")}
                                <img
                                  src={image10}
                                  className="download-icon"
                                  alt={t("download")}
                                />
                              </a>
                            </li>
                          </ul>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="no-results">
                  <p>
                    {t("no_results_found") ||
                      "No results found matching your search criteria."}
                  </p>
                </div>
              )}
            </section>
          )}

          {activeTab === "stem-wall" && (
            <>
              <section className="white-bg pt-0">
                {filteredData.filter((item) => item.pdf.includes("StemWall"))
                  .length > 0 ? (
                  <table className="dltrc" style={{ background: "none" }}>
                    <tbody>
                      <tr className="dlheader">
                        <td className="dlheader">
                          {t("belowConstructionSlope.colDescription")}
                        </td>
                        <td className="dlheader">
                          {t("belowConstructionSlope.colCoreThickness")}
                        </td>
                        <td className="dlheader">
                          {t("belowConstructionSlope.colFileName")}
                        </td>
                        <td className="dlheader">
                          {t("belowConstructionSlope.colExplanation")}
                        </td>
                        <td className="dlheader">
                          {t("belowConstructionSlope.colFiles")}
                        </td>
                      </tr>
                      {filteredData
                        .filter((item) => item.pdf.includes("StemWall"))
                        .map((item) => (
                          <tr className="dlinfo" key={item.fileName}>
                            <td className="dlinfo hover01">
                              {item.description}
                            </td>
                            <td className="dlinfo hover01">
                              {item.coreThickness}
                            </td>
                            <td className="dlinfo hover01">{item.fileName}</td>
                            <td className="dlinfo hover01">
                              <a
                                href={item.pdf}
                                target="_blank"
                                className="explanation-link"
                                rel="noopener noreferrer"
                              >
                                {t("belowConstructionSlope.explanationPage")}
                              </a>
                            </td>
                            <td className="dlinfo hover01">
                              <ul className="file-list-inner-td">
                                <li>
                                  <a
                                    href={item.pdf}
                                    download={`${item.fileName}.pdf`}
                                    rel="noopener noreferrer"
                                    className="red-link"
                                  >
                                    <div className="icon-band">
                                      <img src={image9} alt="PDF" />
                                    </div>
                                    {t("pdf")}
                                    <img
                                      src={image10}
                                      className="download-icon"
                                      alt="Download"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href={item.dwg}
                                    className="blue-link"
                                    download={`${item.fileName}.dwg`}
                                  >
                                    <div className="icon-band">
                                      <img src={image11} alt="DWG" />
                                    </div>
                                    {t("dwg")}
                                    <img
                                      src={image10}
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
                ) : (
                  <div className="no-results">
                    <p>
                      {t("no_results_found") ||
                        "No results found matching your search criteria."}
                    </p>
                  </div>
                )}
              </section>

              <section className="white-bg pt-0">
                {filteredData.filter((item) => item.pdf.includes("StemWall4"))
                  .length > 0 ? (
                  <table className="dltrc" style={{ background: "none" }}>
                    <tbody>
                      <tr className="dlheader">
                        <td className="dlheader">
                          {t("belowConstructionSlope.colDescription")}
                        </td>
                        <td className="dlheader">
                          {t("belowConstructionSlope.colCoreThickness")}
                        </td>
                        <td className="dlheader">
                          {t("belowConstructionSlope.colFileName")}
                        </td>
                        <td className="dlheader">
                          {t("belowConstructionSlope.colExplanation")}
                        </td>
                        <td className="dlheader">
                          {t("belowConstructionSlope.colFiles")}
                        </td>
                      </tr>
                      {filteredData
                        .filter((item) => item.pdf.includes("StemWall4"))
                        .map((item) => (
                          <tr className="dlinfo" key={item.fileName}>
                            <td className="dlinfo hover01">
                              {item.description}
                            </td>
                            <td className="dlinfo hover01">
                              {item.coreThickness}
                            </td>
                            <td className="dlinfo hover01">{item.fileName}</td>
                            <td className="dlinfo hover01">
                              <a
                                href={item.pdf}
                                target="_blank"
                                className="explanation-link"
                                rel="noopener noreferrer"
                              >
                                {t("explanation_page")}
                              </a>
                            </td>
                            <td className="dlinfo hover01">
                              <ul className="file-list-inner-td">
                                <li>
                                  <a
                                    href={item.pdf}
                                    download={`${item.fileName}.pdf`}
                                    rel="noopener noreferrer"
                                    className="red-link"
                                  >
                                    <div className="icon-band">
                                      <img src={image9} alt="PDF" />
                                    </div>
                                    {t("pdf")}
                                    <img
                                      src={image10}
                                      className="download-icon"
                                      alt="Download"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href={item.dwg}
                                    className="blue-link"
                                    download={`${item.fileName}.dwg`}
                                  >
                                    <div className="icon-band">
                                      <img src={image11} alt="DWG" />
                                    </div>
                                    {t("dwg")}
                                    <img
                                      src={image10}
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
                ) : (
                  <div className="no-results">
                    <p>
                      {t("no_results_found") ||
                        "No results found matching your search criteria."}
                    </p>
                  </div>
                )}
              </section>
            </>
          )}

          {activeTab === "grade-beams" && (
            <section className="white-bg pt-0">
              {filteredData.length > 0 ? (
                <table className="dltrc" style={{ background: "none" }}>
                  <tbody>
                    <tr className="dlheader">
                      <td className="dlheader">
                        {t("belowConstructionSlope.colDescription")}
                      </td>
                      <td className="dlheader">
                        {t("belowConstructionSlope.colCoreThickness")}
                      </td>
                      <td className="dlheader">
                        {t("belowConstructionSlope.colInsulation")}
                      </td>
                      <td className="dlheader">
                        {t("belowConstructionSlope.colFileName")}
                      </td>
                      <td className="dlheader">
                        {t("belowConstructionSlope.colExplanation")}
                      </td>
                      <td className="dlheader">
                        {t("belowConstructionSlope.colFiles")}
                      </td>
                    </tr>
                    {GreadBeams.map((item, index) => (
                      <tr className="dlinfo" key={index}>
                        <td className="dlinfo hover01">{item.description}</td>
                        <td className="dlinfo hover01">{item.coreThickness}</td>
                        <td className="dlinfo hover01">
                          <span className="status">{item.insulation}</span>
                        </td>
                        <td className="dlinfo hover01">{item.fileName}</td>
                        <td className="dlinfo hover01">
                          <a
                            href={item.pdf}
                            target="_blank"
                            className="explanation-link"
                            rel="noopener noreferrer"
                          >
                            {t("explanation_page")}
                          </a>
                        </td>
                        <td className="dlinfo hover01">
                          <ul className="file-list-inner-td">
                            <li>
                              <a
                                href={item.pdf}
                                download={`${item.fileName}.pdf`}
                                rel="noopener noreferrer"
                                className="red-link"
                              >
                                <div className="icon-band">
                                  <img src={image9} alt={t("pdf_icon")} />
                                </div>
                                {t("pdf")}
                                <img
                                  src={image10}
                                  className="download-icon"
                                  alt={t("download")}
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href={item.dwg}
                                download={`${item.fileName}.dwg`}
                                className="blue-link"
                              >
                                <div className="icon-band">
                                  <img src={image11} alt={t("dwg_icon")} />
                                </div>
                                {t("dwg")}
                                <img
                                  src={image10}
                                  className="download-icon"
                                  alt={t("download")}
                                />
                              </a>
                            </li>
                          </ul>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="no-results">
                  <p>
                    {t("no_results_found") ||
                      "No results found matching your search criteria."}
                  </p>
                </div>
              )}
            </section>
          )}
          {activeTab === "haunched-slab" && (
            <section className="white-bg pt-0">
              {filteredData.length > 0 ? (
                <table className="dltrc" style={{ background: "none" }}>
                  <tbody>
                    <tr className="dlheader">
                      <td className="dlheader">
                        {t("belowConstructionSlope.colDescription")}
                      </td>
                      <td className="dlheader">
                        {t("belowConstructionSlope.colCoreThickness")}
                      </td>
                      <td className="dlheader">
                        {t("belowConstructionSlope.colCladdingtype")}
                      </td>
                      <td className="dlheader">
                        {t("belowConstructionSlope.colInsulation")}
                      </td>
                      <td className="dlheader">
                        {t("belowConstructionSlope.colFileName")}
                      </td>
                      <td className="dlheader">
                        {t("belowConstructionSlope.colExplanation")}
                      </td>
                      <td className="dlheader">
                        {t("belowConstructionSlope.colFiles")}
                      </td>
                    </tr>
                    {SlabOnGrade.map((item, index) => (
                      <tr className="dlinfo" key={index}>
                        <td className="dlinfo hover01">{item.description}</td>
                        <td className="dlinfo hover01">{item.coreThickness}</td>
                        <td className="dlinfo hover01">
                          <span className="status">{item.claddingType}</span>
                        </td>
                        <td className="dlinfo hover01">
                          <span className="status">{item.insulation}</span>
                        </td>
                        <td className="dlinfo hover01">{item.fileName}</td>
                        <td className="dlinfo hover01">
                          <a
                            href={item.pdf}
                            target="_blank"
                            className="explanation-link"
                            rel="noopener noreferrer"
                          >
                            {t("explanation_page")}
                          </a>
                        </td>
                        <td className="dlinfo hover01">
                          <ul className="file-list-inner-td">
                            <li>
                              <a
                                href={item.pdf}
                                download={`${item.fileName}.pdf`}
                                rel="noopener noreferrer"
                                className="red-link"
                              >
                                <div className="icon-band">
                                  <img src={image9} alt={t("pdf")} />
                                </div>
                                {t("pdf")}
                                <img
                                  src={image10}
                                  className="download-icon"
                                  alt={t("download")}
                                />
                              </a>
                            </li>
                            <li>
                              <a
                                href={item.dwg}
                                download={`${item.fileName}.dwg`}
                                className="blue-link"
                              >
                                <div className="icon-band">
                                  <img src={image11} alt={t("dwg")} />
                                </div>
                                {t("dwg")}
                                <img
                                  src={image10}
                                  className="download-icon"
                                  alt={t("download")}
                                />
                              </a>
                            </li>
                          </ul>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="no-results">
                  <p>
                    {t("no_results_found") ||
                      "No results found matching your search criteria."}
                  </p>
                </div>
              )}
            </section>
          )}
        </div>
      </section>
    </div>
  );
};

export default BelowTheConstructionSlope;
