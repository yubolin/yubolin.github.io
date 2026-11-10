(function () {
  const dict = {
    zh: {
      logo: "InfraPilot",
      nav_services: "服务",
      nav_skills: "技能",
      nav_projects: "项目",
      nav_contact: "联系",
      nav_hire: "接单咨询",
      hero_eyebrow: "企业 AI 落地 · 基础设施 / 运维 · 远程",
      hero_brand: "InfraPilot",
      hero_title: "帮助企业把 AI 用到基础设施与运维上",
      hero_lead:
        "InfraPilot 面向企业基础设施与运维场景的 AI 落地：AIOps、CMDB、云原生与 LLM 运维相关能力。擅长写代码与修 Bug、测试排障、安装配置部署，以及需求分析与产品设计。承接远程付费项目。",
      hero_cta_primary: "联系接单",
      hero_cta_secondary: "查看项目",
      hero_card_title: "可远程交付",
      hero_card_1: "Bug 修复与功能开发",
      hero_card_2: "测试、排障与性能优化",
      hero_card_3: "安装、配置与部署上线",
      hero_card_4: "需求分析与产品设计协助",
      hero_card_note: "时区：Asia/Shanghai (UTC+8)，可配合海外团队 overlapping hours。",
      services_title: "我能帮你做什么",
      services_desc: "按远程单交付，可短周期修 Bug，也可参与完整功能与企业 AI 运维平台建设。",
      svc1_title: "写代码 / 修 Bug",
      svc1_desc: "后端与前端功能开发、缺陷定位与修复，熟悉 Python、JS/TS、Java、PHP。",
      svc2_title: "测试与排障",
      svc2_desc: "软件测试、线上问题排查、日志与监控分析，把不稳定系统稳住。",
      svc3_title: "安装配置部署",
      svc3_desc: "软件安装、环境配置、Docker / Compose 部署与上线实施。",
      svc4_title: "需求与产品设计",
      svc4_desc: "需求分析、方案梳理与产品设计协助，把模糊需求落成可执行任务。",
      skills_title: "技能栈",
      skills_lang: "编程语言",
      skills_stack: "从项目中用到的技术",
      skills_domain: "领域方向",
      projects_title: "精选项目",
      projects_desc:
        "以下 live 项目描述均来自仓库 README，未添加仓库中不存在的指标或功能。源码私有，可约在线演示；截图来自本地演示环境（虚构演示数据）。新项目请追加到 js/projects.js。",
      badge_private: "Private",
      badge_coming: "Coming soon",
      view_github: "GitHub",
      demo_note: "源码私有，可约在线演示",
      coming_label: "即将上线",
      contact_email_label: "邮箱",
      contact_title: "有远程单？直接联系我",
      contact_desc: "说清需求、时间与预算即可。私有仓库如需代码审阅，可单独开通权限。",
      contact_email_hint: "请替换为真实联系邮箱",
      placeholders_note:
        "待你补充：展示姓名（当前 Your Name）、联系邮箱、工作经历（如需）。站点未编造这些信息。",
      footer_note: "InfraPilot · 企业 AI 落地 · 基础设施与运维"
    },
    en: {
      logo: "InfraPilot",
      nav_services: "Services",
      nav_skills: "Skills",
      nav_projects: "Projects",
      nav_contact: "Contact",
      nav_hire: "Hire me",
      hero_eyebrow: "Enterprise AI adoption · infrastructure / ops · remote",
      hero_brand: "InfraPilot",
      hero_title: "Bringing AI into enterprise infrastructure & ops",
      hero_lead:
        "InfraPilot focuses on enterprise AI adoption for infrastructure and operations — AIOps, CMDB, cloud-native and LLM ops. I ship code and fix bugs, test and troubleshoot, install/configure/deploy, and help with requirements and product design. Open to paid remote gigs.",
      hero_cta_primary: "Get in touch",
      hero_cta_secondary: "See projects",
      hero_card_title: "Remote delivery",
      hero_card_1: "Bug fixes and feature development",
      hero_card_2: "Testing, troubleshooting, performance",
      hero_card_3: "Install, config, and production deploy",
      hero_card_4: "Requirements analysis and product design support",
      hero_card_note: "Timezone: Asia/Shanghai (UTC+8). Happy to overlap with overseas teams.",
      services_title: "What I can help with",
      services_desc:
        "Short bug-fix gigs or longer platform / enterprise AI-for-ops work — delivered remotely.",
      svc1_title: "Coding / bug fixing",
      svc1_desc: "Backend and frontend features, defect triage and fixes. Python, JS/TS, Java, PHP.",
      svc2_title: "Testing & troubleshooting",
      svc2_desc: "Software testing, production incident triage, log and monitoring analysis.",
      svc3_title: "Install / config / deploy",
      svc3_desc: "Software install, environment setup, Docker / Compose deploys and rollouts.",
      svc4_title: "Requirements & product design",
      svc4_desc: "Turn fuzzy needs into concrete specs and actionable delivery plans.",
      skills_title: "Skills",
      skills_lang: "Languages",
      skills_stack: "From real project READMEs",
      skills_domain: "Domain focus",
      projects_title: "Selected projects",
      projects_desc:
        "Live project copy comes from each repo README — no invented metrics or features. Source is private; a live demo can be arranged. Screenshots are from a local demo with fictional data. Append new projects in js/projects.js.",
      badge_private: "Private",
      badge_coming: "Coming soon",
      view_github: "GitHub",
      demo_note: "Private source · demo on request",
      coming_label: "Coming soon",
      contact_email_label: "Email",
      contact_title: "Need remote help? Reach out",
      contact_desc:
        "Share the problem, timeline, and budget. I can grant private-repo access for code review if needed.",
      contact_email_hint: "Replace with your real contact email",
      placeholders_note:
        "Please fill in: display name (currently Your Name), contact email, and work history if you want it listed. Nothing invented.",
      footer_note: "InfraPilot · Enterprise AI for infrastructure & operations"
    }
  };

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  let lang = localStorage.getItem("portfolio-lang") || "zh";
  const toggle = document.getElementById("langToggle");
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.querySelector(".nav");
  const projectsRoot = document.getElementById("projectsGrid");

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function screenshotAlt(shot) {
    return lang === "en" ? shot.altEn || shot.alt || "" : shot.alt || shot.altEn || "";
  }

  function renderProjects() {
    if (!projectsRoot || !window.INFRA_PILOT_PROJECTS) return;
    const pack = dict[lang];
    projectsRoot.innerHTML = window.INFRA_PILOT_PROJECTS.map((p) => {
      const coming = p.status === "coming";
      const title = lang === "en" ? p.titleEn || p.title : p.title;
      const tagline = lang === "en" ? p.taglineEn || p.tagline : p.tagline;
      const body = lang === "en" ? p.bodyEn || p.body : p.body;
      const badges = (p.badges || [])
        .map((b) => {
          const isComing = /coming/i.test(b);
          const isPrivate = /private/i.test(b);
          const label = isComing ? pack.badge_coming : isPrivate ? pack.badge_private : b;
          const cls = isComing
            ? "badge badge-coming"
            : isPrivate
              ? "badge badge-private"
              : "badge";
          return `<span class="${cls}">${escapeHtml(label)}</span>`;
        })
        .join("");
      const tags = (p.tags || [])
        .map((t) => `<li>${escapeHtml(t)}</li>`)
        .join("");
      const shots = p.screenshots || [];
      const gallery = shots.length
        ? `<div class="shot-gallery">${shots
            .map((s, i) => {
              const alt = screenshotAlt(s);
              return `<button type="button" class="shot-thumb" data-shot-index="${i}" data-src="${escapeHtml(s.src)}" data-alt="${escapeHtml(alt)}" aria-label="${escapeHtml(alt)}"><img src="${escapeHtml(s.src)}" alt="${escapeHtml(alt)}" width="1440" height="900" loading="lazy" /></button>`;
            })
            .join("")}</div>`
        : "";
      const link = coming
        ? `<span class="coming-pill">${escapeHtml(pack.coming_label)}</span>`
        : `<a class="demo-note" href="#contact">${escapeHtml(pack.demo_note)}</a>`;
      return `
        <article class="project-card${coming ? " project-card-coming" : ""}" data-project-id="${escapeHtml(p.id)}">
          <div class="project-meta">${badges}</div>
          <h3>${escapeHtml(title)}</h3>
          <p class="project-tagline">${escapeHtml(tagline)}</p>
          <p>${escapeHtml(body)}</p>
          ${gallery}
          <ul class="pill-list compact">${tags}</ul>
          <div class="project-links">${link}</div>
        </article>`;
    }).join("");
  }

  function ensureLightbox() {
    if (document.getElementById("shotLightbox")) return;
    const el = document.createElement("div");
    el.id = "shotLightbox";
    el.className = "lightbox";
    el.setAttribute("role", "dialog");
    el.setAttribute("aria-modal", "true");
    el.setAttribute("hidden", "true");
    el.innerHTML =
      '<button type="button" class="lightbox-close" aria-label="Close">&times;</button><img alt="" />';
    document.body.appendChild(el);

    function closeLightbox() {
      el.classList.remove("open");
      el.setAttribute("hidden", "true");
      document.body.style.overflow = "";
    }

    function openLightbox(src, alt) {
      const img = el.querySelector("img");
      img.src = src;
      img.alt = alt || "";
      el.classList.add("open");
      el.removeAttribute("hidden");
      document.body.style.overflow = "hidden";
      el.querySelector(".lightbox-close").focus();
    }

    el.addEventListener("click", (ev) => {
      if (ev.target === el || ev.target.closest(".lightbox-close")) closeLightbox();
    });
    document.addEventListener("keydown", (ev) => {
      if (ev.key === "Escape" && el.classList.contains("open")) closeLightbox();
    });

    if (projectsRoot) {
      projectsRoot.addEventListener("click", (ev) => {
        const btn = ev.target.closest(".shot-thumb");
        if (!btn || !projectsRoot.contains(btn)) return;
        openLightbox(btn.getAttribute("data-src"), btn.getAttribute("data-alt"));
      });
    }
  }

  function applyLang(next) {
    lang = next;
    localStorage.setItem("portfolio-lang", lang);
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    if (toggle) toggle.textContent = lang === "zh" ? "EN" : "中文";
    const pack = dict[lang];
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (pack[key] != null) el.textContent = pack[key];
    });
    renderProjects();
  }

  if (toggle) {
    toggle.addEventListener("click", () => applyLang(lang === "zh" ? "en" : "zh"));
  }

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        nav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  ensureLightbox();
  applyLang(lang);
})();
