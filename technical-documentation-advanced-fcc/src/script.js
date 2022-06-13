const menuList = document.querySelector('#navbar ul');
const titles = document.querySelectorAll('#main-doc header');

for(let title of titles) {
  // get rid of trailing spaces
  let cleanTitle = title.innerText.trim();
  
  // replace white space with underscore
  let titleAsId = cleanTitle.replace(/\s/g, '_');
  
  // assign an id to the section
  title.parentNode.setAttribute('id', `${titleAsId}`);
  
  // generate an anchor menu link for nav
  let link = document.createElement('a');
  link.setAttribute('class', 'nav-link');
  link.setAttribute('href',`#${titleAsId}`);
  
  let listItem = document.createElement('li');
  listItem.innerText = cleanTitle;
  
  link.appendChild(listItem);
  menuList.appendChild(link);
}