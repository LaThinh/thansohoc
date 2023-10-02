import { INumerologyIndex, IndexType } from "@/app/interfaces";

export const components: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export const NumerologyIndex: INumerologyIndex[] = [
  {
    id: "1",
    name: "path-of-line",
    title_vn: "Đường đời",
    title_en: "Path of line",
    type: IndexType.Main,
    description:
      "Con Số Đường Đời là chỉ số được tính từ ngày sinh đầy đủ của bạn và được gọi là Con Số Life Path. Đây là một trong những con số cốt yếu của Thần Số Học. \n Con Số Đường Đời mô tả những tính chất vốn dĩ tự nhiên ở bạn cũng như những tính chất ẩn sâu bên trong con người bạn. \n Nó tiết lộ cho bạn biết bạn là ai ngay thời điểm vừa mới chào đời cũng như những đặc điểm mà bạn sẽ mang theo trong suốt hành trình cuộc đời của mình.",
  },
  {
    id: "2",
    name: "natural-ability",
    title_vn: "Năng lực tự nhiên",
    title_en: "Natural ability",
    type: IndexType.Main,
    description: "Chỉ số Năng Lực Tự Nhiên",
  },
  {
    id: "3",
    name: "attitude",
    title_vn: "Thái độ",
    title_en: "Attitude",
    type: IndexType.Main,
    description: "Chỉ số Thái Độ",
  },

  {
    id: "4",
    name: "mission",
    title_vn: "Sứ mệnh",
    title_en: "Mission",
    type: IndexType.Main,
    description: "Chỉ số sứ mệnh",
  },
  {
    id: "5",
    name: "soul",
    title_vn: "Linh hồn",
    title_en: "Soul",
    type: IndexType.Main,
    description: "Chỉ số Linh Hồn",
  },
  {
    id: "6",
    name: "personality",
    title_vn: "Nhân cách",
    title_en: "personality",
    type: IndexType.Main,
    description: "Chỉ số Nhân Cách",
  },

  // Secondary Index

  {
    id: "7",
    name: "mission-challenges",
    title_vn: "Thử thách Sứ mệnh",
    title_en: "Mission challenges",
    type: IndexType.Secondary,
    description: "Chỉ số Thử thách sứ mệnh",
  },

  {
    id: "8",
    name: "test-your-soul",
    title_vn: "Thử thách Linh hồn",
    title_en: "Test your soul",
    description: "Chỉ số Thử thách Linh hồn",
    type: IndexType.Secondary,
  },
  {
    id: "9",
    name: "personality-test",
    title_vn: "Thử thách Nhân cách",
    title_en: "Personality test",
    description: "Chỉ số Thử thách Nhân cách",
    type: IndexType.Secondary,
  },
  {
    id: "10",
    name: "mature",
    title_vn: "Trưởng thành",
    title_en: "Mature",
    description: "Chỉ số Trưởng thành",
    type: IndexType.Secondary,
  },
  {
    id: "11",
    name: "mature-capacity",
    title_vn: "Năng lực Trưởng thành",
    title_en: "Mature capacity",
    description: "Chỉ số Năng Lực Trưởng thành",
    type: IndexType.Secondary,
  },
  {
    id: "12",
    name: "thinking-capacity",
    title_vn: "Năng Lực Tư duy",
    title_en: "Thinking capacity",
    description: "Chỉ số Năng Lực Tư Duy",
    type: IndexType.Secondary,
  },

  {
    id: "13",
    name: "overcome-difficulties",
    title_vn: "Năng Lực Vượt Khó",
    title_en: "Ability to overcome difficulties",
    description: "Chỉ số Năng lực Vượt khó",
    type: IndexType.Secondary,
  },

  // Other Index
  {
    id: "14",
    name: "accessibility-capacity",
    title_vn: "Năng Lực Tiếp cận",
    title_en: "Accessibility capacity",
    description: "Chỉ số Năng lực Tiếp cận",
    type: IndexType.Other,
  },
  {
    id: "15",
    name: "approach-attitude",
    title_vn: "Thái độ Tiếp cận",
    title_en: "Approach attitude",
    description: "Chỉ số Thái Độ Tiếp Cận",
    type: IndexType.Other,
  },
  {
    id: "16",
    name: "approach-motivation",
    title_vn: "Động lực tiếp cận",
    title_en: "Approach motivation",
    description: "Chỉ số Động Lực Tiếp Cận",
    type: IndexType.Other,
  },
];
