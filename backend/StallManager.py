class StallManager:
    def __init__(self, nameList) -> None:
        self.nameList = nameList
        
    def name_starts_with(self):
        for i in self.nameList:
            print(self.nameList)
            res = i.startswith('m')
            yield res

    def my_manager(self):
        return len(self.nameList)

testt = StallManager(['Manu', 'Manohari', 'Mano'])

print(testt.my_manager(),"======")

response = testt.name_starts_with()
for var in response:
    print(var)