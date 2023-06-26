type Point = {
  x: number;
  y: number;
};

export type ArrowProps = {
  startPoint: Point;
  endPoint: Point;
};

export default function Arrow({ startPoint, endPoint }: ArrowProps) {
  const canvasStartPoint = {
    x: Math.min(startPoint.x, endPoint.x),
    y: Math.min(startPoint.y, endPoint.y),
  };
  const canvasWidth = Math.abs(endPoint.x - startPoint.x);
  const canvasHeight = Math.abs(endPoint.y - startPoint.y);
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
        x1={startPoint.x - canvasStartPoint.x}
        y1={startPoint.y - canvasStartPoint.y}
        x2={endPoint.x - canvasStartPoint.x}
        y2={endPoint.y - canvasStartPoint.y}
        markerEnd="url(#arrow)"
      />
    </svg>
  );
}
