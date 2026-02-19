# dogebork-js
A less annoying JS library.

***

**Clone**

1. Clone the repository to your local machine or press the *green code* button.

   ```bash
   git clone https://github.com/doggodgcodes/dogebork-js.git
   cd dogebork-js
   ```
   ![Repo Image](https://doggodgcodes.github.io/assets/github-download-tutorial.jpg)

***

**Quick Info***
This JavaScript library consists of mostly function shorteners, so if that is not helpful towards your project, don't use this.

**RELEASES**
v4.0
- New
  - Graphics Context
    - The graphics context is gone due to the canvas variable not existing. Having a canvas ID be specified by your library to always use does not provide enough naming freedom for a JavaScript ID.
  - RNG
    - Add mult argument to better fix between arrays and general numbers
      ```javascript
      rng(1, 10, myArray.length)
      ```
  - Add Element
    - ```javascript
      addElem()
      ```
      Works like
      ```javascript
      document.createElement()
      ```
      But shorter.
v3.0
- New
  - RNG
    - Uses safer alternative, older version is LCG
      ```javascript
      rng()
      ```
  - LCG
    - The previous
      ```javascript
      lcg()
      ```
      changed to
      ```javascript
      lcg()
      ```
v2.0
- New
  - OS Time
    - ```javascript
      ostime()
      ```
      Fetch the time.
  - RNG
    - ```javascript
      rng()
      ```
      Works like
      ```javascript
      Math.random()
      ```
      But it does not return float values.

v1.0
- Basic Features
  - Fetch ID
    - ```javascript
      fetchId()
      ```
      is meant to be a better version of
      ```javascript
      document.getElementById()
      ```
      because we should not have it be too long to type out.
    - Includes report system that logs if it was found or not
    - 
  - Fetch ID (Reusable IDs)
    - ```javascript
      fetchIdAll()
      ```
      is meant to be a better version of
      ```javascript
      document.querySelectorAll()
      ```
      because we should not have it be too long to type out.
    - Includes report system that logs if it was found or not.
    - You can reuse IDs.
  - Print
    - ```javascript
      print()
      ```
      is meant to be a better version of
      ```javascript
      console.log()
      ```
      because what is this.
  - Warn
    - ```javascript
      warn()
      ```
      is meant to be a better version of
      ```javascript
      console.warn()
      ```
      because it should be shorter.
These 4 mechanics have same functionality as their counterparts
  - Variables
    - ctx
    - gl
    - gl2
    - gameGl
    - gameGl2
    - uiGl
    - uiGl2
