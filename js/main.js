(function () {
  const dict = {
    zh: {
      logo: "InfraPilot",
      nav_capabilities: "能力",
      nav_procurement: "采购说明",
      nav_projects: "产品",
      nav_freelance: "个人接单",
      nav_contact: "联系",
      nav_hire: "合作咨询",
      hero_eyebrow: "传统行业 · 私有化部署 · 集成商转介",
      hero_brand: "InfraPilot",
      hero_title: "面向传统行业的基础设施与运维协同产品",
      hero_lead:
        "InfraPilot 是我们团队面向传统行业的基础设施与运维协同产品，通过集成商转介合作，支持私有化 / 本地部署。客户目前主要使用监控模块；AI 诊断、自愈和 LLM 运维作为扩展能力，可按项目需要选用。",
      hero_cta_primary: "合作咨询",
      hero_cta_secondary: "采购说明",
      hero_cta_projects: "查看产品",
      tag_private: "私有化部署",
      tag_monitor: "监控",
      hero_card_title: "合作要点",
      hero_card_1: "私有化 / 本地部署",
      hero_card_2: "单笔合作规模 10 万元以内",
      hero_card_3: "典型交付约 3 个月（从启动到可用）",
      hero_card_4: "5×8 工作时间支持，由我们团队兜底",
      hero_card_note: "工作时区：Asia/Shanghai (UTC+8)。通过集成商转介合作。",
      cap_title: "产品能力",
      cap_desc: "交付以监控为主；下列扩展能力可按项目需要选用，不作为默认承诺。",
      cap1_title: "监控（主要使用）",
      cap1_desc: "客户目前主要使用监控模块，用于基础设施与运维现场的观测和告警。",
      cap2_title: "CMDB 与资产纳管",
      cap2_desc: "多云与本地资产的采集、纳管与运维分析，可按项目纳入交付范围。",
      cap3_title: "私有化交付",
      cap3_desc: "支持私有化 / 本地部署，由我们团队完成安装、配置与上线实施。",
      cap4_title: "扩展能力",
      cap4_desc: "AI 诊断、自愈和 LLM 运维为扩展能力，可按项目需要选用。",
      proc_title: "给集成商与采购的说明",
      proc_desc: "合作通过集成商转介进行。以下为已确认的合作条件，便于采购评估；未列出响应时效或其他未经确认的服务条款。",
      proc_f1_label: "合作方式",
      proc_f1_value: "通过集成商转介",
      proc_f2_label: "部署方式",
      proc_f2_value: "私有化 / 本地部署",
      proc_f3_label: "适用客户",
      proc_f3_value: "传统行业；目前已有交通运输行业客户",
      proc_f4_label: "主要使用",
      proc_f4_value: "监控模块",
      proc_f5_label: "合作规模",
      proc_f5_value: "单笔 10 万元以内",
      proc_f6_label: "交付周期",
      proc_f6_value: "从启动到可用，典型约 3 个月",
      proc_f7_label: "支持",
      proc_f7_value: "5×8 工作时间支持，由我们团队兜底",
      proc_f8_label: "工作时区",
      proc_f8_value: "Asia/Shanghai (UTC+8)",
      proc_note: "AI 诊断、自愈和 LLM 运维为扩展能力，可按项目需要选用。源码不公开，演示可预约。",
      shot_caption: "截图来自本地演示环境，数据为虚构演示数据，非真实客户环境",
      case_title: "匿名案例",
      case_desc: "目前仅公开这一例匿名案例，不披露客户名称，也不提供未经确认的指标。",
      case_kicker: "交通运输行业",
      case_body: "某交通运输行业客户在其机房服务器上使用监控软件。",
      fl_title: "个人远程接单 · yubolin",
      fl_desc: "亦可以个人身份承接远程开发与实施工作，与上方团队产品合作相互独立。",
      fl1_title: "写代码 / 修 Bug",
      fl1_desc: "后端与前端功能开发、缺陷定位与修复，熟悉 Python、JS/TS、Java、PHP。",
      fl2_title: "测试与排障",
      fl2_desc: "软件测试、线上问题排查、日志与监控分析，把不稳定系统稳住。",
      fl3_title: "安装配置部署",
      fl3_desc: "软件安装、环境配置、Docker / Compose 部署与上线实施。",
      fl4_title: "需求与产品设计",
      fl4_desc: "需求分析、方案梳理与产品设计协助，把模糊需求落成可执行任务。",
      fl_skills_title: "编程语言",
      projects_title: "产品与能力模块",
      projects_desc:
        "以下说明来自各产品模块的既有描述，未添加其中不存在的指标或功能。源码私有，可约在线演示；截图来自本地演示环境（虚构演示数据）。",
      badge_private: "Private",
      badge_coming: "Coming soon",
      view_github: "GitHub",
      demo_note: "源码私有，可约在线演示",
      coming_label: "即将上线",
      contact_email_label: "邮箱",
      contact_title: "合作与采购咨询",
      contact_desc: "集成商或采购同事可通过邮件联系，说明场景、部署环境与时间计划即可。源码不公开；如需演示，可预约。",
      footer_note: "InfraPilot · 私有化部署 · 基础设施与运维"
    },
    en: {
      logo: "InfraPilot",
      nav_capabilities: "Capabilities",
      nav_procurement: "Procurement",
      nav_projects: "Products",
      nav_freelance: "Freelance",
      nav_contact: "Contact",
      nav_hire: "Talk with us",
      hero_eyebrow: "Traditional industries · private deployment · integrator referrals",
      hero_brand: "InfraPilot",
      hero_title: "An infrastructure and operations product for traditional industries",
      hero_lead:
        "InfraPilot is our team's infrastructure and operations product for traditional industries. We work through integrator referrals and deliver private / on-prem deployments. Customers currently use the monitoring module most; AI diagnosis, self-healing, and LLM operations are extended capabilities, available when a project needs them.",
      hero_cta_primary: "Talk with us",
      hero_cta_secondary: "Procurement",
      hero_cta_projects: "See products",
      tag_private: "Private / on-prem",
      tag_monitor: "Monitoring",
      hero_card_title: "At a glance",
      hero_card_1: "Private / on-prem deployment",
      hero_card_2: "Deal size under RMB 100,000",
      hero_card_3: "Typical delivery about 3 months, from kickoff to usable",
      hero_card_4: "5×8 business-hours support, backed by our team",
      hero_card_note: "Working hours: Asia/Shanghai (UTC+8). Engagements come through integrator referrals.",
      cap_title: "Product capabilities",
      cap_desc: "Delivery is monitoring-first. The extended capabilities below can be included when a project needs them; they are not default commitments.",
      cap1_title: "Monitoring (primary use)",
      cap1_desc: "Customers currently use the monitoring module most, for infrastructure and operations visibility and alerting.",
      cap2_title: "CMDB and asset inventory",
      cap2_desc: "Collect and manage multi-cloud and on-prem assets, with ops analytics, when a project includes this scope.",
      cap3_title: "Private deployment",
      cap3_desc: "Private / on-prem deployment, with install, configuration, and go-live handled by our team.",
      cap4_title: "Extended capabilities",
      cap4_desc: "AI diagnosis, self-healing, and LLM operations are extended capabilities, available when a project needs them.",
      proc_title: "For integrators and procurement",
      proc_desc: "We work through integrator referrals. The terms below are confirmed and meant for procurement review; response-time targets or other unconfirmed service terms are not listed.",
      proc_f1_label: "How we sell",
      proc_f1_value: "Through integrator referrals",
      proc_f2_label: "Deployment",
      proc_f2_value: "Private / on-prem",
      proc_f3_label: "Customers",
      proc_f3_value: "Traditional industries; transportation-sector customers so far",
      proc_f4_label: "Primary use",
      proc_f4_value: "Monitoring module",
      proc_f5_label: "Deal size",
      proc_f5_value: "Under RMB 100,000 per deal",
      proc_f6_label: "Delivery",
      proc_f6_value: "About 3 months typical, from kickoff to usable",
      proc_f7_label: "Support",
      proc_f7_value: "5×8 business-hours support, backed by our team",
      proc_f8_label: "Working hours",
      proc_f8_value: "Asia/Shanghai (UTC+8)",
      proc_note: "AI diagnosis, self-healing, and LLM operations are extended capabilities, available when a project needs them. Source code is private; a demo can be arranged.",
      shot_caption: "Screenshots are from a local demo environment; the data is fictional demo data, not from a real customer environment.",
      case_title: "Anonymous case",
      case_desc: "Only this one anonymous case is published. The customer is not named, and no unconfirmed metrics are provided.",
      case_kicker: "Transportation sector",
      case_body: "A transportation-sector customer uses the monitoring software on servers in its machine room.",
      fl_title: "Freelance remote work · yubolin",
      fl_desc: "I also take freelance remote development and implementation work, independently of the team product engagements above.",
      fl1_title: "Coding / bug fixing",
      fl1_desc: "Backend and frontend features, defect triage and fixes. Python, JS/TS, Java, PHP.",
      fl2_title: "Testing & troubleshooting",
      fl2_desc: "Software testing, production incident triage, log and monitoring analysis.",
      fl3_title: "Install / config / deploy",
      fl3_desc: "Software install, environment setup, Docker / Compose deploys and rollouts.",
      fl4_title: "Requirements & product design",
      fl4_desc: "Turn fuzzy needs into concrete specs and actionable delivery plans.",
      fl_skills_title: "Languages",
      projects_title: "Product modules",
      projects_desc:
        "Module copy comes from existing product descriptions — no invented metrics or features. Source is private; a live demo can be arranged. Screenshots are from a local demo with fictional data.",
      badge_private: "Private",
      badge_coming: "Coming soon",
      view_github: "GitHub",
      demo_note: "Private source · demo on request",
      coming_label: "Coming soon",
      contact_email_label: "Email",
      contact_title: "Partnership and procurement",
      contact_desc:
        "Integrators and procurement contacts can reach us by email with the scenario, deployment environment, and timeline. Source code is private; a demo can be arranged.",
      footer_note: "InfraPilot · private deployment · infrastructure and operations"
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
            .join("")}<p class="shot-caption">${escapeHtml(pack.shot_caption)}</p></div>`
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
      '<button type="button" class="lightbox-close" aria-label="Close">&times;</button><figure class="lightbox-figure"><img alt="" /><figcaption class="lightbox-caption"></figcaption></figure>';
    document.body.appendChild(el);

    function closeLightbox() {
      el.classList.remove("open");
      el.setAttribute("hidden", "true");
      document.body.style.overflow = "";
    }

    function openLightbox(src, alt) {
      const img = el.querySelector("img");
      const caption = el.querySelector(".lightbox-caption");
      img.src = src;
      img.alt = alt || "";
      if (caption) caption.textContent = dict[lang].shot_caption;
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
    const lbCaption = document.querySelector("#shotLightbox .lightbox-caption");
    if (lbCaption) lbCaption.textContent = pack.shot_caption;
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
