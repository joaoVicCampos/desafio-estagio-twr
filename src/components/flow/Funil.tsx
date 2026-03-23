"use client";

import ReactFlow, {
    Background,
    Controls,

} from "reactflow";

import "reactflow/dist/style.css";

const nodes = [
    {
        id: "1",
        position: { x: 100, y: 100 },
        data: { label: "Anúncio" },
    }
]

export default function Funil() {
    return (
        <section className="flex-1">
            <ReactFlow
                nodes={nodes}
                edges={[]}
                fitView
                >
                <Background />
                <Controls />
            </ReactFlow>
        </section>
    );
}