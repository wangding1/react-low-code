// react路由
import { createBrowserRouter } from "react-router-dom";
import HomeView from "@/views/HomeView";
import LazyLoad from "./LazyLoad";
import React, { Children } from "react";
import { D } from "node_modules/react-router/dist/development/fog-of-war-BhhVTjSZ.d.mts";

const EditorView = React.lazy(() => import("@/views/EditorView"));
const MaterialsView = React.lazy(() => import("@/views/MaterialsView"));
const SelectGroupView = React.lazy(
  () => import("@/views/MaterialsView/components/SelectGroupView")
);
const InputGroupView = React.lazy(
  () => import("@/views/MaterialsView/components/InputGroupView")
);
const AdvancedGroupView = React.lazy(
  () => import("@/views/MaterialsView/components/AdvancedGroupView")
);
const NoteGroup = React.lazy(
  () => import("@/views/MaterialsView/components/NoteGroup")
);
const PersonalInfoGroupView = React.lazy(
  () => import("@/views/MaterialsView/components/PersonalInfoGroupView")
);
const ContactGroupView = React.lazy(
  () => import("@/views/MaterialsView/components/ContactGroupView")
);
const SingleSelect = React.lazy(
  () => import("@/components/SurveyComs/Materials/SelectComs/SingleSelect")
);
const MultiSelect = React.lazy(
  () => import("@/components/SurveyComs/Materials/SelectComs/MultiSelect")
);
const OptionSelect = React.lazy(
  () => import("@/components/SurveyComs/Materials/SelectComs/OptionSelect")
);
const MultiPicSelect = React.lazy(
  () => import("@/components/SurveyComs/Materials/SelectComs/MultiPicSelect")
);
const SinglePicSelect = React.lazy(
  () => import("@/components/SurveyComs/Materials/SelectComs/SinglePicSelect")
);
const TextInput = React.lazy(
  () => import("@/components/SurveyComs/Materials/InputComs/TextInput")
);
const TextNote = React.lazy(
  () => import("@/components/SurveyComs/Materials/NoteComs/TextNote")
);
const RateScore = React.lazy(
  () => import("@/components/SurveyComs/Materials/AdvancedComs/RateScore")
);
const DateTime = React.lazy(
  () => import("@/components/SurveyComs/Materials/AdvancedComs/DateTime")
);

const routes = [
  {
    path: "/",
    element: <HomeView />,
  },
  {
    path: "/editor",
    element: LazyLoad(EditorView),
  },
  {
    element: LazyLoad(MaterialsView),
    children: [
      {
        element: LazyLoad(SelectGroupView),
        children: [
          {
            path: "single-select",
            element: LazyLoad(SingleSelect),
          },
          {
            path: "multi-select",
            element: LazyLoad(MultiSelect),
          },
          {
            path: "option-select",
            element: LazyLoad(OptionSelect),
          },
          {
            path: "multi-pic-select",
            element: LazyLoad(MultiPicSelect),
          },
          {
            path: "single-pic-select",
            element: LazyLoad(SinglePicSelect),
          },
        ],
      },
      {
        element: LazyLoad(InputGroupView),
        children: [
          {
            path: "text-input",
            element: LazyLoad(TextInput),
          },
        ],
      },
      {
        element: LazyLoad(AdvancedGroupView),
        children: [
          {
            path: "rate-score",
            element: LazyLoad(RateScore),
          },
          {
            path: "date-time",
            element: LazyLoad(DateTime),
          },
        ],
      },
      {
        element: LazyLoad(NoteGroup),
        children: [
          {
            path: "text-note",
            element: LazyLoad(TextNote),
          },
        ],
      },
      {
        element: LazyLoad(PersonalInfoGroupView),
        children: [
          {
            path: "/personal-info-name",
            element: LazyLoad(TextInput),
          },
          {
            path: "/personal-info-id",
            element: LazyLoad(TextInput),
          },
          {
            path: "/personal-info-birth",
            element: LazyLoad(DateTime),
          },
          {
            path: "/personal-info-gender",
            element: LazyLoad(SingleSelect),
          },
          {
            path: "/personal-info-age",
            element: LazyLoad(SingleSelect),
          },
          {
            path: "/personal-info-education",
            element: LazyLoad(SingleSelect),
          },
          {
            path: "/personal-info-collage",
            element: LazyLoad(TextInput),
          },
          {
            path: "/personal-info-major",
            element: LazyLoad(TextInput),
          },
          {
            path: "/personal-info-industry",
            element: LazyLoad(TextInput),
          },
          {
            path: "/personal-info-career",
            element: LazyLoad(SingleSelect),
          },
          {
            path: "/personal-info-company",
            element: LazyLoad(TextInput),
          },
          {
            path: "/personal-info-position",
            element: LazyLoad(TextInput),
          },
        ],
      },
      {
        element: LazyLoad(ContactGroupView),
        children: [
          {
            path: "/personal-info-tel",
            element: LazyLoad(TextInput),
          },
          {
            path: "/personal-info-wechat",
            element: LazyLoad(TextInput),
          },
          {
            path: "/personal-info-qq",
            element: LazyLoad(TextInput),
          },
          {
            path: "/personal-info-email",
            element: LazyLoad(TextInput),
          },
          {
            path: "/personal-info-address",
            element: LazyLoad(TextInput),
          },
        ],
      },
    ],
  },
];

export default createBrowserRouter(routes);
