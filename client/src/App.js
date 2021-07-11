import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CallPage from "./components/CallPage/CallPage";
import { AuthProvider } from './Auth';
import Signup from './components/Signup/Signup';
import LogIn from './components/LogIn/LogIn';
import Forgotpassword from './components/Forgotpassword/Forgotpassword';
import Chat from './components/Chat/Chat';
import Dashboard from './components/Dashboard/Dashboard';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faUser  } from '@fortawesome/free-solid-svg-icons';
import Task from './components/UI/DashboardComp/Task';
import Delete from "./components/UI/DashboardComp/Delete";
import ResetPassword from './components/UI/DashboardComp/ResetPassword';
import Feedback from './components/UI/DashboardComp/Feedback';
import Home from './components/HomePage/Home';
import Covid from './components/UI/DashboardComp/Covid';

library.add(faEnvelope, faKey, faUser );

function App() {
  return (
    <Router>
      <AuthProvider>
      <Switch>
          <Route exact path="/" component={Signup} />
          <Route exact path="/meet" component={Home}/>
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/forgotpassword" component={Forgotpassword} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/tasks" component={Task} />
          <Route exact path="/reset" component={ResetPassword} />
          <Route exact path="/delete" component={Delete} />
          <Route exact path="/feedback" component={Feedback} />
          <Route exact path="/covid" component={Covid} />
          <Route exact path="/chat" component={Chat} />
          <Route path="/meet/:id" component={CallPage} />
      </Switch>
    </AuthProvider>
    </Router>
  );
}

export default App;
