export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: '🏠',
    title: '完全本機運行',
    description: '所有資料留在你的裝置上，不需要雲端服務。隱私、安全、完全掌控。',
  },
  {
    icon: '💬',
    title: '多頻道整合',
    description: '支援 LINE、WhatsApp、Telegram、Discord、Signal 等主流聊天 App。',
  },
  {
    icon: '🤖',
    title: '多 AI 模型支援',
    description: '支援 OpenAI、Anthropic、Google Gemini 等多種大型語言模型。',
  },
  {
    icon: '🔌',
    title: '外掛系統',
    description: '透過外掛擴充功能，打造專屬於你的 AI 助理工作流程。',
  },
  {
    icon: '🧠',
    title: '記憶與上下文',
    description: '智慧記憶管理，讓 AI 助理記住你的偏好與對話歷史。',
  },
  {
    icon: '🛡️',
    title: '安全設計',
    description: '內建安全機制，控制 AI 的行為邊界與資料存取權限。',
  },
];
