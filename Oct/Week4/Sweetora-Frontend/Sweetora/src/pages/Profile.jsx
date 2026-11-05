import { LogOut, UserRound } from "lucide-react";
import { useEffect, useState } from "react";

export default function Profile({ onLogout }) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("sweetora_user") || "{}");
    setUser(saved);
  }, []);

  const saveProfile = (event) => {
    event.preventDefault();
    localStorage.setItem("sweetora_user", JSON.stringify(user));
    alert("Profile updated successfully.");
  };

  return (
    <section className="page-section container">
      <div className="page-intro compact">
        <span className="eyebrow">MY ACCOUNT</span>
        <h1>Your profile</h1>
      </div>

      <div className="profile-layout">
        <aside className="profile-side">
          <div className="profile-avatar"><UserRound size={30} /></div>
          <h3>{user.name || "Sweetora Customer"}</h3>
          <p>{user.email}</p>
          <button className="logout-button" onClick={onLogout}>
            <LogOut size={17} /> Logout
          </button>
        </aside>

        <form className="form-card" onSubmit={saveProfile}>
          <h2>Personal details</h2>

          <div className="form-grid">
            <label>
              Full Name
              <input
                value={user.name || ""}
                onChange={(event) =>
                  setUser((current) => ({ ...current, name: event.target.value }))
                }
              />
            </label>

            <label>
              Phone
              <input
                value={user.phone || ""}
                onChange={(event) =>
                  setUser((current) => ({ ...current, phone: event.target.value }))
                }
              />
            </label>

            <label className="full">
              Email
              <input value={user.email || ""} disabled />
            </label>
          </div>

          <button className="button button-dark" type="submit">
            Save Changes
          </button>
        </form>
      </div>
    </section>
  );
}
