FROM node:8.4.0

RUN useradd -ms /bin/false app

ENV WORK=/home/app
COPY . $WORK
WORKDIR $WORK

RUN npm install && \
    npm cache clean --force

EXPOSE 3000

USER app
CMD ["node", "index.js"]
