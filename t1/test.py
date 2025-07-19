item_one = "사과"
item_two = "우유"
장바구니 = {'item3':'양파','item4':'마늘','item5':'대파','item6':'고추','item7':'후추'}

file_name = "shopping" + ".txt"
file = open("./t1/" + file_name, "w", encoding='utf-8')
file.write("구매할 것들:\n1. " + item_one + "\n2. " + item_two + "\n")
file.write("쥬스재료:" +"\n"+ 장바구니["item3"] +"\n"+ 장바구니['item4']+"\n"+ 장바구니['item5']+"\n"+ 장바구니['item6']+"\n"+ 장바구니['item7'])

file.write("장바구니에 물건 전부 꺼내기 : \n ")
for key, value in 장바구니.items():
    file.write(f"{value}\n")
    
file.close()
print("쇼핑 리스트가 저장되었습니다!")