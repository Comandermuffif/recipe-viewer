FROM oven/bun:1 AS build
WORKDIR /usr/src/app

# Install depdencies
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

# Build
COPY . .
RUN bun run build

FROM nginx
COPY --from=build /usr/src/app/dist /usr/share/nginx/html