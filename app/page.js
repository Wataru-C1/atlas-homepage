import Link from "next/link";

export default function EntrancePage() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(160deg, #111b30 0%, #1a2744 40%, #243352 100%)",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Subtle background accent */}
      <div style={{
        position: "absolute",
        top: "-30%",
        right: "-20%",
        width: "600px",
        height: "600px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(201,169,110,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        bottom: "-20%",
        left: "-15%",
        width: "500px",
        height: "500px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(201,169,110,0.04) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{
        textAlign: "center",
        zIndex: 1,
        padding: "0 24px",
        animation: "fadeIn 1.2s ease-out",
      }}>
        {/* Logo */}
        <img
          src="/logo.png"
          alt="ATLAS"
          style={{
            width: "clamp(100px, 20vw, 160px)",
            height: "auto",
            marginBottom: "32px",
            filter: "drop-shadow(0 4px 24px rgba(201,169,110,0.15))",
          }}
        />

        <div style={{
          fontSize: "14px",
          fontWeight: 400,
          letterSpacing: "6px",
          color: "rgba(201,169,110,0.6)",
          marginBottom: "20px",
          fontFamily: "'Cormorant Garamond', serif",
        }}>
          UPPER CERVICAL SPECIFIC
        </div>

        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(48px, 10vw, 80px)",
          fontWeight: 400,
          letterSpacing: "12px",
          color: "#f8f6f1",
          lineHeight: 1.1,
          marginBottom: "40px",
        }}>
          ATLAS
        </h1>

        {/* Divider */}
        <div style={{
          width: "60px",
          height: "1px",
          background: "linear-gradient(90deg, transparent, #c9a96e, transparent)",
          margin: "0 auto 40px",
        }} />

        {/* Catchphrase */}
        <p style={{
          fontSize: "clamp(16px, 3vw, 22px)",
          fontWeight: 300,
          letterSpacing: "4px",
          color: "#f8f6f1",
          lineHeight: 1.8,
        }}>
          自然こそが最良の医師である。——Hippocrates
        </p>

        {/* Enter Button */}
        <Link href="/home" style={{
          display: "inline-block",
          marginTop: "60px",
          padding: "14px 56px",
          border: "1px solid rgba(201,169,110,0.5)",
          borderRadius: "0",
          color: "#c9a96e",
          fontSize: "13px",
          fontWeight: 400,
          letterSpacing: "4px",
          transition: "all 0.4s ease",
          background: "transparent",
          cursor: "pointer",
          textDecoration: "none",
        }}>
          ENTER
        </Link>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
