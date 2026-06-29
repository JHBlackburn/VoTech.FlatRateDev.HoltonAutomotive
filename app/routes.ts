import { index, route, type RouteConfig } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("download-contact.vcf", "routes/download-contact.vcf.ts"),
] satisfies RouteConfig;
