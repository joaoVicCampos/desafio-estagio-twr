import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Funil from "@/components/flow/Funil";
export default function Home() {
  return (
    <div className="h-screen flex flex-col bg-slate-100">
      <Header />

      <main className="flex flex-1">
        <Sidebar />
        <Funil />
      </main>
    </div>
  );
}