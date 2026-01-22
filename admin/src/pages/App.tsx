import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Overview from "./Overview";
import Posts from "./Posts";
import Media from "./Media";
import Settings from "./Settings";

export default function App() {
  return (
    <div className="min-h-screen bg-surface text-slate-100">
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex flex-1 flex-col">
          <Topbar />
          <main className="flex-1 space-y-6 px-4 py-6 lg:px-8">
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/media" element={<Media />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
}
