from collections.abc import Iterable
# 1. Square of each number from 0 to 10
square = [i**2 for i in range(10)]
print("square => ",square)

# 2. Filter even numbers from a list
list = [2,5,4,8,12,7,19,16,30,14,17]
even_number = [i for i in list if i%2 == 0]
print("even_number => ", even_number)

# 3. convert strins to uppercase from an string list
string_list = ["tom", "dick", "harry"]
# upper_case_list = [c.upper() for c in [ch for ch in string_list]]
upper_case_list = [ch.upper() for ch in [element for element in string_list] ]
print("upper_case_list => ",upper_case_list)

# 4. flatten a list of lists
nested_list = [[1,2,3], 7,8, [5,3],10]
flattened_list = [item for elelment in nested_list for item in (elelment if isinstance(elelment, Iterable) else [elelment])]
print("flattened_list => ", flattened_list)

# 5. return tuple with number and its square. eg: (3,3**3)
tuple_int_with_sqare = [(i, i**2) for i in range(1,11)]
print("tuple_int_with_sqare => ", tuple_int_with_sqare)

string1 = "this is a demo"
vowels = [char for char in string1 if char in ['a', 'e','i','o','u']]
print("vowels in String => ", vowels)
