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

## Python Code

You should write your Python code as a module.

e.g.

<pre><code>
# my_module.py

import math

PI = 3.14159

def area_of_circle(radius):
    return PI * radius ** 2

class Greeter:
    def __init__(self, name):
        self.name = name

    def say_hello(self):
        return f"Hello, {self.name}!"

</code></pre>

You can then load it with importlib.util like this:

<pre><code>
import importlib.util
import sys

# Path to your Python file
file_path = '/path/to/your_module.py'
module_name = 'your_module'  # Name to assign to the loaded module

# Load the module
spec = importlib.util.spec_from_file_location(module_name, file_path)
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)

# Now you can use it like any regular module
module.some_function()
print(module.some_variable)
</code></pre>
