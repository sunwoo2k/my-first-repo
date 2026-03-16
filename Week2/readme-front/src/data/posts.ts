export interface Post {
  id: number;
  title: string;
  desc: string;
  content: string;
}

export const posts: Post[] = [
  {
    id: 1,
    title: "첫 번째 글",
    desc: "Next.js를 시작했습니다.",
    content: "Next.js는 React 기반의 풀스택 프레임워크입니다. 서버 컴포넌트, 파일 기반 라우팅 등 다양한 기능을 제공합니다.",
  },
  {
    id: 2,
    title: "두 번째 글",
    desc: "Tailwind CSS로 스타일링하기",
    content: "Tailwind CSS는 유틸리티 클래스 기반의 CSS 프레임워크입니다. 클래스 이름만으로 빠르게 스타일링할 수 있습니다.",
  },
  {
    id: 3,
    title: "세 번째 글",
    desc: "컴포넌트를 만들어봅시다",
    content: "React 컴포넌트는 UI를 재사용 가능한 조각으로 나눈 것입니다. props로 데이터를 전달하고 조합할 수 있습니다.",
  },
];