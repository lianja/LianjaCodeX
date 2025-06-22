# LianjaCodeX

Lianja Codex (Code Exchange) is a repo for sharing libraries and code with other Lianja developers.

The code can be written in LianjaScript or Python.

## LianjaScript Code

Code should be written as Dynamically loadable modules. 

These provide Object Oriented encapsulation for LianjaScript code so that loading a library does not "pollute" the namespace and create potential problems due to name clashes.

Use the require() function to dynamically load a library and reference its public variables and procedures/functions in an OO manner: object.property, object.method().

The filename specified as the argument to the require() function must exist in the Lianja path or be prefixed with a special prefix e.g. lib:/ or thirdpartylibs:/

e.g.

<pre><code>
// mylibrary.prg
public myvar = 10
proc helloworld()
  ? "Hello World"
endproc
// end of mylibrary.prg
 
// myprog.prg
local mylib = require("mylibrary.prg")
? mylib
? mylib.myvar
mylib.helloworld()
// end of myprog.prg
 
myprog()
 
// Output
Dynarray (refcnt=2)
(
    [helloworld] => Procedure()
    [myvar] => 10
)
        10
Hello World
</code></pre>


