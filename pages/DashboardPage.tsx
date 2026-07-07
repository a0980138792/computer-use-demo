import { useMemo, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  Check,
  ChevronRight,
  ClipboardCheck,
  CloudSun,
  Cpu,
  FileSpreadsheet,
  GalleryHorizontalEnd,
  Map,
  Mic2,
  MousePointerClick,
  Play,
  Presentation,
  Radio,
  Sparkles,
  ThermometerSun,
  Users
} from "lucide-react";
import {
  competencies,
  courseGoals,
  courseProfile,
  featuredProjects,
  learningFlow,
  rubricItems,
  semesterLessons,
  type SemesterKey
} from "@/lib/scratchCourse";

const semesterLabels: Record<SemesterKey, string> = {
  first: "第一學期",
  second: "第二學期"
};

const semesterMeta: Record<SemesterKey, string> = {
  first: courseProfile.firstSemesterWeeks,
  second: courseProfile.secondSemesterWeeks
};

const projectIcons = [Cpu, ThermometerSun, Radio, Mic2, Map, FileSpreadsheet];

export function DashboardPage() {
  const [activeSemester, setActiveSemester] = useState<SemesterKey>("first");
  const [completed, setCompleted] = useState<string[]>(["first-01-02", "first-03"]);

  const lessons = semesterLessons[activeSemester];
  const completedCount = useMemo(
    () => completed.filter((item) => item.startsWith(activeSemester)).length,
    [activeSemester, completed]
  );
  const progress = Math.round((completedCount / lessons.length) * 100);

  const toggleLesson = (id: string) => {
    setCompleted((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));
  };

  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <section className="overflow-hidden rounded-lg border border-ink/10 bg-white shadow-sm">
        <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="px-5 py-7 sm:px-8 lg:px-10 lg:py-10">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-moss">
              <span className="rounded-md bg-moss/10 px-2.5 py-1">{courseProfile.schoolYear}</span>
              <span className="rounded-md bg-gold/20 px-2.5 py-1">{courseProfile.grade}</span>
              <span className="rounded-md bg-coral/10 px-2.5 py-1">{courseProfile.category}</span>
            </div>
            <p className="mt-5 text-sm font-semibold text-coral">{courseProfile.school}</p>
            <h1 className="mt-2 text-3xl font-bold leading-tight text-ink sm:text-5xl">{courseProfile.title}</h1>
            <p className="mt-3 text-xl font-semibold text-ink/75">{courseProfile.subtitle}</p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-ink/70">{courseProfile.idea}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <Metric label="第一學期" value="21" suffix="節" />
              <Metric label="第二學期" value="18" suffix="節" />
              <Metric label="設計教師" value={courseProfile.teacher} />
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#weekly-lessons"
                className="inline-flex items-center gap-2 rounded-md bg-ink px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-ink/90"
              >
                <Play className="h-4 w-4" aria-hidden="true" />
                開始看課程
              </a>
              <a
                href="#showcase"
                className="inline-flex items-center gap-2 rounded-md border border-ink/15 bg-white px-4 py-2.5 text-sm font-semibold text-ink transition hover:bg-ink/5"
              >
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                查看成果任務
              </a>
            </div>
          </div>

          <div className="relative min-h-[360px] bg-[#17324a] p-5 text-white sm:p-8">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.13)_0,transparent_34%),radial-gradient(circle_at_82%_18%,rgba(217,164,65,0.34),transparent_27%)]" />
            <div className="relative flex h-full flex-col justify-between rounded-lg border border-white/15 bg-white/10 p-5 backdrop-blur">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-white/75">Micro-bit Lab</span>
                  <span className="rounded bg-white/15 px-2 py-1 text-xs">MakeCode</span>
                </div>
                <div className="mt-5 aspect-[4/3] rounded-md border border-white/15 bg-[#f6f0df] p-4 text-ink shadow-2xl">
                  <div className="flex h-full flex-col justify-between">
                    <div className="grid grid-cols-5 gap-1.5">
                      {Array.from({ length: 25 }).map((_, index) => (
                        <span
                          key={index}
                          className={[
                            "aspect-square rounded-sm border border-ink/10",
                            [6, 8, 12, 16, 18].includes(index) ? "bg-coral" : "bg-white"
                          ].join(" ")}
                        />
                      ))}
                    </div>
                    <div className="mx-auto grid w-full max-w-xs gap-2">
                      <CodeBlock color="bg-[#f0b429]" text="當 A 按鈕被按下" />
                      <CodeBlock color="bg-[#4c9aff]" text="設定 counter 為 0" />
                      <CodeBlock color="bg-[#8b5cf6]" text="如果溫度 > 35" />
                      <CodeBlock color="bg-[#22a06b]" text="播放警示音並顯示圖示" />
                    </div>
                    <div className="flex items-end justify-between">
                      <div className="rounded-md bg-white px-3 py-2 text-xs font-semibold shadow">亮度 48</div>
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-coral text-sm font-bold text-white shadow-lg">
                        RUN
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-5 text-sm leading-6 text-white/80">{courseProfile.goal}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-lg border border-ink/10 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <BookOpenCheck className="h-5 w-5 text-coral" aria-hidden="true" />
            <h2 className="text-lg font-bold">課程願景</h2>
          </div>
          <p className="mt-4 text-sm leading-6 text-ink/70">{courseProfile.vision}</p>
          <div className="mt-5 space-y-3">
            {competencies.map((item) => (
              <div key={item} className="flex gap-3 rounded-md bg-paper px-3 py-3 text-sm text-ink/75">
                <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-moss" aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-ink/10 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <MousePointerClick className="h-5 w-5 text-coral" aria-hidden="true" />
            <h2 className="text-lg font-bold">學習流程</h2>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {learningFlow.map((step, index) => (
              <div key={step} className="rounded-md border border-ink/10 bg-paper p-4">
                <span className="text-xs font-bold text-coral">{String(index + 1).padStart(2, "0")}</span>
                <p className="mt-2 text-sm font-semibold">{step}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-md bg-moss/10 p-4">
            <p className="text-sm font-bold text-moss">{semesterLabels[activeSemester]}課程目標</p>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-ink/75">
              {courseGoals[activeSemester].map((goal) => (
                <li key={goal} className="flex gap-2">
                  <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-moss" aria-hidden="true" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="weekly-lessons" className="rounded-lg border border-ink/10 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-coral">Weekly Roadmap</p>
            <h2 className="mt-2 text-2xl font-bold">學期學習進度</h2>
          </div>
          <div className="inline-flex rounded-md border border-ink/10 bg-paper p-1">
            {(Object.keys(semesterLabels) as SemesterKey[]).map((semester) => (
              <button
                key={semester}
                type="button"
                onClick={() => setActiveSemester(semester)}
                className={[
                  "rounded px-4 py-2 text-sm font-semibold transition",
                  activeSemester === semester ? "bg-ink text-white shadow-sm" : "text-ink/65 hover:text-ink"
                ].join(" ")}
              >
                {semesterLabels[semester]}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5 rounded-md bg-paper p-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="text-sm font-semibold">
              {semesterLabels[activeSemester]}，{semesterMeta[activeSemester]}
            </span>
            <span className="text-sm font-bold text-moss">{progress}% 完成</span>
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-ink/10">
            <div className="h-full rounded-full bg-moss transition-all" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {lessons.map((lesson) => {
            const id = `${activeSemester}-${lesson.week}`;
            const isDone = completed.includes(id);

            return (
              <article key={id} className="rounded-lg border border-ink/10 bg-white p-4 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-xs font-bold text-coral">第 {lesson.week} 週</span>
                    <h3 className="mt-1 text-lg font-bold">{lesson.unit}</h3>
                  </div>
                  <button
                    type="button"
                    aria-label={`${isDone ? "取消完成" : "標記完成"} ${lesson.unit}`}
                    onClick={() => toggleLesson(id)}
                    className={[
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-md border transition",
                      isDone ? "border-moss bg-moss text-white" : "border-ink/15 bg-paper text-ink/55 hover:text-ink"
                    ].join(" ")}
                  >
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
                <p className="mt-3 text-sm leading-6 text-ink/70">{lesson.focus}</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <LessonInfo icon={ClipboardCheck} label="學習目標" text={lesson.goal} />
                  <LessonInfo icon={CloudSun} label="學習活動" text={lesson.activity} />
                  <LessonInfo icon={Presentation} label="評量方式" text={lesson.assessment} />
                  <LessonInfo icon={GalleryHorizontalEnd} label="學習資源" text={lesson.resource} />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {lesson.tags.map((tag) => (
                    <span key={tag} className="rounded bg-gold/15 px-2.5 py-1 text-xs font-semibold text-ink/70">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="showcase" className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-lg border border-ink/10 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <Users className="h-5 w-5 text-coral" aria-hidden="true" />
            <h2 className="text-lg font-bold">成果任務</h2>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {featuredProjects.map((project, index) => {
              const Icon = projectIcons[index];

              return (
                <div key={project} className="rounded-md border border-ink/10 bg-paper p-4">
                  <Icon className="h-5 w-5 text-moss" aria-hidden="true" />
                  <h3 className="mt-3 font-semibold">{project}</h3>
                  <p className="mt-2 flex items-center gap-2 text-sm text-ink/65">
                    規劃
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                    實作
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                    分享
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-lg border border-ink/10 bg-ink p-5 text-white shadow-sm">
          <h2 className="text-lg font-bold">評量重點</h2>
          <div className="mt-5 space-y-3">
            {rubricItems.map((item) => (
              <div key={item} className="flex gap-3 rounded-md bg-white/10 px-3 py-3 text-sm leading-6 text-white/85">
                <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

type MetricProps = {
  label: string;
  value: string;
  suffix?: string;
};

function Metric({ label, value, suffix }: MetricProps) {
  return (
    <div className="rounded-md border border-ink/10 bg-paper px-4 py-3">
      <p className="text-xs font-semibold text-ink/55">{label}</p>
      <p className="mt-1 text-xl font-bold">
        {value}
        {suffix ? <span className="ml-1 text-sm text-ink/55">{suffix}</span> : null}
      </p>
    </div>
  );
}

type LessonInfoProps = {
  icon: typeof ClipboardCheck;
  label: string;
  text: string;
};

function LessonInfo({ icon: Icon, label, text }: LessonInfoProps) {
  return (
    <div className="rounded-md bg-paper px-3 py-3 text-sm text-ink/75">
      <div className="flex items-center gap-2 font-semibold text-ink">
        <Icon className="h-4 w-4 text-coral" aria-hidden="true" />
        {label}
      </div>
      <p className="mt-2 leading-6">{text}</p>
    </div>
  );
}

type CodeBlockProps = {
  color: string;
  text: string;
};

function CodeBlock({ color, text }: CodeBlockProps) {
  return <div className={`${color} rounded-md px-3 py-2 text-xs font-bold text-white shadow-sm`}>{text}</div>;
}
