import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
} from "../../../Utils/Firebase/Firebase.utils";
import SignUp from "../../SignUpForm/SignUpForm.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
    <h1>Sign In Page</h1>
    <button onClick={logGoogleUser}>Sign in with google</button>
    <SignUp/>

    </div>
    );
    
};
export default SignIn;
