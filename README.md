#.Update:
1. merg the coding to one component for reuse.
2. use http call insted of hard code to fetch mock data.
(for your test case, you need import http service dependency in the app.module.ts  like : 
I. import { HttpClientModule } from '@angular/common/http';
II. imports: [
    HttpClientModule,
  ],
)
3. remove redundant coding.

#. Notice: 
1. The original data you provide to me is webp image. But safari can not support webp image format, that is why the application has problem in the safari browser. If we use jpg or png instead of the webp image, then it will run well on safari.

2. I modified the file  ./src/karma.conf.js to karma.conf.jss because it can not pass Gmail checking.
   (It does not affect the operation)
   
`**_By the following steps, you can run the assignment:_**`

#. install node.js the version 8.11.1 

#. unzip the Netflix.zip

#. go into the unzipped file direction (NetFlix-master)

#. run terminal and input command:   npm install

#. after the 4 step finished, then input command: ng serve. wait for it until the program compile success

#. open browser and input address:  http://localhost:4200/, then you can see the UI.

