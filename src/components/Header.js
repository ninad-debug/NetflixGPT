import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out

        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-48" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-4">
          <img className="w-12 h-12" src={user?.photoURL} alt="usericon" />
          <button
            onClick={handleSignOut}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg mx-4 px-2">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
