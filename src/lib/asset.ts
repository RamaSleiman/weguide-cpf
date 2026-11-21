// Prefix public files with the deploy base path (e.g. /weguide-cpf on GitHub Pages).
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
