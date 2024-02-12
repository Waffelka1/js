let allList = ['qwe@mail.ru', 'rewq@mail.ru', 'rrrr1123@mail.ru', 'trewq@mail.ru', '32144512@mail.ru'];
let blackList = ['qwe@mail.ru', 'rewq@mail.ru'];

getValidEmails = () => {
    return allList.filter((mail) => !blackList.includes(mail));
  }

  console.log(getValidEmails())