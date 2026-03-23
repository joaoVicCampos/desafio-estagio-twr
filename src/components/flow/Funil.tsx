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
    },
    {
        id: "2",
        position: { x: 300, y: 100 },
        data: { label: "Landing Page" },
    },
]

const edges = [
    {
        id: "e1-2",
        source: "1",
        target: "2",
    },
]

export default function Funil() {
    return (
        <section className="flex-1">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                fitView
                >
                <Background />
                <Controls />
            </ReactFlow>
        </section>
    );
}