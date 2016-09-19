import axios from 'axios';

function searchGit(username){

  return axios.get(`https://api.github.com/users/${username}`)
  .then( (res) => (
    {data:res.data}
    ) )
  .catch(function (error) {
    alert(error);
  })

}

function getCardDate(){
  return axios.get(`https://raw.githubusercontent.com/LiYueX/demodata/master/card/card.json?${Math.random()}`)
  .then( (res) => (
    {data:res.data}
    ) )
  .catch(function (error) {
    alert(error);
  })
}

function getMd(loc){
  return axios.get(`https://raw.githubusercontent.com/LiYueX/demodata/master/blogs/${loc}.md`)
  .then( (res) => (
    {data:res.data}
    ) )
  .catch(function (error) {
    alert(error);
  })

}
export {searchGit,getCardDate,getMd}
