
import React from "react";
import { AdminPanel } from "./components/AdminPanel";
import { TeacherPanel } from "./components/TeacherPanel";
import { StudentPanel } from "./components/StudentPanel";

export default function App() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Abhijit Learning Lab</h1>
      <AdminPanel />
      <TeacherPanel />
      <StudentPanel />
    </div>
  );
}
