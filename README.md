# codecept
Introduction
This project demonstrates how to use CodeceptJS with REST helper.

Installation
cd codecept
npm i

How to trigger API tests & generate report
npx codeceptjs run --reporter mochawesome

Reports path
\codecept\mochawesome-report

Example output

  GET tests
    ✔ TC01 - Verify to get transactions using GET protocol (1838ms)
    ✔ TC02 - Verify total number of transactions (1428ms)
    ✔ TC03 - Verify response payload properties of a transaction (1180ms)

  POST tests
    ✔ TC04 - Verify to create or update a transaction using POST protocol (1164ms)
    ✔ TC05 - Verify response headers in POST protocol (1145ms)

  PUT tests
    ✔ TC06 - Verify to update a resource using PUT protocol (1215ms)
    ✔ TC07 - Verify whether resouce is actually updated (1302ms)
    ✔ TC08 - Verify the response headers in PUT protocol (1149ms)


  8 passing (17s)
  ![image](https://user-images.githubusercontent.com/76648264/152215742-76191aa4-3e96-48c4-a831-19ab1fa9ac2a.png)

