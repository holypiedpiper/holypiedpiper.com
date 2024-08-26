import { HppHome } from "src/layout/HppHome";

export function generateStaticParams() {
  return [{ slug: [""] }];
}

export default function Page() {
  return <HppHome />;
}
