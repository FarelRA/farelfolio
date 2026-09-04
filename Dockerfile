FROM oven/bun:1-alpine AS build
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

FROM joseluisq/static-web-server:2
COPY --from=build /app/dist /public/
EXPOSE 8080
