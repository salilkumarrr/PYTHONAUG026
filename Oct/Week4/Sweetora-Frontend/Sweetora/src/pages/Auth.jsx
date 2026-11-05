import { Eye, EyeOff, LockKeyhole, Mail, UserRound } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const USERS_KEY = "sweetora_accounts";

async function hashPassword(password) {
  const data = new TextEncoder().encode(password);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function getAccounts() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  } catch {
    return [];
  }
}

export default function Auth({ mode }) {
  const isRegister = mode === "register";
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const updateField = (field, value) => {
    setError("");
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    const email = form.email.trim().toLowerCase();
    const password = form.password;

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    const accounts = getAccounts();

    if (isRegister) {
      if (form.name.trim().length < 2) {
        setError("Please enter your full name.");
        return;
      }

      if (!/^\d{10}$/.test(form.phone.replace(/\D/g, ""))) {
        setError("Please enter a valid 10-digit phone number.");
        return;
      }

      if (password !== form.confirmPassword) {
        setError("Passwords do not match.");
        return;
      }

      if (accounts.some((account) => account.email === email)) {
        setError("An account with this email already exists.");
        return;
      }

      const passwordHash = await hashPassword(password);
      const user = {
        id: crypto.randomUUID(),
        name: form.name.trim(),
        email,
        phone: form.phone.replace(/\D/g, ""),
        passwordHash,
      };

      localStorage.setItem(USERS_KEY, JSON.stringify([...accounts, user]));
      localStorage.setItem(
        "sweetora_user",
        JSON.stringify({ id: user.id, name: user.name, email: user.email, phone: user.phone })
      );
      sessionStorage.setItem("sweetora_session", crypto.randomUUID());
      navigate("/", { replace: true });
      return;
    }

    const account = accounts.find((item) => item.email === email);

    if (!account) {
      setError("Invalid email or password.");
      return;
    }

    const passwordHash = await hashPassword(password);

    if (passwordHash !== account.passwordHash) {
      setError("Invalid email or password.");
      return;
    }

    localStorage.setItem(
      "sweetora_user",
      JSON.stringify({
        id: account.id,
        name: account.name,
        email: account.email,
        phone: account.phone,
      })
    );
    sessionStorage.setItem("sweetora_session", crypto.randomUUID());
    navigate("/", { replace: true });
  };

  return (
    <section className="auth-page">
      <div className="auth-card">
        <div className="auth-brand">
          <span className="brand-mark">S</span>
          <div>
            <strong>Sweetora</strong>
            <span>Premium Indian Sweets</span>
          </div>
        </div>

        <div className="auth-heading">
          <span className="eyebrow">{isRegister ? "WELCOME TO SWEETORA" : "WELCOME BACK"}</span>
          <h1>{isRegister ? "Create your account" : "Sign in to your account"}</h1>
          <p>
            {isRegister
              ? "Create an account to access the Sweetora store."
              : "Sign in to continue shopping with Sweetora."}
          </p>
        </div>

        {error && <div className="auth-error" role="alert">{error}</div>}

        <form onSubmit={handleSubmit}>
          {isRegister && (
            <>
              <label>
                Full Name
                <div className="input-with-icon">
                  <UserRound size={18} />
                  <input
                    value={form.name}
                    onChange={(event) => updateField("name", event.target.value)}
                    placeholder="Your full name"
                    autoComplete="name"
                    required
                  />
                </div>
              </label>

              <label>
                Phone Number
                <div className="input-with-icon">
                  <span className="phone-code">+91</span>
                  <input
                    value={form.phone}
                    onChange={(event) => updateField("phone", event.target.value)}
                    placeholder="98765 43210"
                    inputMode="numeric"
                    autoComplete="tel"
                    required
                  />
                </div>
              </label>
            </>
          )}

          <label>
            Email Address
            <div className="input-with-icon">
              <Mail size={18} />
              <input
                type="email"
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </div>
          </label>

          <label>
            Password
            <div className="input-with-icon">
              <LockKeyhole size={18} />
              <input
                type={showPassword ? "text" : "password"}
                value={form.password}
                onChange={(event) => updateField("password", event.target.value)}
                placeholder="At least 8 characters"
                minLength={8}
                autoComplete={isRegister ? "new-password" : "current-password"}
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword((value) => !value)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </label>

          {isRegister && (
            <label>
              Confirm Password
              <div className="input-with-icon">
                <LockKeyhole size={18} />
                <input
                  type={showPassword ? "text" : "password"}
                  value={form.confirmPassword}
                  onChange={(event) => updateField("confirmPassword", event.target.value)}
                  placeholder="Re-enter your password"
                  minLength={8}
                  autoComplete="new-password"
                  required
                />
              </div>
            </label>
          )}

          <button className="button button-dark wide" type="submit">
            {isRegister ? "Create Account" : "Sign In"}
          </button>
        </form>

        <p className="auth-switch">
          {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
          <Link to={isRegister ? "/login" : "/register"}>
            {isRegister ? "Sign in" : "Create one"}
          </Link>
        </p>

        <p className="auth-security-note">
          Your password is never stored as plain text in this frontend demo.
        </p>
      </div>
    </section>
  );
}
