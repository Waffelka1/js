import re
result = re.findall(r'-?\d+(?:\.\d+)?\s*([-+*/])\s*(-?\d+(?:\.\d+)?)', '3+2')
print(result)