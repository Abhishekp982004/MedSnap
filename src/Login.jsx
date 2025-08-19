import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Eye icons

// Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_CORRECT_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Handle Firebase Redirect Results
  useEffect(() => {
    const fetchRedirectResult = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result) {
          console.log("Redirect Sign-In successful:", result.user);
          navigate("/home"); // Navigate to home page
        }
      } catch (error) {
        console.error("Error handling redirect result:", error);
        alert("Error during login redirect: " + error.message);
      }
    };
    fetchRedirectResult();
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with credentials:", { username, password });
    navigate("/home"); // Navigate to home page on successful login
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Google Sign-In successful:", result.user);
      navigate("/home"); // Navigate to home page on successful Google login
    } catch (error) {
      console.error("Google Sign-In Error:", error);
      alert(`Google Sign-In failed: ${error.message}`);
    }
  };

  const handleGoogleLoginRedirect = () => {
    signInWithRedirect(auth, provider);
  };

  const styles = {
    body: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      fontFamily: "'Poppins', sans-serif",
      margin: 0,
      background: "url('/Doc_backpg.jpg') no-repeat center center",
      backgroundSize: "cover",
    },
    wrapper: {
      width: "420px",
      background: "transparent",
      border: "2px solid rgba(255, 255, 255, 0.2)",
      backdropFilter: "blur(10px)",
      color: "darkblue",
      borderRadius: "10px",
      padding: "30px 40px",
    },
    heading: {
      fontSize: "36px",
      textAlign: "center",
      marginBottom: "20px",
    },
    inputWrapper: {
      position: "relative",
      marginBottom: "20px",
    },
    input: {
      width: "100%",
      height: "45px",
      padding: "0 15px",
      border: "2px solid rgba(255, 255, 255, 0.2)",
      borderRadius: "30px",
      outline: "none",
      background: "transparent",
      color: "darkblue",
      fontSize: "16px",
    },
    togglePassword: {
      position: "absolute",
      right: "15px",
      top: "50%",
      transform: "translateY(-50%)",
      background: "none",
      border: "none",
      fontSize: "18px",
      color: "darkblue",
      cursor: "pointer",
    },
    button: {
      width: "100%",
      height: "45px",
      background: "#fff",
      border: "none",
      borderRadius: "30px",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: "600",
      color: "darkblue",
      marginTop: "20px",
    },
    googleButton: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "45px",
      background: "#db4437",
      border: "none",
      borderRadius: "30px",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: "600",
      color: "#fff",
      marginTop: "20px",
    },
    googleIcon: {
      marginRight: "10px",
      height: "20px",
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.wrapper}>
        <h2 style={styles.heading}>Login</h2>
        <form onSubmit={handleLogin}>
          <div style={styles.inputWrapper}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputWrapper}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={styles.togglePassword}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
        <button style={styles.googleButton} onClick={handleGoogleLogin}>
          <img
            src="/G_logo.png"
            alt="Google Logo"
            style={styles.googleIcon}
          />
          Login with Google
        </button>
        <button
          style={{ ...styles.googleButton, background: "#4285F4" }}
          onClick={handleGoogleLoginRedirect}
        >
          <img
            src="/G_logo.png"
            alt="Google Logo"
            style={styles.googleIcon}
          />
          Login with Google (Redirect)
        </button>
      </div>
    </div>
  );
};

export default Login;
