import {
  BarChart3,
  BookOpen,
  ClipboardList,
  FileText,
  GraduationCap,
  Layers,
  Settings,
  Sparkles
} from "lucide-react";

export const navigationItems = [
  {
    label: "課程首頁",
    path: "/",
    description: "AI好幫手課程總覽、學期進度與成果任務。",
    icon: Sparkles
  },
  {
    label: "學習任務",
    path: "/tasks",
    description: "依週次整理Micro-bit、雲端工具、影音與簡報任務。",
    icon: ClipboardList
  },
  {
    label: "教學進度",
    path: "/planner",
    description: "檢視第一學期與第二學期的教學節奏。",
    icon: BookOpen
  },
  {
    label: "Micro-bit",
    path: "/microbit",
    description: "程式積木、感測器與互動作品練習。",
    icon: GraduationCap
  },
  {
    label: "雲端工具",
    path: "/cloud-tools",
    description: "地圖、氣象、交通、表單與資料整理工具。",
    icon: Layers
  },
  {
    label: "教師文件",
    path: "/teacher-documents",
    description: "課程目標、核心素養、評量與教材資源整理。",
    icon: FileText
  },
  {
    label: "成果分析",
    path: "/analytics",
    description: "追蹤作品完成度與學習成果回饋。",
    icon: BarChart3
  },
  {
    label: "設定",
    path: "/settings",
    description: "調整課程平台顯示與班級設定。",
    icon: Settings
  }
] as const;
