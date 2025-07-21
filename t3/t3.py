name = "욱재"
greeting = "안녕 " + name

html_file_name = "test.html"
mode = { # 모드는 뭐다라고 지정하지 말고 여러가지 선택지를?
    'read': 'r',
    'write': 'w',
    'append': 'a',
    'read+write': 'r+',
    'write+read': 'w+',
    'append+read': 'a+',
    'binary_read': 'rb',
    'binary_write': 'wb',
    'binary_append': 'ab',
    'binary_read+write': 'rb+',
    'binary_write+read': 'wb+',
    'binary_append+read': 'ab+',
}
charset = {
    'utf8': 'utf-8',
    'utf16': 'utf-16',
    'ascii': 'ascii',
    'latin1': 'latin-1',
    'cp949': 'cp949',
    'euc_kr': 'euc-kr'
}

doctype = "<!DOCTYPE html>"
html_open = "<html>"
head_open = "<head>"
title_tag = "<title>인사페이지</title>"
head_close = "</head>"
body_open = "<body>"
h1_tag = "<h1>" + greeting + "</h1>"
body_close = "</body>"
html_close = "</html>"

html_content = doctype + html_open + head_open + title_tag + head_close + body_open + h1_tag + body_close + html_close

html_file = open(html_file_name, mode["write"] , encoding=charset['utf8'])
html_file.write(html_content)
html_file.close()

print(greeting)