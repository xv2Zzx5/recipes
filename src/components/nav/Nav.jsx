import "./Nav.css";
import { NavLink } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  useClerk,
} from "@clerk/clerk-react";
import { CiUser } from "react-icons/ci";
function Nav(props) {
  const clerk = useClerk();
  return (
    <nav>
      <div className="container">
        <div className="menu">
          <div className="menu__left">
            <NavLink to="/">Home</NavLink>
            {clerk.user?  <NavLink to="/addMenu">Add menu</NavLink>: null}
            <NavLink to="/search">Search</NavLink>
          </div>
          <div className="menu__right">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <div className="menu__user">
                <NavLink to = {"/profile/" + clerk.user?.id}>
                  <div className="menu__avatar">
                    {clerk.user?.hasImage ? (
                      <img src={clerk.user?.imageUrl} alt="avatar" />
                    ) : (
                      <CiUser />
                    )}
                  </div>
                  <p>{clerk.user?.username}</p>
                </NavLink>

                <div className="menu__info">
                  <SignOutButton />
                </div>
              </div>
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
