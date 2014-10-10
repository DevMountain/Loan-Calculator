Loan-Calculator
===============

Mini Project that uses the full stack. 

##Objectives
You'll create a really simple Angular app that calculates loan payment amounts based on an interest rate retrieved from a simple API that you'll also create.

##Step 1: Set up front end

We're going to set up our front end part of this app by having express fetch files and relay them to the client. We'll also make a really basic Angular app that will calcaulate payments for a loan.

* Use express's static middleware to serve a folder of static assets.
 * Create a folder called "public"
 * Move the index.html file already in the repo to the public folder. (Your index.html already has the markup you need.)
 * Move the styles.css to the public folder.
 * In the public folder, create a "js" folder.
 * In the js folder, create the following files:
 
```
public/js/app.js
public/js/controllers/main-ctrl.js
public/js/services/bank-service.js
```

 * Create a server.js file that serves the static files found in the "public" folder. Hint: `app.use(express.static(__dirname+'/public'));`

Verify that it's working by running your script, `node server.js` and opening the page in the browser, e.g. http://localhost:8080

##Step 2: Set up back end

* In server.js, create an endpoint that responds to a GET request on the `/interest_rate` route
* The interest_rate route should return a random number between 1 and 20, with two decimal places.
* Test your endpoint using Postman to make sure it returns the interest rate in a JSON object

##Step 3: Connect front end to back end

* Write the bank-service to include a method that returns a promise http call to retrieve the interest rate from your `/interest_rate` endpoint
* Have MainCtrl make the call and store the rate as `$scope.interest_rate`
* Run your app `node server.js` and make sure the interest rate shows
* Calculate the monthly payment of a loan defined at `$scope.principal` over 4 years (48 months) with the interest rate retrieved. Store the value as `$scope.monthly_payment`. Hint: use the basic formula for calculating the total loan amount with interest:

```
A = P*r*t
//A = total amount owed after interest
//P = Principal amount
//r = interest rate
//t = time (in years)
```
