FROM cypress/browsers:latest

WORKDIR /e2e

COPY ./package.json .
COPY ./cypress.config.ts .
COPY ./cypress ./cypress

RUN npm install &&\
    npx cypress info

ENTRYPOINT ["npx", "cypress", "run","--browser","chrome"]