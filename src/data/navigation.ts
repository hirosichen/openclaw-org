export interface NavItem {
  label: string;
  slug: string;
}

export interface NavSection {
  label: string;
  items: NavItem[];
}

// Top-level navigation tabs (matching official docs)
export interface TopNavItem {
  label: string;
  href: string;
  sectionKey: string;
}

export const topNavigation: TopNavItem[] = [
  { label: '開始使用', href: '/docs/start/getting-started', sectionKey: 'start' },
  { label: '安裝', href: '/docs/install', sectionKey: 'install' },
  { label: '頻道', href: '/docs/channels', sectionKey: 'channels' },
  { label: '代理', href: '/docs/concepts/architecture', sectionKey: 'concepts' },
  { label: '工具', href: '/docs/tools', sectionKey: 'tools' },
  { label: '模型', href: '/docs/providers', sectionKey: 'providers' },
  { label: '平台', href: '/docs/platforms', sectionKey: 'platforms' },
  { label: '閘道器與運維', href: '/docs/gateway', sectionKey: 'gateway' },
  { label: '參考', href: '/docs/cli', sectionKey: 'reference' },
  { label: '幫助', href: '/docs/help', sectionKey: 'help' },
];

export const docsNavigation: NavSection[] = [
  // === Get Started ===
  {
    label: '首頁',
    items: [
      { label: 'OpenClaw', slug: 'start/openclaw' },
    ],
  },
  {
    label: '總覽',
    items: [
      { label: '功能展示', slug: 'start/showcase' },
    ],
  },
  {
    label: '核心概念',
    items: [
      { label: '功能特色', slug: 'concepts/features' },
    ],
  },
  {
    label: '第一步',
    items: [
      { label: '快速入門', slug: 'start/getting-started' },
      { label: '新手引導總覽', slug: 'start/onboarding-overview' },
      { label: '新手引導：CLI', slug: 'start/wizard' },
      { label: '新手引導：macOS App', slug: 'start/onboarding' },
    ],
  },
  {
    label: '指南',
    items: [
      { label: '個人助理設定', slug: 'start/setup' },
    ],
  },

  // === Install ===
  {
    label: '安裝總覽',
    items: [
      { label: '安裝', slug: 'install/install' },
      { label: '安裝器內部機制', slug: 'install/installer' },
    ],
  },
  {
    label: '其他安裝方式',
    items: [
      { label: 'Docker', slug: 'install/docker' },
      { label: 'Podman', slug: 'install/podman' },
      { label: 'Nix', slug: 'install/nix' },
      { label: 'Ansible', slug: 'install/ansible' },
      { label: 'Bun（實驗性）', slug: 'install/bun' },
    ],
  },
  {
    label: '維護',
    items: [
      { label: '更新', slug: 'install/updating' },
      { label: '遷移指南', slug: 'install/migrating' },
      { label: '解除安裝', slug: 'install/uninstall' },
    ],
  },
  {
    label: '託管與部署',
    items: [
      { label: 'Fly.io', slug: 'install/fly' },
      { label: 'Hetzner', slug: 'install/hetzner' },
      { label: 'GCP', slug: 'install/gcp' },
      { label: 'macOS 虛擬機', slug: 'install/macos-vm' },
      { label: 'exe.dev', slug: 'install/exe-dev' },
      { label: 'Railway 部署', slug: 'install/railway' },
      { label: 'Render 部署', slug: 'install/render' },
      { label: 'Northflank 部署', slug: 'install/northflank' },
    ],
  },

  // === Channels ===
  {
    label: '頻道總覽',
    items: [
      { label: '頻道', slug: 'channels/channels' },
      { label: '配對', slug: 'channels/pairing' },
      { label: '頻道路由', slug: 'channels/channel-routing' },
    ],
  },
  {
    label: '聊天頻道',
    items: [
      { label: 'WhatsApp', slug: 'channels/whatsapp' },
      { label: 'Telegram', slug: 'channels/telegram' },
      { label: 'Discord', slug: 'channels/discord' },
      { label: 'iMessage', slug: 'channels/imessage' },
      { label: 'LINE', slug: 'channels/line' },
      { label: 'Signal', slug: 'channels/signal' },
      { label: 'Slack', slug: 'channels/slack' },
      { label: 'Matrix', slug: 'channels/matrix' },
      { label: 'Mattermost', slug: 'channels/mattermost' },
      { label: 'Microsoft Teams', slug: 'channels/msteams' },
      { label: 'Google Chat', slug: 'channels/googlechat' },
      { label: '飛書', slug: 'channels/feishu' },
      { label: 'IRC', slug: 'channels/irc' },
      { label: 'Nostr', slug: 'channels/nostr' },
      { label: 'Twitch', slug: 'channels/twitch' },
      { label: 'Zalo', slug: 'channels/zalo' },
      { label: 'BlueBubbles', slug: 'channels/bluebubbles' },
    ],
  },
  {
    label: '群組訊息',
    items: [
      { label: '群組', slug: 'channels/groups' },
      { label: '群組訊息', slug: 'channels/group-messages' },
      { label: '廣播群組', slug: 'channels/broadcast-groups' },
    ],
  },
  {
    label: '頻道疑難排解',
    items: [
      { label: '疑難排解', slug: 'channels/troubleshooting' },
    ],
  },

  // === Concepts / Agents ===
  {
    label: '架構',
    items: [
      { label: '架構', slug: 'concepts/architecture' },
      { label: '代理', slug: 'concepts/agent' },
      { label: '代理迴圈', slug: 'concepts/agent-loop' },
      { label: '代理工作區', slug: 'concepts/agent-workspace' },
    ],
  },
  {
    label: '會話',
    items: [
      { label: '會話', slug: 'concepts/sessions' },
      { label: '會話管理', slug: 'concepts/session' },
      { label: '會話修剪', slug: 'concepts/session-pruning' },
      { label: '會話壓縮', slug: 'concepts/compaction' },
    ],
  },
  {
    label: '訊息與模型',
    items: [
      { label: '訊息', slug: 'concepts/messages' },
      { label: '模型', slug: 'concepts/models' },
      { label: '模型提供者', slug: 'concepts/model-providers' },
      { label: '模型容錯', slug: 'concepts/model-failover' },
      { label: '串流', slug: 'concepts/streaming' },
    ],
  },
  {
    label: '進階概念',
    items: [
      { label: '記憶', slug: 'concepts/memory' },
      { label: '多代理', slug: 'concepts/multi-agent' },
      { label: '系統提示', slug: 'concepts/system-prompt' },
      { label: '上下文', slug: 'concepts/context' },
      { label: '佇列', slug: 'concepts/queue' },
      { label: '在線狀態', slug: 'concepts/presence' },
      { label: '打字指示器', slug: 'concepts/typing-indicators' },
      { label: '使用量追蹤', slug: 'concepts/usage-tracking' },
    ],
  },

  // === Tools ===
  {
    label: '工具總覽',
    items: [
      { label: '工具', slug: 'tools/tools' },
      { label: '子代理', slug: 'tools/subagents' },
      { label: '技能', slug: 'tools/skills' },
      { label: '斜線命令', slug: 'tools/slash-commands' },
    ],
  },
  {
    label: '內建工具',
    items: [
      { label: '瀏覽器', slug: 'tools/browser' },
      { label: '執行', slug: 'tools/exec' },
      { label: '網頁', slug: 'tools/web' },
      { label: 'LLM 任務', slug: 'tools/llm-task' },
      { label: '思考', slug: 'tools/thinking' },
      { label: '反應', slug: 'tools/reactions' },
    ],
  },
  {
    label: '外掛與擴展',
    items: [
      { label: '外掛', slug: 'tools/plugin' },
      { label: 'ClawHub', slug: 'tools/clawhub' },
      { label: '提權工具', slug: 'tools/elevated' },
    ],
  },

  // === Models / Providers ===
  {
    label: '模型提供者',
    items: [
      { label: '模型提供者', slug: 'providers/providers' },
      { label: '模型列表', slug: 'providers/models' },
    ],
  },
  {
    label: '提供者',
    items: [
      { label: 'Anthropic', slug: 'providers/anthropic' },
      { label: 'OpenAI', slug: 'providers/openai' },
      { label: 'OpenRouter', slug: 'providers/openrouter' },
      { label: 'AWS Bedrock', slug: 'providers/bedrock' },
      { label: 'LiteLLM', slug: 'providers/litellm' },
      { label: 'Mistral', slug: 'providers/mistral' },
      { label: 'Vercel AI Gateway', slug: 'providers/vercel-ai-gateway' },
      { label: 'Moonshot', slug: 'providers/moonshot' },
      { label: 'MiniMax', slug: 'providers/minimax' },
      { label: 'GLM', slug: 'providers/glm' },
      { label: '千帆', slug: 'providers/qianfan' },
      { label: 'ZAI', slug: 'providers/zai' },
    ],
  },

  // === Platforms ===
  {
    label: '平台',
    items: [
      { label: '平台總覽', slug: 'platforms/platforms' },
      { label: 'macOS', slug: 'platforms/macos' },
      { label: 'Linux', slug: 'platforms/linux' },
      { label: 'Windows', slug: 'platforms/windows' },
      { label: 'iOS', slug: 'platforms/ios' },
      { label: 'Android', slug: 'platforms/android' },
    ],
  },

  // === Gateway & Ops ===
  {
    label: '閘道器',
    items: [
      { label: '閘道器', slug: 'gateway/gateway' },
      { label: '設定', slug: 'gateway/configuration' },
      { label: '設定範例', slug: 'gateway/configuration-examples' },
      { label: '安全', slug: 'gateway/security' },
      { label: '遠端存取', slug: 'gateway/remote' },
      { label: 'Tailscale', slug: 'gateway/tailscale' },
    ],
  },
  {
    label: '運維',
    items: [
      { label: '背景程序', slug: 'gateway/background-process' },
      { label: '健康檢查', slug: 'gateway/health' },
      { label: '心跳', slug: 'gateway/heartbeat' },
      { label: '日誌', slug: 'gateway/logging' },
      { label: '沙箱', slug: 'gateway/sandboxing' },
      { label: '疑難排解', slug: 'gateway/troubleshooting' },
    ],
  },

  // === Web ===
  {
    label: 'Web 介面',
    items: [
      { label: 'Web 總覽', slug: 'web/web' },
      { label: '控制面板', slug: 'web/control-ui' },
      { label: '儀表板', slug: 'web/dashboard' },
      { label: 'TUI', slug: 'web/tui' },
      { label: '網頁聊天', slug: 'web/webchat' },
    ],
  },

  // === Nodes ===
  {
    label: '節點',
    items: [
      { label: '節點總覽', slug: 'nodes/nodes' },
      { label: '語音', slug: 'nodes/audio' },
      { label: '相機', slug: 'nodes/camera' },
      { label: '圖片', slug: 'nodes/images' },
      { label: '通話', slug: 'nodes/talk' },
    ],
  },

  // === Help ===
  {
    label: '幫助',
    items: [
      { label: '幫助', slug: 'help/help' },
      { label: '常見問題', slug: 'help/faq' },
      { label: '疑難排解', slug: 'help/troubleshooting' },
      { label: '除錯', slug: 'help/debugging' },
      { label: '環境', slug: 'help/environment' },
    ],
  },
];

// Helper: find which section a slug belongs to
export function getSectionKey(slug: string): string {
  if (slug.startsWith('start/')) return 'start';
  if (slug.startsWith('install/')) return 'install';
  if (slug.startsWith('channels/')) return 'channels';
  if (slug.startsWith('concepts/')) return 'concepts';
  if (slug.startsWith('tools/')) return 'tools';
  if (slug.startsWith('providers/')) return 'providers';
  if (slug.startsWith('platforms/')) return 'platforms';
  if (slug.startsWith('gateway/')) return 'gateway';
  if (slug.startsWith('web/')) return 'web';
  if (slug.startsWith('nodes/')) return 'nodes';
  if (slug.startsWith('automation/')) return 'automation';
  if (slug.startsWith('cli/')) return 'reference';
  if (slug.startsWith('reference/')) return 'reference';
  if (slug.startsWith('help/')) return 'help';
  if (slug.startsWith('security/')) return 'security';
  if (slug.startsWith('plugins/')) return 'plugins';
  return 'start';
}
