//variaveis: let ou const  -> let: pode mudar     const: imutável

const LinksSocialMedia = {
  github: 'KurekCaio',
  youtube: 'alanzoka',
  facebook: 'caiokurek',
  instagram: 'caio_kurek',
  twitter: 'alanzoka'
}

function changeSocialMidiaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMidiaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGithubProfileInfos()
