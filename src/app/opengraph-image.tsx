import { ImageResponse } from "next/og";
export const alt = "Billal Hossain — Full Stack Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%", background: "#0b0e11", color: "#f5f7f3", padding: 75, fontFamily: "sans-serif", flexDirection: "column", justifyContent: "space-between", position: "relative", overflow: "hidden" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 28, fontWeight: 700 }}><div style={{ display: "flex", justifyContent: "center", alignItems: "center", background: "#d0ff7c", color: "#17210c", width: 64, height: 64, borderRadius: 18, fontSize: 44 }}>b.</div> billal.dev</div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 20, letterSpacing: 5, color: "#d0ff7c", marginBottom: 22 }}>FULL STACK SOFTWARE ENGINEER</div>
        <div style={{ fontSize: 104, fontWeight: 800, letterSpacing: -7, lineHeight: 1.06 }}>Billal<br/>Hossain<span style={{ color: "#d0ff7c" }}>.</span></div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", width: "100%", fontSize: 22, color: "#a3aaa7" }}><span>AIUB Graduate · Building across the stack</span><span>github.com/billalhossain404</span></div>
    </div>,
    size
  );
}
