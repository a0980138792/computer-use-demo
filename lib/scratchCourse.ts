export type SemesterKey = "first" | "second";

export type WeeklyLesson = {
  week: string;
  unit: string;
  focus: string;
  goal: string;
  activity: string;
  assessment: string;
  resource: string;
  tags: string[];
};

export const courseProfile = {
  title: "AI好幫手",
  subtitle: "六年級資訊科技彈性學習課程",
  school: "南投縣新庄國民小學",
  schoolYear: "114學年度",
  grade: "六年級",
  teacher: "顏堉哲",
  category: "統整性探究課程",
  cadence: "每週1節",
  firstSemesterWeeks: "21週，共21節",
  secondSemesterWeeks: "18週，共18節",
  vision: "多元的發展：結合各項資源，透過e化科技多元創意的教學促進學生多元的發展。",
  idea:
    "課程以Micro-bit、影音編輯、雲端服務與簡報工具為核心，讓學生在實作中理解科技工具，完成程式設計、資料整理、作品創作與同儕分享。",
  goal:
    "學生能運用資訊科技解決生活中的簡單問題，透過小組討論、作品觀摩與線上互評，建立邏輯思考、程式設計與數位表達能力。"
};

export const competencies = [
  "綜2c-III-1：分析與判讀各類資源，規劃策略以解決日常生活的問題。",
  "資t-III-2：能使用資訊科技解決生活中簡單的問題。",
  "資t-III-3：能應用運算思維描述問題解決的方法。",
  "資p-III-1：能認識與使用資訊科技以表達想法。",
  "資p-III-2：能使用資訊科技與他人建立良好的互動關係。",
  "資p-III-3：能認識基本的數位資源整理方法。"
];

export const learningFlow = [
  "認識工具與情境任務",
  "拆解問題與規劃流程",
  "動手操作與測試修正",
  "整理成果與上傳分享",
  "同儕觀摩與回饋改進",
  "反思科技與生活應用"
];

export const courseGoals = {
  first: [
    "藉由Micro-bit學習運算思維與程式設計的基本知能。",
    "藉由Micro-bit的硬體組件連接，體驗動手實作的樂趣。"
  ],
  second: [
    "藉由影音編輯程式製作畢業回憶錄。",
    "學習雲端功能，將所習得知技能融入相關課程之學習。"
  ]
} satisfies Record<SemesterKey, string[]>;

