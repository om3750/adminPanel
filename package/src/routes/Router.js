import { lazy } from "react";
import { Navigate } from "react-router-dom";
// import AdminLogin from "../authpages/AdminLogin.js";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
const Admin = lazy(() => import("../views/admin/Admin.js"));
const Fonts = lazy(() => import("../views/fonts/Fonts.js"));
const AddFonts = lazy(() => import("../views/fonts/AddFonts.js"));
const UpdateFont = lazy(() => import("../views/fonts/UpdateFont.js"));
const Category = lazy(() => import("../views/category/Category.js"));
const AddCategory = lazy(() => import("../views/category/AddCategory.js"));
const UpdateCategory = lazy(() => import("../views/category/UpdateCategory.js"));
const SubCategory = lazy(() => import("../views/subcategory/SubCategory.js"));
const Style = lazy(() => import("../views/style/Style.js"));
const Theme = lazy(() => import("../views/theme/Theme.js"));
const KeyWord = lazy(() => import("../views/keyword/KeyWord.js"));
const Tags = lazy(() => import("../views/tags/Tags.js"));
const Interest = lazy(() => import("../views/interest/Interest.js"));
const Language = lazy(() => import("../views/language/Language.js"));
const EditableTitle = lazy(() => import("../views/editableTitle/EditableTitle.js"));
const Template = lazy(() => import("../views/template/Template.js"));
const AddTemplate = lazy(() => import("../views/template/AddTemplate.js"));
const UpdateTemplate = lazy(() => import("../views/template/UpdateTemplate.js"));
const StickerCategory = lazy(() => import("../views/stickercategory/StickerCategory.js"));
const AddStickerCategory = lazy(() => import("../views/stickercategory/AddStickerCategory.js"));
const UpdateStickerCategory = lazy(() => import("../views/stickercategory/UpdateStickerCategory.js"));
const StickerItem = lazy(() => import("../views/stickeritem/StickerItem.js"));
const AddStickerItem = lazy(() => import("../views/stickeritem/AddStickerItem.js"));
const UpdateStickerItem = lazy(() => import("../views/stickeritem/UpdateStickerItem.js"));
const BackgroundCategory = lazy(() => import("../views/backgroundcategory/BackgroundCategory.js"));
const AddBackgroundCategory = lazy(() => import("../views/backgroundcategory/AddBackgroundCategory.js"));
const UpdateBackgroundCategory = lazy(() => import("../views/backgroundcategory/UpdateBackgroundCategory.js"));
const BackgroundItem = lazy(() => import("../views/backgrounditem/BackgroundItem.js"));
const AddBackgroundItem = lazy(() => import("../views/backgrounditem/AddBackgroundItem.js"));
const UpdateBackgroundItem = lazy(() => import("../views/backgrounditem/UpdateBackgroundItem.js"));
const ImportJson = lazy(() => import("../views/importJson/ImportJson.js"));
const CustomOrders = lazy(() => import("../views/customorders/CustomOrders.js"));
const Employees = lazy(() => import("../views/employees/Employees.js"));
const Users = lazy(() => import("../views/users/Users.js"));
const Package = lazy(() => import("../views/package/Package.js"));
const PaymentSetting = lazy(() => import("../views/paymentsetting/PaymentSetting.js"));
const TransactionLogs = lazy(() => import("../views/transactionlogs/TransactionLogs.js"));
const NortificationSetting = lazy(() => import("../views/nortification/NortificationSetting.js"));
const ShowMessage = lazy(() => import("../views/message/ShowMessage.js"));
const Feedback = lazy(() => import("../views/feedback/Feedback.js"));
const Contacts = lazy(() => import("../views/contact/Contacts.js"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
const Badges = lazy(() => import("../views/ui/Badges"));
const Buttons = lazy(() => import("../views/ui/Buttons"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/starter" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      // { path: "/adminlogin", exact: true, element: <AdminLogin /> },
      { path: "/about", exact: true, element: <About /> },
      { path: "/admin", exact: true, element: <Admin /> },
      { path: "/fonts", exact: true, element: <Fonts /> },
      { path: "/addfonts", exact: true, element: <AddFonts /> },
      { path: "/updatefont", exact: true, element: <UpdateFont /> },
      { path: "/category", exact: true, element: <Category /> },
      { path: "/addcategory", exact: true, element: <AddCategory /> },
      { path: "/updateCategory", exact: true, element: <UpdateCategory /> },
      { path: "/subcategory", exact: true, element: <SubCategory /> },
      { path: "/style", exact: true, element: <Style /> },
      { path: "/theme", exact: true, element: <Theme /> },
      { path: "/keyword", exact: true, element: <KeyWord /> },
      { path: "/tags", exact: true, element: <Tags /> },
      { path: "/interest", exact: true, element: <Interest /> },
      { path: "/language", exact: true, element: <Language /> },
      { path: "/editableTitle", exact: true, element: <EditableTitle /> },
      { path: "/template", exact: true, element: <Template /> },
      { path: "/addtemplate", exact: true, element: <AddTemplate /> },
      { path: "/updatetemplate", exact: true, element: <UpdateTemplate /> },
      { path: "/stickerCategory", exact: true, element: <StickerCategory /> },
      { path: "/addStickerCategory", exact: true, element: <AddStickerCategory /> },
      { path: "/updateStickerCategory", exact: true, element: <UpdateStickerCategory /> },
      { path: "/stickerItem", exact: true, element: <StickerItem /> },
      { path: "/addStickerItem", exact: true, element: <AddStickerItem /> },
      { path: "/updateStickerItem", exact: true, element: <UpdateStickerItem /> },
      { path: "/backgroundCategory", exact: true, element: <BackgroundCategory /> },
      { path: "/addBackgroundCategory", exact: true, element: <AddBackgroundCategory /> },
      { path: "/updateBackgroundCategory", exact: true, element: <UpdateBackgroundCategory /> },
      { path: "/backgroundItem", exact: true, element: <BackgroundItem /> },
      { path: "/addBackgroundItem", exact: true, element: <AddBackgroundItem /> },
      { path: "/updateBackgroundItem", exact: true, element: <UpdateBackgroundItem /> },
      { path: "/importJson", exact: true, element: <ImportJson /> },
      { path: "/customorders", exact: true, element: <CustomOrders /> },
      { path: "/employees", exact: true, element: <Employees /> },
      { path: "/users", exact: true, element: <Users /> },
      { path: "/package", exact: true, element: <Package /> },
      { path: "/payment_setting", exact: true, element: <PaymentSetting /> },
      { path: "/transactionlogs", exact: true, element: <TransactionLogs /> },
      { path: "/nortification", exact: true, element: <NortificationSetting /> },
      { path: "/showmessage", exact: true, element: <ShowMessage /> },
      { path: "/feedback", exact: true, element: <Feedback /> },
      { path: "/contacts", exact: true, element: <Contacts /> },
      { path: "/alerts", exact: true, element: <Alerts /> },
      { path: "/badges", exact: true, element: <Badges /> },
      { path: "/buttons", exact: true, element: <Buttons /> },
      { path: "/cards", exact: true, element: <Cards /> },
      { path: "/grid", exact: true, element: <Grid /> },
      { path: "/table", exact: true, element: <Tables /> },
      { path: "/forms", exact: true, element: <Forms /> },
      { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
    ],
  },
];

export default ThemeRoutes;
