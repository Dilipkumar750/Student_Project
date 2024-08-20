import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import RegistrationForm from './Pages/Registration/RegistrationForm';
import StudentTables from './Pages/Students/StudentTables';
import StudentDetails from './Pages/Students/StudentDetails';
import StudentsRecord from './Pages/Students/StudentsRecord';
import AddClass from './Pages/StudyMaterials/AddClass';
import BooksPdf from './Pages/StudyMaterials/BooksPdf';
import VideosPdf from './Pages/StudyMaterials/VideosPdf';
import TestHome from './Pages/Test/TestHome';
import AddTest from './Pages/Test/AddTest';
import MarkList from './Pages/Test/MarkList';
import TestList from './Pages/Test/TestList';
import FAQ from './Pages/TermsAndConditions/FAQ';
import PrivacyPolicy from './Pages/TermsAndConditions/PrivacyPolicy';
import TermsAndConditions from './Pages/TermsAndConditions/TermsAndConditions';
import Profile from './Pages/Profile/Profile';
import EditProfile from './Pages/Profile/EditProfile';
import MentorHome from './Mentor/MentorHome';
import MentorAccess from './Mentor/MentorAccess';
import MentorRegistrationForm from './Mentor/RegistrationForm';
import Payment from './Mentor/Payment';
import PaymentSuccess from './Mentor/PaymentSuccess';
import PaymentDetails from './Mentor/PaymentDetails';
import StudyMaterialsList from './Mentor/StudyMaterialsList';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/registrationForm' element={<RegistrationForm/>}/>
        <Route path='/studentTables' element={<StudentTables/>}/>
        <Route path='/studentDetails' element={<StudentDetails/>}/>
        <Route path='/studentsRecord' element={<StudentsRecord/>}/>
        <Route path='/addClass' element={<AddClass/>}/>
        <Route path='/booksPdf' element={<BooksPdf/>}/>
        <Route path='/VideosPdf' element={<VideosPdf/>}/>
        <Route path='/TestHome' element={<TestHome/>}/>
        <Route path='/AddTest' element={<AddTest/>}/>
        <Route path='/MarkList' element={<MarkList/>}/>
        <Route path='/TestList' element={<TestList/>}/>
        <Route path='/FAQ' element={<FAQ/>}/>
        <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>}/>
        <Route path='/TermsAndConditions' element={<TermsAndConditions/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/EditProfile' element={<EditProfile/>}/>
        <Route path='/MentorHome' element={<MentorHome/>}/>
        <Route path='/MentorAccess' element={<MentorAccess/>}/>
        <Route path='/MentorRegistrationForm' element={<MentorRegistrationForm/>}/>
        <Route path='/Payment' element={<Payment/>}/>
        <Route path='/PaymentSuccess' element={<PaymentSuccess/>}/>
        <Route path='/PaymentDetails' element={<PaymentDetails/>}/>
        <Route path='/StudyMaterialsList' element={<StudyMaterialsList/>}/>
      </Routes>
    </>
  )
}

export default App
