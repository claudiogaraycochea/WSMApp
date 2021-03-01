/* 
  Auth Screens
*/
import Login from '../screens/auth/login/Login';
import SignUp from '../screens/auth/signUp/SignUp';

/*
  User Screens
*/
// Home
import Home from '../screens/home/Home';

// Company Screens
import HomeMenu from '../screens/homeMenu/HomeMenu';
import Submenu from '../screens/submenu/Submenu';
import SendMessage from '../screens/sendMessage/SendMessage';
import SearchCompany from '../screens/company/search/Search';
import ProfileCompany from '../screens/company/profile/Profile';
// Company
import InfoCompany from '../screens/company/info/Info';
import CommentsCompany from '../screens/company/comments/Comments';

// Company Section
import SurveyCompany from '../screens/company/section/survey/Survey';
import ScanQRCodeCompany from '../screens/company/section/scanQRCode/ScanQRCode';
import ReviewCompany from '../screens/company/section/review/Review';
import InviteFriendCompany from '../screens/company/section/inviteFriend/InviteFriend';

// Company Admin
import CreateCompany from '../screens/company/admin/create/CreateCompany';
import AdminOverviewCompany from '../screens/company/admin/overview/Overview';
import EditGeneralCompany from '../screens/company/admin/general/editGeneral/EditGeneral';
import EditVideoCompany from '../screens/company/admin/video/editVideo/EditVideo';

// Company Admin Section
import CreateSurveyCompany from '../screens/company/admin/section/survey/createSurvey/CreateSurvey';
import EditScanQRCodeCompany from '../screens/company/admin/section/scanQRCode/editScanQRCode/EditScanQRCode';
import EditReviewCompany from '../screens/company/admin/section/review/editReview/EditReview';
import EditInviteFriendCompany from '../screens/company/admin/section/inviteFriend/editInviteFriend/EditInviteFriend';

// User
import ProfileUser from '../screens/user/profile/Profile';
import NotificationsUser from '../screens/user/notifications/Notifications';

// StyleGuide Screens
import StyleGuide from '../ui/styleGuide/StyleGuide';

const commonScreens = {
};

const authScreens = {
  // Auth to be removed
  SignUp,
  StyleGuide,
};

const privateScreensTitle = [];
privateScreensTitle['Home'] = 'SEARCH';
privateScreensTitle['ProfileCompany'] = 'PROFILE';
privateScreensTitle['SurveyCompany'] = 'SURVEY';

const privateScreens = {
  // Company
  //Home,
  HomeMenu,
  Submenu,
  SendMessage,
  SearchCompany,
  ProfileCompany,
  InfoCompany,
  CommentsCompany,
  // Section Company
    SurveyCompany,
    ScanQRCodeCompany,
    ReviewCompany,
    InviteFriendCompany,
  // Company Admin
    CreateCompany,
    AdminOverviewCompany,
    EditGeneralCompany,
    EditVideoCompany,
  // Company Admin Section
    CreateSurveyCompany,
    EditScanQRCodeCompany,
    EditReviewCompany,
    EditInviteFriendCompany,
// User
  ProfileUser,
  NotificationsUser,
// StyleGuide
};

export { authScreens, privateScreens, privateScreensTitle };