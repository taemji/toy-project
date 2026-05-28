import { ComponentExample } from "@/components/component-example";

export default function Page() {
  return (
    <main className="flex flex-col items-center">
      <h1 className="text-3xl font-semibold text-center mt-16 mb-8">
        어서 오세요, 오늘도 당신과 함께여서 정말 행복해요 ✨
      </h1>
      <ComponentExample />
    </main>
  );
}