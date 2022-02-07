for (let i = 1; i <= 100; i++) {
  console.log(i)

  let ul = document.getElementById('list');
  let li = document.createElement('li');
  li.innerHTML = `${i}`;
  ul.append(li);

  if (i % 3 === 0 ) {
    li.classList.add('Frizz')
    li.innerHTML = `Frizz`;
  } else if (i % 5 === 0 ){
    li.classList.add('Buzz')
    li.innerHTML = `Buzz`;
  } else if (i % (5 + 3) === 0 ){
    li.classList.add('FrizzBuzz')
    li.innerHTML = `FrizzBuzz`;
  }
}