FROM fusuf/whatsasena:latest

RUN git clone https://github.com/MR-NIMA-X/Railway-test /skl/Railway-test
WORKDIR /skl/Railway-test
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN yarn install --ignore-engines
CMD ["node", "index.js"]
