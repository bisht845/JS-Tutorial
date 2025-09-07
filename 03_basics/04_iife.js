// Immediately Invoked Function Expression (IIFE) = > An IIFE is a function that runs immediately after it is defined.
// It doesn’t need to be called later, it executes instantly.
// * To avoid polluting global scope (create private variables).
// * Wrapped inside function with parenthesis () → makes it an expression.
// * Ending with parenthesis () → immediately invokes the function. 
// * “Each IIFE is a complete sentence → end it with a semicolon before starting the next.”
// * Always end the first IIFE with a semicolon ; Without it, 
//  JavaScript may think the second IIFE is part of the first one.


(function chai(){
    // named IIFE
    console.log("DB Connected");
})();  // Always end the first IIFE with a semicolon ;

(function (){
    // most common(basic way)
    console.log("Hello User");
    
})();    

( () => {
    // unnamed IIFE
    console.log(`DB connected Two`);
    
} )();

( (name) => {
    // This way to pass perameters with IIFE
    console.log(`DB connected Two ${name}`);
    
} )("saurav")



