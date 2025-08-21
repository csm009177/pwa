const fs = require('fs');
const path = require('path');

const name = "욱재";
const greeting = "안녕 " + name;

const fileName = __filename;
console.log(`file_name : ${fileName} \n`);
const removeExtensionFileName = fileName.split('.');
console.log(`remove_extension_file_name : \n ${removeExtensionFileName} \n`);

const htmlFileName = __filename + ".html";

const mode = {
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
    'binary_append+read': 'ab+'
};

const charset = {
    'utf8': 'utf-8',
    'utf16': 'utf-16',
    'ascii': 'ascii',
    'latin1': 'latin-1',
    'cp949': 'cp949',
    'euc_kr': 'euc-kr'
};

const encoding = "utf-8";

const doctype = "<!DOCTYPE html>";
const htmlOpen = "<html>";
const headOpen = "<head>";
const titleTag = "<title>인사페이지</title>";
const headClose = "</head>";
const bodyOpen = "<body>";
const h1Tag = "<h1>" + greeting + "</h1>";
const bodyClose = "</body>";
const htmlClose = "</html>";

const htmlContent = doctype + htmlOpen + headOpen + titleTag + headClose + bodyOpen + h1Tag + bodyClose + htmlClose;

fs.writeFileSync(htmlFileName, htmlContent, encoding);

console.log(greeting);