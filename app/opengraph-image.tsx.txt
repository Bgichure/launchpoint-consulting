import { ImageResponse } from "next/og";

export const alt =
  "LaunchPoint Consulting — Business Plans, Pitch Decks and Financial Models";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #0B1220 0%, #0F172A 58%, #182238 100%)",
          color: "#FFFFFF",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        {/* Background grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.08,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        {/* Gold glow */}
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -100,
            width: 520,
            height: 520,
            borderRadius: "9999px",
            background:
              "radial-gradient(circle, rgba(201,162,39,0.22) 0%, rgba(201,162,39,0) 70%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "68px 78px",
          }}
        >
          {/* Brand */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
            }}
          >
            <div
              style={{
                width: 64,
                height: 64,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 16,
                border: "1px solid rgba(201,162,39,0.5)",
                background: "rgba(255,255,255,0.06)",
                fontSize: 25,
                fontWeight: 700,
                letterSpacing: "-0.05em",
              }}
            >
              LP
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  fontSize: 25,
                  fontWeight: 700,
                }}
              >
                LaunchPoint Consulting
              </span>

              <span
                style={{
                  marginTop: 5,
                  color: "#C9A227",
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                Strategy · Funding · Growth
              </span>
            </div>
          </div>

          {/* Main message */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 920,
            }}
          >
            <span
              style={{
                marginBottom: 22,
                color: "#D8B942",
                fontSize: 17,
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
              }}
            >
              Strategic Business Support
            </span>

            <div
              style={{
                fontSize: 66,
                lineHeight: 1.05,
                fontWeight: 800,
                letterSpacing: "-0.045em",
              }}
            >
              Turn Ambitious Ideas Into
              <span style={{ color: "#D8B942" }}>
                {" "}
                Clear Business Opportunities.
              </span>
            </div>

            <div
              style={{
                marginTop: 26,
                maxWidth: 820,
                color: "#CBD5E1",
                fontSize: 23,
                lineHeight: 1.5,
              }}
            >
              Investor-ready business plans, pitch decks, financial models and
              market research designed to support confident decisions.
            </div>
          </div>

          {/* Footer */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: 28,
              borderTop: "1px solid rgba(255,255,255,0.14)",
            }}
          >
            <span
              style={{
                color: "#E2E8F0",
                fontSize: 17,
              }}
            >
              launchpointconsulting.com
            </span>

            <div
              style={{
                display: "flex",
                gap: 28,
                color: "#D8B942",
                fontSize: 15,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
              }}
            >
              <span>Business Plans</span>
              <span>Pitch Decks</span>
              <span>Financial Models</span>
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}