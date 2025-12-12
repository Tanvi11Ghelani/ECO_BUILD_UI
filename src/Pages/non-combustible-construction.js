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
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/SlabonGrade/Insulated Brick/6_ Head and Sill Brick(152mm) B6C10.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/SlabonGrade/Insulated Brick/b6c10.dwg",
            },
            {
              description: "8_concrete_core_brick",
              coreThickness: "8",
              claddingType: "with_bricks",
              insulation: "isolated",
              fileName: "B8C11",

              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/SlabonGrade/Insulated Brick/8_ (203mm) Concrete core B8C11.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/SlabonGrade/Insulated Brick/b8c11.dwg",
            },
            {
              description: "10_concrete_core",
              coreThickness: "10",
              claddingType: "with_bricks",
              insulation: "isolated",
              fileName: "B10C07",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/SlabonGrade/Insulated Brick/10_ (254mm) Concrete core B10C07.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/SlabonGrade/Insulated Brick/b10c07.dwg",
            },
            {
              description: "12_concrete_core",
              coreThickness: "12",
              claddingType: "with_bricks",
              insulation: "isolated",
              fileName: "B12C06",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/SlabonGrade/Insulated Brick/12_ (305mm) Concrete core B12C06.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/SlabonGrade/Insulated Brick/b12c06.dwg",
            },
          ],
        },
        {
          title: "non_brick_insulated",
          items: [
            {
              description: "6_concrete_core_brick",
              coreThickness: "6",
              claddingType: "with_bricks",
              insulation: "not_isolated",
              fileName: "B6C07",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/SlabonGrade/Non- Brick Insulated/6_ (152mm) Concrete core B6C07.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/SlabonGrade/Non- Brick Insulated/b6c07.dwg",
            },
            {
              description: "8_concrete_core_brick",
              coreThickness: "8",
              claddingType: "with_bricks",
              insulation: "not_isolated",
              fileName: "b8c08",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/SlabonGrade/Non- Brick Insulated/8_ (203mm) Concrete core B8C08.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/SlabonGrade/Non- Brick Insulated/b8c08.dwg",
            },
            {
              description: "10_concrete_core_brick",
              coreThickness: "10",
              claddingType: "with_bricks",
              insulation: "not_isolated",
              fileName: "B10C04",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/SlabonGrade/Non- Brick Insulated/10_ (254mm) Concrete core  B10C04.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/SlabonGrade/Non- Brick Insulated/b10c04.dwg",
            },
            {
              description: "12_concrete_core_brick",
              coreThickness: "12",
              claddingType: "with_bricks",
              insulation: "not_isolated",
              fileName: "B12C03",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/SlabonGrade/Non- Brick Insulated/12_ (305mm) Concrete core B12C03.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/SlabonGrade/Non- Brick Insulated/b12c03.dwg",
            },
          ],
        },
        {
          title: "brick_non_insulated",
          items: [
            {
              description: "6_concrete_core",
              coreThickness: "6",
              claddingType: "without_bricks",
              insulation: "isolated",
              fileName: "B6C01",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/SlabonGrade/Non-Insulated Brick/6_ (152mm) Concrete core B6C11.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/SlabonGrade/Non-Insulated Brick/b6c11.dwg",
            },
            {
              description: "8_concrete_core",
              coreThickness: "8",
              claddingType: "without_bricks",
              insulation: "isolated",
              fileName: "B8C12",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/SlabonGrade/Non-Insulated Brick/8_ (203mm) Concrete core B8C12.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/SlabonGrade/Non-Insulated Brick/b8c12.dwg",
            },
            {
              description: "10_concrete_core",
              coreThickness: "10",
              claddingType: "without_bricks",
              insulation: "isolated",
              fileName: "B10C08",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/SlabonGrade/Non-Insulated Brick/10_ (254mm) Concrete core  B10C08.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/SlabonGrade/Non-Insulated Brick/b10c08.dwg",
            },
            {
              description: "12_concrete_core",
              coreThickness: "12",
              claddingType: "without_bricks",
              insulation: "isolated",
              fileName: "B12C07",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/SlabonGrade/Non-Insulated Brick/12_ (305mm) Concrete core B12C07.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/SlabonGrade/Non-Insulated Brick/b12c07.dwg",
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
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/SlabonGrade/Non-Brick Non-Insulated/6_ (152mm) Concrete core B6C01.pdf",
              dwgUrl: "",
            },
            {
              description: "8_concrete_core",
              coreThickness: "8",
              claddingType: "without_bricks",
              insulation: "not_isolated",
              fileName: "B8C06",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/SlabonGrade/Non-Brick Non-Insulated/8_ (203mm) Concrete core B8C06.pdf",
              dwgUrl: "",
            },
            {
              description: "10_concrete_core",
              coreThickness: "10",
              claddingType: "without_bricks",
              insulation: "not_isolated",
              fileName: "B10C02",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/SlabonGrade/Non-Brick Non-Insulated/10_ (254mm) Concrete core  B10C02.pdf",
              dwgUrl: "",
            },
            {
              description: "12_concrete_core",
              coreThickness: "12",
              claddingType: "without_bricks",
              insulation: "not_isolated",
              fileName: "B12C01",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/SlabonGrade/Non-Brick Non-Insulated/12_ (305mm) Concrete core B12C01.pdf",
              dwgUrl: "",
            },
          ],
        },
      ],
    },
    "grade-at-floor": {
      sections: [
        {
          title: "Hollow_Core_Floors",
          items: [
            {
              description: "brick_load_bearing_6",
              coreThickness: "6",
              claddingType: "with_bricks",
              insulation: "isolated",
              fileName: "D6A03",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Hollow Core Floors/Brick - Load Bearing 6_ (152mm) Concrete core D6A03.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Hollow Core Floors/d6a03.dwg",
            },
            {
              description: "brick_load_bearing_8",
              coreThickness: "8",
              claddingType: "with_bricks",
              insulation: "isolated",
              fileName: "D8A05",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Hollow Core Floors/Brick - Load Bearing 8_ (203mm) Concrete core D8A05.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Hollow Core Floors/d8a05.dwg",
            },
            {
              description: "brick_load_bearing_10",
              coreThickness: "10",
              claddingType: "with_bricks",
              insulation: "isolated",
              fileName: "D10A05",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Hollow Core Floors/Brick - Load Bearing 10_ (254mm) Concrete core D10A05.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Hollow Core Floors/d10a05.dwg",
            },
            {
              description: "brick_load_bearing_12",
              coreThickness: "12",
              claddingType: "with_bricks",
              insulation: "isolated",
              fileName: "D12A02",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Hollow Core Floors/Brick - Load Bearing 12_ (305mm) Concrete core D12A02.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Hollow Core Floors/d12a02.dwg",
            },
            {
              description: "brick_non_load_bearing_6",
              coreThickness: "6",
              claddingType: "with_bricks",
              insulation: "not_isolated",
              fileName: "D6A04",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Hollow Core Floors/Brick - Non-Load Bearing 6_ (152mm) Concrete core D6A04.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Hollow Core Floors/d6a04.dwg",
            },
            {
              description: "brick_non_load_bearing_8",
              coreThickness: "8",
              claddingType: "with_bricks",
              insulation: "not_isolated",
              fileName: "D8A06",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Hollow Core Floors/Brick - Non-Load Bearing 8_ (203mm) Concrete core D8A06.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Hollow Core Floors/d8a06.dwg",
            },
            {
              description: "brick_non_load_bearing_10",
              coreThickness: "10",
              claddingType: "with_bricks",
              insulation: "not_isolated",
              fileName: "D10A06",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Hollow Core Floors/Brick - Non-Load Bearing 10_ (254mm) Concrete core D10A06.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Hollow Core Floors/d10a06.dwg",
            },
            {
              description: "brick_non_load_bearing_12",
              coreThickness: "12",
              claddingType: "with_bricks",
              insulation: "not_isolated",
              fileName: "D12A03",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Hollow Core Floors/Brick - Non-Load Bearing 12_ (305mm) Concrete core D12A03.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Hollow Core Floors/d12a03.dwg",
            },
            {
              description: "non_brick_load_bearing_6",
              coreThickness: "6",
              claddingType: "without_bricks",
              insulation: "isolated",
              fileName: "D6A07",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Hollow Core Floors/Non-Brick - Load Bearing 6_ (152mm) Concrete core D6A07.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Hollow Core Floors/d6a07.dwg",
            },
            {
              description: "non_brick_load_bearing_8",
              coreThickness: "8",
              claddingType: "without_bricks",
              insulation: "isolated",
              fileName: "D8A10",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Hollow Core Floors/Non-Brick - Load Bearing 8_ (203mm) Concrete core D8A10.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Hollow Core Floors/d8a10.dwg",
            },
            {
              description: "non_brick_load_bearing_10",
              coreThickness: "10",
              claddingType: "without_bricks",
              insulation: "isolated",
              fileName: "D10A01",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Hollow Core Floors/Non-Brick - Load Bearing 10_ (254mm) Concrete core D10A01.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Hollow Core Floors/d10a01.dwg",
            },
            {
              description: "non_brick_load_bearing_12",
              coreThickness: "12",
              claddingType: "without_bricks",
              insulation: "isolated",
              fileName: "D12A06",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Hollow Core Floors/Non-Brick - Load Bearing 12_ (305mm) Concrete core D12A06.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Hollow Core Floors/d12a06.dwg",
            },
            {
              description: "non_brick_non_load_bearing_6",
              coreThickness: "6",
              claddingType: "without_bricks",
              insulation: "not_isolated",
              fileName: "D6A02",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Hollow Core Floors/Non-Brick - Non-Load Bearing 6_ (152mm) Concrete core D6A02.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Hollow Core Floors/d6a02.dwg",
            },
            {
              description: "non_brick_non_load_bearing_8",
              coreThickness: "8",
              claddingType: "without_bricks",
              insulation: "not_isolated",
              fileName: "D8A11",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Hollow Core Floors/Non-Brick - Non-Load Bearing 8_ (203mm) Concrete core D8A11.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Hollow Core Floors/d8a11.dwg",
            },
            {
              description: "non_brick_non_load_bearing_10",
              coreThickness: "10",
              claddingType: "without_bricks",
              insulation: "not_isolated",
              fileName: "D10A02",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Hollow Core Floors/Non-Brick - Non-Load Bearing 10_ (254mm) Concrete core D10A02.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Hollow Core Floors/d10a02.dwg",
            },
            {
              description: "non_brick_non_load_bearing_12",
              coreThickness: "12",
              claddingType: "without_bricks",
              insulation: "not_isolated",
              fileName: "D12A07",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Hollow Core Floors/Non-Brick - Non-Load Bearing 12_ (305mm) Concrete core D12A07.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Hollow Core Floors/d12a07.dwg",
            },
          ],
        },
        {
          title: "insulated_concrete_floor_system",
          items: [
            {
              description: "brick_load_bearing_6",
              coreThickness: "6",
              claddingType: "with_bricks",
              insulation: "isolated",
              fileName: "D6D10",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/Brick - Load Bearing 6_ (152mm) Concrete core D6D10.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/d6d08.dwg",
            },
            {
              description: "brick_load_bearing_8",
              coreThickness: "8",
              claddingType: "with_bricks",
              insulation: "isolated",
              fileName: "D8D10",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/Brick - Load Bearing 8_ (203mm) Concrete core D8D10.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/d8d07.dwg",
            },
            {
              description: "brick_load_bearing_10",
              coreThickness: "10",
              claddingType: "with_bricks",
              insulation: "isolated",
              fileName: "D10D12",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/Brick - Load Bearing 10_ (254mm) Concrete core D10D12.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/d8d09.dwg",
            },
            {
              description: "brick_load_bearing_12",
              coreThickness: "12",
              claddingType: "with_bricks",
              insulation: "isolated",
              fileName: "D12D10",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/Brick - Load Bearing 12_ (305mm) Concrete core D12D10.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/d8d10.dwg",
            },
            {
              description: "brick_non_load_bearing_6",
              coreThickness: "6",
              claddingType: "with_bricks",
              insulation: "not_isolated",
              fileName: "D6D09",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/Brick - Non-Load Bearing 6_ (152mm) Concrete core D6D09.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/d10d09.dwg",
            },
            {
              description: "brick_non_load_bearing_8",
              coreThickness: "8",
              claddingType: "with_bricks",
              insulation: "not_isolated",
              fileName: "D8D09",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/Brick - Non-Load Bearing 8_ (203mm) Concrete core D8D09.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/d10d10.dwg",
            },
            {
              description: "brick_non_load_bearing_10",
              coreThickness: "10",
              claddingType: "with_bricks",
              insulation: "not_isolated",
              fileName: "D10D11",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/Brick - Non-Load Bearing 10_ (254mm) Concrete core D10D11.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/d10d11.dwg",
            },
            {
              description: "brick_non_load_bearing_12",
              coreThickness: "12",
              claddingType: "with_bricks",
              insulation: "not_isolated",
              fileName: "D12D09",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/Brick - Non-Load Bearing 12_ (305mm) Concrete core D12D09.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/d10d12.dwg",
            },
            {
              description: "non_brick_load_bearing_6",
              coreThickness: "6",
              claddingType: "without_bricks",
              insulation: "isolated",
              fileName: "D6D08",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/Non-Brick - Load Bearing 6_ (152mm) Concrete core D6D08.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/d12d07.dwg",
            },
            {
              description: "non_brick_load_bearing_8",
              coreThickness: "8",
              claddingType: "without_bricks",
              insulation: "isolated",
              fileName: "D8D08",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/Non-Brick - Load Bearing 8_ (203mm) Concrete core D8D08.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/d12d08.dwg",
            },
            {
              description: "non_brick_load_bearing_10",
              coreThickness: "10",
              claddingType: "without_bricks",
              insulation: "isolated",
              fileName: "D10D10",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/Non-Brick - Load Bearing 10_ (254mm) Concrete core D10D10.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/d12d09.dwg",
            },
            {
              description: "non_brick_load_bearing_12",
              coreThickness: "12",
              claddingType: "without_bricks",
              insulation: "isolated",
              fileName: "D12D08",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/Non-Brick - Load Bearing 12_ (305mm) Concrete core D12D08.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/d12d10.dwg",
            },
            {
              description: "non_brick_non_load_bearing_6",
              coreThickness: "6",
              claddingType: "without_bricks",
              insulation: "not_isolated",
              fileName: "D6D07",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/Non-Brick - Non-Load Bearing 6_ (152mm) Concrete core D6D07.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/d6d07.dwg",
            },
            {
              description: "non_brick_non_load_bearing_8",
              coreThickness: "8",
              claddingType: "without_bricks",
              insulation: "not_isolated",
              fileName: "D8D07",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/Non-Brick - Non-Load Bearing 8_ (203mm) Concrete core D8D07.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/d6d09.dwg",
            },
            {
              description: "non_brick_non_load_bearing_10",
              coreThickness: "10",
              claddingType: "without_bricks",
              insulation: "not_isolated",
              fileName: "D10D09",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/Non-Brick - Non-Load Bearing 10_ (254mm) Concrete core D10D09.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/d6d10.dwg",
            },
            {
              description: "non_brick_non_load_bearing_12",
              coreThickness: "12",
              claddingType: "without_bricks",
              insulation: "not_isolated",
              fileName: "D12D07",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/Non-Brick - Non-Load Bearing 12_ (305mm) Concrete core D12D07.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/d8d08.dwg",
            },
          ],
        },
        {
          title: "proprietary_steel_joist_system",
          items: [
            {
              description: "brick_load_bearing_6",
              coreThickness: "6",
              claddingType: "with_bricks",
              insulation: "isolated",
              fileName: "D6B07",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Proprietary Steel Joist System/Brick - Load Bearing 6_ (152mm) Concrete core D6B07.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Proprietary Steel Joist System/d6b07.dwg",
            },
            {
              description: "brick_load_bearing_8",
              coreThickness: "8",
              claddingType: "with_bricks",
              insulation: "isolated",
              fileName: "D8B05",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Proprietary Steel Joist System/Brick - Load Bearing 8_ (203mm) Concrete core D8B05.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Proprietary Steel Joist System/d8b05.dwg",
            },
            {
              description: "brick_load_bearing_10",
              coreThickness: "10",
              claddingType: "with_bricks",
              insulation: "isolated",
              fileName: "D10B07",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Proprietary Steel Joist System/Brick - Load Bearing 10_ (254mm) Concrete core D10B07.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Proprietary Steel Joist System/d10b07.dwg",
            },
            {
              description: "brick_load_bearing_12",
              coreThickness: "12",
              claddingType: "with_bricks",
              insulation: "isolated",
              fileName: "D12B07",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Proprietary Steel Joist System/Brick - Load Bearing 12_ (305mm) Concrete core D12B07.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Proprietary Steel Joist System/d12b07.dwg",
            },
            {
              description: "brick_non_load_bearing_6",
              coreThickness: "6",
              claddingType: "with_bricks",
              insulation: "not_isolated",
              fileName: "D6B08",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Proprietary Steel Joist System/Brick - Non-Load Bearing 6_ (152mm) Concrete core D6B08.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Proprietary Steel Joist System/d6b08.dwg",
            },
            {
              description: "brick_non_load_bearing_8",
              coreThickness: "8",
              claddingType: "with_bricks",
              insulation: "not_isolated",
              fileName: "D8B06",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Proprietary Steel Joist System/Brick - Non-Load Bearing 8_ (203mm) Concrete core D8B06.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Proprietary Steel Joist System/d8b06.dwg",
            },
            {
              description: "brick_non_load_bearing_10",
              coreThickness: "10",
              claddingType: "with_bricks",
              insulation: "not_isolated",
              fileName: "D10B08",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Proprietary Steel Joist System/Brick - Non-Load Bearing 10_ (254mm) Concrete core D10B08.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Proprietary Steel Joist System/d10B08.dwg",
            },
            {
              description: "brick_non_load_bearing_12",
              coreThickness: "12",
              claddingType: "with_bricks",
              insulation: "not_isolated",
              fileName: "D12B08",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Proprietary Steel Joist System/Brick - Non-Load Bearing 12_ (305mm) Concrete core D12B08.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Proprietary Steel Joist System/d12b08.dwg",
            },
            {
              description: "non_brick_load_bearing_6",
              coreThickness: "6",
              claddingType: "without_bricks",
              insulation: "isolated",
              fileName: "D6B01",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Proprietary Steel Joist System/Non-Brick - Load Bearing 6_ (152mm) Concrete core D6B01.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Proprietary Steel Joist System/d6b01.dwg",
            },
            {
              description: "non_brick_load_bearing_8",
              coreThickness: "8",
              claddingType: "without_bricks",
              insulation: "isolated",
              fileName: "D8B01",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Proprietary Steel Joist System/Non-Brick - Load Bearing 8_ (203mm) Concrete core D8B01.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Proprietary Steel Joist System/d8b01.dwg",
            },
            {
              description: "non_brick_load_bearing_10",
              coreThickness: "10",
              claddingType: "without_bricks",
              insulation: "isolated",
              fileName: "D10B01",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Proprietary Steel Joist System/Non-Brick - Load Bearing 10_ (254mm) Concrete core D10B01.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Proprietary Steel Joist System/d110b01.dwg",
            },
            {
              description: "non_brick_load_bearing_12",
              coreThickness: "12",
              claddingType: "without_bricks",
              insulation: "isolated",
              fileName: "D12B01",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Proprietary Steel Joist System/Non-Brick - Load Bearing 12_ (305mm) Concrete core D12B01.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Proprietary Steel Joist System/d12b01.dwg",
            },
            {
              description: "non_brick_non_load_bearing_6",
              coreThickness: "6",
              claddingType: "without_bricks",
              insulation: "not_isolated",
              fileName: "D6B02",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Proprietary Steel Joist System/Non-Brick - Non-Load Bearing 6_ (152mm) Concrete core D6B02.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Proprietary Steel Joist System/d6b02.dwg",
            },
            {
              description: "non_brick_non_load_bearing_8",
              coreThickness: "8",
              claddingType: "without_bricks",
              insulation: "not_isolated",
              fileName: "D8B02",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Proprietary Steel Joist System/Non-Brick - Non-Load Bearing 8_ (203mm) Concrete core D8B02.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Proprietary Steel Joist System/d0b02.dwg",
            },
            {
              description: "non_brick_non_load_bearing_10",
              coreThickness: "10",
              claddingType: "without_bricks",
              insulation: "not_isolated",
              fileName: "D10B02",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Proprietary Steel Joist System/Non-Brick - Non-Load Bearing 10_ (254mm) Concrete core D10B02.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Proprietary Steel Joist System/d10b02.dwg",
            },
            {
              description: "non_brick_non_load_bearing_12",
              coreThickness: "12",
              claddingType: "without_bricks",
              insulation: "not_isolated",
              fileName: "D12B02",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Proprietary Steel Joist System/Non-Brick - Non-Load Bearing 12_ (305mm) Concrete core D12B02.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Proprietary Steel Joist System/d12b02.dwg",
            },
          ],
        },
        {
          title: "insulated_concrete_floor_system",
          items: [
            {
              description: "brick_load_bearing_6",
              coreThickness: "6",
              claddingType: "with_bricks",
              insulation: "isolated",
              fileName: "D6D10",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/Brick - Load Bearing 6_ (152mm) Concrete core D6D10.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/d6d10.dwg",
            },
            {
              description: "brick_load_bearing_8",
              coreThickness: "8",
              claddingType: "with_bricks",
              insulation: "isolated",
              fileName: "D8D10",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/Brick - Load Bearing 8_ (203mm) Concrete core D8D10.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/d8d10.dwg",
            },
            {
              description: "brick_load_bearing_10",
              coreThickness: "10",
              claddingType: "with_bricks",
              insulation: "isolated",
              fileName: "D10D12",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/Brick - Load Bearing 10_ (254mm) Concrete core D10D12.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/d10d12.dwg",
            },
            {
              description: "brick_load_bearing_12",
              coreThickness: "12",
              claddingType: "with_bricks",
              insulation: "isolated",
              fileName: "D12D10",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/Brick - Load Bearing 12_ (305mm) Concrete core D12D10.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/d12d10.dwg",
            },
            {
              description: "brick_non_load_bearing_6",
              coreThickness: "6",
              claddingType: "with_bricks",
              insulation: "not_isolated",
              fileName: "D6D09",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/Brick - Non-Load Bearing 6_ (152mm) Concrete core D6D09.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/d6d09.dwg",
            },
            {
              description: "brick_non_load_bearing_8",
              coreThickness: "8",
              claddingType: "with_bricks",
              insulation: "not_isolated",
              fileName: "D8D09",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/Brick - Non-Load Bearing 8_ (203mm) Concrete core D8D09.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/d8d09.dwg",
            },
            {
              description: "brick_non_load_bearing_10",
              coreThickness: "10",
              claddingType: "with_bricks",
              insulation: "not_isolated",
              fileName: "D10D11",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/Brick - Non-Load Bearing 10_ (254mm) Concrete core D10D11.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/d10d11.dwg",
            },
            {
              description: "brick_non_load_bearing_12",
              coreThickness: "12",
              claddingType: "with_bricks",
              insulation: "not_isolated",
              fileName: "D12D09",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/Brick - Non-Load Bearing 12_ (305mm) Concrete core D12D09.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/d12d09.dwg",
            },
            {
              description: "non_brick_load_bearing_6",
              coreThickness: "6",
              claddingType: "without_bricks",
              insulation: "isolated",
              fileName: "D6D08",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/Non-Brick - Load Bearing 6_ (152mm) Concrete core D6D08.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/d6d08.dwg",
            },
            {
              description: "non_brick_load_bearing_8",
              coreThickness: "8",
              claddingType: "without_bricks",
              insulation: "isolated",
              fileName: "D8D08",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/Non-Brick - Load Bearing 8_ (203mm) Concrete core D8D08.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/d8d08.dwg",
            },
            {
              description: "non_brick_load_bearing_10",
              coreThickness: "10",
              claddingType: "without_bricks",
              insulation: "isolated",
              fileName: "D10D10",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/Non-Brick - Load Bearing 10_ (254mm) Concrete core D10D10.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/d10d10.dwg",
            },
            {
              description: "non_brick_load_bearing_12",
              coreThickness: "12",
              claddingType: "without_bricks",
              insulation: "isolated",
              fileName: "D12D08",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/Non-Brick - Load Bearing 12_ (305mm) Concrete core D12D08.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/d12d08.dwg",
            },
            {
              description: "non_brick_non_load_bearing_6",
              coreThickness: "6",
              claddingType: "without_bricks",
              insulation: "not_isolated",
              fileName: "D6D07",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/Non-Brick - Non-Load Bearing 6_ (152mm) Concrete core D6D07.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/d6d07.dwg",
            },
            {
              description: "non_brick_non_load_bearing_8",
              coreThickness: "8",
              claddingType: "without_bricks",
              insulation: "not_isolated",
              fileName: "D8D07",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/Non-Brick - Non-Load Bearing 8_ (203mm) Concrete core D8D07.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/d8d07.dwg",
            },
            {
              description: "non_brick_non_load_bearing_10",
              coreThickness: "10",
              claddingType: "without_bricks",
              insulation: "not_isolated",
              fileName: "D10D09",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/Non-Brick - Non-Load Bearing 10_ (254mm) Concrete core D10D09.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/d10d09.dwg",
            },
            {
              description: "non_brick_non_load_bearing_12",
              coreThickness: "12",
              claddingType: "without_bricks",
              insulation: "not_isolated",
              fileName: "D12D07",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/Non-Brick - Non-Load Bearing 12_ (305mm) Concrete core D12D07.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Insulated Concrete Floor System/d12d07.dwg",
            },
          ],
        },
        {
          title: "owsj_composite_deck",
          items: [
            {
              description: "brick_load_bearing_6",
              coreThickness: "6",
              claddingType: "with_bricks",
              insulation: "isolated",
              fileName: "D6C05",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/OWSJ Composite Deck/Brick - Load Bearing 6_ (152mm) Concrete core D6C05.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/OWSJ Composite Deck/d6c01.dwg",
            },
            {
              description: "brick_load_bearing_8",
              coreThickness: "8",
              claddingType: "with_bricks",
              insulation: "isolated",
              fileName: "D8C06",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/OWSJ Composite Deck/Brick - Load Bearing 8_ (203mm) Concrete core D8C06.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/OWSJ Composite Deck/d8c03.dwg",
            },
            {
              description: "brick_load_bearing_10",
              coreThickness: "10",
              claddingType: "with_bricks",
              insulation: "isolated",
              fileName: "D10C04",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/OWSJ Composite Deck/Brick - Load Bearing 10_ (254mm) Concrete core D10C04.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/OWSJ Composite Deck/d10c04.dwg",
            },
            {
              description: "brick_load_bearing_12",
              coreThickness: "12",
              claddingType: "with_bricks",
              insulation: "isolated",
              fileName: "D12C04",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/OWSJ Composite Deck/Brick - Load Bearing 12_ (305mm) Concrete core D12C04.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/OWSJ Composite Deck/d12c04.dwg",
            },
            {
              description: "brick_non_load_bearing_6",
              coreThickness: "6",
              claddingType: "with_bricks",
              insulation: "not_isolated",
              fileName: "D6C06",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/OWSJ Composite Deck/Brick - Non-Load Bearing 6_ (152mm) Concrete core D6C06.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/OWSJ Composite Deck/d6c02.dwg",
            },
            {
              description: "brick_non_load_bearing_8",
              coreThickness: "8",
              claddingType: "with_bricks",
              insulation: "not_isolated",
              fileName: "D8C07",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/OWSJ Composite Deck/Brick - Non-Load Bearing 8_ (203mm) Concrete core D8C07.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/OWSJ Composite Deck/d8c04.dwg",
            },
            {
              description: "brick_non_load_bearing_10",
              coreThickness: "10",
              claddingType: "with_bricks",
              insulation: "not_isolated",
              fileName: "D10C05",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/OWSJ Composite Deck/Brick - Non-Load Bearing 10_ (254mm) Concrete core D10C05.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/OWSJ Composite Deck/d10c05.dwg",
            },
            {
              description: "brick_non_load_bearing_12",
              coreThickness: "12",
              claddingType: "with_bricks",
              insulation: "not_isolated",
              fileName: "D12C05",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/OWSJ Composite Deck/Brick - Non-Load Bearing 12_ (305mm) Concrete core D12C05.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/OWSJ Composite Deck/d12c05.dwg",
            },
            {
              description: "non_brick_load_bearing_6",
              coreThickness: "6",
              claddingType: "without_bricks",
              insulation: "isolated",
              fileName: "D6C01",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/OWSJ Composite Deck/Non-Brick - Load Bearing 6_ (152mm) Concrete core D6C01.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/OWSJ Composite Deck/d6c06.dwg",
            },
            {
              description: "non_brick_load_bearing_8",
              coreThickness: "8",
              claddingType: "without_bricks",
              insulation: "isolated",
              fileName: "D8C03",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/OWSJ Composite Deck/Non-Brick - Load Bearing 8_ (203mm) Concrete core D8C03.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/OWSJ Composite Deck/d8c06.dwg",
            },
            {
              description: "non_brick_load_bearing_10",
              coreThickness: "10",
              claddingType: "without_bricks",
              insulation: "isolated",
              fileName: "D10C01",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/OWSJ Composite Deck/Non-Brick - Load Bearing 10_ (254mm) Concrete core D10C01.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/OWSJ Composite Deck/d10c01.dwg",
            },
            {
              description: "non_brick_load_bearing_12",
              coreThickness: "12",
              claddingType: "without_bricks",
              insulation: "isolated",
              fileName: "D12C01",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/OWSJ Composite Deck/Non-Brick - Load Bearing 12_ (305mm) Concrete core D12C01.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/OWSJ Composite Deck/d12c01.dwg",
            },
            {
              description: "non_brick_non_load_bearing_6",
              coreThickness: "6",
              claddingType: "without_bricks",
              insulation: "not_isolated",
              fileName: "D6C02",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/OWSJ Composite Deck/Non-Brick - Non-Load Bearing 6_ (152mm) Concrete core D6C02.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/OWSJ Composite Deck/d6c05.dwg",
            },
            {
              description: "non_brick_non_load_bearing_8",
              coreThickness: "8",
              claddingType: "without_bricks",
              insulation: "not_isolated",
              fileName: "D8C04",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/OWSJ Composite Deck/Non-Brick - Non-Load Bearing 8_ (203mm) Concrete core D8C04.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/OWSJ Composite Deck/d8c07.dwg",
            },
            {
              description: "non_brick_non_load_bearing_10",
              coreThickness: "10",
              claddingType: "without_bricks",
              insulation: "not_isolated",
              fileName: "D10C02",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/OWSJ Composite Deck/Non-Brick - Non-Load Bearing 10_ (254mm) Concrete core D10C02.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/OWSJ Composite Deck/d10c02.dwg",
            },
            {
              description: "non_brick_non_load_bearing_12",
              coreThickness: "12",
              claddingType: "without_bricks",
              insulation: "not_isolated",
              fileName: "D12C02",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/OWSJ Composite Deck/Non-Brick - Non-Load Bearing 12_ (305mm) Concrete core D12C02.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/OWSJ Composite Deck/d12c02.dwg",
            },
          ],
        },
        {
          title: "concrete_flat_plate_slab",
          items: [
            {
              description: "brick_load_bearing_6",
              coreThickness: "6",
              claddingType: "with_bricks",
              insulation: "isolated",
              fileName: "D6E01",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Concrete Flat Plate-Slab/Brick - Load Bearing 6_ (152mm) Concrete core D6E01.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Concrete Flat Plate-Slab/d6e01.dwg",
            },
            {
              description: "brick_load_bearing_8",
              coreThickness: "8",
              claddingType: "with_bricks",
              insulation: "isolated",
              fileName: "D8E01",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Concrete Flat Plate-Slab/Brick - Load Bearing 8_ (203mm) Concrete core D8E01.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Concrete Flat Plate-Slab/d8e01.dwg",
            },
            {
              description: "brick_load_bearing_10",
              coreThickness: "10",
              claddingType: "with_bricks",
              insulation: "isolated",
              fileName: "D10E01",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Concrete Flat Plate-Slab/Brick - Load Bearing 10_ (254mm) Concrete core D10E01.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Concrete Flat Plate-Slab/d10e01.dwg",
            },
            {
              description: "brick_load_bearing_12",
              coreThickness: "12",
              claddingType: "with_bricks",
              insulation: "isolated",
              fileName: "D12E01",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Concrete Flat Plate-Slab/Brick - Load Bearing 12_ (305mm) Concrete core D12E01.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Concrete Flat Plate-Slab/d12e01.dwg",
            },
            {
              description: "non_brick_load_bearing_6",
              coreThickness: "6",
              claddingType: "without_bricks",
              insulation: "isolated",
              fileName: "D6E02",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Concrete Flat Plate-Slab/Non-Brick - Load Bearing 6_ (152mm) Concrete core D6E02.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Concrete Flat Plate-Slab/d6e02.dwg",
            },
            {
              description: "non_brick_load_bearing_8",
              coreThickness: "8",
              claddingType: "without_bricks",
              insulation: "isolated",
              fileName: "D8E02",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Concrete Flat Plate-Slab/Non-Brick - Load Bearing 8_ (203mm) Concrete core D8E02.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Concrete Flat Plate-Slab/d8e02.dwg",
            },
            {
              description: "non_brick_load_bearing_10",
              coreThickness: "10",
              claddingType: "without_bricks",
              insulation: "isolated",
              fileName: "D10E02",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Concrete Flat Plate-Slab/Non-Brick - Load Bearing 10_ (254mm) Concrete core D10E02.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Concrete Flat Plate-Slab/d10e02.dwg",
            },
            {
              description: "non_brick_load_bearing_12",
              coreThickness: "12",
              claddingType: "without_bricks",
              insulation: "isolated",
              fileName: "D12E02",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Concrete Flat Plate-Slab/Non-Brick - Load Bearing 12_ (305mm) Concrete core D12E02.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/GradeatFloor/Concrete Flat Plate-Slab/d12e02.dwg",
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
          title: "hollow_metal_doors_brick_finish",
          items: [
            {
              description: "head_and_threshold_6",
              coreThickness: "6",
              type: "head_and_threshold",
              fileName: "E6H07",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/Doors/Hollow Metal Doors - Brick Finish/Head and Threshold 6_ (152mm) Concrete core E6H07.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/Doors/Hollow Metal Doors - Brick Finish/e6h07.dwg",
            },
            {
              description: "head_and_threshold_8",
              coreThickness: "8",
              type: "head_and_threshold",
              fileName: "E8H05",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/Doors/Hollow Metal Doors - Brick Finish/Head and Threshold 8_ (203mm) Concrete core E8H05.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/Doors/Hollow Metal Doors - Brick Finish/e8h05.dwg",
            },
            {
              description: "head_and_threshold_10",
              coreThickness: "10",
              type: "head_and_threshold",
              fileName: "E10H04",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/Doors/Hollow Metal Doors - Brick Finish/Head and Threshold 10_ (254mm) Concrete core E10H04.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/Doors/Hollow Metal Doors - Brick Finish/e10h04.dwg",
            },
            {
              description: "head_and_threshold_12",
              coreThickness: "12",
              type: "head_and_threshold",
              fileName: "E12H06",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/Doors/Hollow Metal Doors - Brick Finish/Head and Threshold 12_ (305mm) Concrete core E12H06.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/Doors/Hollow Metal Doors - Brick Finish/e12h06.dwg",
            },
            {
              description: "alternate_threshold_6",
              coreThickness: "6",
              type: "alternate_threshold",
              fileName: "E6H10",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/Doors/Hollow Metal Doors - Brick Finish/Alternate Threshold 6_ (152mm) Concrete core E6H10.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/Doors/Hollow Metal Doors - Brick Finish/e6h10.dwg",
            },
            {
              description: "alternate_threshold_8",
              coreThickness: "8",
              type: "alternate_threshold",
              fileName: "E8H08",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/Doors/Hollow Metal Doors - Brick Finish/Alternate Threshold 8_ (203mm) Concrete core E8H08.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/Doors/Hollow Metal Doors - Brick Finish/e8h08.dwg",
            },
            {
              description: "alternate_threshold_10",
              coreThickness: "10",
              type: "alternate_threshold",
              fileName: "E10H07",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/Doors/Hollow Metal Doors - Brick Finish/Alternate Threshold 10_ (254mm) Concrete core E10H07.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/Doors/Hollow Metal Doors - Brick Finish/e10h07.dwg",
            },
            {
              description: "alternate_threshold_12",
              coreThickness: "12",
              type: "alternate_threshold",
              fileName: "E12H08",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/Doors/Hollow Metal Doors - Brick Finish/Alternate Threshold 12_ (305mm) Concrete core E12H08.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/Doors/Hollow Metal Doors - Brick Finish/e12h08.dwg",
            },
            {
              description: "jamb_6",
              coreThickness: "6",
              type: "jamb",
              fileName: "E6H08",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/Doors/Hollow Metal Doors - Brick Finish/Jamb 6_ (152mm) Concrete core E6H08.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/Doors/Hollow Metal Doors - Brick Finish/e6h08.dwg",
            },
            {
              description: "jamb_8",
              coreThickness: "8",
              type: "jamb",
              fileName: "E8H06",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/Doors/Hollow Metal Doors - Brick Finish/Jamb 8_ (203mm) Concrete core E8H06.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/Doors/Hollow Metal Doors - Brick Finish/e8h06.dwg",
            },
            {
              description: "jamb_10",
              coreThickness: "10",
              type: "jamb",
              fileName: "E10H05",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/Doors/Hollow Metal Doors - Brick Finish/Jamb 10_ (254mm) Concrete core E10H05.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/Doors/Hollow Metal Doors - Brick Finish/e10h05.dwg",
            },
            {
              description: "jamb_12",
              coreThickness: "12",
              type: "jamb",
              fileName: "E12H05",
              pdfUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/Doors/Hollow Metal Doors - Brick Finish/Jamb 12_ (305mm) Concrete core E12H05.pdf",
              dwgUrl:
                "/EcoBuildPdf/Non-combustibleconstruction/Doors/Hollow Metal Doors - Brick Finish/e12h05.dwg",
            },
          ],
        },
        {
          title: "hollow_metal_doors_non_brick_finish",
          items: [
            {
              description: "Head and Threshold 6' (152mm) Concrete core E6H03",
              coreThickness: "6",
              type: "head_and_threshold",
              fileName: "E6H03",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Hollow Metal Doors - Non-Brick Finish/Head and Threshold 6_ (152mm) Concrete core E6H03.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Hollow Metal Doors - Non-Brick Finish/e6h03.dwg",
            },
            {
              description: "Head and Threshold 8' (203mm) Concrete core E8H03",
              coreThickness: "8",
              type: "head_and_threshold",
              fileName: "E8H03",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Hollow Metal Doors - Non-Brick Finish/Head and Threshold 8_ (203mm) Concrete core E8H03.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Hollow Metal Doors - Non-Brick Finish/e8h03.dwg",
            },
            {
              description: "Head and Threshold 10' (254mm) Concrete core E10H02",
              coreThickness: "10",
              type: "head_and_threshold",
              fileName: "E10H02",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Hollow Metal Doors - Non-Brick Finish/Head and Threshold 10_ (254mm) Concrete core E10H02.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Hollow Metal Doors - Non-Brick Finish/e10h02.dwg",
            },
            {
              description: "Head and Threshold 12' (305mm) Concrete core E12H03",
              coreThickness: "12",
              type: "head_and_threshold",
              fileName: "E12H03",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Hollow Metal Doors - Non-Brick Finish/Head and Threshold 12_ (305mm) Concrete core E12H03.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Hollow Metal Doors - Non-Brick Finish/e12h03.dwg",
            },
            {
              description: "Alternate Threshold 6' (152mm) Concrete core E6H09",
              coreThickness: "6",
              type: "alternate_threshold",
              fileName: "E6H09",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Hollow Metal Doors - Non-Brick Finish/Alternate Threshold 6_ (152mm) Concrete core E6H09.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Hollow Metal Doors - Non-Brick Finish/e6h09.dwg",
            },
            {
              description: "Alternate Threshold 8' (203mm) Concrete core E8H07",
              coreThickness: "8",
              type: "alternate_threshold",
              fileName: "E8H07",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Hollow Metal Doors - Non-Brick Finish/Alternate Threshold 8_ (203mm) Concrete core E8H07.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Hollow Metal Doors - Non-Brick Finish/e8h07.dwg",
            },
            {
              description: "Alternate Threshold 10' (254mm) Concrete core E10H06",
              coreThickness: "10",
              type: "alternate_threshold",
              fileName: "E10H06",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Hollow Metal Doors - Non-Brick Finish/Alternate Threshold 10_ (254mm) Concrete core E10H06.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Hollow Metal Doors - Non-Brick Finish/e10h06.dwg",
            },
            {
              description: "Alternate Threshold 12' (305mm) Concrete core E12H07",
              coreThickness: "12",
              type: "alternate_threshold",
              fileName: "E12H07",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Hollow Metal Doors - Non-Brick Finish/Alternate Threshold 12_ (305mm) Concrete core E12H07.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Hollow Metal Doors - Non-Brick Finish/e12h07.dwg",
            },
            {
              description: "Jamb 6' (152mm) Concrete core E6H04",
              coreThickness: "6",
              type: "jamb",
              fileName: "E6H04",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Hollow Metal Doors - Non-Brick Finish/Jamb 6_ (152mm) Concrete core E6H04.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Hollow Metal Doors - Non-Brick Finish/e6h04.dwg",
            },
            {
              description: "Jamb 8' (203mm) Concrete core E8H02",
              coreThickness: "8",
              type: "jamb",
              fileName: "E8H02",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Hollow Metal Doors - Non-Brick Finish/Jamb 8_ (203mm) Concrete core E8H02.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Hollow Metal Doors - Non-Brick Finish/e8h02.dwg",
            },
            {
              description: "Jamb 10' (254mm) Concrete core E10H03",
              coreThickness: "10",
              type: "jamb",
              fileName: "E10H03",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Hollow Metal Doors - Non-Brick Finish/Jamb 10_ (254mm) Concrete core E10H03.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Hollow Metal Doors - Non-Brick Finish/e10h03.dwg",
            },
            {
              description: "Jamb 12' (305mm) Concrete core E12H04",
              coreThickness: "12",
              type: "jamb",
              fileName: "E12H04",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Hollow Metal Doors - Non-Brick Finish/Jamb 12_ (305mm) Concrete core E12H04.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Hollow Metal Doors - Non-Brick Finish/e12h04.dwg",
            },
          ],
        },
        {
          title: "aluminum_entrances_brick_finish",
          items: [
            {
              description: "Buck Mounted- Head and Threshold 6' (152mm) Concrete core E6E04",
              coreThickness: "6",
              type: "buck_mounted_head_and_threshold",
              fileName: "E6E04",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Brick Finish/Buck Mounted- Head and Threshold 6_ (152mm) Concrete core E6E04.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Brick Finish/e6e04.dwg",
            },
            {
              description: "Buck Mounted- Head and Threshold 8' (203mm) Concrete core E8E01",
              coreThickness: "8",
              type: "buck_mounted_head_and_threshold",
              fileName: "E8E01",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Brick Finish/Buck Mounted- Head and Threshold 8_ (203mm) Concrete core E8E01.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Brick Finish/e8e01.dwg",
            },
            {
              description: "Buck Mounted- Head and Threshold 10' (254mm) Concrete core E10E01",
              coreThickness: "10",
              type: "buck_mounted_head_and_threshold",
              fileName: "E10E01",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Brick Finish/Buck Mounted- Head and Threshold 10_ (254mm) Concrete core E10E01.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Brick Finish/e10e01.dwg",
            },
            {
              description: "Buck Mounted- Head and Threshold 12' (305mm) Concrete core E12E01",
              coreThickness: "12",
              type: "buck_mounted_head_and_threshold",
              fileName: "E12E01",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Brick Finish/Buck Mounted- Head and Threshold 12_ (305mm) Concrete core E12E01.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Brick Finish/e12e01.dwg",
            },
            {
              description: "Buck Mounted- Alternate Threshold 6' (152mm) Concrete core E6E08",
              coreThickness: "6",
              type: "buck_mounted_alternate_threshold",
              fileName: "E6E08",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Brick Finish/Buck Mounted- Alternate Threshold 6_ (152mm) Concrete core E6E08.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Brick Finish/e6e08.dwg",
            },
            {
              description: "Buck Mounted- Alternate Threshold 8' (203mm) Concrete core E8E05",
              coreThickness: "8",
              type: "buck_mounted_alternate_threshold",
              fileName: "E8E05",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Brick Finish/Buck Mounted- Alternate Threshold 8_ (203mm) Concrete core E8E05.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Brick Finish/e8e05.dwg",
            },
            {
              description: "Buck Mounted- Alternate Threshold 10' (254mm) Concrete core E10E05",
              coreThickness: "10",
              type: "buck_mounted_alternate_threshold",
              fileName: "E10E05",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Brick Finish/Buck Mounted- Alternate Threshold 10_ (254mm) Concrete core E10E05.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Brick Finish/e10e05.dwg",
            },
            {
              description: "Buck Mounted- Alternate Threshold 12' (305mm) Concrete core E12E05",
              coreThickness: "12",
              type: "buck_mounted_alternate_threshold",
              fileName: "E12E05",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Brick Finish/Buck Mounted- Alternate Threshold 12_ (305mm) Concrete core E12E05.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Brick Finish/e12e05.dwg",
            },
            {
              description: "Buck Mounted- Jamb 6' (152mm) Concrete core E6E05",
              coreThickness: "6",
              type: "buck_mounted_jamb",
              fileName: "E6E05",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Brick Finish/Buck Mounted- Jamb 6_ (152mm) Concrete core E6E05.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Brick Finish/e6e05.dwg",
            },
            {
              description: "Buck Mounted- Jamb 8' (203mm) Concrete core E8E02",
              coreThickness: "8",
              type: "buck_mounted_jamb",
              fileName: "E8E02",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Brick Finish/Buck Mounted- Jamb 8_ (203mm) Concrete core E8E02.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Brick Finish/e8e02.dwg",
            },
            {
              description: "Buck Mounted- Jamb 10' (254mm) Concrete core E10E02",
              coreThickness: "10",
              type: "buck_mounted_jamb",
              fileName: "E10E02",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Brick Finish/Buck Mounted- Jamb 10_ (254mm) Concrete core E10E02.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Brick Finish/e10e02.dwg",
            },
            {
              description: "Buck Mounted- Jamb 12' (305mm) Concrete core E12E02",
              coreThickness: "12",
              type: "buck_mounted_jamb",
              fileName: "E12E02",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Brick Finish/Buck Mounted- Jamb 12_ (305mm) Concrete core E12E02.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Brick Finish/e12e02.dwg",
            },
            {
              description: "Concrete Mounted- Sidelight Transom and Sill 6' (152mm) Concrete core E6E06",
              coreThickness: "6",
              type: "concrete_mounted_sidelight_transom_and_sill",
              fileName: "E6E06",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Brick Finish/Concrete Mounted- Sidelight Transom and Sill 6_ (152mm) Concrete core E6E06.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Brick Finish/e6e06.dwg",
            },
            {
              description: "Concrete Mounted- Sidelight Transom and Sill 8' (203mm) Concrete core E8E04",
              coreThickness: "8",
              type: "concrete_mounted_sidelight_transom_and_sill",
              fileName: "E8E04",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Brick Finish/Concrete Mounted- Sidelight Transom and Sill 8_ (203mm) Concrete core E8E04.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Brick Finish/e8e04.dwg",
            },
            {
              description: "Concrete Mounted- Sidelight Transom and Sill 10' (254mm) Concrete core E10E04",
              coreThickness: "10",
              type: "concrete_mounted_sidelight_transom_and_sill",
              fileName: "E10E04",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Brick Finish/Concrete Mounted- Sidelight Transom and Sill 10_ (254mm) Concrete core E10E04.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Brick Finish/e10e04.dwg",
            },
            {
              description: "Concrete Mounted- Sidelight Transom and Sill 12' (305mm) Concrete core E12E04",
              coreThickness: "12",
              type: "concrete_mounted_sidelight_transom_and_sill",
              fileName: "E12E04",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Brick Finish/Concrete Mounted- Sidelight Transom and Sill 12_ (305mm) Concrete core E12E04.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Brick Finish/e12e04.dwg",
            },
            {
              description: "Concrete Mounted- Sidelight Transom and Alternate Sill 6' (152mm) Concrete core E6E09",
              coreThickness: "6",
              type: "concrete_mounted_sidelight_transom_and_alternate_sill",
              fileName: "E6E09",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Brick Finish/Concrete Mounted- Sidelight Transom and Alternate Sill 6_ (152mm) Concrete core E6E09.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Brick Finish/e6e09.dwg",
            },
            {
              description: "Concrete Mounted- Sidelight Transom and Alternate Sill 8' (203mm) Concrete core E8E06",
              coreThickness: "8",
              type: "concrete_mounted_sidelight_transom_and_alternate_sill",
              fileName: "E8E06",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Brick Finish/Concrete Mounted- Sidelight Transom and Alternate Sill 8_ (203mm) Concrete core E8E06.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Brick Finish/e8e06.dwg",
            },
            {
              description: "Concrete Mounted- Sidelight Transom and Alternate Sill 10' (254mm) Concrete core E10E06",
              coreThickness: "10",
              type: "concrete_mounted_sidelight_transom_and_alternate_sill",
              fileName: "E10E06",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Brick Finish/Concrete Mounted- Sidelight Transom and Alternate Sill 10_ (254mm) Concrete core E10E06.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Brick Finish/e10e06.dwg",
            },
            {
              description: "Concrete Mounted- Sidelight Transom and Alternate Sill 12' (305mm) Concrete core E12E06",
              coreThickness: "12",
              type: "concrete_mounted_sidelight_transom_and_alternate_sill",
              fileName: "E12E06",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Brick Finish/Concrete Mounted- Sidelight Transom and Alternate Sill 12_ (305mm) Concrete core E12E06.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Brick Finish/e12e06.dwg",
            },
            {
              description: "Concrete Mounted- Sidelight Jamb 6' (152mm) Concrete core E6E07",
              coreThickness: "6",
              type: "concrete_mounted_sidelight_jamb",
              fileName: "E6E07",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Brick Finish/Concrete Mounted- Sidelight Jamb 6_ (152mm) Concrete core E6E07.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Brick Finish/e6e07.dwg",
            },
            {
              description: "Concrete Mounted- Sidelight Jamb 8' (203mm) Concrete core E8E03",
              coreThickness: "8",
              type: "concrete_mounted_sidelight_jamb",
              fileName: "E8E03",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Brick Finish/Concrete Mounted- Sidelight Jamb 8_ (203mm) Concrete core E8E03.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Brick Finish/e8e03.dwg",
            },
            {
              description: "Concrete Mounted- Sidelight Jamb 10' (254mm) Concrete core E10E03",
              coreThickness: "10",
              type: "concrete_mounted_sidelight_jamb",
              fileName: "E10E03",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Brick Finish/Concrete Mounted- Sidelight Jamb 10_ (254mm) Concrete core E10E03.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Brick Finish/e10e03.dwg",
            },
            {
              description: "Concrete Mounted- Sidelight Jamb 12' (305mm) Concrete core E12E03",
              coreThickness: "12",
              type: "concrete_mounted_sidelight_jamb",
              fileName: "E12E03",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Brick Finish/Concrete Mounted- Sidelight Jamb 12_ (305mm) Concrete core E12E03.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Brick Finish/e12e03.dwg",
            },
          ],
        }, {
          title: "aluminum_entrances_non_brick_finish",
          items: [
            {
              description: "Concrete Mounted- Head and Threshold 6' (152mm) Concrete core E6G09",
              coreThickness: "6",
              type: "concrete_mounted_head_and_threshold",
              fileName: "E6G09",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Non-Brick Finish/Concrete Mounted- Head and Threshold 6_ (152mm) Concrete core E6G09.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Non-Brick Finish/e6g09.dwg",
            },
            {
              description: "Concrete Mounted- Head and Threshold 8' (203mm) Concrete core E8G04",
              coreThickness: "8",
              type: "concrete_mounted_head_and_threshold",
              fileName: "E8G04",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Non-Brick Finish/Concrete Mounted- Head and Threshold 8_ (203mm) Concrete core E8G04.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Non-Brick Finish/e8g04.dwg",
            },
            {
              description: "Concrete Mounted- Head and Threshold 10' (254mm) Concrete core E10G04",
              coreThickness: "10",
              type: "concrete_mounted_head_and_threshold",
              fileName: "E10G04",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Non-Brick Finish/Concrete Mounted- Head and Threshold 10_ (254mm) Concrete core E10G04.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Non-Brick Finish/e10g04.dwg",
            },
            {
              description: "Concrete Mounted- Head and Threshold 12' (305mm) Concrete core E12G05",
              coreThickness: "12",
              type: "concrete_mounted_head_and_threshold",
              fileName: "E12G05",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Non-Brick Finish/Concrete Mounted- Head and Threshold 12_ (305mm) Concrete core E12G05.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Non-Brick Finish/e12g05.dwg",
            },
            {
              description: "Concrete Mounted- Alternate Threshold 6' (152mm) Concrete core E6G11",
              coreThickness: "6",
              type: "concrete_mounted_alternate_threshold",
              fileName: "E6G11",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Non-Brick Finish/Concrete Mounted- Alternate Threshold 6_ (152mm) Concrete core E6G11.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Non-Brick Finish/e6g11.dwg",
            },
            {
              description: "Concrete Mounted- Alternate Threshold 8' (203mm) Concrete core E8G06",
              coreThickness: "8",
              type: "concrete_mounted_alternate_threshold",
              fileName: "E8G06",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Non-Brick Finish/Concrete Mounted- Alternate Threshold 8_ (203mm) Concrete core E8G06.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Non-Brick Finish/e8g06.dwg",
            },
            {
              description: "Concrete Mounted- Alternate Threshold 10' (254mm) Concrete core E10G05",
              coreThickness: "10",
              type: "concrete_mounted_alternate_threshold",
              fileName: "E10G05",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Non-Brick Finish/Concrete Mounted- Alternate Threshold 10_ (254mm) Concrete core E10G05.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Non-Brick Finish/e10g05.dwg",
            },
            {
              description: "Concrete Mounted- Alternate Threshold 12' (305mm) Concrete core E12G07",
              coreThickness: "12",
              type: "concrete_mounted_alternate_threshold",
              fileName: "E12G07",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Non-Brick Finish/Concrete Mounted- Alternate Threshold 12_ (305mm) Concrete core E12G07.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Non-Brick Finish/e12g07.dwg",
            },
            {
              description: "Concrete Mounted- Jamb 6' (152mm) Concrete core E6G10",
              coreThickness: "6",
              type: "concrete_mounted_jamb",
              fileName: "E6G10",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Non-Brick Finish/Concrete Mounted- Jamb 6_ (152mm) Concrete core E6G10.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Non-Brick Finish/e6g10.dwg",
            },
            {
              description: "Concrete Mounted- Jamb 8' (203mm) Concrete core E8G05",
              coreThickness: "8",
              type: "concrete_mounted_jamb",
              fileName: "E8G05",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Non-Brick Finish/Concrete Mounted- Jamb 8_ (203mm) Concrete core E8G05.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Non-Brick Finish/e8g05.dwg",
            },
            {
              description: "Concrete Mounted- Jamb 10' (254mm) Concrete core E10G05",
              coreThickness: "10",
              type: "concrete_mounted_jamb",
              fileName: "E10G05",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Non-Brick Finish/Concrete Mounted- Jamb 10_ (254mm) Concrete core E10G05.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Non-Brick Finish/e10g05.dwg",
            },
            {
              description: "Concrete Mounted- Jamb 12' (305mm) Concrete core E12G06",
              coreThickness: "12",
              type: "concrete_mounted_jamb",
              fileName: "E12G06",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Non-Brick Finish/Concrete Mounted- Jamb 12_ (305mm) Concrete core E12G06.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Non-Brick Finish/e12g06.dwg",
            },
            {
              description: "Buck Mounted- Sidelight Transom and Sill 6' (152mm) Concrete core E6G01",
              coreThickness: "6",
              type: "buck_mounted_sidelight_transom_and_sill",
              fileName: "E6G01",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Non-Brick Finish/Buck Mounted- Sidelight Transom and Sill 6_ (152mm) Concrete core E6G01.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Non-Brick Finish/e6g01.dwg",
            },
            {
              description: "Buck Mounted- Sidelight Transom and Sill 8' (203mm) Concrete core E8G01",
              coreThickness: "8",
              type: "buck_mounted_sidelight_transom_and_sill",
              fileName: "E8G01",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Non-Brick Finish/Buck Mounted- Sidelight Transom and Sill 8_ (203mm) Concrete core E8G01.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Non-Brick Finish/e8g01.dwg",
            },
            {
              description: "Buck Mounted- Sidelight Transom and Sill 10' (254mm) Concrete core E10G02",
              coreThickness: "10",
              type: "buck_mounted_sidelight_transom_and_sill",
              fileName: "E10G02",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Non-Brick Finish/Buck Mounted- Sidelight Transom and Sill 10_ (254mm) Concrete core E10G02.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Non-Brick Finish/e10g02.dwg",
            },
            {
              description: "Buck Mounted- Sidelight Transom and Sill 12' (305mm) Concrete core E12G04",
              coreThickness: "12",
              type: "buck_mounted_sidelight_transom_and_sill",
              fileName: "E12G04",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Non-Brick Finish/Buck Mounted- Sidelight Transom and Sill 12_ (305mm) Concrete core E12G04.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Non-Brick Finish/e12g04.dwg",
            },
            {
              description: "Buck Mounted- Sidelight Transom and Alternate Sill 6' (152mm) Concrete core E6G12",
              coreThickness: "6",
              type: "buck_mounted_sidelight_transom_and_alternate_sill",
              fileName: "E6G12",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Non-Brick Finish/Buck Mounted- Sidelight Transom and Alternate Sill 6_ (152mm) Concrete core E6G12.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Non-Brick Finish/e6g12.dwg",
            },
            {
              description: "Buck Mounted- Sidelight Transom and Alternate Sill 8' (203mm) Concrete core E8G08",
              coreThickness: "8",
              type: "buck_mounted_sidelight_transom_and_alternate_sill",
              fileName: "E8G08",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Non-Brick Finish/Buck Mounted- Sidelight Transom and Alternate Sill 8_ (203mm) Concrete core E8G08.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Non-Brick Finish/e8g08.dwg",
            },
            {
              description: "Buck Mounted- Sidelight Transom and Alternate Sill 10' (254mm) Concrete core E10G07",
              coreThickness: "10",
              type: "buck_mounted_sidelight_transom_and_alternate_sill",
              fileName: "E10G07",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Non-Brick Finish/Buck Mounted- Sidelight Transom and Alternate Sill 10_ (254mm) Concrete core E10G07.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Non-Brick Finish/e10g07.dwg",
            },
            {
              description: "Buck Mounted- Sidelight Transom and Alternate Sill 12' (305mm) Concrete core E12G08",
              coreThickness: "12",
              type: "buck_mounted_sidelight_transom_and_alternate_sill",
              fileName: "E12G08",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Non-Brick Finish/Buck Mounted- Sidelight Transom and Alternate Sill 12_ (305mm) Concrete core E12G08.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Non-Brick Finish/e12g08.dwg",
            },
            {
              description: "Buck Mounted- Sidelight Jamb 6' (152mm) Concrete core E6G08",
              coreThickness: "6",
              type: "buck_mounted_sidelight_jamb",
              fileName: "E6G08",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Non-Brick Finish/Buck Mounted- Sidelight Jamb 6_ (152mm) Concrete core E6G08.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Non-Brick Finish/e6g08.dwg",
            },
            {
              description: "Buck Mounted- Sidelight Jamb 8' (203mm) Concrete core E8G03",
              coreThickness: "8",
              type: "buck_mounted_sidelight_jamb",
              fileName: "E8G03",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Non-Brick Finish/Buck Mounted- Sidelight Jamb 8_ (203mm) Concrete core E8G03.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Non-Brick Finish/e8g03.dwg",
            },
            {
              description: "Buck Mounted- Sidelight Jamb 10' (254mm) Concrete core E10G03",
              coreThickness: "10",
              type: "buck_mounted_sidelight_jamb",
              fileName: "E10G03",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Non-Brick Finish/Buck Mounted- Sidelight Jamb 10_ (254mm) Concrete core E10G03.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Non-Brick Finish/e10g03.dwg",
            },
            {
              description: "Buck Mounted- Sidelight Jamb 12' (305mm) Concrete core E12G03",
              coreThickness: "12",
              type: "buck_mounted_sidelight_jamb",
              fileName: "E12G03",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Non-Brick Finish/Buck Mounted- Sidelight Jamb 12_ (305mm) Concrete core E12G03.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/Doors/Aluminum Entrances - Non-Brick Finish/e12g03.dwg",
            },
          ],
        }
      ],
    },
    "demising-wall": {
      sections: [
        {
          sectionTitle: "Hollow Core Floors Load Bearing",
          items: [
            {
              description: "6' (152mm) Concrete core G6A01",
              coreThickness: "6",
              fileName: "G6A01",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/DemisingWallIntermediateFloorConnections/Hollow Core Floors Load Bearing/6_ (152mm) Concrete core G6A01.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/DemisingWallIntermediateFloorConnections/Hollow Core Floors Load Bearing/g6a01.dwg",
            },
            {
              description: "8' (203mm) Concrete core G8A01",
              coreThickness: "8",
              fileName: "G8A01",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/DemisingWallIntermediateFloorConnections/Hollow Core Floors Load Bearing/8_ (203mm) Concrete core G8A01.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/DemisingWallIntermediateFloorConnections/Hollow Core Floors Load Bearing/g8a01.dwg",
            },
            {
              description: "10' (254mm) Concrete core G10A01",
              coreThickness: "10",
              fileName: "G10A01",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/DemisingWallIntermediateFloorConnections/Hollow Core Floors Load Bearing/10_ (254mm) Concrete core G10A01.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/DemisingWallIntermediateFloorConnections/Hollow Core Floors Load Bearing/g10a01.dwg",
            },
            {
              description: "12' (305mm) Concrete core G12A01",
              coreThickness: "12",
              fileName: "G12A01",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/DemisingWallIntermediateFloorConnections/Hollow Core Floors Load Bearing/12_ (305mm) Concrete core G12A01.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/DemisingWallIntermediateFloorConnections/Hollow Core Floors Load Bearing/g12a01.dwg",
            },
          ],
        },
        {
          sectionTitle: "Hollow Core Floors Non-Load Bearings",
          items: [
            {
              description: "6' (152mm) Concrete core G6A02",
              coreThickness: "6",
              fileName: "G6A02",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/DemisingWallIntermediateFloorConnections/Hollow Core Floors Non-Load Bearings/6_ (152mm) Concrete core G6A02.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/DemisingWallIntermediateFloorConnections/Hollow Core Floors Non-Load Bearings/g6a02.dwg",
            },
            {
              description: "8' (203mm) Concrete core G8A02",
              coreThickness: "8",
              fileName: "G8A02",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/DemisingWallIntermediateFloorConnections/Hollow Core Floors Non-Load Bearings/8_ (203mm) Concrete core G8A02.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/DemisingWallIntermediateFloorConnections/Hollow Core Floors Non-Load Bearings/g8a02.dwg",
            },
            {
              description: "10' (254mm) Concrete core G10A02",
              coreThickness: "10",
              fileName: "G10A02",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/DemisingWallIntermediateFloorConnections/Hollow Core Floors Non-Load Bearings/10_ (254mm) Concrete core G10A02.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/DemisingWallIntermediateFloorConnections/Hollow Core Floors Non-Load Bearings/g10a02.dwg",
            },
            {
              description: "12' (305mm) Concrete core G12A02",
              coreThickness: "12",
              fileName: "G12A02",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/DemisingWallIntermediateFloorConnections/Hollow Core Floors Non-Load Bearings/12_ (305mm) Concrete core G12A02.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/DemisingWallIntermediateFloorConnections/Hollow Core Floors Non-Load Bearings/g12a02.dwg",
            },
          ],
        },
        {
          sectionTitle: "OWSJ- Composite Deck Load Bearing",
          items: [
            {
              description: "6' (152mm) Concrete core G6C01",
              coreThickness: "6",
              fileName: "G6C01",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/DemisingWallIntermediateFloorConnections/OWSJ- Composite Deck Load Bearing/6_ (152mm) Concrete core G6C01.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/DemisingWallIntermediateFloorConnections/OWSJ- Composite Deck Load Bearing/g6c01.dwg",
            },
            {
              description: "8' (203mm) Concrete core G8C01",
              coreThickness: "8",
              fileName: "G8C01",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/DemisingWallIntermediateFloorConnections/OWSJ- Composite Deck Load Bearing/8_ (203mm) Concrete core G8C01.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/DemisingWallIntermediateFloorConnections/OWSJ- Composite Deck Load Bearing/g8c01.dwg",
            },
            {
              description: "10' (254mm) Concrete core G10C01",
              coreThickness: "10",
              fileName: "G10C01",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/DemisingWallIntermediateFloorConnections/OWSJ- Composite Deck Load Bearing/10_ (254mm) Concrete core G10C01.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/DemisingWallIntermediateFloorConnections/OWSJ- Composite Deck Load Bearing/g10c01.dwg",
            },
            {
              description: "12' (305mm) Concrete core G12C01",
              coreThickness: "12",
              fileName: "G12C01",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/DemisingWallIntermediateFloorConnections/OWSJ- Composite Deck Load Bearing/12_ (305mm) Concrete core G12C01.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/DemisingWallIntermediateFloorConnections/OWSJ- Composite Deck Load Bearing/g12c01.dwg",
            },
          ],
        },
        {
          sectionTitle: "OWSJ- Composite Deck Non-Load Bearing",
          items: [
            {
              description: "6' (152mm) Concrete core G6C02",
              coreThickness: "6",
              fileName: "G6C02",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/DemisingWallIntermediateFloorConnections/OWSJ- Composite Deck Non-Load Bearing/6_ (152mm) Concrete core G6C02.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/DemisingWallIntermediateFloorConnections/OWSJ- Composite Deck Non-Load Bearing/g6c02.dwg",
            },
            {
              description: "8' (203mm) Concrete core G8C02",
              coreThickness: "8",
              fileName: "G8C02",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/DemisingWallIntermediateFloorConnections/OWSJ- Composite Deck Non-Load Bearing/8_ (203mm) Concrete core G8C02.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/DemisingWallIntermediateFloorConnections/OWSJ- Composite Deck Non-Load Bearing/g8c02.dwg",
            },
            {
              description: "10' (254mm) Concrete core G10C02",
              coreThickness: "10",
              fileName: "G10C02",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/DemisingWallIntermediateFloorConnections/OWSJ- Composite Deck Non-Load Bearing/10_ (254mm) Concrete core G10C02.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/DemisingWallIntermediateFloorConnections/OWSJ- Composite Deck Non-Load Bearing/g10c02.dwg",
            },
            {
              description: "12' (305mm) Concrete core G12C02",
              coreThickness: "12",
              fileName: "G12C02",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/DemisingWallIntermediateFloorConnections/OWSJ- Composite Deck Non-Load Bearing/12_ (305mm) Concrete core G12C02.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/DemisingWallIntermediateFloorConnections/OWSJ- Composite Deck Non-Load Bearing/g12c02.dwg",
            },
          ],
        },
        {
          sectionTitle: "Proprietary Steel Joist Load Bearing System",
          items: [
            {
              description: "6' (152mm) Concrete core G6B01",
              coreThickness: "6",
              fileName: "G6B01",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/DemisingWallIntermediateFloorConnections/Proprietary Steel Joist Load Bearing System/6_ (152mm) Concrete core G6B01.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/DemisingWallIntermediateFloorConnections/Proprietary Steel Joist Load Bearing System/g6b01.dwg",
            },
            {
              description: "8' (203mm) Concrete core G8B01",
              coreThickness: "8",
              fileName: "G8B01",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/DemisingWallIntermediateFloorConnections/Proprietary Steel Joist Load Bearing System/8_ (203mm) Concrete core G8B01.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/DemisingWallIntermediateFloorConnections/Proprietary Steel Joist Load Bearing System/g8b01.dwg",
            },
            {
              description: "10' (254mm) Concrete core G10B01",
              coreThickness: "10",
              fileName: "G10B01",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/DemisingWallIntermediateFloorConnections/Proprietary Steel Joist Load Bearing System/10_ (254mm) Concrete core G10B01.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/DemisingWallIntermediateFloorConnections/Proprietary Steel Joist Load Bearing System/g10b01.dwg",
            },
            {
              description: "12' (305mm) Concrete core G12B01",
              coreThickness: "12",
              fileName: "G12B01",
              pdfUrl: "/EcoBuildPdf/Non-combustibleconstruction/DemisingWallIntermediateFloorConnections/Proprietary Steel Joist Load Bearing System/12_ (305mm) Concrete core G12B01.pdf",
              dwgUrl: "/EcoBuildPdf/Non-combustibleconstruction/DemisingWallIntermediateFloorConnections/Proprietary Steel Joist Load Bearing System/g12b01.dwg",
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
        {/* <td className="dlinfo hover01">
          <span className="status with-bricks">{t(item.claddingType)}</span>
        </td> */}
        {/* <td className="dlinfo hover01">
          <span className={`status ${!isIsolated ? "not-isolated" : ""}`}>
            {t(item.insulation)}
          </span>
        </td> */}
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
            {/* <td className="dlheader">{t("insulation")}</td>
            <td className="dlheader">{t("file_name")}</td> */}
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
