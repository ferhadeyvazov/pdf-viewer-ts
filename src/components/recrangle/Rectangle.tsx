import React, { useState } from 'react'
import { Layer, Rect, Stage } from 'react-konva'

const Rectangle: React.FC = () => {
    const [rectangles, setRectangles] = useState<{ x: number; y: number; width: number; height: number; id: string }[]>([]);
    const [isDrawing, setIsDrawing] = useState(false);
    const [startPoint, setStartPoint] = useState<{ x: number; y: number } | null>(null);

    const handleMouseDown = (e: any) => {
        setIsDrawing(true);
        const { x, y } = e.target.getStage().getPointerPosition();
        setStartPoint({ x, y });
    };

    const handleMouseUp = (e: any) => {
        if (!isDrawing || !startPoint) return;
        const { x, y } = e.target.getStage().getPointerPosition();
        setRectangles((prev) => [
            ...prev,
            {
                x: startPoint.x,
                y: startPoint.y,
                width: x - startPoint.x,
                height: y - startPoint.y,
                id: Math.random().toString(),
            },
        ]);
        setIsDrawing(false);
        setStartPoint(null);
    };

    return (
    <>
        <Stage
            width={800}
            height={600}
            className="absolute z-10 top-0 left-0"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
        >
            <Layer>
                {rectangles.map((rect) => (
                    <Rect key={rect.id} {...rect} stroke="red" strokeWidth={2} />
                ))}
            </Layer>
        </Stage>

    </>
    )
}

export default Rectangle