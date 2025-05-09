import { Button } from "antd";

const NotFound = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f5f5",
      }}
    >
      <h1
        style={{
          fontSize: "120px",
          fontWeight: "bold",
          color: "#ff6b35",
          margin: 0,
          lineHeight: 1,
          animation: "bounce 1s infinite",
        }}
      >
        404
      </h1>
      <h2
        style={{
          fontSize: "24px",
          color: "#333",
          marginBottom: "20px",
          animation: "fadeIn 1s ease-in",
        }}
      >
        Oops! Page Not Found
      </h2>
      <p
        style={{
          fontSize: "16px",
          color: "#666",
          marginBottom: "30px",
          textAlign: "center",
          animation: "slideIn 1s ease-out",
        }}
      >
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Button
        type="primary"
        size="large"
        href="/"
        style={{
          backgroundColor: "#ff6b35",
          borderColor: "#ff6b35",
          animation: "pulse 2s infinite",
        }}
      >
        Back to Home
      </Button>
      <style>
        {`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideIn {
            from { transform: translateX(-100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
};

export default NotFound;
