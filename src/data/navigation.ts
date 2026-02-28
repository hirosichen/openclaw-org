export interface NavItem {
  label: string;
  slug: string;
}

export interface NavSection {
  label: string;
  items: NavItem[];
}

export const docsNavigation: NavSection[] = [
  {
    label: '快速入門',
    items: [
      { label: '安裝', slug: 'getting-started/installation' },
      { label: '設定', slug: 'getting-started/configuration' },
      { label: '第一次對話', slug: 'getting-started/first-conversation' },
      { label: '下一步', slug: 'getting-started/next-steps' },
    ],
  },
  {
    label: '核心概念',
    items: [
      { label: '架構概覽', slug: 'concepts/architecture' },
      { label: '代理系統', slug: 'concepts/agents' },
      { label: '記憶管理', slug: 'concepts/memory' },
      { label: '多代理協作', slug: 'concepts/multi-agent' },
      { label: '安全模型', slug: 'concepts/security' },
      { label: '外掛系統', slug: 'concepts/plugins' },
    ],
  },
  {
    label: '頻道整合',
    items: [
      { label: '頻道總覽', slug: 'channels/overview' },
      { label: 'LINE', slug: 'channels/line' },
      { label: 'Telegram', slug: 'channels/telegram' },
      { label: 'WhatsApp', slug: 'channels/whatsapp' },
      { label: 'Discord', slug: 'channels/discord' },
      { label: 'Signal', slug: 'channels/signal' },
      { label: 'Slack', slug: 'channels/slack' },
      { label: 'Messenger', slug: 'channels/messenger' },
    ],
  },
  {
    label: '閘道器',
    items: [
      { label: '閘道器設定', slug: 'gateway/setup' },
      { label: '遠端存取', slug: 'gateway/remote-access' },
      { label: '安全設定', slug: 'gateway/security' },
      { label: '疑難排解', slug: 'gateway/troubleshooting' },
    ],
  },
  {
    label: '平台指南',
    items: [
      { label: 'macOS', slug: 'platforms/macos' },
      { label: 'Linux', slug: 'platforms/linux' },
      { label: 'Windows', slug: 'platforms/windows' },
      { label: 'iOS', slug: 'platforms/ios' },
      { label: 'Android', slug: 'platforms/android' },
    ],
  },
  {
    label: '幫助',
    items: [
      { label: '常見問題', slug: 'help/faq' },
      { label: '疑難排解', slug: 'help/troubleshooting' },
    ],
  },
];
