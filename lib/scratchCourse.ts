export type SemesterKey = "first" | "second";

export type WeeklyLesson = {
  week: string;
  unit: string;
  focus: string;
  outcome: string;
  tags: string[];
};

export const courseProfile = {
  title: "神乎其技",
  schoolYear: "115學年度",
  grade: "五年級",
  teacher: "黃錦隆",
  cadence: "每週1節",
  vision: "結合 e 化科技與多元創意教學，促進學生多元發展。",
  goal: "讓學生能夠利用 Scratch 設計完整遊戲，並培養邏輯思考能力。",
  idea:
    "學生透過 Scratch 平台認識程式積木與擴展功能，完成指定程式設計並上傳至教師創作坊，透過觀摩與互評改進作品。"
};

export const competencies = [
  "應用運算思維描述問題解決的方法",
  "使用資訊科技表達想法並分享作品",
  "欣賞生活中的美感與創意表現",
  "理解科技創作、守法觀念與公民意識"
];

export const learningFlow = [
  "認識平台",
  "積木操作",
  "專題創作",
  "上傳分享",
  "同儕互評",
  "修正迭代"
];

export const semesterLessons: Record<SemesterKey, WeeklyLesson[]> = {
  first: [
    {
      week: "01",
      unit: "Scratch 雲端帳號",
      focus: "建立 Scratch 平台雲端帳號，收取認證信並完成開通。",
      outcome: "能說明桌面版與線上版差異，並登入自己的雲端帳號。",
      tags: ["平台", "帳號"]
    },
    {
      week: "02",
      unit: "平台功能導覽",
      focus: "認識主功能表、程式區、腳本區、舞台區、角色、背景、造型與聲音標籤。",
      outcome: "能指出基本積木與擴展功能的作用。",
      tags: ["介面", "積木"]
    },
    {
      week: "03-06",
      unit: "角色與動畫基礎",
      focus: "新增角色與背景，使用事件控制、更換造型、定位、滑行、對話、音效與邊緣反彈。",
      outcome: "完成第一個能互動、會動作、有聲音的 Scratch 小作品。",
      tags: ["角色", "動畫", "音效"]
    },
    {
      week: "07-13",
      unit: "畫筆專題",
      focus: "使用變數滑桿、畫筆擴展、廣播、接收訊息、滑鼠偵測、下筆與停筆。",
      outcome: "製作能改變筆跡寬度與顏色的畫筆工具，並上傳至教師創作坊互評。",
      tags: ["畫筆", "變數", "廣播"]
    },
    {
      week: "14-20",
      unit: "音樂創作",
      focus: "新增音樂擴展、樂器變數、樂譜清單、節拍清單與自動播放功能。",
      outcome: "能設計按鍵演奏與樂譜播放流程，理解清單和變數的關係。",
      tags: ["音樂", "清單", "自動播放"]
    },
    {
      week: "21",
      unit: "期末作品",
      focus: "製作雙人樂團，使用兩種不同樂器一起演奏小星星，演奏時產生造型與尺寸變化。",
      outcome: "完成可展示的綜合 Scratch 專題。",
      tags: ["成果", "發表"]
    }
  ],
  second: [
    {
      week: "01-02",
      unit: "即時翻譯機",
      focus: "使用文字轉語音擴展，設定語言與語音，依詢問內容說出翻譯結果。",
      outcome: "做出可互動的文字轉語音翻譯作品並上傳創作坊。",
      tags: ["文字轉語音", "互動"]
    },
    {
      week: "03-04",
      unit: "報時娃娃",
      focus: "偵測目前時間，組合字串並重複更新報時內容。",
      outcome: "完成能持續報時的 Scratch 程式。",
      tags: ["時間", "字串"]
    },
    {
      week: "05-06",
      unit: "打擊樂團",
      focus: "使用視訊偵測與音樂擴展，讓多個樂器角色依動作演奏。",
      outcome: "分組完成團體音樂發表。",
      tags: ["視訊偵測", "音樂"]
    },
    {
      week: "07-10",
      unit: "最佳外野手",
      focus: "建立外野手、棒球、得分與時間變數，設計倒數計時與碰撞得分。",
      outcome: "完成可用視訊功能進行的拋接球遊戲期中評量。",
      tags: ["遊戲", "計分", "評量"]
    },
    {
      week: "11-16",
      unit: "闖關遊戲",
      focus: "設計主角、障礙物、生命值、總得分、函式跳躍、成功與失敗訊息。",
      outcome: "做出有生命值、得分、關卡結果的完整闖關遊戲。",
      tags: ["函式", "生命值", "關卡"]
    },
    {
      week: "17-21",
      unit: "總複習：打磚塊",
      focus: "整合背景、角色、變數、左右移動、彈珠反彈、分身磚塊與成果發表。",
      outcome: "完成期末作品，上傳教師創作坊並體驗同學遊戲。",
      tags: ["總複習", "分身", "發表"]
    }
  ]
};

export const rubricItems = [
  "程式能正常開始、互動與結束",
  "角色、背景、造型或音效能支持作品主題",
  "變數、清單、廣播或擴展功能使用合理",
  "能上傳作品並給同學具體回饋",
  "能依照回饋修正自己的作品"
];
