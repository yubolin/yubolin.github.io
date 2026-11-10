/**
 * Project cards — add new entries here. The page renders this array.
 * Fields: id, status ('live'|'coming'), title, titleEn, tagline, taglineEn,
 * body, bodyEn, badges, tags, screenshots (optional), version (optional).
 * Do not publish private GitHub repo URLs on this site.
 */
window.INFRA_PILOT_PROJECTS = [
  {
    id: "ai-ops",
    status: "live",
    title: "AI OPS · 智能运维平台",
    titleEn: "AI OPS · Intelligent Ops Platform",
    tagline: "面向异构算力、云原生与 LLM 推理场景的一体化智能运维平台",
    taglineEn:
      "An integrated intelligent ops platform for heterogeneous compute, cloud-native, and LLM inference workloads",
    body:
      "由 Web 控制台（Next.js）、API 与调度服务（FastAPI）以及主机 Agent（Go）组成。后端为控制面，Agent 为执行面：经 WebSocket 下发指令，由本机 kubectl / docker / systemd 执行。覆盖主机与 GPU/NPU 监控、K8s 纳管、vLLM 推理监控、拨测、告警、AI 智能巡检（Dify）、SmartOps 根因分析与自愈、LLMOps 部署与网关、远程终端与多租户 RBAC 等能力。",
    bodyEn:
      "Three subsystems: Next.js web console, FastAPI API/scheduler, and a Go host agent. Control plane on the backend, execution plane on the agent — commands go over WebSocket and run via local kubectl / docker / systemd. Covers host & GPU/NPU monitoring, K8s management, vLLM inference monitoring, probes, alerts, AI inspections (Dify), SmartOps root-cause analysis & self-healing, LLMOps deploy/gateway, remote terminal, and multi-tenant RBAC.",
    badges: ["Private", "TypeScript / Python / Go"],
    tags: [
      "Python / FastAPI",
      "Next.js 16 / React 19",
      "Go 1.24 Agent",
      "PostgreSQL",
      "Redis",
      "InfluxDB",
      "Dify / LiteLLM / vLLM",
      "Docker Compose"
    ],
    screenshots: [
      {
        src: "assets/projects/ai-ops/monitor.webp",
        alt: "AI OPS 主机监控看板",
        altEn: "AI OPS host monitoring dashboard"
      },
      {
        src: "assets/projects/ai-ops/accelerator.webp",
        alt: "AI OPS GPU 算力监控",
        altEn: "AI OPS GPU accelerator monitoring"
      },
      {
        src: "assets/projects/ai-ops/smartops.webp",
        alt: "AI OPS SmartOps 根因分析",
        altEn: "AI OPS SmartOps root-cause analysis"
      }
    ]
  },
  {
    id: "cmdb",
    status: "live",
    title: "CloudNexus CMDB",
    titleEn: "CloudNexus CMDB",
    tagline: "新一代多云配置管理数据库 — 多云资产自动采集 → 统一纳管 → 智能运维分析",
    taglineEn:
      "Next-gen multi-cloud CMDB — auto-collect cloud assets → unify inventory → intelligent ops analytics",
    body:
      "面向企业级多云环境的开源 CMDB 平台（MIT）。支持阿里云、腾讯云、AWS、Azure 资产自动采集与统一纳管，定时同步、运维仪表盘与大屏、基于 AntV G6 的拓扑图谱、工单与报表、告警巡检与数据质量校验。集成智谱 GLM-4 做 AI 安全扫描、巡检建议与智能对话；后端 FastAPI + PostgreSQL RLS 多租户，JWT / RBAC，Fernet 加密云账号 AK/SK。",
    bodyEn:
      "Open-source (MIT) enterprise multi-cloud CMDB. Auto-collects and manages assets from Aliyun, Tencent Cloud, AWS, and Azure; scheduled sync; ops dashboards and NOC wallboards; AntV G6 topology; tickets and reports; alerts, inspections, and data-quality checks. Integrates Zhipu GLM-4 for AI security scans, inspection advice, and chat. FastAPI backend with PostgreSQL RLS multi-tenancy, JWT/RBAC, and Fernet-encrypted cloud AK/SK.",
    badges: ["Private", "Python / React · v0.9.0"],
    tags: [
      "Python 3.12 / FastAPI",
      "React 19 / TypeScript",
      "Vite / Ant Design",
      "PostgreSQL 16 + RLS",
      "AntV G6 / ECharts",
      "Aliyun / Tencent / AWS / Azure SDK",
      "Docker Compose / Nginx"
    ],
    version: "0.9.0",
    screenshots: [
      {
        src: "assets/projects/cmdb/dashboard.webp",
        alt: "CloudNexus CMDB 仪表盘",
        altEn: "CloudNexus CMDB dashboard"
      },
      {
        src: "assets/projects/cmdb/assets.webp",
        alt: "CloudNexus 多云资产列表",
        altEn: "CloudNexus multi-cloud asset list"
      },
      {
        src: "assets/projects/cmdb/topology.webp",
        alt: "CloudNexus 资产拓扑图谱",
        altEn: "CloudNexus asset topology graph"
      }
    ]
  },
  {
    id: "tokenops",
    status: "live",
    title: "TokenOps · 企业 LLM Token 管理网关",
    titleEn: "TokenOps · Enterprise LLM Token Gateway",
    tagline: "基于 LiteLLM 的企业级 LLM API Key 管理平台：多租户、预算控制、用量追踪与模型访问管理",
    taglineEn:
      "Enterprise LLM API key management on LiteLLM: multi-tenancy, budget control, usage tracking, and model access governance",
    body:
      "提供虚拟 API Key 的生成、分发、轮换与吊销；组织、部门、团队到 Key 的多层级预算限制；按团队、模型、时间多维分析的实时用量仪表盘；按 Key 或团队配置模型白名单。OpenAI 兼容代理，只需改 base_url 即可接入，支持 OpenAI、Anthropic、Azure、通义千问、DeepSeek 等多家模型，并可通过邮件、飞书、企微、钉钉 Webhook 告警。组织级数据隔离与 5 级 RBAC。",
    bodyEn:
      "Virtual API keys you can issue, distribute, rotate, and revoke; layered budgets from organization to department, team, and key; a real-time usage dashboard by team, model, and time; per-key or per-team model allowlists. An OpenAI-compatible proxy means clients only change base_url. Supports OpenAI, Anthropic, Azure, Qwen, DeepSeek and more, with alerts via email, Feishu, WeCom, and DingTalk webhooks. Org-level data isolation and 5-level RBAC.",
    badges: ["Private", "Python / TypeScript"],
    tags: [
      "Python / FastAPI",
      "Next.js / TypeScript",
      "LiteLLM SDK",
      "PostgreSQL 16",
      "Redis 7",
      "JWT / OAuth2 / RBAC",
      "Docker Compose / Nginx"
    ],
    screenshots: [
      {
        src: "assets/projects/tokenops/dashboard.webp",
        alt: "TokenOps 用量仪表盘",
        altEn: "TokenOps usage dashboard"
      },
      {
        src: "assets/projects/tokenops/keys.webp",
        alt: "TokenOps 虚拟 Key 管理",
        altEn: "TokenOps virtual key management"
      },
      {
        src: "assets/projects/tokenops/budgets.webp",
        alt: "TokenOps 多层级预算",
        altEn: "TokenOps layered budgets"
      }
    ]
  }
];
