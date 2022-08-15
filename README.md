<h2>This repo is on a path to being archived, checkout our other resources in github.com/paypal</h2>

# Using the Braintree Client SDK for Android

This is an example of the Braintree v.zero Client SDK for processing both PayPal and credit card payments in Android applications. It comes with a minimal backened example written in Node.js that shows how to generate client tokens and how to process the payment method nonce.
## Technology

This demo uses

* Android 4.3 and above
* The [Asynchronous HTTP Library](http://github.com/loopj/android-async-http)
* The [Braintree Client SDK for Android](http://github.com/braintree/braintree_android) 2.0.0
* [Gradle Plugin](http://tools.android.com/tech-docs/new-build-system/migrating-to-1-0-0) 1.2.3 or
  newer
* [Android Studio](https://developer.android.com/sdk/installing/studio.html) 1.2 or newer

The sample backend is written in Node.js and uses:

* Node 0.10.26 or higher
* The [Express](http://expressjs.com/) web framework
* The [Braintree Node SDK](http://www.braintreepayments.com/docs/node/)
* [ngrok](http://ngrok.com) as tunnel for your localhost
	* This makes development easier since you can deploy your app to your localhost and still access it on other machines.

## Running the demo (Phone / Emulator)

* Import the project into your Android Studio IDE
* Let Gradle synchronize all dependencies
* Change the `SERVER_BASE` url to your server's url
* Build the app and deploy it to your emulator / phone
* Once the app started it will try to get the client token from your backend
* Click on `Start SDK`
* Select your payment method:
	* (PayPal) Fill in the following credentials:
		* Email: `us-customer@commercefactory.org`
		* Password: `test1234`
	* (Credit Card) Fill in the following credentials:
  		* Amount: `100.00`
		* Number: `4111 1111 1111 1111`
  		* CVV: `123`
  		* Expiration date: `11/2020`
* Click on `Pay - $10.00`
* You will receive a message that says __"Payment done"__

## Running the demo (Backend)

* Run `npm install` to install all dependencies
* Run `npm start` to start the app
* Use ngrok to create a tunnel for your localhost
	* __IMPORTANT:__ Make sure to edit `SERVER_BASE` in the `SDKActivity` of the Android app
	
## Live demo

A live demo can be found [here](http://11.commercefactory.org/). Please make sure to follow the instructions in order to download and install the Android apk file accordingly.

## Useful links

* [The Braintree Client SDK for Android](https://developers.braintreepayments.com/android+node/sdk/overview/how-it-works) - full documentation of the SDK
