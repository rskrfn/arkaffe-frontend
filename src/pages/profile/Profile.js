import classes from "./Profile.module.css";
import Avatar from "../../components/profile/avatar/Avatar";
import Contact from "../../components/profile/contact/Contact";

export default function Profile() {
  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('/assets/images/profile-bg.png')",
      }}
    >
      <div className={`container ${classes.profile}`}>
        <h2 className={classes.title}>User Profile</h2>
        <div className={classes.content}>
          <Avatar />
          <Contact />
        </div>
      </div>
    </section>
  );
}