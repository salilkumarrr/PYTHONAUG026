# modules in python 
# single py file

#create a module mymodule.py file

# use module file

# import mymodule

# mymodule.say_hello('salil')
# mymodule.say_bye('sameer')


# import specific part of code
from mymodule import person1

print(person1['age'])

# pacckage = collection of modules / .py files + __init__.py files

# library : collection of packages or modules is known as library

#in-build

import math
A = 49
print(math.sqrt(A))

# import specific functon from library

from math import factorial

B = 4
print(math.factorial(B))

# install new modules / library

# pip install <library_name>
