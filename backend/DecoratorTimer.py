import functools
import time

# Decorator function
def timer(func):
    # @functools.wraps(func)
    def wrapper(*args, **kwargs):
        start_time = time.perf_counter()
        print("function exec starts")
        result = func(*args, **kwargs)
        end_time = time.perf_counter()
        diff =  end_time - start_time
        print(f'execution time {diff}')
        print("function exec ends")
        return result
    return wrapper
    

# Argumente function
@timer
def get_this_done(name):
    print(f"This is argument function {name}")


get_this_done("test")