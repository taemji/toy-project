import { ComponentExample } from "@/components/component-example";

export default function Page() {
  return (
    <main>
      <section className="flex flex-col items-center justify-center px-6 py-20 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          함께 만드는 더 나은 개발 경험
        </h1>
        <p className="mt-4 max-w-xl text-lg text-muted-foreground">
          Claude Code와 스펙 주도 개발(SDD)로 아이디어를 빠르게 현실로 만드는
          시작점에 오신 걸 환영합니다. 함께라면 더 즐겁고 단단한 코드를 만들 수
          있어요.
        </p>
      </section>
      <ComponentExample />
    </main>
  );
}