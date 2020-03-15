;(function () {
  // convert a tweet JavaScript object to an HTML string
  function buildTweetHTML (tweet) {
    // TODO: Your code goes here.
    return `
    
    <div class="d-flex flex-column" style="width: 600px; margin: 40px;">
      <div class="media">
        <img src="${tweet.user.profilePic}" class="mr-3" alt="..." style="width: 50px; height: 50px;">
        <div class="media-body">
          <h5 class="mt-0">${tweet.user.username}<img src="images/icons/twitter-verified.png" style="width: 20px; height: 20px; margin: 0px;"></h5>
          <p>${tweet.user.handle}</p>
        </div>
      </div>
      <div><h3>${tweet.text}</h3><hr></div>
      <div class="d-flex flex-row">
        <div><img src="images/icons/twitter-bubble.png" alt="..." style="width: 20px; height: 20px; margin-right: 10px;"></div>
        <div style="font-size: 20px; margin-right: 30px;">${tweet.replies}</div>
        <div><img src="images/icons/twitter-retweet.png" alt="..." style="width: 30px; height: 30px; margin-right: 10px;"></div>
        <div style="font-size: 20px; margin-right: 30px;">${tweet.retweets}</div>
        <div><img src="images/icons/twitter-like.png" alt="..." style="width: 17px; height: 17px; margin-right: 10px;"></div>
        <div style="font-size: 20px; margin-right: 30px;">${tweet.likes}</div>
        <div><img src="images/icons/twitter-envelope.png" alt="..." style="width: 20px; height: 20px; margin-right: 10px;"></div>
      </div>
    </div>
    `
  }

  // here we have four tweets, each represented by a JavaScript Object,
  // all collected into an Array.
  const tweetsData = [
    {
      user: {
        handle: '@officialjaden',
        username: 'Jaden Smith',
        isVerified: true,
        profilePic: 'https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg'
      },
      text: 'The Moment That Truth Is Organized It Becomes A Lie',
      likes: 231,
      retweets: 12,
      replies: 21
    },
    {
      user: {
        handle: '@officialjaden',
        username: 'Jaden Smith',
        isVerified: true,
        profilePic: 'https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg'
      },
      text: "How Can Mirrors Be Real If Our Eyes Aren't Real",
      likes: 112,
      retweets: 2,
      replies: 24
    },
    {
      user: {
        handle: '@DigitalCrafts',
        username: 'DigitalCrafts Bootcamp',
        isVerified: false,
        profilePic: 'https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg'
      },
      text: 'Sign up for our next course plz!',
      likes: 11,
      retweets: 3,
      replies: 14
    }
  ]
 
  // Now that we have seen a few examples, try to write your own button click and
  // attach event handler code below.
  const contentElement = document.getElementById('content')
  const btnEl = document.getElementById('tweetsBtn')

  function tweetsBtn () {
    
    contentElement.innerHTML = `
      <div class="d-flex flex-column align-items-center justify-content-center">
      ${tweetsData.map(buildTweetHTML).join('')}
      </div>
      `
  }

  btnEl.addEventListener('click', tweetsBtn)
 


})()
