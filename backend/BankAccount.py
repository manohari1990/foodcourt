interest_rate = 0.5

def authenticate_transaction(fn):
    def wrapper(self, amt, password, *args, **kwargs):# -> Any:
        if password == self._BankAccount__password:
            return fn(self, amt, password)
        else:
            raise Exception("Invalid password")
    return wrapper


class BankAccount:
    
    def __init__(self, owner_name, balance, password) -> None:
        self.owner_name:str = owner_name
        self._balance:int = balance
        self.__password:str = password
    
        
    def deposite(self, amount):
        self._balance +=  amount
    
    @authenticate_transaction
    def withdraw(self, amt, password=""):
        if(self._balance >= amt):
            self._balance -= amt
        else:
            print("Invalid password")
        
    def get_balance(self):
        return self._balance
        

bank_obj:BankAccount = BankAccount("Manu", 12000, "Password1234")

print(bank_obj.get_balance())
bank_obj.deposite(500)
print(bank_obj.get_balance())
bank_obj.withdraw(1000, "Password1234")
print(bank_obj.get_balance())
