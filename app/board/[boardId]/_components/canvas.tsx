"use client";

import { useState } from "react";
import { useHistory, useCanRedo, useCanUndo } from "@/liveblocks.config";
import { CanvasMode, CanvasState } from "@/types/canvas";
import { Info } from "./info";
import { Participants } from "./participants";
import { Toolbar } from "./toolbar";

interface CanvasProps {
    boardId: string;
};

export const Canvas = ({
    boardId,
}: CanvasProps) => {
    const history = useHistory();
    const canUndo = useCanUndo();
    const canRedo = useCanRedo();
    const [canvasState, setCanvasState] = useState<CanvasState>({
        mode: CanvasMode.None,
    });


    return (
        <main className="h-full w-full relative bg-neutral-100 touch-none">
            <Info boardId={boardId} />
            <Participants />
            <Toolbar 
                canvasState={canvasState}
                setCanvasState={setCanvasState}
                canRedo={canRedo}
                canUndo={canUndo}
                undo={history.undo}
                redo={history.redo}
                />
        </main>
    );
};