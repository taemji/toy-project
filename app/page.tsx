import { ComponentExample } from "@/components/component-example";

export default function Page() {
  return (
    <main className="flex flex-col items-center">
      <h1 className="text-3xl font-semibold text-center mt-16 mb-8">
        오늘도 반갑습니다, 함께해서 기뻐요 :)
      </h1>
      <ComponentExample />
    </main>
  );
}