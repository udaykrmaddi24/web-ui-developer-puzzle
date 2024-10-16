# Code Review 

* Instead of normal subscription, we can use async pipe which will unsubscribe the subscription - Fixed
* Instead of using formattedDate method we can use inbuilt date pipe - Fixed
* It's good to use trackBy for *ngFor to reduce the DOM iterations
* Instead of string interpolation for img src attribute, we can use property binding

# Lighthouse Accessability Issues:

* Buttons do not have an accessible name - Fixed

* Image elements do not have [alt] attributes - Fixed

* Background and foreground colors do not have a sufficient contrast ratio - Fixed

# Accessability Issues Identified:

* Missing ARIA Attributes - Fixed
* Buttons not having tooltips - Fixed