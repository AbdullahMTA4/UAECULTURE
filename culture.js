const button = document.getElementById("generate-button");
const topic = document.getElementById("topic");

const topics = [  ["Falconry", "Falconry is a traditional cultural activity in Abu Dhabi, where trained falcons are used for hunting. It is a symbol of power and prestige in Arabian culture and has been practiced for centuries. Falconry events and competitions are common in Abu Dhabi and attract visitors from all over the world. The tradition is deeply embedded in the region's cultural heritage and is regarded as a symbol of Emirati identity.<a href='https://www.platinum-heritage.com/blog/dubai-falcon-shows#:~:text=The%20falcon%20show%20is%20conducted,sit%20and%20watch%20the%20show.'>Click here for more info</a>", "media/F.jpg" , "#553939"],
  ["Camel racing", "Camel racing is a popular sport in Abu Dhabi and is often held during the winter months. The races are a major cultural event and attract large crowds of spectators. <a href='https://www.arabiers.com/ae/en/camel-race-abu-dhabi'>Click here for more Info</a>", "media/Cc.jpg", "#A77979"],
  ["Dhow sailing", "Dhow sailing is a traditional activity in Abu Dhabi that involves sailing on a traditional wooden boat known as a Dhow. The boats are handcrafted and are an important part of Abu Dhabi's maritime heritage. Dhows are still used for fishing and transportation in the region and sailing on one is a unique cultural experience for visitors to Abu Dhabi. <a href='https://www.dhowcruiseindubai.com/'>Click here for more info</a>", "media/DD.jpg", "#704F4F"]
];

button.onclick = function() {
  const randomIndex = Math.floor(Math.random() * topics.length);
  const selectedTopic = topics[randomIndex];

  topic.innerHTML = 

  

    "<h1>" + selectedTopic[0] + "</h1>" +
    "<h3>" + selectedTopic[1] + "</h3>" +
    
    '<img src="' + selectedTopic[2] + '" alt="' + selectedTopic[0] + '">';
    document.getElementById('body').style.backgroundColor = selectedTopic[3];
  

};