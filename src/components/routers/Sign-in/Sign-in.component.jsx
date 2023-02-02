import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
} from "../../../Utils/Firebase/Firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return <button onClick={logGoogleUser}>Sing in with google</button>;
};
export default SignIn;
