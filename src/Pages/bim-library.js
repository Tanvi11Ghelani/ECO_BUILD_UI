import React, { useState } from 'react';
import Breadcrumb from '../common-component/Breadcrumb';
import Tab from '../common-component/Tab';
import image1 from '../images/Icons/below-the-construction-slope.svg';
import image2 from '../images/Icons/flammable-construction.svg';
import image3 from '../images/Icons/Non-combustible-construction.svg';
import image4 from '../images/Icons/firewall.svg';
import image5 from '../images/Icons/form-unit-profiles.svg';
import image6 from '../images/Icons/BIM-library.svg';
import image7 from '../images/Icons/early-design-criteria.svg';
import image8 from '../images/Icons/early-design-criteria-1.svg';
import image9 from '../images/Icons/pdf-gray.svg';
import image10 from '../images/Icons/Download.svg';
import image11 from '../images/Icons/dwg.svg';
import image12 from '../images/Icons/rfa-file.svg';
import image13 from '../images/Icons/rvt-file.svg';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import './below-the-construction-slope.css';

const imperialDWFData = [
    {
        title: 'Standard Form Unit ',
        dwg4: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial DWF 4-inch/standard-form-unit-imperial.dwf',
        dwg6: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial DWF 6-inch/icf-nudura-6-inch-standard-form-unit-imperial.dwf',
        dwg8: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial DWF 8-inch/icf-nudura-8-inch-standard-form-unit-imperial.dwf',
        dwg10: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial DWF 10-inch/icf-nudura-10-inch-standard-form-unit-imperial.dwf',
        dwg12: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial DWF 12-inch/icf-nudura-12-inch-standard-form-unit-imperial.dwf',
    },
    {
        title: '90 Degree Corner Form Unit',
        dwg4: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial DWF 4-inch/90-degree-form-unit-imperial.dwf',
        dwg6: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial DWF 6-inch/icf-nudura-6-inch-90-degree-form-unit-imperial.dwf',
        dwg8: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial DWF 8-inch/icf-nudura-8-inch-90-degree-form-unit-imperial.dwf',
        dwg10: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial DWF 10-inch/icf-nudura-10-inch-90-degree-form-unit-imperial.dwf',
        dwg12: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial DWF 12-inch/icf-nudura-12-inch-90-degree-form-unit-imperial.dwf',
    },
    {
        title: '45 Degree Corner Form Unit',
        dwg4: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial DWF 4-inch/45-degree-form-unit-imperial.dwf',
        dwg6: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial DWF 6-inch/icf-nudura-6-inch-45-degree-form-unit-imperial.dwf',
        dwg8: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial DWF 8-inch/icf-nudura-8-inch-45-degree-form-unit-imperial.dwf',
        dwg10: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial DWF 10-inch/icf-nudura-10-inch-45-degree-form-unit-imperial.dwf',
        dwg12: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial DWF 12-inch/icf-nudura-12-inch-45-degree-form-unit-imperial.dwf',
    },
    {
        title: 'Single Sided Taper Top Form Unit',
        dwg4: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial DWF 4-inch/single-sided-taper-top-form-unit-imperial.dwf',
        dwg6: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial DWF 6-inch/icf-nudura-6-inch-single-sided-taper-top-form-unit-imperial.dwf',
        dwg8: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial DWF 8-inch/icf-nudura-8-inch-single-sided-taper-top-form-unit-imperial.dwf',
        dwg10: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial DWF 10-inch/icf-nudura-10-inch-single-sided-taper-top-imperial.dwf',
        dwg12: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial DWF 12-inch/icf-nudura-12-inch-single-sided-taper-top-imperial.dwf',
    },
    {
        title: 'Brick Ledge Form Unit',
        dwg4: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial DWF 4-inch/brick-ledge-form-unit-imperial.dwf',
        dwg6: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial DWF 6-inch/icf-nudura-6-inch-brick-ledge-form-unit-imperial.dwf',
        dwg8: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial DWF 8-inch/icf-nudura-8-inch-brick-ledge-form-unit-imperial.dwf',
        dwg10: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial DWF 10-inch/icf-nudura-10-inch-brick-ledge-form-unit-imperial.dwf',
        dwg12: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial DWF 12-inch/icf-nudura-12-inch-brick-ledge-form-unit-imperial.dwf',
    },
    {
        title: 'T Form Unit- Short',
        dwg4: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial DWF 4-inch/short-t-form-unit-imperial.dwf',
        dwg6: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial DWF 6-inch/icf-nudura-6-inch-short-t-form-unit-imperial.dwf',
        dwg8: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial DWF 8-inch/icf-nudura-8-inch-short-t-form-unit-imperial.dwf',
        dwg10: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial DWF 10-inch/icf-nudura-10-inch-short-t-form-unit-imperial.dwf',
        dwg12: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial DWF 12-inch/icf-nudura-12-inch-short-t-form-unit-imperial.dwf',
    },
    {
        title: 'T Form Unit- Long',
        dwg4: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial DWF 4-inch/long-t-form-unit-imperial.dwf',
        dwg6: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial DWF 6-inch/icf-nudura-6-inch-long-t-form-unit-imperial.dwf',
        dwg8: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial DWF 8-inch/icf-nudura-8-inch-long-t-form-unit-imperial.dwf',
        dwg10: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial DWF 10-inch/icf-nudura-10-inch-long-t-form-unit-imperial.dwf',
        dwg12: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial DWF 12-inch/icf-nudura-12-inch-long-t-form-unit-imperial.dwf',
    },
    {
        title: 'End Cap',
        dwg4: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial DWF 4-inch/end-cap-imperial.dwf',
        dwg6: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial DWF 6-inch/icf-nudura-6-inch-end-cap-imperial.dwf',
        dwg8: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial DWF 8-inch/icf-nudura-8-inch-end-cap-imperial.dwf',
        dwg10: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial DWF 10-inch/icf-nudura-10-inch-end-cap-imperial.dwf',
        dwg12: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial DWF 12-inch/icf-nudura-12-inch-end-cap-imperial.dwf',    },
    {
        title: 'Height Adjuster',
        dwg4: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial DWF 4-inch/height-adjuster-imperial.dwf',
        dwg6: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial DWF 6-inch/icf-nudura-6-inch-height-adjuster-imperial.dwf',
        dwg8: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial DWF 8-inch/icf-nudura-8-inch-height-adjuster-imperial.dwf',
        dwg10: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial DWF 10-inch/icf-nudura-10-inch-height-adjuster-imperial.dwf',
        dwg12: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial DWF 12-inch/icf-nudura-12-inch-height-adjuster-imperial.dwf',
    },

]
const projects = [
    {
    title: 'Project Imperial - RVT',
    fileType: 'RVT',
    fileUrl: 'EcoBuildPdf/BIMLibrary/Revit Project & Template Files/Project Files/wall-icf-nudura-project-imperial.rvt'
  },
  {
    title: 'Project Metric - RVT',
    fileType: 'RVT',
    fileUrl: 'EcoBuildPdf/BIMLibrary/Revit Project & Template Files/Project Files/wall-icf-nudura-project-metric.rvt'
  },
]
const template = [
    {
        title: 'Template Imperial',
        fileType: 'RVT',
        fileUrl: 'EcoBuildPdf/BIMLibrary/Revit Project & Template Files/Template Files - RTE/wall-icf-nudura-template-imperial.rte'
    },
    {
        title: 'Project Metric - RVT',
        fileType: 'RVT',
        fileUrl: 'EcoBuildPdf/BIMLibrary/Revit Project & Template Files/Template Files - RTE/wall-icf-nudura-template-metric.rte'
    }
]
const metricrfaform = [
    {
      title: 'Brick Ledge Extension',
      rfa:'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric RFA Form Panels/nudura-brick-ledge-extension.rfa'
    },
    {
        title: 'Brick Ledge Panel',
        rfa:'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric RFA Form Panels/nudura-brick-ledge-panel.rfa'
        
    },
    {
        title: 'Standard Form Panel',
        rfa:'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric RFA Form Panels/nudura-standard-form-panel.rfa'
        
    },
    {
        title: 'Taper Top Panel',
        rfa:'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric RFA Form Panels/nudura-taper-top-panel.rfa'
        
    },
]
const imperialRFAData = [
  {
        title: 'Standard Form Unit ',
        dwg4: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial RFA 4-Inch/icf-nudura-4-inch-standard-form-unit-imperial.rfa',
        dwg6: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial RFA 6-Inch/icf-nudura-6-inch-standard-form-unit-imperial.rfa',
        dwg8: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial RFA 8-Inch/icf-nudura-8-inch-standard-form-unit-imperial.rfa',
        dwg10: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial RFA 10-Inch/icf-nudura-10-inch-standard-form-unit-imperial.rfa',
        dwg12: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial RFA 12-Inch/icf-nudura-12-inch-standard-form-unit-imperial.rfa',
    },
    {
        title: '90 Degree Corner Form Unit',
        dwg4: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial RFA 4-Inch/90-degree-form-unit-imperial.rfa',
        dwg6: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial RFA 6-Inch/icf-nudura-6-inch-90-degree-form-unit-imperial.rfa',
        dwg8: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial RFA 8-Inch/icf-nudura-8-inch-90-degree-form-unit-imperial.rfa',
        dwg10: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial RFA 10-Inch/icf-nudura-10-inch-90-degree-form-unit-imperial.rfa',
        dwg12: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial RFA 12-Inch/icf-nudura-12-inch-90-degree-form-unit-imperial.rfa',
    },
    {
        title: '45 Degree Corner Form Unit',
        dwg4: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial RFA 4-Inch/45-degree-form-unit-imperial.rfa',
        dwg6: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial RFA 6-Inch/icf-nudura-6-inch-45-degree-form-unit-imperial.rfa',
        dwg8: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial RFA 8-Inch/icf-nudura-8-inch-45-degree-form-unit-imperial.rfa',
        dwg10: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial RFA 10-Inch/icf-nudura-10-inch-45-degree-form-unit-imperial.rfa',
        dwg12: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial RFA 12-Inch/icf-nudura-12-inch-45-degree-form-unit-imperial.rfa',
    },
    {
        title: 'Single Sided Taper Top Form Unit',
        dwg4: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial RFA 4-Inch/single-sided-taper-top-form-unit-imperial.rfa',
        dwg6: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial RFA 6-Inch/icf-nudura-6-inch-single-sided-taper-top-form-unit-imperial.rfa',
        dwg8: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial RFA 8-Inch/icf-nudura-8-inch-single-sided-taper-top-form-unit-imperial.rfa',
        dwg10: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial RFA 10-Inch/icf-nudura-10-inch-single-sided-taper-top-imperial.rfa',
        dwg12: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial RFA 12-Inch/icf-nudura-12-inch-single-sided-taper-top-imperial.rfa',
    },
    {
        title: 'Brick Ledge Form Unit',
        dwg4: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial RFA 4-Inch/brick-ledge-form-unit-imperial.rfa',
        dwg6: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial RFA 6-Inch/icf-nudura-6-inch-brick-ledge-form-unit-imperial.rfa',
        dwg8: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial RFA 8-Inch/icf-nudura-8-inch-brick-ledge-form-unit-imperial.rfa',
        dwg10: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial RFA 10-Inch/icf-nudura-10-inch-brick-ledge-form-unit-imperial.rfa',
        dwg12: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial RFA 12-Inch/icf-nudura-12-inch-brick-ledge-form-unit-imperial.rfa',
    },
    {
        title: 'T Form Unit- Short',
         dwg4: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial RFA 4-Inch/short-t-form-unit-imperial.rfa',
         dwg6: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial RFA 6-Inch/icf-nudura-6-inch-short-t-form-unit-imperial.rfa',
         dwg8: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial RFA 8-Inch/icf-nudura-8-inch-short-t-form-unit-imperial.rfa',
        dwg10: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial RFA 10-Inch/icf-nudura-10-inch-short-t-form-unit-imperial.rfa',
        dwg12: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial RFA 12-Inch/icf-nudura-12-inch-short-t-form-unit-imperial.rfa',
    },
    {
        title: 'T Form Unit- Long',
        dwg4: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial RFA 4-Inch/long-t-form-unit-imperial.rfa',
        dwg6: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial RFA 6-Inch/icf-nudura-6-inch-long-t-form-unit-imperial.rfa',
        dwg8: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial RFA 8-Inch/icf-nudura-8-inch-long-t-form-unit-imperial.rfa',
        dwg10: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial RFA 10-Inch/icf-nudura-10-inch-long-t-form-unit-imperial.rfa',
        dwg12: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial RFA 12-Inch/icf-nudura-12-inch-long-t-form-unit-imperial.rfa',
    },
    {
        title: 'End Cap',
        dwg4: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial RFA 4-Inch/end-cap-imperial.rfa',
        dwg6: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial RFA 6-Inch/icf-nudura-6-inch-end-cap-imperial.rfa',
        dwg8: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial RFA 8-Inch/icf-nudura-8-inch-end-cap-imperial.rfa',
        dwg10: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial RFA 10-Inch/icf-nudura-10-inch-end-cap-imperial.rfa',
        dwg12: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial RFA 12-Inch/icf-nudura-12-inch-end-cap-imperial.rfa',
    },
    {
        title: 'Height Adjuster',
        dwg4: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial RFA 4-Inch/height-adjuster-imperial.rfa',
        dwg6: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial RFA 6-Inch/icf-nudura-6-inch-height-adjuster-imperial.rfa',
        dwg8: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial RFA 8-Inch/icf-nudura-8-inch-height-adjuster-imperial.rfa',
        dwg10: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial RFA 10-Inch/icf-nudura-10-inch-height-adjuster-imperial.rfa',
        dwg12: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Imperial RFA 12-Inch/icf-nudura-12-inch-height-adjuster-imperial.rfa',
    },

]
const metricDWFData = [
    {
        title: 'Standard Form Unit ',
         dwg4: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric DWF 102mm/icf-nudura-102mm-standard-form-unit-metric.dwf',
         dwg6: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric DWF 152mm/icf-nudura-152mm-standard-form-unit-metric.dwf',
         dwg8: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric DWF 203mm/icf-nudura-203mm-standard-form-unit-metric.dwf',
        dwg10: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric DWF 254mm/icf-nudura-254mm-standard-form-unit-metric.dwf',
        dwg12: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric DWF 305mm/icf-nudura-305mm-standard-form-unit-metric.dwf',
    },
    {
        title: '90 Degree Corner Form Unit',
         dwg4: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric DWF 102mm/icf-nudura-102mm-90-degree-form-unit-metric.dwf',
         dwg6: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric DWF 152mm/icf-nudura-152mm-90-degree-form-unit-metric.dwf',
         dwg8: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric DWF 203mm/icf-nudura-203mm-90-degree-form-unit-metric.dwf',
        dwg10: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric DWF 254mm/icf-nudura-254mm-standard-form-unit-metric.dwf',
        dwg12: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric DWF 305mm/icf-nudura-305mm-standard-form-unit-metric.dwf',
    },
    {
        title: '45 Degree Corner Form Unit',
         dwg4: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric DWF 102mm/icf-nudura-102mm-45-degree-form-unit-metric.dwf',
         dwg6: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric DWF 152mm/icf-nudura-152mm-45-degree-form-unit-metric.dwf',
         dwg8: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric DWF 203mm/icf-nudura-203mm-45-degree-form-unit-metric.dwf',
        dwg10: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric DWF 254mm/icf-nudura-254mm-45-degree-form-unit-metric.dwf',
        dwg12: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric DWF 305mm/icf-nudura-305mm-45-degree-form-unit-metric.dwf',
    },
    {
        title: 'Single Sided Taper Top Form Unit',
         dwg4: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric DWF 102mm/icf-nudura-102mm-single-sided-taper-top-form-unit-metric.dwf',
         dwg6: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric DWF 152mm/icf-nudura-152mm-single-sided-taper-top-form-unit-metric.dwf',
         dwg8: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric DWF 203mm/icf-nudura-203mm-single-sided-taper-top-form-unit-metric.dwf',
        dwg10: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric DWF 254mm/icf-nudura-254mm-single-sided-taper-top-form-unit-metric.dwf',
        dwg12: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric DWF 305mm/icf-nudura-305mm-single-sided-taper-top-form-unit-metric.dwf',
    },
    {
        title: 'Brick Ledge Form Unit',
         dwg4: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric DWF 102mm/icf-nudura-102mm-brick-ledge-form-unit-metric.dwf',
         dwg6: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric DWF 152mm/icf-nudura-152mm-brick-ledge-form-unit-metric.dwf',
         dwg8: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric DWF 203mm/icf-nudura-203mm-brick-ledge-form-unit-metric.dwf',
        dwg10: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric DWF 254mm/icf-nudura-254mm-brick-ledge-form-unit-metric.dwf',
        dwg12: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric DWF 305mm/icf-nudura-305mm-brick-ledge-form-unit-metric.dwf',
    },
    {
        title: 'T Form Unit- Short',
         dwg4: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric DWF 102mm/icf-nudura-102mm-short-t-form-unit-metric.dwf',
         dwg6: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric DWF 152mm/icf-nudura-152mm-short-t-form-unit-metric.dwf',
         dwg8: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric DWF 203mm/icf-nudura-203mm-short-t-form-unit-metric.dwf',
        dwg10: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric DWF 254mm/icf-nudura-254mm-short-t-form-unit-metric.dwf',
        dwg12: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric DWF 305mm/icf-nudura-305mm-short-t-form-unit-metric.dwf',
    },
    {
        title: 'T Form Unit- Long',
         dwg4: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric DWF 102mm/icf-nudura-102mm-long-t-form-unit-metric.dwf',
         dwg6: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric DWF 152mm/icf-nudura-152mm-long-t-form-unit-metric.dwf',
         dwg8: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric DWF 203mm/icf-nudura-203mm-long-t-form-unit-metric.dwf',
        dwg10: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric DWF 254mm/icf-nudura-254mm-long-t-form-unit-metric.dwf',
        dwg12: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric DWF 305mm/icf-nudura-305mm-long-t-form-unit-metric.dwf',
    },
    {
        title: 'End Cap',
         dwg4: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric DWF 102mm/icf-nudura-102mm-single-end-cap-metric.dwf',
         dwg6: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric DWF 152mm/icf-nudura-152mm-single-end-cap-metric.dwf',
         dwg8: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric DWF 203mm/icf-nudura-203mm-single-end-cap-metric.dwf',
        dwg10: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric DWF 254mm/icf-nudura-254mm-single-end-cap-metric.dwf',
        dwg12: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric DWF 305mm/icf-nudura-305mm-single-end-cap-metric.dwf',    },
    {
        title: 'Height Adjuster',
         dwg4: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric DWF 102mm/icf-nudura-102mm-height-adjuster-metric.dwf',
         dwg6: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric DWF 152mm/icf-nudura-152mm-height-adjuster-metric.dwf',
         dwg8: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric DWF 203mm/icf-nudura-203mm-height-adjuster-metric.dwf',
        dwg10: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric DWF 254mm/icf-nudura-254mm-height-adjuster-metric.dwf',
        dwg12: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric DWF 305mm/icf-nudura-305mm-height-adjuster-metric.dwf',
    },

]
const metricRFAData = [
   {
        title: 'Standard Form Unit ',
        dwg4: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric RFA 102mm/icf-nudura-102mm-standard-form-unit-metric.rfa',
        dwg6: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric RFA 152mm/icf-nudura-152mm-standard-form-unit-metric.rfa',
        dwg8: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric RFA 203mm/icf-nudura-203mm-standard-form-unit-metric.rfa',
        dwg10: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric RFA 254mm/icf-nudura-254mm-standard-form-unit-metric.rfa',
        dwg12: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric RFA 305mm/icf-nudura-305mm-standard-form-unit-metric.rfa',
    },
    {
        title: '90 Degree Corner Form Unit',
        dwg4: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric RFA 102mm/icf-nudura-102mm-90-degree-form-unit-metric.rfa',
        dwg6: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric RFA 152mm/icf-nudura-152nn-90-degree-form-unit-metric.rfa',
        dwg8: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric RFA 203mm/icf-nudura-203mm-90-degree-form-unit-metric.rfa',
        dwg10: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric RFA 254mm/icf-nudura-254mm-90-degree-form-unit-metric.rfa',
        dwg12: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric RFA 305mm/icf-nudura-305mm-90-degree-form-unit-metric.rfa',
    },
    {
        title: '45 Degree Corner Form Unit',
        dwg4: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric RFA 102mm/icf-nudura-102mm-45-degree-form-unit-metric.rfa',
        dwg6: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric RFA 152mm/icf-nudura-152mm-45-degree-form-unit-metric.rfa',
        dwg8: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric RFA 203mm/icf-nudura-203mm-45-degree-form-unit-metric.rfa',
        dwg10: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric RFA 254mm/icf-nudura-254mm-45-degree-form-unit-metric.rfa',
        dwg12: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric RFA 305mm/icf-nudura-305mm-45-degree-form-unit-metric.rfa',
    },
    {
        title: 'Single Sided Taper Top Form Unit',
        dwg6: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric RFA 152mm/icf-nudura-102mm-single-sided-taper-top-form-unit-metric.rfa',
        dwg8: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric RFA 203mm/icf-nudura-152-single-sided-taper-top-form-unit-metric.rfa',
        dwg4: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric RFA 102mm/icf-nudura-203mm-single-sided-taper-top-form-unit-metric.rfa',
        dwg10: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric RFA 254mm/icf-nudura-254mm-single-sided-taper-top-metric.rfa',
        dwg12: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric RFA 305mm/icf-nudura-305mm-single-sided-taper-top-metric.rfa',
    },
    {
        title: 'Brick Ledge Form Unit',
        dwg4: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric RFA 102mm/icf-nudura-102mm-brick-ledge-form-unit-metric.rfa',
        dwg6: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric RFA 152mm/icf-nudura-152mm-brick-ledge-form-unit-metric.rfa',
        dwg8: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric RFA 203mm/icf-nudura-203mm-brick-ledge-form-unit-metric.rfa',
        dwg10: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric RFA 254mm/icf-nudura-254mm-brick-ledge-form-unit-metric.rfa',
        dwg12: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric RFA 305mm/icf-nudura-305mm-brick-ledge-form-unit-metric.rfa',
    },
    {
        title: 'T Form Unit- Short',
        dwg4: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric RFA 102mm/icf-nudura-102mm-short-t-form-unit-metric.rfa',
        dwg6: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric RFA 152mm/icf-nudura-152mm-short-t-form-unit-metric.rfa',
        dwg8: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric RFA 203mm/icf-nudura-203mm-short-t-form-unit-metric.rfa',
        dwg10: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric RFA 254mm/icf-nudura-254mm-short-t-form-unit-metric.rfa',
        dwg12: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric RFA 305mm/icf-nudura-305mm-short-t-form-unit-metric.rfa',
    },
    {
        title: 'T Form Unit- Long',
        dwg4: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric RFA 102mm/icf-nudura-102mm-long-t-form-unit-metric.rfa',
        dwg6: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric RFA 152mm/icf-nudura-152mm-long-t-form-unit-metric.rfa',
        dwg8: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric RFA 203mm/icf-nudura-203mm-long-t-form-unit-metric.rfa',
        dwg10: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric RFA 254mm/icf-nudura-254mm-long-t-form-unit-metric.rfa',
        dwg12: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric RFA 305mm/icf-nudura-305mm-long-t-form-unit-metric.rfa',
    },
    {
        title: 'End Cap',
        dwg4: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric RFA 102mm/icf-nudura-102mm-end-cap-metric.rfa',
        dwg6: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric RFA 152mm/icf-nudura-152mm-single-end-cap-metric.rfa',
        dwg8: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric RFA 203mm/icf-nudura-203mm-single-end-cap-metric.rfa',
        dwg10: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric RFA 254mm/icf-nudura-254mm-end-cap-metric.rfa',
        dwg12: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric RFA 305mm/icf-nudura-305mm-end-cap-metric.rfa',    },
    {
        title: 'Height Adjuster',
        dwg4: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric RFA 102mm/icf-nudura-102mm-height-adjuster.rfa',
        dwg6: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric RFA 152mm/icf-nudura-152mm-height-adjuster-metric.rfa',
        dwg8: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric RFA 203mm/icf-nudura-203mm-height-adjuster-metric.rfa',
        dwg10: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric RFA 254mm/icf-nudura-254mm-height-adjuster-metric.rfa',
        dwg12: 'EcoBuildPdf/BIMLibrary/Nudura Unit Form Model/Metric RFA 305mm/icf-nudura-305mm-height-adjuster-metric.rfa',
    },
]

const BIMLibrary = () => {
    const { t } = useTranslation();
    const tr = (key, fallback) => t(key, { defaultValue: fallback });
    
    // State to manage active tab
    const [activeTab, setActiveTab] = useState('unit-form-model');

    // Define tabs array for Tab component
    const tabs = [
        { id: 'unit-form-model', label: tr("bimLibrary.tabs.unitFormModel", "Unit Form Model") },
        { id: 'project-template', label: tr("bimLibrary.tabs.projectTemplateFiles", "Project / Template Files") },
    ];

    // Handle tab change
    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div>
            <Breadcrumb 
                header={tr("bimLibrary.title", "BIM Library")}
                subHeader={tr("bimLibrary.subtitle", "Design resources and downloads")}
            />
            <section>
                <div className="container">
                    <div className="row g-4">

                        <div className="col-md-3">
                            <div className="card icon-top-primary-card h-245">
                                <Link to="/belowtheconstructionslope" className="icon-card top-icon-band blue cus-p-16">
                                    <div className="icon-band">
                                        <img src={image1} alt={tr("bimLibrary.cards.belowConstructionSlope", "Below the Construction Slope")} />
                                    </div>
                                </Link>
                                <div className="text-band">
                                    <h4>{tr("bimLibrary.cards.belowConstructionSlope", "Below the Construction Slope")}</h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card icon-top-primary-card h-245">
                                <Link to="/flamableconstruction" className="icon-card top-icon-band yellow cus-p-16">
                                    <div className="icon-band">
                                        <img src={image2} alt={tr("bimLibrary.cards.flammableConstruction", "Flammable Construction")} />
                                    </div>
                                </Link>
                                <div className="text-band">
                                    <h4>{tr("bimLibrary.cards.flammableConstruction", "Flammable Construction")}</h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card icon-top-primary-card h-245">
                                <Link to="/noncombstibleconstruction" className="icon-card top-icon-band gray cus-p-16">
                                    <div className="icon-band">
                                        <img src={image3} alt={tr("bimLibrary.cards.nonCombustibleConstruction", "Non-combustible Construction")} />
                                    </div>
                                </Link>
                                <div className="text-band">
                                    <h4>{tr("bimLibrary.cards.nonCombustibleConstruction", "Non-combustible Construction")}</h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card icon-top-primary-card h-245">
                                <Link to="/firewall" className="icon-card top-icon-band red cus-p-16">
                                    <div className="icon-band">
                                        <img src={image4} alt={tr("bimLibrary.cards.firewall", "Firewall")} />
                                    </div>
                                </Link>
                                <div className="text-band">
                                    <h4>{tr("bimLibrary.cards.firewall", "Firewall")}</h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card icon-top-primary-card h-245">
                                <Link to="/formunitprofile" className="icon-card top-icon-band green cus-p-16">
                                    <div className="icon-band">
                                        <img src={image5} alt={tr("bimLibrary.cards.formUnitProfiles", "Form Unit Profiles")} />
                                    </div>
                                </Link>
                                <div className="text-band">
                                    <h4>{tr("bimLibrary.cards.formUnitProfiles", "Form Unit Profiles")}</h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card icon-top-primary-card h-245">
                                <Link to="/bimlibrary" className="icon-card top-icon-band orange cus-p-16">
                                    <div className="icon-band">
                                        <img src={image6} alt={tr("bimLibrary.cards.bimLibrary", "BIM Library")} />
                                    </div>
                                </Link>
                                <div className="text-band">
                                    <h4>{tr("bimLibrary.cards.bimLibrary", "BIM Library")}</h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card icon-top-primary-card h-245">
                                <Link to="/earlydesigncriteria" className="icon-card top-icon-band purple cus-p-16">
                                    <div className="icon-band">
                                        <img src={image7} alt={tr("bimLibrary.cards.earlyDesignCriteria", "Early Design Criteria")} />
                                    </div>
                                </Link>
                                <div className="text-band">
                                    <h4>{tr("bimLibrary.cards.earlyDesignCriteria", "Early Design Criteria")}</h4>
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
                                <h3 className="text-primary mb-3">{t("bimLibrary.heading")}</h3>

                                <p className="dark-font-600 mt-2 mb-2">
                                    {t("bimLibrary.description1")}
                                </p>

                                <p className="dark-font-600 mt-2 mb-2">
                                    {t("bimLibrary.description2")}
                                </p>

                                <h6 className="mb-0 mt-3 mb-4">{t("bimLibrary.technicalRequirements.title")}</h6>

                                <p className="dark-font-600 mt-2 mb-2">
                                    {t("bimLibrary.technicalRequirements.body")}
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
                                <label className="form-label">{tr("bimLibrary.search.fileName", "File Name")}</label>
                                <input type="email" className="form-control" placeholder={tr("bimLibrary.search.placeholder", "Search here")} />
                            </div>

                            <div className="form-group w-40">
                                <label className="form-label">{tr("bimLibrary.search.thickness", "Thickness")}</label>
                                <input type="email" className="form-control" placeholder={tr("bimLibrary.search.placeholder", "Search here")} />
                            </div>

                            <div className="form-group w-30 border-none">
                                <label className="form-label">{tr("bimLibrary.search.description", "Description")}</label>
                                <input type="email" className="form-control" placeholder={tr("bimLibrary.search.placeholder", "Search here")} />
                            </div>
                        </div>

                        <div className="right-penal">
                            <a   className="btn-primary">
                                {tr("bimLibrary.search.search", "Search")}
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </a>
                            <a   className="btn-primary white-border-btn">
                                {tr("bimLibrary.search.advanced", "Advanced Search")}
                            </a>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <section className="pt-0">
                <div className="container">
                    {/* Tab Component - Reusable tab navigation */}
                    <Tab 
                        tabs={tabs}
                        defaultActiveTab="unit-form-model"
                        onTabChange={handleTabChange}
                    />
                </div>
                <div className="container">
                    {/* Tab Content - Render based on active tab */}
                    {activeTab === 'unit-form-model' && (
                        <>
                        <section className="white-bg pt-4">
                                <div className="title">
                                    <h3 className="text-primary text-center mb-5">
                                        {t("bimLibrary.tables.imperialDWF")}
                                    </h3>
                                </div>
                                <table className="dltrc tabel-content-center" style={{background:"none"}}>
                                    <tbody>
                                        <tr className="dlheader">
                                            <td>{t("bimLibrary.tableHeaders.description")}</td>
                                            <td>{t('4_inch')}</td>
                                            <td>{t('6_inch')}</td>
                                            <td>{t('8_inch')}</td>
                                            <td>{t('10_inch')}</td>
                                            <td>{t('12_inch')}</td>
                                        </tr>
                                        {imperialDWFData.map((item, index) => (
                                            <tr className="dlinfo" key={index}>
                                                <td className="dlinfo hover01">{item.title}</td>

                                                {['dwg4', 'dwg6', 'dwg8', 'dwg10', 'dwg12'].map((key) => (
                                                    <td className="dlinfo hover01" key={key}>
                                                        <ul className="file-list-inner-td">
                                                            <li>
                                                                <a href={item[key]} className="blue-link" target="_blank" rel="noopener noreferrer">
                                                                    <div className="icon-band">
                                                                        <img src={image11} alt={t('file_icon')} />
                                                                    </div>{t('dwg')}<img src={image10} className="download-icon" alt={t('download_icon')} />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </section>
                            
                            <section className="white-bg pt-4">
                                <div className="title">
                                    <h3 className="text-primary text-center mb-5">
                                        {t("bimLibrary.tables.imperialDWF")}
                                    </h3>
                                </div>
                                <table className="dltrc tabel-content-center" style={{background:"none"}}>
                                    <tbody>
                                        <tr className="dlheader">
                                            <td>{t("bimLibrary.tableHeaders.description")}</td>
                                            <td className="dlheader">{t('4_inch')}</td>
                                            <td className="dlheader">{t('6_inch')}</td>
                                            <td className="dlheader">{t('8_inch')}</td>
                                            <td className="dlheader">{t('10_inch')}</td>
                                            <td className="dlheader">{t('12_inch')}</td>
                                        </tr>
                                        {imperialRFAData.map((item, index) => (
                                            <tr className="dlinfo" key={index}>
                                                <td className="dlinfo hover01">{item.title}</td>

                                                {['dwg4', 'dwg6', 'dwg8', 'dwg10', 'dwg12'].map((key) => (
                                                    <td className="dlinfo hover01" key={key}>
                                                        <ul className="file-list-inner-td">
                                                            <li>
                                                                <a href={item[key]} className="blue-link" target="_blank" rel="noopener noreferrer">
                                                                    <div className="icon-band">
                                                                        <img src={image12} alt={t('file_icon')} />
                                                                    </div>{t('rfa')}<img src={image10} className="download-icon" alt={t('download_icon')} />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </section>
                            
                            <section className="white-bg pt-4">
                                <div className="title">
                                    <h3 className="text-primary text-center mb-5">{t('metric_dwf')}</h3>
                                </div>
                                <table className="dltrc tabel-content-center" style={{background:"none"}}>
                                    <tbody>
                                        <tr className="dlheader">
                                            <td className="dlheader">{t('description')}</td>
                                            <td className="dlheader">{t('4_inch')}</td>
                                            <td className="dlheader">{t('6_inch')}</td>
                                            <td className="dlheader">{t('8_inch')}</td>
                                            <td className="dlheader">{t('10_inch')}</td>
                                            <td className="dlheader">{t('12_inch')}</td>
                                        </tr>
                                        {metricDWFData.map((item, index) => (
                                            <tr className="dlinfo" key={index}>
                                                <td className="dlinfo hover01">{item.title}</td>

                                                {['dwg4', 'dwg6', 'dwg8', 'dwg10', 'dwg12'].map((key) => (
                                                    <td className="dlinfo hover01" key={key}>
                                                        <ul className="file-list-inner-td">
                                                            <li>
                                                                <a href={item[key]} className="blue-link" target="_blank" rel="noopener noreferrer">
                                                                    <div className="icon-band">
                                                                        <img src={image11} alt={t('file_icon')} />
                                                                    </div>{t('dwg')}<img src={image10} className="download-icon" alt={t('download_icon')} />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </section>
                            
                            <section className="white-bg pt-4">
                                <div className="title">
                                    <h3 className="text-primary text-center mb-5">{t('metric_rfa')}</h3>
                                </div>
                                <table className="dltrc tabel-content-center" style={{background:"none"}}>
                                    <tbody>
                                        <tr className="dlheader">
                                            <td className="dlheader">{t('description')}</td>
                                            <td className="dlheader">{t('4_inch')}</td>
                                            <td className="dlheader">{t('6_inch')}</td>
                                            <td className="dlheader">{t('8_inch')}</td>
                                            <td className="dlheader">{t('10_inch')}</td>
                                            <td className="dlheader">{t('12_inch')}</td>
                                        </tr>
                                        {metricRFAData.map((item, index) => (
                                            <tr className="dlinfo" key={index}>
                                                <td className="dlinfo hover01">{item.title}</td>

                                                {['dwg4', 'dwg6', 'dwg8', 'dwg10', 'dwg12'].map((key) => (
                                                    <td className="dlinfo hover01" key={key}>
                                                        <ul className="file-list-inner-td">
                                                            <li>
                                                                <a href={item[key]} className="blue-link" target="_blank" rel="noopener noreferrer">
                                                                    <div className="icon-band">
                                                                        <img src={image12} alt={t('file_icon')} />
                                                                    </div>{t('rfa')}<img src={image10} className="download-icon" alt={t('download_icon')} />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </section>
                            
                            <section className="white-bg pt-4">
                                <div className="title">
                                    <h3 className="text-primary text-center mb-5">{t('metric_rfa_form_panels')}</h3>
                                </div>
                                <table className="dltrc tabel-content-center" style={{background:"none"}}>
                                    <tbody>
                                        <tr className="dlheader">
                                            <td className="dlheader">{t('description')}</td>

                                            <td className="dlheader">{t('files')}</td>
                                        </tr>
                                        {metricrfaform.map((item, index) => (
      <tr className="dlinfo" key={index}>
        <td className="dlinfo hover01">{item.title}</td>
        <td className="dlinfo hover01">
          <ul className="file-list-inner-td">
            <li>
              <a
                href={item.rfa}
                className="blue-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="icon-band">
                  <img src={image12} alt={t('rfa_icon')} />
                </div>{t('rfa')}<img src={image10} className="download-icon" alt={t('download_icon')} />
              </a>
            </li>
          </ul>
        </td>
      </tr>
    ))}

                                    </tbody>
                                </table>
                            </section>
                        </>
                    )}

                    {activeTab === 'project-template' && (
                        <section className="white-bg pt-4">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="title">
                                            <h3 className="text-primary text-center mb-5">{t('project_files')}</h3>
                                        </div>
                                        <table className="dltrc tabel-content-center" style={{background:"none"}}>
                                            <tbody>
                                                <tr className="dlheader">
                                                    <td className="dlheader">{t('description')}</td>
                                                    <td className="dlheader">{t('file')}</td>
                                                </tr>
                                                {projects.map((item, index) => (
                                                    <tr className="dlinfo" key={index}>
                                                        <td className="dlinfo hover01">{item.title}</td>
                                                        <td className="dlinfo hover01">
                                                            <ul className="file-list-inner-td">
                                                                <li>
                                                                    <a href={item.fileUrl} className="blue-link" download>
                                                                        <div className="icon-band">
                                                                            <img src={image13} alt={item.fileType} />
                                                                        </div>
                                                                        {item.fileType}
                                                                        <img
                                                                            src={image10}
                                                                            className="download-icon"
                                                                            alt={t('download')}
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
                                    <div className="col-md-6">
                                        <div className="title">
                                            <h3 className="text-primary text-center mb-5 m-mt-4">{t('template_files_rte')}</h3>
                                        </div>
                                        <table className="dltrc tabel-content-center" style={{background:"none"}}>
                                            <tbody>
                                                <tr className="dlheader">
                                                    <td className="dlheader">{t('description')}</td>
                                                    <td className="dlheader">{t('file')}</td>
                                                </tr>
                                                {template.map((item, index) => (
                                                    <tr className="dlinfo" key={index}>
                                                        <td className="dlinfo hover01">{item.title}</td>
                                                        <td className="dlinfo hover01">
                                                            <ul className="file-list-inner-td">
                                                                <li>
                                                                    <a href={item.fileUrl} className="blue-link" download>
                                                                        <div className="icon-band">
                                                                            <img src={image13} alt={item.fileType} />
                                                                        </div>
                                                                        {item.fileType}
                                                                        <img
                                                                            src={image10}
                                                                            className="download-icon"
                                                                            alt={t('download')}
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
                                </div>
                            </section>
                    )}
                </div>


            </section>
        </div>
    );
}
export default BIMLibrary;