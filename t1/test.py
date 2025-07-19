item_one = "사과"
item_two = "우유"
file_name = "shopping" + ".txt"
file = open("./t1/" + file_name, "w")
file.write("구매할 것들:\n1. " + item_one + "\n2. " + item_two)
file.close()
print("쇼핑 리스트가 저장되었습니다!")