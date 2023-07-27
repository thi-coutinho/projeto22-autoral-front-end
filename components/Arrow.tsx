export type ArrowProps = {
  startPointX: number;
  startPointY: number;
  endPointX: number;
  endPointY: number;
};

export default function Arrow({
  startPointX,
  startPointY,
  endPointX,
  endPointY,
}: ArrowProps) {
  const canvasStartPoint = {
    x: Math.min(startPointX, endPointX),
    y: Math.min(startPointY, endPointY),
  };
  const canvasWidth = Math.abs(endPointX - startPointX);
  const canvasHeight = Math.abs(endPointY - startPointY);
  const strokeWidth = 3;
  return (
    <svg
      width={Math.max(canvasWidth, strokeWidth)}
      height={Math.max(canvasHeight, strokeWidth)}
      style={{
        position: "absolute",
        backgroundColor: "transparent",
        left: `${canvasStartPoint.x}px`,
        top: `${canvasStartPoint.y}px`,
        overflow: "visible",
      }}
    >
      <defs>
        <marker
          id="arrow"
          viewBox="0 0 10 10"
          refX="5"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill="white" />
        </marker>
      </defs>
      <line
        stroke="white"
        strokeWidth={strokeWidth}
        x1={startPointX - canvasStartPoint.x}
        y1={startPointY - canvasStartPoint.y}
        x2={endPointX - canvasStartPoint.x}
        y2={endPointY - canvasStartPoint.y}
        markerEnd="url(#arrow)"
      />
    </svg>
  );
}
