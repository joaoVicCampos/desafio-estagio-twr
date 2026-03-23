"use client";

import ReactFlow, {
    Background,
    Controls,

} from "reactflow";

import "reactflow/dist/style.css";

export default function Funil() {
    return (
        <section className="flex-1">
            <ReactFlow
                nodes={[]}
                edges={[]}
                fitView
                >
                <Background />
                <Controls />
            </ReactFlow>
        </section>
    );
}