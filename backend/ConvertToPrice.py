
def valid_prices(price_list):
    number_price_lists = []
    for price in price_list:
        try:
            clean_price = int(price)
            number_price_lists.append(clean_price)
        except (ValueError, TypeError) as e:
            print(f'Error: {e}')
            continue

    # print(len('1,3,2,5'), "stringlen")
    return ','.join(str(nums) for nums in number_price_lists)
    
result = valid_prices(["10", "20", "70", "free", 100])
print(result)


print("hello".find("e"))




# def get_valid_prices(price_list):
#     number_price_lists = []
#     try:
#         number_price_lists = [int(price) for price in price_list if isinstance(int(price), int)]        
#     except Exception as e:
#         raise ValueError(f"This is an error {e}")

#     return number_price_lists
    
# result = get_valid_prices(["10", "20", "free", "30"])
# print(result)