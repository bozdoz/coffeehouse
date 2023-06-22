FROM node:20.3-alpine3.18

WORKDIR /app

COPY --chown=node:node /src/package*.json ./

RUN npm ci --no-progress --no-audit

USER node

COPY --chown=node:node /src/ .

# `npm run build` needs this environment variable
ARG MONGODB_URI
ENV MONGODB_URI=${MONGODB_URI}

RUN npm run build

EXPOSE 3000

ENV NEXT_TELEMETRY_DISABLED 1

CMD ["npm", "start"]
