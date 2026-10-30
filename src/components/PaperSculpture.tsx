"use client";

import { useRef } from "react";

export default function PaperSculpture() {
  const ref = useRef<HTMLDivElement>(null);
  return <div ref={ref} className="paper-scene" aria-hidden="true" onPointerMove={(event) => { const rect = event.currentTarget.getBoundingClientRect(); const x = (event.clientX - rect.left) / rect.width - .5; const y = (event.clientY - rect.top) / rect.height - .5; ref.current?.style.setProperty("--rx", `${-y * 11}deg`); ref.current?.style.setProperty("--ry", `${x * 13}deg`); }} onPointerLeave={() => { ref.current?.style.setProperty("--rx", "0deg"); ref.current?.style.setProperty("--ry", "0deg"); }}><div className="paper-object"><div className="sheet sheet-back"><span>fjalë · kujtesë · pyetje</span></div><div className="sheet sheet-mid"><span>“</span></div><div className="sheet sheet-front"><div className="sheet-topline"/><span className="sheet-word">njerëz</span><span className="sheet-script">prej letre</span><div className="sheet-bottomline"/></div><div className="paper-shadow"/></div></div>;
}
