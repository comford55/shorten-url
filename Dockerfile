FROM oven/bun:latest as build
WORKDIR /usr/app
COPY package.json ./
COPY bun.lockb ./
COPY ./src ./src
RUN bun install
COPY . ./

FROM oven/bun:latest as remover
WORKDIR /usr/app
COPY --from=build /usr/app/package.json ./
COPY --from=build /usr/app/bun.lockb ./
COPY --from=build /usr/app/src ./src
RUN bun install --production

FROM oven/bun:latest
ENV DB_CONN_STRING="mongodb+srv://nattapong:URkTZ1ubEnA4xHuq@cluster0.lthhsej.mongodb.net/"
WORKDIR /usr/app
COPY --from=remover /usr/app ./
USER 1000
EXPOSE 3000
CMD ["bun", "run", "start"]
