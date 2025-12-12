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
import "./proper-spacing.css";

const FlamableConstruction = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("floor-at-grade");
  const [searchFilters, setSearchFilters] = useState({
    fileName: "",
    thickness: "",
    description: "",
  });

  const tableData = {
    "door": {
      "sections": [
        {
          "title": "Steel Doors",
          "items": [
            {
              "description": "Head and Sill Brick 6_ (152mm) Concrete core E6E01",
              "coreThickness": "6",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "E6E01",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/Door/Steel Doors/Head and Sill Brick 6_ (152mm) Concrete core E6E01.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/Door/Steel Doors/e6e01.dwg"
            },
            {
              "description": "Head and Sill Brick 8_ (203mm) Concrete core E8E03",
              "coreThickness": "8",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "E8E03",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/Door/Steel Doors/Head and Sill Brick 8_ (203mm) Concrete core E8E03.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/Door/Steel Doors/e8e03.dwg"
            },
            {
              "description": "Head and Sill Non-Brick 6_ (152mm) Concrete core E6G01",
              "coreThickness": "6",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "E6G01",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/Door/Steel Doors/Head and Sill Non-Brick 6_ (152mm) Concrete core E6G01.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/Door/Steel Doors/e6g01.dwg"
            },
            {
              "description": "Head and Sill Non-Brick 8_ (203mm) Concrete core E8G04",
              "coreThickness": "8",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "E8G04",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/Door/Steel Doors/Head and Sill Non-Brick 8_ (203mm) Concrete core E8G04.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/Door/Steel Doors/e8g04.dwg"
            },
            {
              "description": "Jamb Brick 6_ (152mm) Concrete core E6E02",
              "coreThickness": "6",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "E6E02",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/Door/Steel Doors/Jamb Brick 6_ (152mm) Concrete core E6E02.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/Door/Steel Doors/e6e02.dwg"
            },
            {
              "description": "Jamb Brick 8_ (203mm) Concrete core E8E04",
              "coreThickness": "8",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "E8E04",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/Door/Steel Doors/Jamb Brick 8_ (203mm) Concrete core E8E04.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/Door/Steel Doors/e8e04.dwg"
            },
            {
              "description": "Jamb Non-Brick 6_ (152mm) Concrete core E6G02",
              "coreThickness": "6",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "E6G02",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/Door/Steel Doors/Jamb Non-Brick 6_ (152mm) Concrete core E6G02.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/Door/Steel Doors/e6g02.dwg"
            },
            {
              "description": "Jamb Non-Brick 8_ (203mm) Concrete core E8G05",
              "coreThickness": "8",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "E8G05",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/Door/Steel Doors/Jamb Non-Brick 8_ (203mm) Concrete core E8G05.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/Door/Steel Doors/e8g05.dwg"
            }
          ]
        },
        {
          "title": "Wood and Insulated Steel Doors",
          "items": [
            {
              "description": "Head and Sill Brick 6_ (152mm) Concrete core E6E10",
              "coreThickness": "6",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "E6E10",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/Door/Wood and Insulated Steel Doors/Head and Sill Brick 6_ (152mm) Concrete core E6E10.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/Door/Wood and Insulated Steel Doors/e6e10.dwg"
            },
            {
              "description": "Head and Sill Brick 8_ (203mm) Concrete core E8E07",
              "coreThickness": "8",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "E8E07",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/Door/Wood and Insulated Steel Doors/Head and Sill Brick 8_ (203mm) Concrete core E8E07.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/Door/Wood and Insulated Steel Doors/e8e07.dwg"
            },
            {
              "description": "Head and Sill Non-Brick 6_ (152mm) Concrete core E6G13",
              "coreThickness": "6",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "E6G13",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/Door/Wood and Insulated Steel Doors/Head and Sill Non-Brick 6_ (152mm) Concrete core E6G13.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/Door/Wood and Insulated Steel Doors/e6g13.dwg"
            },
            {
              "description": "Head and Sill Non-Brick 8_ (203mm) Concrete core E8G08",
              "coreThickness": "8",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "E8G08",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/Door/Wood and Insulated Steel Doors/Head and Sill Non-Brick 8_ (203mm) Concrete core E8G08.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/Door/Wood and Insulated Steel Doors/e8g08.dwg"
            },
            {
              "description": "Jamb Brick 6_ (152mm) Concrete core E6E11",
              "coreThickness": "6",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "E6E11",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/Door/Wood and Insulated Steel Doors/Jamb Brick 6_ (152mm) Concrete core E6E11.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/Door/Wood and Insulated Steel Doors/e6e11.dwg"
            },
            {
              "description": "Jamb Brick 8_ (203mm) Concrete core E8E08",
              "coreThickness": "8",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "E8E08",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/Door/Wood and Insulated Steel Doors/Jamb Brick 8_ (203mm) Concrete core E8E08.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/Door/Wood and Insulated Steel Doors/e8e08.dwg"
            },
            {
              "description": "Jamb Non-Brick 6_ (152mm) Concrete core E6G14",
              "coreThickness": "6",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "E6G14",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/Door/Wood and Insulated Steel Doors/Jamb Non-Brick 6_ (152mm) Concrete core E6G14.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/Door/Wood and Insulated Steel Doors/e6g14.dwg"
            },
            {
              "description": "Jamb Non-Brick 8_ (203mm) Concrete core E8G09",
              "coreThickness": "8",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "E8G09",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/Door/Wood and Insulated Steel Doors/Jamb Non-Brick 8_ (203mm) Concrete core E8G09.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/Door/Wood and Insulated Steel Doors/e8g09.dwg"
            }
          ]
        }
      ]
    },
    "floor-at-grade": {
      "sections": [
        {
          "title": "Ledger Board Connection",
          "items": [
            {
              "description": "Brick- Load Bearing 12_ (305mm) Concrete core C10A03",
              "coreThickness": "12",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "C10A03",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Ledger Board Connection/Brick- Load Bearing 12_ (305mm) Concrete core C10A03.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Ledger Board Connection/c10a03.dwg"
            },
            {
              "description": "Brick- Load Bearing 12_ (305mm) Concrete core C12A01",
              "coreThickness": "12",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "C12A01",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Ledger Board Connection/Brick- Load Bearing 12_ (305mm) Concrete core C12A01.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Ledger Board Connection/c12a01.dwg"
            },
            {
              "description": "Brick- Load Bearing 6_ (152mm) Concrete core C6A07",
              "coreThickness": "6",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "C6A07",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Ledger Board Connection/Brick- Load Bearing 6_ (152mm) Concrete core C6A07.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Ledger Board Connection/c6a07.dwg"
            },
            {
              "description": "Brick- Load Bearing 6_ (152mm) Concrete core- Alternate Grade Level C6A29",
              "coreThickness": "6",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "C6A29",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Ledger Board Connection/Brick- Load Bearing 6_ (152mm) Concrete core- Alternate Grade Level C6A29.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Ledger Board Connection/c6a29.dwg"
            },
            {
              "description": "Brick- Load Bearing 8_ (203mm) Concrete core C8A05",
              "coreThickness": "8",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "C8A05",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Ledger Board Connection/Brick- Load Bearing 8_ (203mm) Concrete core C8A05.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Ledger Board Connection/c8a05.dwg"
            },
            {
              "description": "Brick- Non-Load Bearing 10_ (254mm) Concrete core C10A04",
              "coreThickness": "10",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "C10A04",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Ledger Board Connection/Brick- Non-Load Bearing 10_ (254mm) Concrete core C10A04.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Ledger Board Connection/c10a04.dwg"
            },
            {
              "description": "Brick- Non-Load Bearing 12_ (305mm) Concrete core C12A02",
              "coreThickness": "12",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "C12A02",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Ledger Board Connection/Brick- Non-Load Bearing 12_ (305mm) Concrete core C12A02.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Ledger Board Connection/c12a02.dwg"
            },
            {
              "description": "Brick- Non-Load Bearing 6_ (152mm) Concrete core C6A08",
              "coreThickness": "6",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "C6A08",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Ledger Board Connection/Brick- Non-Load Bearing 6_ (152mm) Concrete core C6A08.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Ledger Board Connection/c6a08.dwg"
            },
            {
              "description": "Brick- Non-Load Bearing 6_ (152mm) Concrete core- Alternate Grade Level C6A32",
              "coreThickness": "6",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "C6A32",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Ledger Board Connection/Brick- Non-Load Bearing 6_ (152mm) Concrete core- Alternate Grade Level C6A32.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Ledger Board Connection/c6a32.dwg"
            },
            {
              "description": "Brick- Non-Load Bearing 8_ (203mm) Concrete core C8A06",
              "coreThickness": "8",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "C8A06",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Ledger Board Connection/Brick- Non-Load Bearing 8_ (203mm) Concrete core C8A06.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Ledger Board Connection/c8a06.dwg"
            },
            {
              "description": "Non-Brick- Load Bearing 10_ (254mm) Concrete core C10A01",
              "coreThickness": "10",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "C10A01",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Ledger Board Connection/Non-Brick- Load Bearing 10_ (254mm) Concrete core C10A01.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Ledger Board Connection/c10a01.dwg"
            },
            {
              "description": "Non-Brick- Load Bearing 12_ (305mm) Concrete core C12A03",
              "coreThickness": "12",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "C12A03",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Ledger Board Connection/Non-Brick- Load Bearing 12_ (305mm) Concrete core C12A03.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Ledger Board Connection/c12a03.dwg"
            },
            {
              "description": "Non-Brick- Load Bearing 6_ (152mm) Concrete core C6A01",
              "coreThickness": "6",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "C6A01",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Ledger Board Connection/Non-Brick- Load Bearing 6_ (152mm) Concrete core C6A01.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Ledger Board Connection/c6a01.dwg"
            },
            {
              "description": "Non-Brick- Load Bearing 8_ (203mm) Concrete core C8A09",
              "coreThickness": "8",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "C8A09",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Ledger Board Connection/Non-Brick- Load Bearing 8_ (203mm) Concrete core C8A09.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Ledger Board Connection/c8a09.dwg"
            },
            {
              "description": "Non-Brick- Non-Load Bearing 10_ (254mm) Concrete core C10A08",
              "coreThickness": "10",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "C10A08",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Ledger Board Connection/Non-Brick- Non-Load Bearing 10_ (254mm) Concrete core C10A08.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Ledger Board Connection/c10a08.dwg"
            },
            {
              "description": "Non-Brick- Non-Load Bearing 12_ (305mm) Concrete core C12A04",
              "coreThickness": "12",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "C12A04",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Ledger Board Connection/Non-Brick- Non-Load Bearing 12_ (305mm) Concrete core C12A04.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Ledger Board Connection/c12a04.dwg"
            },
            {
              "description": "Non-Brick- Non-Load Bearing 6_ (152mm) Concrete core C6A04",
              "coreThickness": "6",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "C6A04",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Ledger Board Connection/Non-Brick- Non-Load Bearing 6_ (152mm) Concrete core C6A04.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Ledger Board Connection/c6a04.dwg"
            },
            {
              "description": "Non-Brick- Non-Load Bearing 8_ (203mm) Concrete core C8A10",
              "coreThickness": "8",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "C8A10",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Ledger Board Connection/Non-Brick- Non-Load Bearing 8_ (203mm) Concrete core C8A10.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Ledger Board Connection/c8a10.dwg"
            }
          ]
        },
        {
          "title": "Nudura ICF Hanger System",
          "items": [
            {
              "description": "Brick- Load Bearing 10_ (254mm) Concrete core C10A10",
              "coreThickness": "10",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "C10A10",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Nudura ICF Hanger System/Brick- Load Bearing 10_ (254mm) Concrete core C10A10.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Nudura ICF Hanger System/c10a10.dwg"
            },
            {
              "description": "Brick- Load Bearing 12_ (305mm) Concrete core C12A08",
              "coreThickness": "12",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "C12A08",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Nudura ICF Hanger System/Brick- Load Bearing 12_ (305mm) Concrete core C12A08.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Nudura ICF Hanger System/c12a08.dwg"
            },
            {
              "description": "Brick- Load Bearing 6_ (152mm) Concrete core C6A15",
              "coreThickness": "6",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "C6A15",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Nudura ICF Hanger System/Brick- Load Bearing 6_ (152mm) Concrete core C6A15.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Nudura ICF Hanger System/c6a15.dwg"
            },
            {
              "description": "Brick- Load Bearing 6_ (152mm) Concrete core- Alternate Grade Level C6A30",
              "coreThickness": "6",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "C6A30",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Nudura ICF Hanger System/Brick- Load Bearing 6_ (152mm) Concrete core- Alternate Grade Level C6A30.pdf",
              "dwgUrl": ""
            },
            {
              "description": "Brick- Load Bearing 8_ (203mm) Concrete core C8A12",
              "coreThickness": "8",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "C8A12",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Nudura ICF Hanger System/Brick- Load Bearing 8_ (203mm) Concrete core C8A12.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Nudura ICF Hanger System/c8a12.dwg"
            },
            {
              "description": "Brick- Non-Load Bearing 10_ (254mm) Concrete core C10A09",
              "coreThickness": "10",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "C10A09",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Nudura ICF Hanger System/Brick- Non-Load Bearing 10_ (254mm) Concrete core C10A09.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Nudura ICF Hanger System/c10a09.dwg"
            },
            {
              "description": "Brick- Non-Load Bearing 12_ (305mm) Concrete core C12A07",
              "coreThickness": "12",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "C12A07",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Nudura ICF Hanger System/Brick- Non-Load Bearing 12_ (305mm) Concrete core C12A07.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Nudura ICF Hanger System/c12a07.dwg"
            },
            {
              "description": "Brick- Non-Load Bearing 6_ (152mm) Concrete core C6A05",
              "coreThickness": "6",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "C6A05",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Nudura ICF Hanger System/Brick- Non-Load Bearing 6_ (152mm) Concrete core C6A05.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Nudura ICF Hanger System/c6a05.dwg"
            },
            {
              "description": "Brick- Non-Load Bearing 6_ (152mm) Concrete core- Alternate Grade Level C6A33",
              "coreThickness": "6",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "C6A33",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Nudura ICF Hanger System/Brick- Non-Load Bearing 6_ (152mm) Concrete core- Alternate Grade Level C6A33.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Nudura ICF Hanger System/c6a33.dwg"
            },
            {
              "description": "Brick- Non-Load Bearing 8_ (203mm) Concrete core C8A11",
              "coreThickness": "8",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "C8A11",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Nudura ICF Hanger System/Brick- Non-Load Bearing 8_ (203mm) Concrete core C8A11.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Nudura ICF Hanger System/c8a11.dwg"
            },
            {
              "description": "Non-Brick- Load Bearing 10_ (254mm) Concrete core C10A05",
              "coreThickness": "10",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "C10A05",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Nudura ICF Hanger System/Non-Brick- Load Bearing 10_ (254mm) Concrete core C10A05.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Nudura ICF Hanger System/c10a05.dwg"
            },
            {
              "description": "Non-Brick- Load Bearing 12_ (305mm) Concrete core C12A05",
              "coreThickness": "12",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "C12A05",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Nudura ICF Hanger System/Non-Brick- Load Bearing 12_ (305mm) Concrete core C12A05.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Nudura ICF Hanger System/c12a05.dwg"
            },
            {
              "description": "Non-Brick- Load Bearing 6_ (152mm) Concrete core C6A11",
              "coreThickness": "6",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "C6A11",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Nudura ICF Hanger System/Non-Brick- Load Bearing 6_ (152mm) Concrete core C6A11.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Nudura ICF Hanger System/c6a11.dwg"
            },
            {
              "description": "Non-Brick- Load Bearing 8_ (203mm) Concrete core C8A07",
              "coreThickness": "8",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "C8A07",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Nudura ICF Hanger System/Non-Brick- Load Bearing 8_ (203mm) Concrete core C8A07.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Nudura ICF Hanger System/c8a07.dwg"
            },
            {
              "description": "Non-Brick- Non-Load Bearing 10_ (254mm) Concrete core C10A06",
              "coreThickness": "10",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "C10A06",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Nudura ICF Hanger System/Non-Brick- Non-Load Bearing 10_ (254mm) Concrete core C10A06.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Nudura ICF Hanger System/c10a06.dwg"
            },
            {
              "description": "Non-Brick- Non-Load Bearing 12_ (305mm) Concrete core C12A06",
              "coreThickness": "12",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "C12A06",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Nudura ICF Hanger System/Non-Brick- Non-Load Bearing 12_ (305mm) Concrete core C12A06.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Nudura ICF Hanger System/c12a06.dwg"
            },
            {
              "description": "Non-Brick- Non-Load Bearing 6_ (152mm) Concrete core C6A02",
              "coreThickness": "6",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "C6A02",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Nudura ICF Hanger System/Non-Brick- Non-Load Bearing 6_ (152mm) Concrete core C6A02.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Nudura ICF Hanger System/c6a02.dwg"
            },
            {
              "description": "Non-Brick- Non-Load Bearing 8_ (203mm) Concrete core C8A08",
              "coreThickness": "8",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "C8A08",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Nudura ICF Hanger System/Non-Brick- Non-Load Bearing 8_ (203mm) Concrete core C8A08.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Nudura ICF Hanger System/c8a08.dwg"
            }
          ]
        },
        {
          "title": "Simpson Ledger Hanger System",
          "items": [
            {
              "description": "Brick- Load Bearing 10_ (254mm) Concrete core C10A20",
              "coreThickness": "10",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "C10A20",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Simpson Ledger Hanger System/Brick- Load Bearing 10_ (254mm) Concrete core C10A20.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Simpson Ledger Hanger System/c10a20.dwg"
            },
            {
              "description": "Brick- Load Bearing 12_ (305mm) Concrete core C12A18",
              "coreThickness": "12",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "C12A18",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Simpson Ledger Hanger System/Brick- Load Bearing 12_ (305mm) Concrete core C12A18.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Simpson Ledger Hanger System/c12a18.dwg"
            },
            {
              "description": "Brick- Load Bearing 6_ (152mm) Concrete core C6A22",
              "coreThickness": "6",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "C6A22",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Simpson Ledger Hanger System/Brick- Load Bearing 6_ (152mm) Concrete core C6A22.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Simpson Ledger Hanger System/c6a22.dwg"
            },
            {
              "description": "Brick- Load Bearing 6_ (152mm) Concrete core- Alternate Grade Level C6A31",
              "coreThickness": "6",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "C6A31",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Simpson Ledger Hanger System/Brick- Load Bearing 6_ (152mm) Concrete core- Alternate Grade Level C6A31.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Simpson Ledger Hanger System/c6a31.dwg"
            },
            {
              "description": "Brick- Load Bearing 8_ (203mm) Concrete core C8A22",
              "coreThickness": "8",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "C8A22",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Simpson Ledger Hanger System/Brick- Load Bearing 8_ (203mm) Concrete core C8A22.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Simpson Ledger Hanger System/c8a22.dwg"
            },
            {
              "description": "Brick- Non-Load Bearing 10_ (254mm) Concrete core C10A21",
              "coreThickness": "10",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "C10A21",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Simpson Ledger Hanger System/Brick- Non-Load Bearing 10_ (254mm) Concrete core C10A21.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Simpson Ledger Hanger System/c10a21.dwg"
            },
            {
              "description": "Brick- Non-Load Bearing 12_ (305mm) Concrete core C12A19",
              "coreThickness": "12",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "C12A19",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Simpson Ledger Hanger System/Brick- Non-Load Bearing 12_ (305mm) Concrete core C12A19.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Simpson Ledger Hanger System/c12a19.dwg"
            },
            {
              "description": "Brick- Non-Load Bearing 6_ (152mm) Concrete core C6A23",
              "coreThickness": "6",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "C6A23",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Simpson Ledger Hanger System/Brick- Non-Load Bearing 6_ (152mm) Concrete core C6A23.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Simpson Ledger Hanger System/c6a23.dwg"
            },
            {
              "description": "Brick- Non-Load Bearing 6_ (152mm) Concrete core- Alternate Grade Level C6A34",
              "coreThickness": "6",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "C6A34",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Simpson Ledger Hanger System/Brick- Non-Load Bearing 6_ (152mm) Concrete core- Alternate Grade Level C6A34.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Simpson Ledger Hanger System/c6a34.dwg"
            },
            {
              "description": "Brick- Non-Load Bearing 8_ (203mm) Concrete core C8A23",
              "coreThickness": "8",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "C8A23",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Simpson Ledger Hanger System/Brick- Non-Load Bearing 8_ (203mm) Concrete core C8A23.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Simpson Ledger Hanger System/c8a23.dwg"
            },
            {
              "description": "Non-Brick- Load Bearing 10_ (254mm) Concrete core C10A19",
              "coreThickness": "10",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "C10A19",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Simpson Ledger Hanger System/Non-Brick- Load Bearing 10_ (254mm) Concrete core C10A19.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Simpson Ledger Hanger System/c10a19.dwg"
            },
            {
              "description": "Non-Brick- Load Bearing 12_ (305mm) Concrete core C12A17",
              "coreThickness": "12",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "C12A17",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Simpson Ledger Hanger System/Non-Brick- Load Bearing 12_ (305mm) Concrete core C12A17.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Simpson Ledger Hanger System/c12a17.dwg"
            },
            {
              "description": "Non-Brick- Load Bearing 6_ (152mm) Concrete core C6A21",
              "coreThickness": "6",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "C6A21",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Simpson Ledger Hanger System/Non-Brick- Load Bearing 6_ (152mm) Concrete core C6A21.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Simpson Ledger Hanger System/c6a21.dwg"
            },
            {
              "description": "Non-Brick- Load Bearing 8_ (203mm) Concrete core C8A21",
              "coreThickness": "8",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "C8A21",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Simpson Ledger Hanger System/Non-Brick- Load Bearing 8_ (203mm) Concrete core C8A21.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Simpson Ledger Hanger System/c8a21.dwg"
            },
            {
              "description": "Non-Brick- Non-Load Bearing 10_ (254mm) Concrete core C10A22",
              "coreThickness": "10",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "C10A22",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Simpson Ledger Hanger System/Non-Brick- Non-Load Bearing 10_ (254mm) Concrete core C10A22.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Simpson Ledger Hanger System/c10a22.dwg"
            },
            {
              "description": "Non-Brick- Non-Load Bearing 12_ (305mm) Concrete core C12A20",
              "coreThickness": "12",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "C12A20",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Simpson Ledger Hanger System/Non-Brick- Non-Load Bearing 12_ (305mm) Concrete core C12A20.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Simpson Ledger Hanger System/c12a20.dwg"
            },
            {
              "description": "Non-Brick- Non-Load Bearing 6_ (152mm) Concrete core C6A24",
              "coreThickness": "6",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "C6A24",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Simpson Ledger Hanger System/Non-Brick- Non-Load Bearing 6_ (152mm) Concrete core C6A24.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Simpson Ledger Hanger System/c6a24.dwg"
            },
            {
              "description": "Non-Brick- Non-Load Bearing 8_ (203mm) Concrete core C8A24",
              "coreThickness": "8",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "C8A24",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Simpson Ledger Hanger System/Non-Brick- Non-Load Bearing 8_ (203mm) Concrete core C8A24.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/FlooratGradeDetails/Simpson Ledger Hanger System/c8a24.dwg"
            }
          ]
        }
      ]
    },
    "intermediate-floor": {
      "sections": [
        {
          "title": "LedgerBoardConnection",
          "items": [
            {
              "description": "Brick- Load Bearing 10_ (254mm) Concrete core C10A13",
              "coreThickness": "10",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "C10A13",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/LedgerBoardConnection/Brick- Load Bearing 10_ (254mm) Concrete core C10A13.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/LedgerBoardConnection/c10a13.dwg"
            },
            {
              "description": "Brick- Load Bearing 12_ (305mm) Concrete core C12A11",
              "coreThickness": "12",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "C12A11",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/LedgerBoardConnection/Brick- Load Bearing 12_ (305mm) Concrete core C12A11.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/LedgerBoardConnection/c12a11.dwg"
            },
            {
              "description": "Brick- Load Bearing 6_ (152mm) Concrete core C6A03",
              "coreThickness": "6",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "C6A03",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/LedgerBoardConnection/Brick- Load Bearing 6_ (152mm) Concrete core C6A03.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/LedgerBoardConnection/c6a03.dwg"
            },
            {
              "description": "Brick- Load Bearing 8_ (203mm) Concrete core C8A15",
              "coreThickness": "8",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "C8A15",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/LedgerBoardConnection/Brick- Load Bearing 8_ (203mm) Concrete core C8A15.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/LedgerBoardConnection/c8a15.dwg"
            },
            {
              "description": "Brick- Non-Load Bearing 10_ (254mm) Concrete core C10A14",
              "coreThickness": "10",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "C10A14",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/LedgerBoardConnection/Brick- Non-Load Bearing 10_ (254mm) Concrete core C10A14.pdf",
              "dwgUrl": ""
            },
            {
              "description": "Brick- Non-Load Bearing 12_ (305mm) Concrete core C12A12",
              "coreThickness": "12",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "C12A12",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/LedgerBoardConnection/Brick- Non-Load Bearing 12_ (305mm) Concrete core C12A12.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/LedgerBoardConnection/c12a12.dwg"
            },
            {
              "description": "Brick- Non-Load Bearing 6_ (152mm) Concrete core C6A06",
              "coreThickness": "6",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "C6A06",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/LedgerBoardConnection/Brick- Non-Load Bearing 6_ (152mm) Concrete core C6A06.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/LedgerBoardConnection/c6a06.dwg"
            },
            {
              "description": "Brick- Non-Load Bearing 8_ (203mm) Concrete core C8A16",
              "coreThickness": "8",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "C8A16",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/LedgerBoardConnection/Brick- Non-Load Bearing 8_ (203mm) Concrete core C8A16.pdf",
              "dwgUrl": ""
            },
            {
              "description": "Non-Brick- Load Bearing 10_ (254mm) Concrete core C10A16",
              "coreThickness": "10",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "C10A16",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/LedgerBoardConnection/Non-Brick- Load Bearing 10_ (254mm) Concrete core C10A16.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/LedgerBoardConnection/c10a16.dwg"
            },
            {
              "description": "Non-Brick- Load Bearing 12_ (305mm) Concrete core C12A14",
              "coreThickness": "12",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "C12A14",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/LedgerBoardConnection/Non-Brick- Load Bearing 12_ (305mm) Concrete core C12A14.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/LedgerBoardConnection/c12a14.dwg"
            },
            {
              "description": "Non-Brick- Load Bearing 6_ (152mm) Concrete core C6A18",
              "coreThickness": "6",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "C6A18",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/LedgerBoardConnection/Non-Brick- Load Bearing 6_ (152mm) Concrete core C6A18.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/LedgerBoardConnection/c6a18.dwg"
            },
            {
              "description": "Non-Brick- Load Bearing 8_ (203mm) Concrete core C8A18",
              "coreThickness": "8",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "C8A18",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/LedgerBoardConnection/Non-Brick- Load Bearing 8_ (203mm) Concrete core C8A18.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/LedgerBoardConnection/c8a18.dwg"
            },
            {
              "description": "Non-Brick- Non-Load Bearing 10_ (254mm) Concrete core C10A15",
              "coreThickness": "10",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "C10A15",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/LedgerBoardConnection/Non-Brick- Non-Load Bearing 10_ (254mm) Concrete core C10A15.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/LedgerBoardConnection/c10a15.dwg"
            },
            {
              "description": "Non-Brick- Non-Load Bearing 12_ (305mm) Concrete core C12A13",
              "coreThickness": "12",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "C12A13",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/LedgerBoardConnection/Non-Brick- Non-Load Bearing 12_ (305mm) Concrete core C12A13.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/LedgerBoardConnection/c12a13.dwg"
            },
            {
              "description": "Non-Brick- Non-Load Bearing 6_ (152mm) Concrete core C6A17",
              "coreThickness": "6",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "C6A17",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/LedgerBoardConnection/Non-Brick- Non-Load Bearing 6_ (152mm) Concrete core C6A17.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/LedgerBoardConnection/c6a17.dwg"
            },
            {
              "description": "Non-Brick- Non-Load Bearing 8_ (203mm) Concrete core C8A17",
              "coreThickness": "8",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "C8A17",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/LedgerBoardConnection/Non-Brick- Non-Load Bearing 8_ (203mm) Concrete core C8A17.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/LedgerBoardConnection/c8a17.dwg"
            }
          ]
        },
        {
          "title": "NuduraICFHangerSystem",
          "items": [
            {
              "description": "Brick- Load Bearing 10_ (254mm) Concrete core C10A17",
              "coreThickness": "10",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "C10A17",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/NuduraICFHangerSystem/Brick- Load Bearing 10_ (254mm) Concrete core C10A17.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/NuduraICFHangerSystem/c10a17.dwg"
            },
            {
              "description": "Brick- Load Bearing 12_ (305mm) Concrete core C12A16",
              "coreThickness": "12",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "C12A16",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/NuduraICFHangerSystem/Brick- Load Bearing 12_ (305mm) Concrete core C12A16.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/NuduraICFHangerSystem/c12a16.dwg"
            },
            {
              "description": "Brick- Load Bearing 6_ (152mm) Concrete core C6A19",
              "coreThickness": "6",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "C6A19",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/NuduraICFHangerSystem/Brick- Load Bearing 6_ (152mm) Concrete core C6A19.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/NuduraICFHangerSystem/c6a19.dwg"
            },
            {
              "description": "Brick- Load Bearing 8_ (203mm) Concrete core C8A19",
              "coreThickness": "8",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "C8A19",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/NuduraICFHangerSystem/Brick- Load Bearing 8_ (203mm) Concrete core C8A19.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/NuduraICFHangerSystem/c8a19.dwg"
            },
            {
              "description": "Brick- Non-Load Bearing 10_ (254mm) Concrete core C10A18",
              "coreThickness": "10",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "C10A18",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/NuduraICFHangerSystem/Brick- Non-Load Bearing 10_ (254mm) Concrete core C10A18.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/NuduraICFHangerSystem/c10a18.dwg"
            },
            {
              "description": "Brick- Non-Load Bearing 12_ (305mm) Concrete core C12A15",
              "coreThickness": "12",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "C12A15",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/NuduraICFHangerSystem/Brick- Non-Load Bearing 12_ (305mm) Concrete core C12A15.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/NuduraICFHangerSystem/c12a15.dwg"
            },
            {
              "description": "Brick- Non-Load Bearing 6_ (152mm) Concrete core C6A20",
              "coreThickness": "6",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "C6A20",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/NuduraICFHangerSystem/Brick- Non-Load Bearing 6_ (152mm) Concrete core C6A20.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/NuduraICFHangerSystem/c6a20.dwg"
            },
            {
              "description": "Brick- Non-Load Bearing 8_ (203mm) Concrete core C8A20",
              "coreThickness": "8",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "C8A20",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/NuduraICFHangerSystem/Brick- Non-Load Bearing 8_ (203mm) Concrete core C8A20.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/NuduraICFHangerSystem/c8a20.dwg"
            },
            {
              "description": "Non-Brick- Load Bearing 10_ (254mm) Concrete core C10A11",
              "coreThickness": "10",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "C10A11",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/NuduraICFHangerSystem/Non-Brick- Load Bearing 10_ (254mm) Concrete core C10A11.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/NuduraICFHangerSystem/c10a11.dwg"
            },
            {
              "description": "Non-Brick- Load Bearing 12_ (305mm) Concrete core C12A09",
              "coreThickness": "12",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "C12A09",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/NuduraICFHangerSystem/Non-Brick- Load Bearing 12_ (305mm) Concrete core C12A09.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/NuduraICFHangerSystem/c12a09.dwg"
            },
            {
              "description": "Non-Brick- Load Bearing 6_ (152mm) Concrete core C6A12",
              "coreThickness": "6",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "C6A12",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/NuduraICFHangerSystem/Non-Brick- Load Bearing 6_ (152mm) Concrete core C6A12.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/NuduraICFHangerSystem/c6a12.dwg"
            },
            {
              "description": "Non-Brick- Load Bearing 8_ (203mm) Concrete core C8A13",
              "coreThickness": "8",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "C8A13",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/NuduraICFHangerSystem/Non-Brick- Load Bearing 8_ (203mm) Concrete core C8A13.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/NuduraICFHangerSystem/c8a13.dwg"
            },
            {
              "description": "Non-Brick- Non-Load Bearing 10_ (254mm) Concrete core C10A12",
              "coreThickness": "10",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "C10A12",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/NuduraICFHangerSystem/Non-Brick- Non-Load Bearing 10_ (254mm) Concrete core C10A12.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/NuduraICFHangerSystem/c10a12.dwg"
            },
            {
              "description": "Non-Brick- Non-Load Bearing 12_ (305mm) Concrete core C12A10",
              "coreThickness": "12",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "C12A10",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/NuduraICFHangerSystem/Non-Brick- Non-Load Bearing 12_ (305mm) Concrete core C12A10.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/NuduraICFHangerSystem/c12a10.dwg"
            },
            {
              "description": "Non-Brick- Non-Load Bearing 6_ (152mm) Concrete core C6A16",
              "coreThickness": "6",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "C6A16",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/NuduraICFHangerSystem/Non-Brick- Non-Load Bearing 6_ (152mm) Concrete core C6A16.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/NuduraICFHangerSystem/c6a16.dwg"
            },
            {
              "description": "Non-Brick- Non-Load Bearing 8_ (203mm) Concrete core C8A14",
              "coreThickness": "8",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "C8A14",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/NuduraICFHangerSystem/Non-Brick- Non-Load Bearing 8_ (203mm) Concrete core C8A14.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/NuduraICFHangerSystem/c8a14.dwg"
            }
          ]
        },
        {
          "title": "SimpsonLedgerConnectorSystem",
          "items": [
            {
              "description": "Brick- Load Bearing 10_ (254mm) Concrete core C10A25",
              "coreThickness": "10",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "C10A25",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/SimpsonLedgerConnectorSystem/Brick- Load Bearing 10_ (254mm) Concrete core C10A25.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/SimpsonLedgerConnectorSystem/c10a25.dwg"
            },
            {
              "description": "Brick- Load Bearing 12_ (305mm) Concrete core C12A23",
              "coreThickness": "12",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "C12A23",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/SimpsonLedgerConnectorSystem/Brick- Load Bearing 12_ (305mm) Concrete core C12A23.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/SimpsonLedgerConnectorSystem/c12a23.dwg"
            },
            {
              "description": "Brick- Load Bearing 6_ (152mm) Concrete core C6A27",
              "coreThickness": "6",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "C6A27",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/SimpsonLedgerConnectorSystem/Brick- Load Bearing 6_ (152mm) Concrete core C6A27.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/SimpsonLedgerConnectorSystem/c6a27.dwg"
            },
            {
              "description": "Brick- Load Bearing 8_ (203mm) Concrete core C8A27",
              "coreThickness": "8",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "C8A27",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/SimpsonLedgerConnectorSystem/Brick- Load Bearing 8_ (203mm) Concrete core C8A27.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/SimpsonLedgerConnectorSystem/c8a27.dwg"
            },
            {
              "description": "Brick- Non-Load Bearing 10_ (254mm) Concrete core C10A24",
              "coreThickness": "10",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "C10A24",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/SimpsonLedgerConnectorSystem/Brick- Non-Load Bearing 10_ (254mm) Concrete core C10A24.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/SimpsonLedgerConnectorSystem/c10a24.dwg"
            },
            {
              "description": "Brick- Non-Load Bearing 12_ (305mm) Concrete core C12A22",
              "coreThickness": "12",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "C12A22",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/SimpsonLedgerConnectorSystem/Brick- Non-Load Bearing 12_ (305mm) Concrete core C12A22.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/SimpsonLedgerConnectorSystem/c12a22.dwg"
            },
            {
              "description": "Brick- Non-Load Bearing 6_ (152mm) Concrete core C6A26",
              "coreThickness": "6",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "C6A26",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/SimpsonLedgerConnectorSystem/Brick- Non-Load Bearing 6_ (152mm) Concrete core C6A26.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/SimpsonLedgerConnectorSystem/c6a26.dwg"
            },
            {
              "description": "Brick- Non-Load Bearing 8_ (203mm) Concrete core C8A26",
              "coreThickness": "8",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "C8A26",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/SimpsonLedgerConnectorSystem/Brick- Non-Load Bearing 8_ (203mm) Concrete core C8A26.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/SimpsonLedgerConnectorSystem/c8a26.dwg"
            },
            {
              "description": "Non-Brick- Load Bearing 10_ (254mm) Concrete core C10A26",
              "coreThickness": "10",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "C10A26",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/SimpsonLedgerConnectorSystem/Non-Brick- Load Bearing 10_ (254mm) Concrete core C10A26.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/SimpsonLedgerConnectorSystem/c10a26.dwg"
            },
            {
              "description": "Non-Brick- Load Bearing 12_ (305mm) Concrete core C12A24",
              "coreThickness": "12",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "C12A24",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/SimpsonLedgerConnectorSystem/Non-Brick- Load Bearing 12_ (305mm) Concrete core C12A24.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/SimpsonLedgerConnectorSystem/c12a24.dwg"
            },
            {
              "description": "Non-Brick- Load Bearing 6_ (152mm) Concrete core C6A28",
              "coreThickness": "6",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "C6A28",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/SimpsonLedgerConnectorSystem/Non-Brick- Load Bearing 6_ (152mm) Concrete core C6A28.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/SimpsonLedgerConnectorSystem/c6a28.dwg"
            },
            {
              "description": "Non-Brick- Load Bearing 8_ (203mm) Concrete core C8A28",
              "coreThickness": "8",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "C8A28",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/SimpsonLedgerConnectorSystem/Non-Brick- Load Bearing 8_ (203mm) Concrete core C8A28.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/SimpsonLedgerConnectorSystem/c8a28.dwg"
            },
            {
              "description": "Non-Brick- Non-Load Bearing 10_ (254mm) Concrete core C10A23",
              "coreThickness": "10",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "C10A23",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/SimpsonLedgerConnectorSystem/Non-Brick- Non-Load Bearing 10_ (254mm) Concrete core C10A23.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/SimpsonLedgerConnectorSystem/c10a23.dwg"
            },
            {
              "description": "Non-Brick- Non-Load Bearing 12_ (305mm) Concrete core C12A21",
              "coreThickness": "12",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "C12A21",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/SimpsonLedgerConnectorSystem/Non-Brick- Non-Load Bearing 12_ (305mm) Concrete core C12A21.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/SimpsonLedgerConnectorSystem/c12a21.dwg"
            },
            {
              "description": "Non-Brick- Non-Load Bearing 6_ (152mm) Concrete core C6A25",
              "coreThickness": "6",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "C6A25",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/SimpsonLedgerConnectorSystem/Non-Brick- Non-Load Bearing 6_ (152mm) Concrete core C6A25.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/SimpsonLedgerConnectorSystem/c6a25.dwg"
            },
            {
              "description": "Non-Brick- Non-Load Bearing 8_ (203mm) Concrete core C8A25",
              "coreThickness": "8",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "C8A25",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/SimpsonLedgerConnectorSystem/Non-Brick- Non-Load Bearing 8_ (203mm) Concrete core C8A25.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/IntermediateFloor/SimpsonLedgerConnectorSystem/c8a25.dwg"
            }
          ]
        }
      ]
    },
    "roof": {
      "sections": [
        {
          "title": "Brick Load Bearing",
          "items": [
            {
              "description": "152mm - 6_ Concrete core F6B02",
              "coreThickness": "",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "F6B02",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/Roof/Brick Load Bearing/152mm - 6_ Concrete core F6B02.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/Roof/Brick Load Bearing/f6b02.dwg"
            },
            {
              "description": "203mm - 8_ Concrete core F8B01",
              "coreThickness": "",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "F8B01",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/Roof/Brick Load Bearing/203mm - 8_ Concrete core F8B01.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/Roof/Brick Load Bearing/f8b01.dwg"
            }
          ]
        },
        {
          "title": "Brick Non-Load Bearing",
          "items": [
            {
              "description": "152mm - 6_ Concrete core F6B06",
              "coreThickness": "",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "F6B06",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/Roof/Brick Non-Load Bearing/152mm - 6_ Concrete core F6B06.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/Roof/Brick Non-Load Bearing/f6b06.dwg"
            },
            {
              "description": "203mm - 8_ Concrete core F8B02",
              "coreThickness": "",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "F8B02",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/Roof/Brick Non-Load Bearing/203mm - 8_ Concrete core F8B02.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/Roof/Brick Non-Load Bearing/f8b02.dwg"
            }
          ]
        },
        {
          "title": "Non-Brick Load Bearing",
          "items": [
            {
              "description": "152mm - 6_ Concrete core F6B03",
              "coreThickness": "",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "F6B03",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/Roof/Non-Brick Load Bearing/152mm - 6_ Concrete core F6B03.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/Roof/Non-Brick Load Bearing/f6b03.dwg"
            },
            {
              "description": "203mm - 8_ Concrete core F8B03",
              "coreThickness": "",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "F8B03",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/Roof/Non-Brick Load Bearing/203mm - 8_ Concrete core F8B03.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/Roof/Non-Brick Load Bearing/f8b03.dwg"
            }
          ]
        },
        {
          "title": "Non-Brick Non-Load Bearing",
          "items": [
            {
              "description": "152mm - 6_ Concrete core F6B07",
              "coreThickness": "",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "F6B07",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/Roof/Non-Brick Non-Load Bearing/152mm - 6_ Concrete core F6B07.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/Roof/Non-Brick Non-Load Bearing/f6b07.dwg"
            },
            {
              "description": "203mm - 8_ Concrete core F8B04",
              "coreThickness": "",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "F8B04",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/Roof/Non-Brick Non-Load Bearing/203mm - 8_ Concrete core F8B04.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/Roof/Non-Brick Non-Load Bearing/f8b04.dwg"
            }
          ]
        }
      ]
    },
    "window": {
      "sections": [
        {
          "title": "Head and Sill",
          "items": [
            {
              "description": "Brick 6_ (152mm) Concrete core - Full Depth Buck E6A04",
              "coreThickness": "6",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "E6A04",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/Window/Head and Sill/Brick 6_ (152mm) Concrete core - Full Depth Buck E6A04.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/Window/Head and Sill/e6a04.dwg"
            },
            {
              "description": "Brick 6_ (152mm) Concrete core - Inset Buck E6A01",
              "coreThickness": "6",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "E6A01",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/Window/Head and Sill/Brick 6_ (152mm) Concrete core - Inset Buck E6A01.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/Window/Head and Sill/e6a01.dwg"
            },
            {
              "description": "Brick 6_ (152mm) Concrete core - Partial Depth Buck E6A03",
              "coreThickness": "6",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "E6A03",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/Window/Head and Sill/Brick 6_ (152mm) Concrete core - Partial Depth Buck E6A03.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/Window/Head and Sill/e6a03.dwg"
            },
            {
              "description": "Brick 8_ (203mm) Concrete core - Full Depth Buck E8A04",
              "coreThickness": "8",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "E8A04",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/Window/Head and Sill/Brick 8_ (203mm) Concrete core - Full Depth Buck E8A04.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/Window/Head and Sill/e8a04.dwg"
            },
            {
              "description": "Brick 8_ (203mm) Concrete core - Inset Buck E8A01",
              "coreThickness": "8",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "E8A01",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/Window/Head and Sill/Brick 8_ (203mm) Concrete core - Inset Buck E8A01.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/Window/Head and Sill/e8a01.dwg"
            },
            {
              "description": "Brick 8_ (203mm) Concrete core - Partial Depth Buck E8A03",
              "coreThickness": "8",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "E8A03",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/Window/Head and Sill/Brick 8_ (203mm) Concrete core - Partial Depth Buck E8A03.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/Window/Head and Sill/e8a03.dwg"
            },
            {
              "description": "Non-Brick 6_ (152mm) Concrete core - Full Depth Buck E6C04",
              "coreThickness": "6",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "E6C04",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/Window/Head and Sill/Non-Brick 6_ (152mm) Concrete core - Full Depth Buck E6C04.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/Window/Head and Sill/e6c04.dwg"
            },
            {
              "description": "Non-Brick 6_ (152mm) Concrete core - Inset Buck E6C01",
              "coreThickness": "6",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "E6C01",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/Window/Head and Sill/Non-Brick 6_ (152mm) Concrete core - Inset Buck E6C01.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/Window/Head and Sill/e6c01.dwg"
            },
            {
              "description": "Non-Brick 6_ (152mm) Concrete core - Partial Depth Buck E6C03",
              "coreThickness": "6",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "E6C03",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/Window/Head and Sill/Non-Brick 6_ (152mm) Concrete core - Partial Depth Buck E6C03.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/Window/Head and Sill/e6c03.dwg"
            },
            {
              "description": "Non-Brick 8_ (203mm) Concrete core - Full Depth Buck E8C04",
              "coreThickness": "8",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "E8C04",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/Window/Head and Sill/Non-Brick 8_ (203mm) Concrete core - Full Depth Buck E8C04.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/Window/Head and Sill/e8c04.dwg"
            },
            {
              "description": "Non-Brick 8_ (203mm) Concrete core - Inset Buck E8C01",
              "coreThickness": "8",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "E8C01",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/Window/Head and Sill/Non-Brick 8_ (203mm) Concrete core - Inset Buck E8C01.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/Window/Head and Sill/e8c01.dwg"
            },
            {
              "description": "Non-Brick 8_ (203mm) Concrete core - Partial Depth Buck E8C03",
              "coreThickness": "8",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "E8C03",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/Window/Head and Sill/Non-Brick 8_ (203mm) Concrete core - Partial Depth Buck E8C03.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/Window/Head and Sill/e8c03.dwg"
            }
          ]
        },
        {
          "title": "Jamb",
          "items": [
            {
              "description": "Brick 6_ (152mm) Concrete core - Full Depth Buck E6A06",
              "coreThickness": "6",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "E6A06",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/Window/Jamb/Brick 6_ (152mm) Concrete core - Full Depth Buck E6A06.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/Window/Jamb/e6a06.dwg"
            },
            {
              "description": "Brick 6_ (152mm) Concrete core - Inset Buck E6A02",
              "coreThickness": "6",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "E6A02",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/Window/Jamb/Brick 6_ (152mm) Concrete core - Inset Buck E6A02.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/Window/Jamb/e6a02.dwg"
            },
            {
              "description": "Brick 6_ (152mm) Concrete core - Partial Depth Buck E6A05",
              "coreThickness": "6",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "E6A05",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/Window/Jamb/Brick 6_ (152mm) Concrete core - Partial Depth Buck E6A05.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/Window/Jamb/e6a05.dwg"
            },
            {
              "description": "Brick 8_ (203mm) Concrete core - Full Depth Buck E8A06",
              "coreThickness": "8",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "E8A06",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/Window/Jamb/Brick 8_ (203mm) Concrete core - Full Depth Buck E8A06.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/Window/Jamb/e8a06.dwg"
            },
            {
              "description": "Brick 8_ (203mm) Concrete core - Inset Buck E8A02",
              "coreThickness": "8",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "E8A02",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/Window/Jamb/Brick 8_ (203mm) Concrete core - Inset Buck E8A02.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/Window/Jamb/e8a02.dwg"
            },
            {
              "description": "Brick 8_ (203mm) Concrete core - Partial Depth Buck E8A05",
              "coreThickness": "8",
              "claddingType": "with_bricks",
              "insulation": "not_isolated",
              "fileName": "E8A05",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/Window/Jamb/Brick 8_ (203mm) Concrete core - Partial Depth Buck E8A05.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/Window/Jamb/e8a05.dwg"
            },
            {
              "description": "Non-Brick 6_ (152mm) Concrete core - Full Depth Buck E6C06",
              "coreThickness": "6",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "E6C06",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/Window/Jamb/Non-Brick 6_ (152mm) Concrete core - Full Depth Buck E6C06.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/Window/Jamb/e6c06.dwg"
            },
            {
              "description": "Non-Brick 6_ (152mm) Concrete core - Inset Buck E6C02",
              "coreThickness": "6",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "E6C02",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/Window/Jamb/Non-Brick 6_ (152mm) Concrete core - Inset Buck E6C02.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/Window/Jamb/e6c02.dwg"
            },
            {
              "description": "Non-Brick 6_ (152mm) Concrete core - Partial Depth Buck E6C05",
              "coreThickness": "6",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "E6C05",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/Window/Jamb/Non-Brick 6_ (152mm) Concrete core - Partial Depth Buck E6C05.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/Window/Jamb/e6c05.dwg"
            },
            {
              "description": "Non-Brick 8_ (203mm) Concrete core - Full Depth Buck E8C06",
              "coreThickness": "8",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "E8C06",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/Window/Jamb/Non-Brick 8_ (203mm) Concrete core - Full Depth Buck E8C06.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/Window/Jamb/e8c06.dwg"
            },
            {
              "description": "Non-Brick 8_ (203mm) Concrete core - Inset Buck E8C02",
              "coreThickness": "8",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "E8C02",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/Window/Jamb/Non-Brick 8_ (203mm) Concrete core - Inset Buck E8C02.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/Window/Jamb/e8c02.dwg"
            },
            {
              "description": "Non-Brick 8_ (203mm) Concrete core - Partial Depth Buck E8C05",
              "coreThickness": "8",
              "claddingType": "without_bricks",
              "insulation": "not_isolated",
              "fileName": "E8C05",
              "pdfUrl": "/EcoBuildPdf/Flammableconstruction/Window/Jamb/Non-Brick 8_ (203mm) Concrete core - Partial Depth Buck E8C05.pdf",
              "dwgUrl": "/EcoBuildPdf/Flammableconstruction/Window/Jamb/e8c05.dwg"
            }
          ]
        }
      ]
    },
  };

  /* Updated translation keys matching en.json */
  const tabs = [
    { id: "floor-at-grade", label: t("Floor at Grade Details") },
    {
      id: "intermediate-floor",
      label: t("Intermediate Floor"),
    },
    { id: "roof", label: t("Roof") },
    { id: "door", label: t("Door") },
    { id: "window", label: t("Window") },
  ];

  /* ... data structure remains the same ... */

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
    if (!url) return;
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filter logic
  const filteredSections = useMemo(() => {
    const currentTabData = tableData[activeTab];
    if (!currentTabData || !currentTabData.sections) return [];

    return currentTabData.sections
      .map((section) => ({
        ...section,
        items: section.items.filter((item) => {
          const matchFileName = item.fileName
            .toLowerCase()
            .includes(searchFilters.fileName.toLowerCase());
          const matchThickness = item.coreThickness
            .toLowerCase()
            .includes(searchFilters.thickness.toLowerCase());
          const matchDescription = item.description
            .toLowerCase()
            .includes(searchFilters.description.toLowerCase());
          return matchFileName && matchThickness && matchDescription;
        }),
      }))
      .filter((section) => section.items.length > 0);
  }, [activeTab, searchFilters, tableData]);

  const renderTableRow = (item, index) => (
    <tr className="dlinfo" key={index}>
      <td className="dlinfo">{item.description}</td>
      <td className="dlinfo">{item.coreThickness}</td>
      <td className="dlinfo">
        {item.claddingType === "with_bricks"
          ? "With Bricks"
          : item.claddingType === "without_bricks"
            ? "Without Bricks"
            : item.claddingType}
      </td>
      <td className="dlinfo">
        {item.insulation === "isolated"
          ? "Insulated"
          : item.insulation === "not_isolated"
            ? "Not Insulated"
            : item.insulation}
      </td>
      <td className="dlinfo hover01">
        <ul className="file-list-inner-td">
          <li>
            <a
              onClick={() => handleDownload(item.pdfUrl, item.fileName + ".pdf")}
              className="red-link"
              style={{ cursor: "pointer" }}
            >
              <div className="overlay"></div>
              <img src={image9} alt="pdf" />
              <span>{item.fileName}</span>
            </a>
          </li>
          <li>
            <a
              onClick={() => handleDownload(item.dwgUrl, item.fileName + ".dwg")}
              className="blue-link"
              style={{ cursor: "pointer" }}
            >
              <div className="overlay"></div>
              <img src={image11} alt="dwg" />
              <span>{item.fileName}</span>
            </a>
          </li>
        </ul>
      </td>
    </tr>
  );

  const renderSection = (section, index) => (
    <div className="section-container mb-4" key={index}>
      <div className="section-header">
        <h4 className="text-primary">{section.title}</h4>
      </div>
      <table className="dltrc" style={{ background: "none", marginBottom: "30px" }}>
        <tbody>
          <tr className="dlheader">
            <td className="dlheader">{t("Description")}</td>
            <td className="dlheader">{t("Core thickness")}</td>
            <td className="dlheader">{t("Cladding type")}</td>
            <td className="dlheader">{t("Insulation")}</td>
            <td className="dlheader">{t("Files")}</td>
          </tr>
          {section.items.map((item, idx) => renderTableRow(item, idx))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div>
      <Breadcrumb
        header={t("Flammable Construction")}
        subHeader={t("Building homes also for the generations to come")}
      />

      <section>
        <div className="container">
          <div className="row g-4">
            <div className="col-md-3">
              <div className="card icon-top-primary-card h-245">
                <Link to="/belowtheconstructionslope" className="icon-card top-icon-band blue cus-p-16">
                  <div className="icon-band">
                    <img src={image1} alt={t("Below the construction slope")} />
                  </div>
                </Link>
                <div className="text-band">
                  <h4>{t("Below the construction slope")}</h4>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card icon-top-primary-card h-245">
                <Link to="/flamableconstruction" className="icon-card top-icon-band yellow cus-p-16">
                  <div className="icon-band">
                    <img src={image2} alt={t("Flammable construction")} />
                  </div>
                </Link>
                <div className="text-band">
                  <h4>{t("Flammable construction")}</h4>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card icon-top-primary-card h-245">
                <Link to="/noncombstibleconstruction" className="icon-card top-icon-band gray cus-p-16">
                  <div className="icon-band">
                    <img src={image3} alt={t("Non-combustible construction")} />
                  </div>
                </Link>
                <div className="text-band">
                  <h4>{t("Non-combustible construction")}</h4>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card icon-top-primary-card h-245">
                <Link to="/firewall" className="icon-card top-icon-band red cus-p-16">
                  <div className="icon-band">
                    <img src={image4} alt={t("Firewall")} />
                  </div>
                </Link>
                <div className="text-band">
                  <h4>{t("Firewall")}</h4>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card icon-top-primary-card h-245">
                <Link to="/formunitprofile" className="icon-card top-icon-band green cus-p-16">
                  <div className="icon-band">
                    <img src={image5} alt={t("Form unit profiles")} />
                  </div>
                </Link>
                <div className="text-band">
                  <h4>{t("Form unit profiles")}</h4>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card icon-top-primary-card h-245">
                <Link to="/bimlibrary" className="icon-card top-icon-band orange cus-p-16">
                  <div className="icon-band">
                    <img src={image6} alt={t("BIM Library")} />
                  </div>
                </Link>
                <div className="text-band">
                  <h4>{t("BIM Library")}</h4>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card icon-top-primary-card h-245">
                <Link to="/earlydesigncriteria" className="icon-card top-icon-band purple cus-p-16">
                  <div className="icon-band">
                    <img src={image7} alt={t("Early design criteria")} />
                  </div>
                </Link>
                <div className="text-band">
                  <h4>{t("Early design criteria")}</h4>
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
                  {t("Flammable construction")}
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
                    {t("File Name")}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fileName"
                    name="fileName"
                    value={searchFilters.fileName}
                    onChange={handleSearchChange}
                    placeholder={t("Search Here")}
                  />
                </div>
                <div className="form-group w-40">
                  <label htmlFor="thickness" className="form-label">
                    {t("Thickness")}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="thickness"
                    name="thickness"
                    value={searchFilters.thickness}
                    onChange={handleSearchChange}
                    placeholder={t("Search Here")}
                  />
                </div>
                <div className="form-group w-30 border-none">
                  <label htmlFor="description" className="form-label">
                    {t("Description")}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    name="description"
                    value={searchFilters.description}
                    onChange={handleSearchChange}
                    placeholder={t("Search Here")}
                  />
                </div>
              </div>
              <div className="right-penal">
                <a onClick={handleSearch} className="btn-primary">
                  {t("Search")}
                  <i className="fa-solid fa-magnifying-glass"></i>
                </a>
                <a
                  onClick={handleClearSearch}
                  className="btn-primary white-border-btn"
                >
                  {t("Clear")}
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
            defaultActiveTab="floor-at-grade"
            onTabChange={handleTabChange}
          />
        </div>
        <div className="container" style={{ marginTop: "70px" }}>
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
                <p>{t("No results found")}</p>
              </div>
            )}
          </section>
        </div>
      </section>
    </div>
  );
};

export default FlamableConstruction;
