FROM node:20.3-alpine3.18

WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED 1

# `npm run build` needs this environment variable
ARG MONGODB_URI
ENV MONGODB_URI=${MONGODB_URI}

COPY --chown=node:node /src/package*.json ./

RUN npm ci --no-progress --no-audit

COPY --chown=node:node /src/ .

RUN npm run build && \
  chown -R node:node /app

# add user so we don't run as root
USER node

EXPOSE 3000

CMD ["npm", "start"]
