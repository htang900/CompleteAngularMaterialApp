-- Complete Angular Material Tutorial - CRUD Form Design
https://www.youtube.com/watch?v=ZGWOc37kQkw&list=PLjC4UKOOcfDRR7NJB7xDVkzdVx1xI6LSi
-- Build an App using Angular Material (Tutorial)
https://www.youtube.com/watch?v=gOSdZJ7gpOc

Step to create the App:

C:\Angular6>ng new CompleteAngularMaterialApp

C:\Angular6>cd CompleteAngularMaterialApp

C:\Angular6\CompleteAngularMaterialApp>code .

C:\Angular6\CompleteAngularMaterialApp>npm i --s @angular/material @angular/cdk @angular/animations

Setup styles sheet: (deeppurple-amber.css, indigo-pink.css, pink-bluegrey.css, purple-green.css)
If you're using Angular CLI, this is as simple as including one line in your styles.css file:
@import '@angular/material/prebuilt-themes/indigo-pink.css';

Setup Material Icons:
If you want to use the mat-icon component with the official Material Design Icons, load the icon font in your index.html.
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

Create components:
C:\Angular6\CompleteAngularMaterialApp>ng g c employees
C:\Angular6\CompleteAngularMaterialApp>ng g c employees/employee
C:\Angular6\CompleteAngularMaterialApp>ng g s shared/employee

To build the app & run:
C:\Angular6\CompleteAngularMaterialApp>ng serve --o

Add new module for Material. A separate import modules file for Material:
C:\Angular6\CompleteAngularMaterialApp>ng g m material



npm i --save hammerjs


--Part 2: Angular Material - Firebase CRUD Operations
https://www.youtube.com/watch?v=hfhlzY3U27M&index=2&list=PLjC4UKOOcfDRR7NJB7xDVkzdVx1xI6LSi

https://console.firebase.google.com

npm i --save firebase angularfire2

ng g s shared/department

ng g s shared/notification 


--Part 3: Angular Material Data Table - Paging, Sorting and Filter Operation
https://www.youtube.com/watch?v=7wilnsiotqM&index=3&list=PLjC4UKOOcfDRR7NJB7xDVkzdVx1xI6LSi

C:\Angular6\CompleteAngularMaterialApp>ng g c employees/employee-list

--list row data in jason 
    <ng-container matColumnDef="fullName">
      <mat-header-cell *matHeaderCellDef>Full Name</mat-header-cell>
      <mat-cell *matCellDef="let element">{{element|json}}</mat-cell>
    </ng-container>

C:\Angular6\CompleteAngularMaterialApp>npm i --s lodash


--Part 4: Angular Material Popup Dialog & Model
https://www.youtube.com/watch?v=ZL0d3M3uoRQ&index=4&list=PLjC4UKOOcfDRR7NJB7xDVkzdVx1xI6LSi


--Part 5: Angular Material Confirm Dialog
https://www.youtube.com/watch?v=L7mrAYsh0-0&list=PLjC4UKOOcfDRR7NJB7xDVkzdVx1xI6LSi&index=5

-- new generate component
C:\Angular6\CompleteAngularMaterialApp>ng g c mat-confirm-dialog

-- generate service
C:\Angular6\CompleteAngularMaterialApp>ng g s shared/dialog




--Learn Material Design in Angular Step by Step for 2 hours - Full Course
https://www.youtube.com/channel/UCWP7VioUk4Y01qI9dyKzzHg

--install angular cli 6.1.2
npm install -g @angular/cli@6.1.2
--new angular project
ng new material  or ng new material-date
--open vsc
cd material
code .
--install angular material
npm install --save @angular/material @angular/cdk @angular/animations

-- start compile and debug by open a terminal
ng serve --o

C:\Angular6\material-date>ng generate module orders --routing
C:\Angular6\material-date>ng generate module customers --routing
C:\Angular6\material-date>ng generate module messages --routing

C:\Angular6\material-date>ng generate component customers/customer-list
C:\Angular6\material-date>ng generate component orders/order-list
C:\Angular6\material-date>ng generate component messages/message-list









-- Learn Material Design in Angular. Date picker
https://www.youtube.com/watch?v=ZVOc7bv6iO0

C:\Angular6>ng new material-date

C:\Angular6>cd material-date

C:\Angular6\material-date>code .

-- install Moment.js library 
C:\Angular6\material-date>npm install --save moment

-- install material moment adapter to use moment.js
C:\Angular6\material-date>npm install --save @angular/material-moment-adapter

-- create a new component

