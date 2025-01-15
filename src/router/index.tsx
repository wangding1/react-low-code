// react路由
import { createBrowserRouter } from "react-router-dom";
import HomeView from "@/views/HomeView";
import LazyLoad from "./LazyLoad";
import React from "react";

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
        path: "personal-info-group",
        element: LazyLoad(PersonalInfoGroupView),
      },
      {
        path: "contact-group",
        element: LazyLoad(ContactGroupView),
      },
    ],
  },
];

export default createBrowserRouter(routes);
