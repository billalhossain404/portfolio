
import { ImageResponse } from "next/og";

export const alt = "Billal Hossain — Full Stack Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: 75,
          background: "#0b0e11",
          color: "#f5f7f3",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontSize: 28,
            fontWeight: 700,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#d0ff7c",
              color: "#17210c",
              width: 64,
              height: 64,
              borderRadius: 18,
              fontSize: 44,
            }}
          >
            b.
          </div>

          <div style={{ display: "flex" }}>billal.dev</div>
        </div>

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 20,
              letterSpacing: 5,
              color: "#d0ff7c",
              marginBottom: 22,
            }}
          >
            FULL STACK SOFTWARE ENGINEER
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 104,
              fontWeight: 800,
              letterSpacing: -5,
              lineHeight: 1.06,
            }}
          >
            <div style={{ display: "flex" }}>Billal</div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex" }}>Hossain</div>
              <div
                style={{
                  display: "flex",
                  color: "#d0ff7c",
                }}
              >
                .
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            fontSize: 19,
            color: "#a3aaa7",
          }}
        >
          <div style={{ display: "flex" }}>
            AIUB Graduate · Building across the stack
          </div>

          <div style={{ display: "flex" }}>
            github.com/billalhossain404
          </div>
        </div>
      </div>
    ),
    size
  );
}
