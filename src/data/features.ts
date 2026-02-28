export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: '🌐',
    title: '多頻道閘道器',
    description: '透過單一 Gateway 程序同時連接 WhatsApp、Telegram、Discord 和 iMessage。',
  },
  {
    icon: '🔌',
    title: '外掛頻道',
    description: '使用擴展套件新增 Mattermost 等更多頻道支援。',
  },
  {
    icon: '🤖',
    title: '多代理路由',
    description: '為每個代理、工作區或傳送者建立隔離的會話。',
  },
  {
    icon: '📸',
    title: '媒體支援',
    description: '傳送和接收圖片、音訊和文件。',
  },
  {
    icon: '🖥️',
    title: 'Web 控制介面',
    description: '瀏覽器儀表板，用於聊天、設定、會話和節點管理。',
  },
  {
    icon: '📱',
    title: '行動節點',
    description: '配對 iOS 和 Android 節點，支援 Canvas。',
  },
];
