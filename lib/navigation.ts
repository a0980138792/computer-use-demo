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
    description: "神乎其技 Scratch 課程總覽與每週任務。",
    icon: Sparkles
  },
  {
    label: "作品任務",
    path: "/exam-expert",
    description: "整理學生要完成、上傳與展示的 Scratch 作品。",
    icon: ClipboardList
  },
  {
    label: "教學進度",
    path: "/lesson-planner",
    description: "依學期週次查看課程內容、學習目標與活動安排。",
    icon: BookOpen
  },
  {
    label: "Scratch 積木",
    path: "/vocabulary-pro",
    description: "練習事件、動作、外觀、聲音、偵測、變數與清單。",
    icon: GraduationCap
  },
  {
    label: "互評回饋",
    path: "/flashcards",
    description: "引導學生觀摩作品、留言建議並修正自己的專題。",
    icon: Layers
  },
  {
    label: "課程文件",
    path: "/teacher-documents",
    description: "保留學校願景、核心素養、課程目標與課程設計理念。",
    icon: FileText
  },
  {
    label: "學習紀錄",
    path: "/analytics",
    description: "追蹤任務完成、作品上傳與同儕互評狀態。",
    icon: BarChart3
  },
  {
    label: "設定",
    path: "/settings",
    description: "調整課程平台偏好與未來整合設定。",
    icon: Settings
  }
] as const;
