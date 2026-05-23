import { useRef } from "react";
import QRCode from "qrcode";

const Qrcode = () => {
  const contentRef = useRef(null);
  const canvasRef = useRef(null);

  const fnClick = () => {
    QRCode.toCanvas(
      canvasRef.current,
      contentRef.current.value,
      { width: 128 }
    );
  };

  return (
    <div>
      <textarea ref={contentRef}></textarea>
      <button onClick={fnClick}>Generate</button>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default Qrcode;