export const semesterLessons: Record<SemesterKey, WeeklyLesson[]> = {
  first: [
    {
      week: "01-02",
      unit: "資訊資源判讀",
      focus: "分析與判讀各類資源，練習規劃策略以解決日常生活問題。",
      goal: "建立搜尋、整理與判讀資訊的基本習慣。",
      activity: "教師示範、情境討論、資料判讀練習",
      assessment: "課堂參與、任務紀錄",
      resource: "教師自編教材",
      tags: ["資訊判讀", "問題解決"]
    },
    {
      week: "03",
      unit: "交通安全小達人",
      focus: "辨識社區道路環境的常見危險，連結交通安全議題。",
      goal: "能說明日常交通情境中的風險，並提出改善策略。",
      activity: "案例觀察、危險情境標記、小組分享",
      assessment: "小組發表、學習單",
      resource: "交通安全教材",
      tags: ["交通安全", "生活應用"]
    },
    {
      week: "04",
      unit: "Micro-bit入門",
      focus: "認識Micro-bit功能、操作介面與基本程式積木。",
      goal: "能使用Micro-bit設計一個簡單完整的程式。",
      activity: "MakeCode操作、積木程式練習、上傳測試",
      assessment: "實作檢核",
      resource: "Micro-bit Classroom",
      tags: ["Micro-bit", "程式介面"]
    },
    {
      week: "05-14",
      unit: "Micro-bit程式設計",
      focus: "練習事件、判斷、變數與感測輸入，持續培養邏輯思考能力。",
      goal: "能以運算思維描述問題解決方法，並完成指定程式。",
      activity: "任務挑戰、程式除錯、作品上傳與互評",
      assessment: "程式作品、同儕回饋",
      resource: "網路資源",
      tags: ["運算思維", "變數", "除錯"]
    },
    {
      week: "15-17",
      unit: "感測與互動延伸",
      focus: "延伸Micro-bit輸入、輸出與感測器應用，將程式和生活情境連結。",
      goal: "能修改既有程式，設計具互動性的科技作品。",
      activity: "感測實驗、功能改造、成果展示",
      assessment: "作品功能測試",
      resource: "網路資源",
      tags: ["感測器", "互動設計"]
    },
    {
      week: "18-19",
      unit: "限時計數器",
      focus: "使用變數顯示次數與開關狀態，設計晃動自動計數與暫停判斷。",
      goal: "能運用變數、按鈕與感測方式完成計數器作品。",
      activity: "A鈕歸零、晃動計數、全方位感測計數器改作",
      assessment: "程式作品、功能說明",
      resource: "網路資源",
      tags: ["計數器", "變數", "感測"]
    },
    {
      week: "20",
      unit: "高溫警報器",
      focus: "設定溫度超過35度後執行指定動作，加入閃爍警示燈與警示音。",
      goal: "能設計符合條件判斷的警報器程式。",
      activity: "溫度感測、條件判斷、聲光警示測試",
      assessment: "實作檢核、口頭說明",
      resource: "網路資源",
      tags: ["溫度", "警報", "條件判斷"]
    },
    {
      week: "21",
      unit: "光感測器",
      focus: "偵測光線亮度，當亮度低於50時觸發警示。",
      goal: "能理解光線感測資料，完成自動警示作品。",
      activity: "光線測試、門檻設定、作品展示",
      assessment: "期末作品展示",
      resource: "網路資源",
      tags: ["光線感測", "作品展示"]
    }
  ],
  second: [
    {
      week: "01-04",
      unit: "資訊科技表達暖身",
      focus: "使用資訊科技解決生活中的簡單問題，練習以數位工具表達想法。",
      goal: "能理解工具選擇與問題解決之間的關係。",
      activity: "情境任務、操作示範、課堂練習",
      assessment: "課堂參與、任務完成度",
      resource: "教師自編教材",
      tags: ["數位表達", "問題解決"]
    },
    {
      week: "05-06",
      unit: "聲音編輯與錄音",
      focus: "認識錄音設備與Audacity，練習去雜訊、增幅、重製與匯出檔案。",
      goal: "學會錄音編輯，運用科技工具進行創作與分享。",
      activity: "錄音實作、聲音剪輯、檔案匯出",
      assessment: "音檔作品",
      resource: "網路資源",
      tags: ["Audacity", "聲音編輯"]
    },
    {
      week: "07-10",
      unit: "新雲端工具",
      focus: "操作Google地圖與街景、中央氣象局、交通即時動態與路線導覽。",
      goal: "運用雲端服務理解與歸納問題，提出簡易解決之道。",
      activity: "雲端查詢任務、路線規劃、生活情境應用",
      assessment: "操作任務、學習紀錄",
      resource: "網路資源",
      tags: ["雲端工具", "地圖", "生活應用"]
    },
    {
      week: "11-14",
      unit: "新美學藝術家",
      focus: "學習Impress操作介面、文字格式、圖片編排、繪圖、動畫、母片、圖表與互動製作。",
      goal: "學會Impress，了解美感應用於科技的特質，並進行科技創作與分享。",
      activity: "簡報設計、圖文編排、互動簡報製作",
      assessment: "簡報作品、版面美感",
      resource: "網路資源",
      tags: ["Impress", "美感", "簡報"]
    },
    {
      week: "15-18",
      unit: "便利百寶袋第二彈",
      focus: "認識Google表單欄位意義與應用，設計表單、開放填寫、檢視資料與進行簡單統計。",
      goal: "能使用雲端工具整理資料，並與他人建立良好互動關係。",
      activity: "表單設計、資料收集、統計觀察、成果分享",
      assessment: "表單作品、資料整理成果",
      resource: "網路資源",
      tags: ["Google表單", "資料整理", "統計"]
    }
  ]
};

export const rubricItems = [
  "能依任務需求選擇合適的資訊科技工具。",
  "能將問題拆解為步驟，並用程式或數位工具完成作品。",
  "能測試、修正並說明作品功能與設計理由。",
  "能在小組討論與線上互評中給予具體建議。",
  "能整理成果並以清楚、美觀的方式分享。"
];

export const featuredProjects = [
  "Micro-bit限時計數器",
  "高溫警報器",
  "光線感測警示器",
  "畢業回憶錄音檔",
  "生活資訊雲端查詢任務",
  "互動簡報與Google表單"
];
